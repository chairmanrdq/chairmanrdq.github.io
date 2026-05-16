/**
 * Download lab images from chairmanrdq.github.io into public/images/.
 * Run: node scripts/sync-lab-images.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const BASE =
  'https://raw.githubusercontent.com/chairmanrdq/chairmanrdq.github.io/main/images';

const FILES = [
  'rdq2.jpg',
  'zzb.jpg',
  'yl.jpg',
  'dxm.jpg',
  'sa.jpg',
  'wmj.jpg',
  'zys.jpg',
  'yll.jpg',
  'dlj.jpg',
  'fph.jpg',
  'mh.jpg',
  'jrs.jpg',
  'zwb.jpg',
  'zfc.jpg',
  'ly.jpg',
  'cyd.jpg',
  'tjh.jpg',
  'xwb.jpg',
  'pst.jpg',
  'lpf.jpg',
  'ls.jpg',
  'wcr.jpg',
  'yln.jpg',
  'wyq.jpg',
  'dyx.jpg',
  '26wt.jpg',
  'wtb.jpg',
  'mmhy.jpg',
  '202508.jpg',
  '202509.jpg',
  '202510.jpg',
  'heb.jpg',
  '202502.jpg',
];

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'images');

await mkdir(outDir, { recursive: true });

let ok = 0;
let fail = 0;

for (const file of FILES) {
  const url = `${BASE}/${file}`;
  const dest = join(outDir, file);
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    console.log(`✓ ${file}`);
    ok++;
  } catch (e) {
    console.warn(`✗ ${file}: ${e.message}`);
    fail++;
  }
}

console.log(`\nDone: ${ok} saved, ${fail} failed → ${outDir}`);
