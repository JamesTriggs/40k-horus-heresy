// Shared loader: evaluates script.js far enough to reach its data definitions,
// without a browser.
//
// This exists because four separate tools were each carrying their own copy of
// a browser stub, and every time script.js started touching a new global at
// module scope (addEventListener, then requestAnimationFrame, then location)
// all four broke at once and were fixed one at a time.

import { readFileSync } from 'node:fs';
import { createContext, runInContext } from 'node:vm';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

export const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..');

function browserStub() {
    const noop = () => {};
    const element = () => ({
        style: {}, dataset: {}, value: '', textContent: '', innerHTML: '', hidden: false,
        classList: { add: noop, remove: noop, toggle: noop, contains: () => false },
        addEventListener: noop, removeEventListener: noop, setAttribute: noop,
        getAttribute: () => null, appendChild: noop, querySelector: () => null,
        querySelectorAll: () => [], focus: noop, click: noop,
    });

    return {
        document: {
            getElementById: () => null,
            querySelector: () => null,
            querySelectorAll: () => [],
            createElement: element,
            addEventListener: noop,
            documentElement: { classList: { toggle: noop }, className: '' },
            body: { style: {}, classList: { add: noop, remove: noop, toggle: noop } },
        },
        localStorage: { getItem: () => null, setItem: noop, removeItem: noop },
        window: { addEventListener: noop, matchMedia: () => ({ matches: false, addEventListener: noop }) },
        location: { hash: '', pathname: '/', search: '', origin: 'https://example.invalid' },
        history: { replaceState: noop, pushState: noop },
        navigator: { clipboard: { writeText: () => Promise.resolve() } },
        requestAnimationFrame: noop,
        fetch: () => Promise.reject(new Error('no network in the loader')),
        btoa: (s) => Buffer.from(s, 'binary').toString('base64'),
        atob: (s) => Buffer.from(s, 'base64').toString('binary'),
        console,
    };
}

// Evaluates up to `cutMarker` and returns the requested globals.
export function loadFromScript(names, { cutMarker = 'const modalOverlay' } = {}) {
    const source = readFileSync(join(repoRoot, 'script.js'), 'utf8');
    const cut = source.indexOf(cutMarker);
    if (cut === -1) throw new Error(`Cut marker not found in script.js: ${cutMarker}`);

    const context = createContext(browserStub());
    const exportLine = names.map((n) => `${n}: typeof ${n} !== 'undefined' ? ${n} : undefined`).join(', ');
    runInContext(source.slice(0, cut) + `\n;globalThis.__exports = { ${exportLine} };`, context);

    const exported = context.__exports;
    for (const name of names) {
        if (exported[name] === undefined) throw new Error(`script.js did not define ${name} before the cut`);
    }
    return exported;
}
