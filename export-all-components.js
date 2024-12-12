import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseExports(content) {
  const exports = [];
  
  // Match export declarations
  const exportDeclarations = content.match(/export\s+(?:const|let|var|function)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g) || [];
  exportDeclarations.forEach(exp => {
    const name = exp.match(/export\s+(?:const|let|var|function)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/)[1];
    exports.push({ original: name, exported: name });
  });

  // Match direct export statements
  const directExports = content.match(/export\s*{[^}]+}/g) || [];
  directExports.forEach(exp => {
    const names = exp
      .replace(/export\s*{/, '')
      .replace(/}/, '')
      .split(',')
      .map(name => name.trim());
      
    names.forEach(name => {
      // Handle cases with 'as' in the export
      const [originalName, exportedName] = name.split(/\s+as\s+/).map(n => n.trim());
      if (exportedName) {
        exports.push({ original: originalName, exported: exportedName });
      } else {
        exports.push({ original: originalName, exported: originalName });
      }
    });
  });

  return exports;
}

function generateIndex(srcDir) {
  const exports = [];
  const componentsDir = path.join(srcDir, 'components');
  
  // Get all subfolders in components directory
  const subfolders = fs.readdirSync(componentsDir)
    .filter(file => fs.statSync(path.join(componentsDir, file)).isDirectory());
  
  // For each subfolder, find all .js and .jsx files
  subfolders.forEach(subfolder => {
    const subfolderPath = path.join(componentsDir, subfolder);
    const files = fs.readdirSync(subfolderPath)
      .filter(file => file.endsWith('.jsx') || file.endsWith('.js'));
    
    files.forEach(file => {
      const filePath = path.join(subfolderPath, file);
      const filenameWithoutExt = path.basename(file, path.extname(file));
      const importPath = `./components/${subfolder}/${filenameWithoutExt}`;
      
      // Get file content and parse exports
      const content = fs.readFileSync(filePath, 'utf8');
      const fileExports = parseExports(content);
      
      fileExports.forEach(({ original, exported }) => {
        // Only include explicit exports
        if (original === exported) {
          exports.push(`export { ${original} } from '${importPath}';`);
        } else {
          exports.push(`export { ${original} as ${exported} } from '${importPath}';`);
        }
      });
    });
  });
  
  // Sort exports alphabetically for better readability
  exports.sort();
  
  // Write the index.js file in the src directory
  const indexContent = exports.join('\n') + '\n';
  fs.writeFileSync(path.join(srcDir, 'index.js'), indexContent);
  
  console.log(`Generated src/index.js with ${exports.length} exports`);
  console.log('Found components in these subfolders:', subfolders.join(', '));
}

// Also scan root components directory for .js files
function processRootFiles(srcDir) {
  const componentsDir = path.join(srcDir, 'components');
  const rootFiles = fs.readdirSync(componentsDir)
    .filter(file => file.endsWith('.js') || file.endsWith('.jsx'))
    .filter(file => file !== 'index.js');

  const rootExports = [];
  rootFiles.forEach(file => {
    const filePath = path.join(componentsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const fileExports = parseExports(content);
    const filenameWithoutExt = path.basename(file, path.extname(file));
    
    fileExports.forEach(({ original, exported }) => {
      if (original === exported) {
        rootExports.push(`export { ${original} } from './components/${filenameWithoutExt}';`);
      } else {
        rootExports.push(`export { ${original} as ${exported} } from './components/${filenameWithoutExt}';`);
      }
    });
  });

  return rootExports;
}

const srcDir = path.resolve(__dirname, 'src');
// Get exports from subdirectories
generateIndex(srcDir);

// Add exports from root .js files
const rootExports = processRootFiles(srcDir);
if (rootExports.length > 0) {
  const indexPath = path.join(srcDir, 'index.js');
  const existingContent = fs.readFileSync(indexPath, 'utf8');
  const newContent = existingContent + '\n' + rootExports.join('\n') + '\n';
  fs.writeFileSync(indexPath, newContent);
  console.log(`Added ${rootExports.length} exports from root components directory`);
}