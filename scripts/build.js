#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';

// Clean dist directory
console.log('🧹 Cleaning dist directory...');
execSync('rm -rf dist', { stdio: 'inherit' });

// Create dist directories
fs.mkdirSync('dist', { recursive: true });
fs.mkdirSync('dist/esm', { recursive: true });

// Get component files
const componentsDir = 'src/components/ui';
const componentFiles = fs
  .readdirSync(componentsDir)
  .filter(file => file.endsWith('.tsx') && !file.includes('.stories') && !file.includes('.test'))
  .map(file => file.replace('.tsx', ''));

console.log('📦 Building CommonJS bundle...');
execSync(
  `npx babel src/index.ts --config-file ./babel.config.cjs --out-file dist/index.js --extensions ".ts,.tsx" --source-maps --no-babelrc`,
  { stdio: 'inherit' }
);

console.log('📦 Building ESM bundle...');
execSync(
  `npx babel src/index.ts --config-file ./babel.config.esm.json --out-file dist/esm/index.js --extensions ".ts,.tsx" --source-maps --no-babelrc`,
  { stdio: 'inherit' }
);

console.log('📦 Building individual components (CommonJS)...');
componentFiles.forEach(component => {
  const inputFile = `src/components/ui/${component}.tsx`;
  const outputFile = `dist/${component}.js`;
  execSync(
    `npx babel ${inputFile} --config-file ./babel.config.cjs --out-file ${outputFile} --extensions ".ts,.tsx" --source-maps --no-babelrc`,
    { stdio: 'inherit' }
  );
});

console.log('📦 Building individual components (ESM)...');
componentFiles.forEach(component => {
  const inputFile = `src/components/ui/${component}.tsx`;
  const outputFile = `dist/esm/${component}.js`;
  execSync(
    `npx babel ${inputFile} --config-file ./babel.config.esm.json --out-file ${outputFile} --extensions ".ts,.tsx" --source-maps --no-babelrc`,
    { stdio: 'inherit' }
  );
});

console.log('📦 Building lib utilities (CommonJS)...');
fs.mkdirSync('dist/lib', { recursive: true });
execSync(
  `npx babel src/lib/utils.ts --config-file ./babel.config.cjs --out-file dist/lib/utils.js --extensions ".ts,.tsx" --source-maps --no-babelrc`,
  { stdio: 'inherit' }
);

console.log('📦 Building lib utilities (ESM)...');
fs.mkdirSync('dist/esm/lib', { recursive: true });
execSync(
  `npx babel src/lib/utils.ts --config-file ./babel.config.esm.json --out-file dist/esm/lib/utils.js --extensions ".ts,.tsx" --source-maps --no-babelrc`,
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
  execSync(`cp temp-types/index.d.ts dist/esm/index.d.ts`);
  execSync(`cp temp-types/index.d.ts.map dist/esm/index.d.ts.map`);
} catch (e) {
  console.warn('Warning: Could not copy main index declarations');
}

// Copy individual component declarations to flat structure
componentFiles.forEach(component => {
  try {
    // CommonJS declarations
    execSync(`cp temp-types/components/ui/${component}.d.ts dist/${component}.d.ts`);
    execSync(`cp temp-types/components/ui/${component}.d.ts.map dist/${component}.d.ts.map`);

    // ESM declarations
    execSync(`cp temp-types/components/ui/${component}.d.ts dist/esm/${component}.d.ts`);
    execSync(`cp temp-types/components/ui/${component}.d.ts.map dist/esm/${component}.d.ts.map`);
  } catch (e) {
    console.warn(`Warning: Could not copy declarations for ${component}`);
  }
});

// Copy lib utility declarations
try {
  execSync(`cp temp-types/lib/utils.d.ts dist/lib/utils.d.ts`);
  execSync(`cp temp-types/lib/utils.d.ts.map dist/lib/utils.d.ts.map`);
  execSync(`cp temp-types/lib/utils.d.ts dist/esm/lib/utils.d.ts`);
  execSync(`cp temp-types/lib/utils.d.ts.map dist/esm/lib/utils.d.ts.map`);
} catch (e) {
  console.warn('Warning: Could not copy lib utility declarations');
}

// Clean up temp directory
execSync('rm -rf temp-types');

console.log('🎨 Processing CSS...');
execSync('npx postcss src/lib/styles/index.css -o dist/index.css', { stdio: 'inherit' });
execSync('npx postcss src/lib/styles/index.css -o dist/esm/index.css', { stdio: 'inherit' });

console.log('✅ Build complete!');
