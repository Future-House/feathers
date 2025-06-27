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
const componentFiles = fs
  .readdirSync(componentsDir)
  .filter(
    file =>
      file.endsWith('.tsx') &&
      !file.includes('.stories') &&
      !file.includes('.test')
  )
  .map(file => file.replace('.tsx', ''));

console.log('📦 Building individual components...');
fs.mkdirSync('dist/components', { recursive: true });
componentFiles.forEach(component => {
  const inputFile = `src/components/${component}.tsx`;
  const outputFile = `dist/components/${component}.js`;
  execSync(
    `npx babel ${inputFile} --config-file ./babel.config.json --out-file ${outputFile} --extensions ".ts,.tsx" --source-maps --no-babelrc`,
    { stdio: 'inherit' }
  );
});

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
execSync(
  'npx tsc --project tsconfig.json --declaration --emitDeclarationOnly --outDir temp-types --declarationMap',
  {
    stdio: 'inherit',
  }
);

console.log('📝 Organizing TypeScript declarations...');

// Copy main index declarations
try {
  execSync(`cp temp-types/index.d.ts dist/index.d.ts`);
  execSync(`cp temp-types/index.d.ts.map dist/index.d.ts.map`);
} catch (e) {
  console.warn('Warning: Could not copy main index declarations');
}

// Copy individual component declarations to components directory
fs.mkdirSync('dist/components', { recursive: true });
componentFiles.forEach(component => {
  try {
    execSync(
      `cp temp-types/components/${component}.d.ts dist/components/${component}.d.ts`
    );
    execSync(
      `cp temp-types/components/${component}.d.ts.map dist/components/${component}.d.ts.map`
    );
  } catch (e) {
    console.warn(`Warning: Could not copy declarations for ${component}`);
  }
});

// Copy lib utility declarations
try {
  execSync(`cp temp-types/lib/utils.d.ts dist/lib/utils.d.ts`);
  execSync(`cp temp-types/lib/utils.d.ts.map dist/lib/utils.d.ts.map`);
} catch (e) {
  console.warn('Warning: Could not copy lib utility declarations');
}

// Copy icons declarations
try {
  execSync(`cp temp-types/icons/index.d.ts dist/icons/index.d.ts`);
  execSync(`cp temp-types/icons/index.d.ts.map dist/icons/index.d.ts.map`);
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
