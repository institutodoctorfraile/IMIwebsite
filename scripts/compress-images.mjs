#!/usr/bin/env node
/**
 * One-shot image compression for src/assets/images/
 * Compresses any file > THRESHOLD_BYTES in place:
 *   - resizes to max 2400px on the long edge
 *   - re-encodes JPG at quality 80 (mozjpeg)
 *   - converts large PNGs to JPG when there's no alpha channel
 * Run: node scripts/compress-images.mjs
 */

import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { extname, join } from 'node:path';
import sharp from 'sharp';

const DIR = new URL('../src/assets/images/', import.meta.url).pathname;
const THRESHOLD = 1_500_000; // 1.5 MB
const MAX_DIM = 2400;
const JPG_QUALITY = 80;

const files = await readdir(DIR);
let totalBefore = 0;
let totalAfter = 0;

for (const name of files) {
  const ext = extname(name).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

  const path = join(DIR, name);
  const before = (await stat(path)).size;
  if (before < THRESHOLD) continue;

  totalBefore += before;
  const img = sharp(path, { failOn: 'none' });
  const meta = await img.metadata();

  const resized = img.rotate().resize({
    width: meta.width > meta.height ? MAX_DIM : undefined,
    height: meta.height >= meta.width ? MAX_DIM : undefined,
    withoutEnlargement: true,
    fit: 'inside',
  });

  // Re-encode with same extension to keep import paths valid.
  const pipeline = ext === '.png'
    ? resized.png({ compressionLevel: 9, palette: true, quality: 85 })
    : resized.jpeg({ quality: JPG_QUALITY, mozjpeg: true });

  const tmp = path + '.tmp';
  await pipeline.toFile(tmp);
  await unlink(path);
  await rename(tmp, path);

  const after = (await stat(path)).size;
  totalAfter += after;
  const fmt = (n) => (n / 1024 / 1024).toFixed(2) + ' MB';
  console.log(`${name}: ${fmt(before)} → ${fmt(after)}`);
}

if (totalBefore === 0) {
  console.log('No images above threshold.');
} else {
  const fmt = (n) => (n / 1024 / 1024).toFixed(2) + ' MB';
  console.log(`\nTotal: ${fmt(totalBefore)} → ${fmt(totalAfter)} (saved ${fmt(totalBefore - totalAfter)})`);
}
