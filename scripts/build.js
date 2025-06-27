#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

// Clean dist directory
console.log('🧹 Cleaning dist directory...');
execSync('rm -rf dist', { stdio: 'inherit' });

// Create dist directory
fs.mkdirSync('dist', { recursive: true });

// Get component files
const componentsDir = 'src/components';
const componentFiles = [];
const componentPaths = {};

// Read all items in components directory
const items = fs.readdirSync(componentsDir, { withFileTypes: true });

items.forEach(item => {
  if (item.isDirectory() && item.name !== 'index.ts') {
    // Check if directory contains a component file with the same name
    const componentFile = `${item.name}.tsx`;
    const componentPath = `src/components/${item.name}/${componentFile}`;
    const indexPath = `src/components/${item.name}/index.ts`;

    if (fs.existsSync(componentPath)) {
      componentFiles.push(item.name);
      componentPaths[item.name] = {
        main: componentPath,
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

  // Build the main component file to the component directory
  const outputFile = `dist/components/${component}/${component}.js`;
  execSync(
    `npx babel ${paths.main} --config-file ./babel.config.json --out-file ${outputFile} --extensions ".ts,.tsx" --source-maps --no-babelrc`,
    { stdio: 'inherit' }
  );

  // Build the index file if it exists
  if (fs.existsSync(paths.index)) {
    const indexOutputFile = `dist/components/${component}/index.js`;
    execSync(
      `npx babel ${paths.index} --config-file ./babel.config.json --out-file ${indexOutputFile} --extensions ".ts,.tsx" --source-maps --no-babelrc`,
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

// Copy main index declarations
try {
  if (fs.existsSync('temp-types/index.d.ts')) {
    execSync(`cp temp-types/index.d.ts dist/index.d.ts`);
    execSync(`cp temp-types/index.d.ts.map dist/index.d.ts.map`);
  }
} catch (e) {
  console.warn('Warning: Could not copy main index declarations');
}

// Copy individual component declarations to components directory
componentFiles.forEach(component => {
  try {
    // Component is always in its own directory now
    const sourceFile = `temp-types/components/${component}/${component}.d.ts`;
    const sourceMapFile = `temp-types/components/${component}/${component}.d.ts.map`;
    const indexSourceFile = `temp-types/components/${component}/index.d.ts`;
    const indexSourceMapFile = `temp-types/components/${component}/index.d.ts.map`;

    // Copy main component declarations
    if (fs.existsSync(sourceFile)) {
      execSync(
        `cp ${sourceFile} dist/components/${component}/${component}.d.ts`
      );
      execSync(
        `cp ${sourceMapFile} dist/components/${component}/${component}.d.ts.map`
      );
    }

    // Copy index declarations if they exist
    if (fs.existsSync(indexSourceFile)) {
      execSync(`cp ${indexSourceFile} dist/components/${component}/index.d.ts`);
      execSync(
        `cp ${indexSourceMapFile} dist/components/${component}/index.d.ts.map`
      );
    }
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
execSync(
  'npx @tailwindcss/cli -i src/lib/styles/index.css -o dist/lib/styles/index.css',
  {
    stdio: 'inherit',
  }
);
// Also copy to root for backward compatibility
execSync('npx @tailwindcss/cli -i src/lib/styles/index.css -o dist/index.css', {
  stdio: 'inherit',
});

console.log('✅ Build complete!');
