const { copyFileSync, existsSync, mkdirSync } = require('node:fs');
const { join } = require('node:path');

const projectRoot = join(__dirname, '..');
const source = join(projectRoot, 'index.html');
const publicDirectory = join(projectRoot, 'public');
const destination = join(publicDirectory, '_premium-home.html');

if (!existsSync(source)) {
  throw new Error(`Premium homepage not found at ${source}`);
}

mkdirSync(publicDirectory, { recursive: true });
copyFileSync(source, destination);
console.log('Prepared premium homepage as a static public asset.');
