#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the official icons list from lucide-react
const lucideExports = await import('lucide-react');
const iconNames = Object.keys(lucideExports.icons || {});

console.log('Total icon exports found:', iconNames.length);
console.log('Sample icons:', iconNames.slice(0, 10));

// Generate the re-export content
const reExports = iconNames
  .map(name => `export { ${name} } from 'lucide-react';`)
  .join('\n');

const content = `// Re-export all lucide-react icons for tree-shaking support
// This file is auto-generated - do not edit manually

${reExports}

// Also export LucideProps for TypeScript users
export type { LucideProps } from 'lucide-react';
`;

const iconsDir = path.join(__dirname, '../src/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

fs.writeFileSync(path.join(iconsDir, 'index.ts'), content);
console.log('Generated icons/index.ts with', iconNames.length, 'icons');
