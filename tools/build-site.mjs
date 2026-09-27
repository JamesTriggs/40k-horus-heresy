#!/usr/bin/env node
// Publish only the files the static reader app actually serves.
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { repoRoot } from './load-data.mjs';

const output = join(repoRoot, 'dist');
rmSync(output, { recursive: true, force: true });
mkdirSync(output);

const files = [
    'index.html', 'sources.html', 'events.html', 'events.js', 'styles.css', 'script.js',
    'catalogue-data.js', 'reading-order.json', 'daunt-chart.json',
    'favicon.png', 'favicon-32.png', 'apple-touch-icon.png',
    'ORDERING_DECISIONS.md', 'CATALOGUE_AUDIT.md',
    'CHART_RECONCILIATION.md', 'RELEASE_WATCH.md', 'ROADMAP.md', 'BUILD_LOG.md',
];
for (const file of files) cpSync(join(repoRoot, file), join(output, file));
cpSync(join(repoRoot, 'images'), join(output, 'images'), { recursive: true });
console.log(`Built static site in ${output}`);
