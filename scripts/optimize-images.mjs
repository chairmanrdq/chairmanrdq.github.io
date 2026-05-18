/**
 * Compress JPEGs in public/images/ (optional sharp). Run after sync-lab-images.
 */
import { readdir, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const imgDir = join(root, 'public', 'images');

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.log('optimize-images: sharp not installed, skipping (npm i -D sharp to enable)');
  process.exit(0);
}

const files = await readdir(imgDir).catch(() => []);
let optimized = 0;

for (const file of files) {
  if (!/\.(jpe?g|png)$/i.test(file)) continue;
  const path = join(imgDir, file);
  const before = (await stat(path)).size;
  try {
    const buf = await sharp(path)
      .rotate()
      .jpeg({ quality: 82, mozjpeg: true })
      .toBuffer();
    if (buf.length < before) {
      const { writeFile } = await import('node:fs/promises');
      await writeFile(path, buf);
      optimized++;
      console.log(`✓ ${file} (${Math.round(before / 1024)}KB → ${Math.round(buf.length / 1024)}KB)`);
    }
  } catch (e) {
    console.warn(`✗ ${file}: ${e.message}`);
  }
}

console.log(`\noptimize-images: ${optimized} file(s) compressed`);
