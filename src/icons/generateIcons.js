/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);

const iconsPackageDir = path.dirname(require.resolve('@chakra-ui/icons'));
const exportFilePath = path.join('src', 'icons', 'index.js');

/**
 * Util the bundles the chakra icons as this repository's icons
 * intended so that the consuming app doesn't need to add Chakra icons as a direct dependency
 */
async function generateExports() {
    try {
        const iconFiles = await readdir(iconsPackageDir);
        const exports = iconFiles
            .filter(file => file.endsWith('.js') && !file.endsWith('.cjs.js'))
            .filter(file => !file.includes('index'))
            .map(file => path.basename(file, '.js'))
            .map(iconName => `export { ${iconName}Icon } from '@chakra-ui/icons';`)
            .join('\n');

        await writeFile(exportFilePath, exports, 'utf8');
        console.log(`Exports generated at ${exportFilePath}`);
    } catch (error) {
        console.error('Failed to generate icon exports:', error);
    }
}

generateExports();
