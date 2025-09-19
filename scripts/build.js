#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Clean dist directory
console.log('🧹 Cleaning dist directory...');
execSync('rm -rf dist', { stdio: 'inherit' });

// Create dist directory
fs.mkdirSync('dist', { recursive: true });

// Helper function to recursively find all TypeScript files in a directory
function findAllTsFiles(dir, basePath = '') {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  items.forEach(item => {
    const itemPath = path.join(dir, item.name);
    const relativePath = basePath ? `${basePath}/${item.name}` : item.name;

    if (item.isDirectory()) {
      // Recursively search subdirectories
      const subFiles = findAllTsFiles(itemPath, relativePath);
      files.push(...subFiles);
    } else if (
      (item.name.endsWith('.tsx') || item.name.endsWith('.ts')) &&
      !item.name.includes('.stories.') &&
      !item.name.includes('.test.') &&
      item.name !== 'index.ts'
    ) {
      files.push({
        fullPath: itemPath,
        relativePath: relativePath,
        dirPath: basePath,
        fileName: path.basename(item.name, path.extname(item.name)),
        extension: path.extname(item.name),
      });
    }
  });

  return files;
}

// Get component files
const componentsDir = 'src/components';
const componentFiles = [];
const componentPaths = {};

// Read all items in components directory
const items = fs.readdirSync(componentsDir, { withFileTypes: true });

items.forEach(item => {
  if (item.isDirectory() && item.name !== 'index.ts') {
    const componentDir = `src/components/${item.name}`;
    const indexPath = `${componentDir}/index.ts`;

    // Find all .tsx/.ts files recursively in the component directory
    const allTsFiles = findAllTsFiles(componentDir);

    if (allTsFiles.length > 0) {
      componentFiles.push(item.name);
      componentPaths[item.name] = {
        tsFiles: allTsFiles,
        index: indexPath,
      };
    }
  }
});

console.log('📦 Building individual components...');
fs.mkdirSync('dist/components', { recursive: true });
componentFiles.forEach(component => {
  const paths = componentPaths[component];

  // Create component directory in dist
  fs.mkdirSync(`dist/components/${component}`, { recursive: true });

  // Build all .ts/.tsx files in the component directory and subdirectories
  paths.tsFiles.forEach(fileInfo => {
    const { fullPath, dirPath, fileName, extension } = fileInfo;

    // Create subdirectory structure in dist if needed
    const outputDir = `dist/components/${component}${dirPath ? `/${dirPath}` : ''}`;
    fs.mkdirSync(outputDir, { recursive: true });

    // Generate output file path
    const outputFile = `${outputDir}/${fileName}.js`;

    console.log(`  Building: ${fullPath} -> ${outputFile}`);
    execSync(
      `npx babel "${fullPath}" --config-file ./babel.config.json --out-file "${outputFile}" --extensions ".ts,.tsx" --source-maps --no-babelrc`,
      { stdio: 'inherit' }
    );
  });

  // Build the index file if it exists
  if (fs.existsSync(paths.index)) {
    const indexOutputFile = `dist/components/${component}/index.js`;
    console.log(`  Building index: ${paths.index} -> ${indexOutputFile}`);
    execSync(
      `npx babel "${paths.index}" --config-file ./babel.config.json --out-file "${indexOutputFile}" --extensions ".ts,.tsx" --source-maps --no-babelrc`,
      { stdio: 'inherit' }
    );
  }
});

// Build the main components index
console.log('📦 Building components index...');
if (fs.existsSync('src/components/index.ts')) {
  execSync(
    `npx babel src/components/index.ts --config-file ./babel.config.json --out-file dist/components/index.js --extensions ".ts,.tsx" --source-maps --no-babelrc`,
    { stdio: 'inherit' }
  );
}

console.log('📦 Building lib utilities...');
fs.mkdirSync('dist/lib', { recursive: true });
execSync(
  `npx babel src/lib/utils.ts --config-file ./babel.config.json --out-file dist/lib/utils.js --extensions ".ts,.tsx" --source-maps --no-babelrc`,
  { stdio: 'inherit' }
);

console.log('📦 Building hooks...');
fs.mkdirSync('dist/hooks', { recursive: true });

