#!/usr/bin/env node

/**
 * MCP (Model Context Protocol) Server Management Script
 *
 * Manages MCP server configurations for Storybook addon across different AI tools:
 * - Claude Code (via CLI)
 * - Cursor (via ~/.cursor/mcp.json)
 * - VS Code (via ~/.vscode/mcp.json)
 *
 * Usage:
 *   node scripts/mcp.js <command> [options]
 *
 * Commands:
 *   setup [tool]     - Setup MCP for all tools or a specific tool (claude|cursor|vscode)
 *   remove [tool]    - Remove MCP from all tools or a specific tool
 *   list             - List current MCP configurations
 *
 * Options:
 *   --url <url>          - Custom MCP server URL (default: http://localhost:6006/mcp)
 *   --name <name>        - Custom MCP server name (default: storybook-feathers)
 *   --toolsets <list>    - Comma-separated list of toolsets to enable (default: dev,docs)
 *                          Available: dev, docs
 */

import { execSync, spawnSync } from 'child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { homedir } from 'os';

// Configuration
const DEFAULT_MCP_URL = 'http://localhost:6006/mcp';
const DEFAULT_MCP_NAME = 'storybook-feathers';
const DEFAULT_TOOLSETS = 'dev,docs';

const CURSOR_MCP_JSON = join(homedir(), '.cursor', 'mcp.json');
const VSCODE_MCP_JSON = join(homedir(), '.vscode', 'mcp.json');

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const result = {
    command: args[0],
    tool: null,
    url: DEFAULT_MCP_URL,
    name: DEFAULT_MCP_NAME,
    toolsets: DEFAULT_TOOLSETS,
  };

  for (let i = 1; i < args.length; i++) {
    if (args[i] === '--url' && args[i + 1]) {
      result.url = args[++i];
    } else if (args[i] === '--name' && args[i + 1]) {
      result.name = args[++i];
    } else if (args[i] === '--toolsets' && args[i + 1]) {
      result.toolsets = args[++i];
    } else if (!args[i].startsWith('--')) {
      result.tool = args[i];
    }
  }

  return result;
}

