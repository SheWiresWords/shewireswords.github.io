import { copyFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

const source = resolve(projectRoot, 'dist/index.html');
const target = resolve(projectRoot, 'dist/404.html');

await copyFile(source, target);
console.log('Copied dist/index.html to dist/404.html for GitHub Pages SPA routing fallback');