// Build individual hook files
const hooksDir = 'src/hooks';
if (fs.existsSync(hooksDir)) {
  const hookFiles = fs
    .readdirSync(hooksDir, { withFileTypes: true })
    .filter(
      item =>
        item.isFile() && item.name.endsWith('.ts') && item.name !== 'index.ts'
    )
    .map(item => item.name);

  hookFiles.forEach(hookFile => {
    const baseName = hookFile.replace('.ts', '');
    execSync(
      `npx babel src/hooks/${hookFile} --config-file ./babel.config.json --out-file dist/hooks/${baseName}.js --extensions ".ts,.tsx" --source-maps --no-babelrc`,
      { stdio: 'inherit' }
    );
  });

  // Build hooks index
  if (fs.existsSync('src/hooks/index.ts')) {
    execSync(
      `npx babel src/hooks/index.ts --config-file ./babel.config.json --out-file dist/hooks/index.js --extensions ".ts,.tsx" --source-maps --no-babelrc`,
      { stdio: 'inherit' }
    );
  }
}

console.log('📦 Building icons...');
fs.mkdirSync('dist/icons', { recursive: true });
execSync(
  `npx babel src/icons/index.ts --config-file ./babel.config.json --out-file dist/icons/index.js --extensions ".ts,.tsx" --source-maps --no-babelrc`,
  { stdio: 'inherit' }
);

console.log('📦 Building ESM bundle...');
execSync(
  `npx babel src/index.ts --config-file ./babel.config.json --out-file dist/index.js --extensions ".ts,.tsx" --source-maps --no-babelrc`,
  { stdio: 'inherit' }
);

console.log('📝 Generating TypeScript declarations...');

// Create a temporary directory for TypeScript output
fs.mkdirSync('temp-types', { recursive: true });

// Generate all declarations in temp directory first
try {
  execSync('npx tsc --project tsconfig.build.json', {
    stdio: 'inherit',
  });
} catch (e) {
  console.log(
    'TypeScript compilation failed, continuing without declarations...'
  );
}

console.log('📝 Organizing TypeScript declarations...');

