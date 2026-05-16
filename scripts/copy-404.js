import { copyFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const source = resolve(__dirname, '../index.html');
const target = resolve(__dirname, '../404.html');

await copyFile(source, target);
console.log('Copied index.html to 404.html for GitHub Pages SPA routing fallback');
