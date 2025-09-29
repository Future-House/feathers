#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the official icons list from @carbon/icons-react
// eslint-disable-next-line
const carbonExports = await import('@carbon/icons-react');
const invalidNames = ['default', 'module', '__esModule'];
const iconNames = Object.keys(carbonExports).filter(
  name =>
    !invalidNames.includes(name) &&
    !name.includes('.') &&
    (typeof carbonExports[name] === 'function' ||
      typeof carbonExports[name] === 'object')
);

console.log('Total icon exports found:', iconNames.length);
console.log('Sample icons:', iconNames.slice(0, 10));

// Generate the re-export content
const reExports = iconNames
  .map(name => `export { ${name} } from '@carbon/icons-react';`)
  .join('\n');

const content = `// Re-export all @carbon/icons-react icons for tree-shaking support
// This file is auto-generated - do not edit manually

${reExports}

// Also export CarbonIconProps for TypeScript users
export type { CarbonIconProps } from '@carbon/icons-react';
`;

const iconsDir = path.join(__dirname, '../src/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

fs.writeFileSync(path.join(iconsDir, 'index.ts'), content);
console.log('Generated icons/index.ts with', iconNames.length, 'icons');