// Helper function to fix path aliases in declaration files
function fixPathAliases(filePath, isComponentIndex = false) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Determine if this is a component file based on the path
    const isComponentFile =
      filePath.includes('/components/') &&
      !filePath.includes('/components/index.d.ts');

    if (isComponentFile) {
      // Calculate relative depth based on subdirectory structure
      const componentPath = filePath.replace(/.*\/components\//, '');
      const depth = (componentPath.match(/\//g) || []).length;
      const relativePath = '../'.repeat(depth + 1);

      // For individual component files, use relative paths to parent directories
      content = content.replace(/@\/lib\//g, `${relativePath}lib/`);
      content = content.replace(/@\/hooks/g, `${relativePath}hooks`);
      content = content.replace(
        /@\/components\//g,
        `${relativePath}components/`
      );
      content = content.replace(/@\/icons/g, `${relativePath}icons`);
    } else {
      // For main index.d.ts and other files
      content = content.replace(/@\/lib\//g, './lib/');
      content = content.replace(/@\/hooks/g, './hooks');
      content = content.replace(/@\/icons/g, './icons');
      if (isComponentIndex) {
        // For components/index.d.ts, replace @/components/ with ./
        content = content.replace(/@\/components\//g, './');
      } else {
        // For main index.d.ts, replace @/components/ with ./components/
        content = content.replace(/@\/components\//g, './components/');
      }
    }

    fs.writeFileSync(filePath, content);
  } catch (e) {
    console.warn(`Warning: Could not fix path aliases in ${filePath}`);
  }
}

// Helper function to recursively copy TypeScript declarations
function copyDeclarationsRecursively(sourceDir, targetDir, component) {
  if (!fs.existsSync(sourceDir)) {
    return;
  }

  const items = fs.readdirSync(sourceDir, { withFileTypes: true });

  items.forEach(item => {
    const sourcePath = path.join(sourceDir, item.name);
    const targetPath = path.join(targetDir, item.name);

    if (item.isDirectory()) {
      // Create target directory and recurse
      fs.mkdirSync(targetPath, { recursive: true });
      copyDeclarationsRecursively(sourcePath, targetPath, component);
    } else if (item.name.endsWith('.d.ts') || item.name.endsWith('.d.ts.map')) {
      try {
        // Copy the declaration file
        execSync(`cp "${sourcePath}" "${targetPath}"`);

        // Fix path aliases for .d.ts files (not .map files)
        if (item.name.endsWith('.d.ts') && !item.name.endsWith('.d.ts.map')) {
          fixPathAliases(targetPath);
        }
      } catch (e) {
        console.warn(`Warning: Could not copy ${sourcePath}`);
      }
    }
  });
}

// Copy main index declarations
try {
  if (fs.existsSync('temp-types/index.d.ts')) {
    execSync(`cp temp-types/index.d.ts dist/index.d.ts`);
    execSync(`cp temp-types/index.d.ts.map dist/index.d.ts.map`);
    fixPathAliases('dist/index.d.ts');
  }
} catch (e) {
  console.warn('Warning: Could not copy main index declarations');
}

// Copy individual component declarations to components directory
componentFiles.forEach(component => {
  try {
    const sourceDir = `temp-types/components/${component}`;
    const targetDir = `dist/components/${component}`;

    // Create target directory
    fs.mkdirSync(targetDir, { recursive: true });

    // Recursively copy all declarations including subdirectories
    copyDeclarationsRecursively(sourceDir, targetDir, component);
  } catch (e) {
    console.warn(`Warning: Could not copy declarations for ${component}`);
  }
});

// Copy main components index declarations
try {
  if (fs.existsSync('temp-types/components/index.d.ts')) {
    execSync(`cp temp-types/components/index.d.ts dist/components/index.d.ts`);
    execSync(
      `cp temp-types/components/index.d.ts.map dist/components/index.d.ts.map`
    );
    fixPathAliases('dist/components/index.d.ts', true);
  }
} catch (e) {
  console.warn('Warning: Could not copy components index declarations');
}

// Copy lib utility declarations
try {
  if (fs.existsSync('temp-types/lib/utils.d.ts')) {
    fs.mkdirSync('dist/lib', { recursive: true });
    execSync(`cp temp-types/lib/utils.d.ts dist/lib/utils.d.ts`);
    execSync(`cp temp-types/lib/utils.d.ts.map dist/lib/utils.d.ts.map`);
  }
} catch (e) {
  console.warn('Warning: Could not copy lib utility declarations');
}

// Copy hooks declarations
try {
  if (fs.existsSync('temp-types/hooks')) {
    fs.mkdirSync('dist/hooks', { recursive: true });

    // Copy individual hook files
    const hookFiles = fs
      .readdirSync('temp-types/hooks', { withFileTypes: true })
      .filter(
        item =>
          item.isFile() &&
          item.name.endsWith('.d.ts') &&
          item.name !== 'index.d.ts'
      )
      .map(item => item.name);

    hookFiles.forEach(hookFile => {
      const baseName = hookFile.replace('.d.ts', '');
      if (fs.existsSync(`temp-types/hooks/${hookFile}`)) {
        execSync(`cp temp-types/hooks/${hookFile} dist/hooks/${hookFile}`);
        // Copy source map if it exists
        if (fs.existsSync(`temp-types/hooks/${baseName}.d.ts.map`)) {
          execSync(
            `cp temp-types/hooks/${baseName}.d.ts.map dist/hooks/${baseName}.d.ts.map`
          );
        }
      }
    });

    // Copy hooks index declarations
    if (fs.existsSync('temp-types/hooks/index.d.ts')) {
      execSync(`cp temp-types/hooks/index.d.ts dist/hooks/index.d.ts`);
      execSync(`cp temp-types/hooks/index.d.ts.map dist/hooks/index.d.ts.map`);
      fixPathAliases('dist/hooks/index.d.ts');
    }
  }
} catch (e) {
  console.warn('Warning: Could not copy hooks declarations');
}

// Copy icons declarations
try {
  if (fs.existsSync('temp-types/icons/index.d.ts')) {
    fs.mkdirSync('dist/icons', { recursive: true });
    execSync(`cp temp-types/icons/index.d.ts dist/icons/index.d.ts`);
    execSync(`cp temp-types/icons/index.d.ts.map dist/icons/index.d.ts.map`);
  }
} catch (e) {
  console.warn('Warning: Could not copy icons declarations');
}

// Clean up temp directory
execSync('rm -rf temp-types');

console.log('🎨 Processing CSS...');
fs.mkdirSync('dist/lib/styles', { recursive: true });

// Build index.css
execSync(
  'npx @tailwindcss/cli -i src/lib/styles/index.css -o dist/lib/styles/index.css',
  {
    stdio: 'inherit',
  }
);

// Also copy index.css to root for backward compatibility
execSync('npx @tailwindcss/cli -i src/lib/styles/index.css -o dist/index.css', {
  stdio: 'inherit',
});

console.log('✅ Build complete!');
