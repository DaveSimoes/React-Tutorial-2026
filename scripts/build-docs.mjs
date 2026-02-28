import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const docsDir = join(root, 'docs');
const distDir = join(root, 'dist');
const cleanOnly = process.argv.includes('--clean');

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}

if (cleanOnly) {
  console.log('✅ dist directory cleaned');
  process.exit(0);
}

if (!existsSync(docsDir)) {
  console.error('❌ docs directory not found');
  process.exit(1);
}

mkdirSync(distDir, { recursive: true });
cpSync(docsDir, distDir, { recursive: true });

console.log('✅ Documentation site built at ./dist');
