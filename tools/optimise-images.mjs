#!/usr/bin/env node
// Generates web-sized WebP derivatives into images/opt/ and small favicons.
//
// Run: node tools/optimise-images.mjs        (needs cwebp and sips, macOS)
//
// The originals are full-resolution wiki downloads, up to 1.5 MB each, served
// straight into a card roughly 200px wide. The site was fetching 18.1 MB of
// cover art on first paint. Originals stay in the repo as the source of truth
// and are simply no longer referenced by the page.

import { execFileSync } from 'node:child_process';
import { readdirSync, mkdirSync, statSync, existsSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname, basename } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'images');
const out = join(src, 'opt');

// Covers render at most ~315 CSS px, portraits at 200. Double for retina.
const WIDTH = 640;
const QUALITY = 78;

mkdirSync(out, { recursive: true });

const raster = readdirSync(src).filter((f) => /\.(jpe?g|png)$/i.test(f));
let before = 0, after = 0, skipped = 0;

for (const file of raster) {
    const from = join(src, file);
    const to = join(out, basename(file, extname(file)) + '.webp');
    before += statSync(from).size;

    try {
        // -resize W 0 keeps the aspect ratio, and never upscales because the
        // sources are all larger than the target.
        execFileSync('cwebp', ['-quiet', '-q', String(QUALITY), '-resize', String(WIDTH), '0', from, '-o', to]);
        after += statSync(to).size;
    } catch (error) {
        skipped++;
        console.warn(`  could not convert ${file}: ${error.message.split('\n')[0]}`);
    }
}

const mb = (n) => (n / 1048576).toFixed(1) + ' MB';
console.log(`${raster.length - skipped} images converted`);
console.log(`  originals:  ${mb(before)}`);
console.log(`  webp:       ${mb(after)}  (${Math.round((1 - after / before) * 100)}% smaller)`);
if (skipped) console.log(`  skipped:    ${skipped}`);

// The favicon was a 313 KB 700x700 PNG, byte-identical to the aquila, served
// for a 32px slot and again as the Apple touch icon.
const aquila = join(src, 'imperial-aquila.png');
if (existsSync(aquila)) {
    for (const [size, name] of [[32, 'favicon-32.png'], [180, 'apple-touch-icon.png']]) {
        const target = join(root, name);
        if (existsSync(target)) rmSync(target);
        execFileSync('sips', ['-Z', String(size), aquila, '--out', target], { stdio: 'ignore' });
        console.log(`  ${name}: ${Math.round(statSync(target).size / 1024)} KB`);
    }
}