// Check if a command exists
function commandExists(cmd) {
  try {
    execSync(`which ${cmd}`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

// Check if jq is installed
function checkJq() {
  if (!commandExists('jq')) {
    console.error('Error: jq not installed. Install with: brew install jq');
    return false;
  }
  return true;
}

// Read JSON file safely
function readJsonFile(filePath) {
  try {
    if (existsSync(filePath)) {
      return JSON.parse(readFileSync(filePath, 'utf-8'));
    }
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
  }
  return null;
}

// Write JSON file safely
function writeJsonFile(filePath, data) {
  try {
    const dir = dirname(filePath);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    return true;
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error.message);
    return false;
  }
}

// Claude Code MCP functions
function setupClaude(name, url, toolsets) {
  console.log('Configuring Claude Code MCP server...');

  if (!commandExists('claude')) {
    console.error(
      'Error: claude CLI not found. Install with: npm install -g @anthropic-ai/claude-code'
    );
    return false;
  }

  try {
    // Check if already configured
    const listResult = spawnSync('claude', ['mcp', 'list'], {
      encoding: 'utf-8',
    });
    if (listResult.stdout && listResult.stdout.includes(name)) {
      console.log(`  ${name} already configured in Claude Code`);
      console.log(
        `  To update, run: npm run mcp:remove:claude && npm run mcp:setup:claude`
      );
      return true;
    }

    // Build the command args
    const cmdArgs = ['mcp', 'add', '--transport', 'http', name, url];

    // Add header for toolsets if specified
    if (toolsets) {
      cmdArgs.push('--header', `X-MCP-Toolsets: ${toolsets}`);
    }

    // Add the MCP server
    const addResult = spawnSync('claude', cmdArgs, {
      encoding: 'utf-8',
      stdio: 'inherit',
    });

    if (addResult.status === 0) {
      console.log(`  Added ${name} to Claude Code`);
      console.log(`  Toolsets: ${toolsets}`);
      return true;
    } else {
      console.error('  Failed to add MCP server to Claude Code');
      return false;
    }
  } catch (error) {
    console.error('  Error configuring Claude Code:', error.message);
    return false;
  }
}

function removeClaude(name) {
  console.log('Removing Claude Code MCP server...');

  if (!commandExists('claude')) {
    console.error('Error: claude CLI not found');
    return false;
  }

  try {
    const result = spawnSync('claude', ['mcp', 'remove', name], {
      encoding: 'utf-8',
      stdio: 'inherit',
    });

    if (result.status === 0) {
      console.log(`  Removed ${name} from Claude Code`);
      return true;
    } else {
      console.log(`  ${name} not found in Claude Code`);
      return false;
    }
  } catch (error) {
    console.error('  Error removing from Claude Code:', error.message);
    return false;
  }
}

function listClaude() {
  if (!commandExists('claude')) {
    console.log('  Claude CLI not installed');
    return;
  }

  try {
    console.log('\nClaude Code MCP servers:');
    spawnSync('claude', ['mcp', 'list'], { stdio: 'inherit' });
  } catch (error) {
    console.error('  Error listing Claude Code servers:', error.message);
  }
}

// Cursor MCP functions
function setupCursor(name, url, toolsets) {
  console.log('Configuring Cursor MCP server...');

  let config = readJsonFile(CURSOR_MCP_JSON) || { mcpServers: {} };

  if (!config.mcpServers) {
    config.mcpServers = {};
  }

  if (config.mcpServers[name]) {
    console.log(`  ${name} already configured in Cursor`);
    console.log(
      `  To update, run: npm run mcp:remove:cursor && npm run mcp:setup:cursor`
    );
    return true;
  }

  const serverConfig = {
    url,
    type: 'http',
  };

  // Add headers for toolsets if specified
  if (toolsets) {
    serverConfig.headers = {
      'X-MCP-Toolsets': toolsets,
    };
  }

  config.mcpServers[name] = serverConfig;

  if (writeJsonFile(CURSOR_MCP_JSON, config)) {
    console.log(`  Added ${name} to Cursor`);
    console.log(`  Toolsets: ${toolsets}`);
    return true;
  }
  return false;
}

function removeCursor(name) {
  console.log('Removing Cursor MCP server...');

  const config = readJsonFile(CURSOR_MCP_JSON);
  if (!config || !config.mcpServers || !config.mcpServers[name]) {
    console.log(`  ${name} not found in Cursor`);
    return false;
  }

  delete config.mcpServers[name];

  if (writeJsonFile(CURSOR_MCP_JSON, config)) {
    console.log(`  Removed ${name} from Cursor`);
    return true;
  }
  return false;
}

function listCursor() {
  console.log(`\nCursor MCP config (${CURSOR_MCP_JSON}):`);
  const config = readJsonFile(CURSOR_MCP_JSON);
  if (config) {
    console.log(JSON.stringify(config, null, 2));
  } else {
    console.log('  No configuration found');
  }
}

// VS Code MCP functions
function setupVscode(name, url, toolsets) {
  console.log('Configuring VS Code MCP server...');

  let config = readJsonFile(VSCODE_MCP_JSON) || { servers: {} };

  if (!config.servers) {
    config.servers = {};
  }

  if (config.servers[name]) {
    console.log(`  ${name} already configured in VS Code`);
    console.log(
      `  To update, run: npm run mcp:remove:vscode && npm run mcp:setup:vscode`
    );
    return true;
  }

  const serverConfig = { type: 'http', url };

  // Add headers for toolsets if specified
  if (toolsets) {
    serverConfig.headers = {
      'X-MCP-Toolsets': toolsets,
    };
  }

  config.servers[name] = serverConfig;

  if (writeJsonFile(VSCODE_MCP_JSON, config)) {
    console.log(`  Added ${name} to VS Code`);
    console.log(`  Toolsets: ${toolsets}`);
    console.log(
      '  Note: You may need to restart VS Code and enable Agent mode (⌘B or I)'
    );
    return true;
  }
  return false;
}

function removeVscode(name) {
  console.log('Removing VS Code MCP server...');

  const config = readJsonFile(VSCODE_MCP_JSON);
  if (!config || !config.servers || !config.servers[name]) {
    console.log(`  ${name} not found in VS Code`);
    return false;
  }

  delete config.servers[name];

  if (writeJsonFile(VSCODE_MCP_JSON, config)) {
    console.log(`  Removed ${name} from VS Code`);
    return true;
  }
  return false;
}

function listVscode() {
  console.log(`\nVS Code MCP config (${VSCODE_MCP_JSON}):`);
  const config = readJsonFile(VSCODE_MCP_JSON);
  if (config) {
    console.log(JSON.stringify(config, null, 2));
  } else {
    console.log('  No configuration found');
  }
}

// Main command handlers
function setup(tool, name, url, toolsets) {
  console.log(`\nSetting up MCP server: ${name}`);
  console.log(`URL: ${url}`);
  console.log(`Toolsets: ${toolsets}\n`);

  const tools = tool ? [tool] : ['claude', 'cursor', 'vscode'];

  for (const t of tools) {
    switch (t) {
      case 'claude':
        setupClaude(name, url, toolsets);
        break;
      case 'cursor':
        setupCursor(name, url, toolsets);
        break;
      case 'vscode':
        setupVscode(name, url, toolsets);
        break;
      default:
        console.error(`Unknown tool: ${t}`);
    }
    console.log('');
  }

  console.log('\nSetup complete!');
  console.log('Make sure Storybook is running: npm run storybook');
}

function remove(tool, name) {
  console.log(`\nRemoving MCP server: ${name}\n`);

  const tools = tool ? [tool] : ['claude', 'cursor', 'vscode'];

  for (const t of tools) {
    switch (t) {
      case 'claude':
        removeClaude(name);
        break;
      case 'cursor':
        removeCursor(name);
        break;
      case 'vscode':
        removeVscode(name);
        break;
      default:
        console.error(`Unknown tool: ${t}`);
    }
    console.log('');
  }

  console.log('Removal complete!');
}

function list() {
  console.log('\nMCP Server Configurations');
  console.log('='.repeat(40));
  listClaude();
  listCursor();
  listVscode();
}

function printHelp() {
  console.log(`
MCP Server Management Script

Usage:
  npm run mcp:setup              Setup MCP for all tools
  npm run mcp:setup:claude       Setup MCP for Claude Code only
  npm run mcp:setup:cursor       Setup MCP for Cursor only
  npm run mcp:setup:vscode       Setup MCP for VS Code only
  npm run mcp:remove             Remove MCP from all tools
  npm run mcp:remove:claude      Remove MCP from Claude Code only
  npm run mcp:remove:cursor      Remove MCP from Cursor only
  npm run mcp:remove:vscode      Remove MCP from VS Code only
  npm run mcp:list               List current MCP configurations

Options (via -- --option):
  --url <url>          Custom MCP server URL (default: ${DEFAULT_MCP_URL})
  --name <name>        Custom MCP server name (default: ${DEFAULT_MCP_NAME})
  --toolsets <list>    Comma-separated list of toolsets (default: ${DEFAULT_TOOLSETS})
                       Available toolsets:
                         dev  - get-story-urls, get-ui-building-instructions
                         docs - list-all-components, get-component-documentation
                              (requires experimentalComponentsManifest feature flag)

Examples:
  npm run mcp:setup
  npm run mcp:setup -- --url http://localhost:3000/mcp
  npm run mcp:setup:claude -- --name my-storybook
  npm run mcp:setup -- --toolsets dev           # Only dev tools
  npm run mcp:setup -- --toolsets docs          # Only docs tools
  npm run mcp:setup -- --toolsets dev,docs      # Both toolsets (default)
  npm run mcp:remove:cursor

Prerequisites:
  - Claude Code: npm install -g @anthropic-ai/claude-code
  - Storybook addon: npm install -D @storybook/addon-mcp

After setup, start Storybook:
  npm run storybook

Then your AI tool can connect to the MCP server at:
  ${DEFAULT_MCP_URL}
`);
}

// Main
const { command, tool, url, name, toolsets } = parseArgs();

switch (command) {
  case 'setup':
    setup(tool, name, url, toolsets);
    break;
  case 'remove':
    remove(tool, name);
    break;
  case 'list':
    list();
    break;
  case 'help':
  case '--help':
  case '-h':
    printHelp();
    break;
  default:
    if (command) {
      console.error(`Unknown command: ${command}`);
    }
    printHelp();
    process.exit(command ? 1 : 0);
}
