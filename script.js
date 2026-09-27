// Horus Heresy fiction catalogue, stored in chronological order
// Ordered by in-universe timeline, not publication order

// Character Encyclopedia Data
// Character records load from catalogue-data.js, generated from data/characters.json.

// Reading Progress Tracker with three states: null, 'reading', 'finished'
const PROGRESS_KEY = 'horusHeresyProgress';
const SPOILER_KEY = 'horusHeresyShowSpoilers';
const VIEW_KEY = 'horusHeresyView';
const LAYOUT_KEY = 'horusHeresyLayout';
const ROUTE_KEY = 'horusHeresyRoute';
const SKIPPED_KEY = 'horusHeresySavedForLater';
const OWNED_COLLECTIONS_KEY = 'horusHeresyOwnedCollections';
const BASE_TITLE = document.title;
const BASE_DESCRIPTION = document.querySelector('meta[name="description"]')?.content || '';
const workIdentityByKey = new Map();
const workKeysById = new Map();
const collectionByName = new Map(collectionIdentityData.collections.map((collection) => [collection.name, collection]));
const collectionById = new Map(collectionIdentityData.collections.map((collection) => [collection.id, collection]));
for (const identity of workIdentityData.identities) {
    workKeysById.set(identity.id, identity.legacyKeys);
    for (const key of identity.legacyKeys) workIdentityByKey.set(key, identity.id);
}

function loadOwnedCollections() {
    try {
        const ids = JSON.parse(localStorage.getItem(OWNED_COLLECTIONS_KEY) || '[]');
        return new Set(Array.isArray(ids) ? ids.filter((id) => collectionById.has(id)) : []);
    } catch { return new Set(); }
}

function saveOwnedCollections(ids) {
    try { localStorage.setItem(OWNED_COLLECTIONS_KEY, JSON.stringify([...ids])); return true; }
    catch { return false; }
}

function linkedWorkKey() {
    const id = new URLSearchParams(location.hash.slice(1)).get('work');
    return id ? workKeysById.get(id)?.[0] : null;
}

function linkedCharacterKey() {
    const id = new URLSearchParams(location.hash.slice(1)).get('character');
    return id && characterData[id] ? id : null;
}

// Three views, because chronological order and reading order are different
// things and the site used to conflate them.
//
//   reading        what a newcomer should actually read, phase-grouped, opening
//                  quartet pinned first
//   chronological  in-universe date order, a reference index for people who
//                  already know the story
//   chart          the Legion lanes and prerequisite arrows from Daunt's
//                  Horus Heresy Timeline
//
// Strict chronology puts 31 books ahead of Horus Rising, one of which is
// A Thousand Sons. It is the wrong default and was labelled "story order".
const VIEWS = {
    reading: {
        note: 'Recommended reading order. Chronological order is not a reading order: it would put 31 books, including A Thousand Sons, ahead of Horus Rising and spoil the main arc.',
    },
    chronological: {
        note: 'Strict in-universe date order, earliest event first. This is a reference index, not reading advice. A newcomer should use Reading Order instead.',
    },
    chart: {
        note: 'Storyline chart. Each column is a Legion or faction, arrows mean read this before that. Adapted from Daunt\'s Horus Heresy Timeline v0.9.',
    },
};

let currentView = 'reading';
let currentRoute = 'full';
const CORE_ROUTE = readingRoutesData.core.works.map((work) => work.key);
const coreRouteRank = new Map(CORE_ROUTE.map((key, index) => [key, index]));
let readingOrder = null;      // populated from reading-order.json
let chartData = null;         // populated from daunt-chart.json

function loadView() {
    const linked = new URLSearchParams(location.search).get('view');
    if (linked && VIEWS[linked]) return linked;
    try {
        const saved = localStorage.getItem(VIEW_KEY);
        if (saved && VIEWS[saved]) return saved;
    } catch (error) {
        console.warn('View preference could not be read:', error);
    }
    return 'reading';
}

function saveView(view) {
    try {
        localStorage.setItem(VIEW_KEY, view);
    } catch (error) {
        console.warn('View preference could not be saved:', error);
    }
}

function syncBrowseUrl() {
    const params = new URLSearchParams();
    if (currentView !== 'reading') params.set('view', currentView);
    if (currentRoute === 'core') params.set('route', 'core');
    const fields = [
        ['q', 'searchInput'], ['legion', 'legionFilter'],
        ['collection', 'collectionFilter'], ['format', 'formatFilter'],
        ['sort', 'sortOrder'],
    ];
    for (const [name, id] of fields) {
        const value = document.getElementById(id)?.value || '';
        if (value && !(name === 'sort' && value === 'view')) params.set(name, value);
    }
    if (!document.getElementById('includePrimarchs')?.checked) params.set('primarchs', '0');
    if (!document.getElementById('includeSiegeOfTerra')?.checked) params.set('siege', '0');
    const query = params.toString();
    const url = location.pathname + (query ? `?${query}` : '') + location.hash;
    history.replaceState(history.state, '', url);
}

function restoreBrowseUrl() {
    const params = new URLSearchParams(location.search);
    const route = params.get('route');
    if (route === 'core' || route === 'full') currentRoute = route;
    else {
        try { currentRoute = localStorage.getItem(ROUTE_KEY) === 'core' ? 'core' : 'full'; }
        catch { currentRoute = 'full'; }
    }
    const fields = [
        ['q', 'searchInput'], ['legion', 'legionFilter'],
        ['collection', 'collectionFilter'], ['format', 'formatFilter'],
        ['sort', 'sortOrder'],
    ];
    for (const [name, id] of fields) {
        const value = params.get(name);
        const control = document.getElementById(id);
        if (value && control && [...control.options || []].some((option) => option.value === value)) {
            control.value = value;
        } else if (name === 'q' && value && control) {
            control.value = value.slice(0, 150);
        }
    }
    if (params.get('primarchs') === '0') document.getElementById('includePrimarchs').checked = false;
    if (params.get('siege') === '0') document.getElementById('includeSiegeOfTerra').checked = false;
}

const readingProgress = {
    // Cached in memory. Previously every read hit localStorage and re-parsed
    // the whole payload, which happened 225 times per render.
    _cache: null,
    _storageBroken: false,

    // Both anthology appearances of a reprinted story represent one work.
    // Keep writing the old keys so existing HH2 transfer codes still decode.
    _normaliseReprints: function(progress) {
        let changed = false;
        for (const keys of workKeysById.values()) {
            if (keys.length < 2) continue;
            const state = keys.some((key) => progress[key] === 'finished') ? 'finished'
                : keys.some((key) => progress[key] === 'reading') ? 'reading' : null;
            for (const key of keys) {
                if ((progress[key] || null) !== state) {
                    progress[key] = state;
                    changed = true;
                }
            }
        }
        return changed;
    },

    load: function() {
        if (this._cache) return this._cache;

        let data = {};
        try {
            const saved = localStorage.getItem(PROGRESS_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                // Guard against 'null', arrays and primitives, all of which are
                // valid JSON but would throw on Object.keys or corrupt lookups.
                if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
                    data = parsed;
                }
            }
        } catch (error) {
            // A corrupt value used to throw here and leave the page with zero
            // book cards and no error visible to the user.
            console.warn('Reading progress could not be read, starting empty:', error);
            this._storageBroken = true;
        }

        // Migrate the old boolean format, then persist so it happens once
        // rather than on every read.
        let migrated = false;
        Object.keys(data).forEach(key => {
            if (typeof data[key] === 'boolean') {
                data[key] = data[key] ? 'finished' : null;
                migrated = true;
            }
        });

        migrated = this._normaliseReprints(data) || migrated;
        this._cache = data;
        if (migrated) this.save(data);
        return this._cache;
    },

    save: function(progress) {
        this._normaliseReprints(progress);
        this._cache = progress;
        try {
            localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
            return true;
        } catch (error) {
            // Quota exhausted, or private browsing. The in-memory cache still
            // works for this session, so say so rather than failing silently.
            console.warn('Reading progress could not be saved:', error);
            this._storageBroken = true;
            return false;
        }
    },

    isPersistent: function() {
        this.load();
        return !this._storageBroken;
    },

    setStatus: function(bookKey, status) {
        const progress = this.load();
        const id = workIdentityByKey.get(bookKey) ?? bookKey;
        for (const key of workKeysById.get(id) ?? [bookKey]) {
            progress[key] = status || null;
        }
        this.save(progress);
        return status || null;
    },

    getStatus: function(bookKey) {
        const id = workIdentityByKey.get(bookKey) ?? bookKey;
        return this.load()[id] || null;
    },

    cycleStatus: function(bookKey) {
        const cycle = {null: 'reading', 'reading': 'finished', 'finished': null};
        return this.setStatus(bookKey, cycle[this.getStatus(bookKey)]);
    },

    getCount: function(status) {
        const values = workIdentityData.identities.map((work) => this.getStatus(work.id));
        return status
            ? values.filter(v => v === status).length
            : values.filter(Boolean).length;
    },

    getTotalBooks: function() {
        return workIdentityData.identities.length;
    }
};

function exportProgressFile() {
    const works = {};
    for (const identity of workIdentityData.identities) {
        const status = readingProgress.getStatus(identity.id);
        if (status) works[identity.id] = status;
    }
    return { format: 'horus-heresy-progress', version: 1, works,
        ownedCollections: [...loadOwnedCollections()] };
}

function validOwnedCollections(value) {
    return value === undefined || (Array.isArray(value) &&
        new Set(value).size === value.length && value.every((id) =>
            typeof id === 'string' && collectionById.has(id)));
}

function importProgressFile(payload) {
    if (!payload || typeof payload !== 'object' || Array.isArray(payload) ||
        payload.format !== 'horus-heresy-progress' || payload.version !== 1 ||
        !payload.works || typeof payload.works !== 'object' || Array.isArray(payload.works) ||
        !validOwnedCollections(payload.ownedCollections)) {
        return { ok: false, reason: 'This is not a supported Horus Heresy progress file.' };
    }
    const progress = Object.create(null);
    for (const [id, status] of Object.entries(payload.works)) {
        if (!workKeysById.has(id) || (status !== 'reading' && status !== 'finished')) {
            return { ok: false, reason: 'The file contains an unknown work or invalid status.' };
        }
        for (const key of workKeysById.get(id)) progress[key] = status;
    }
    const previousProgress = { ...readingProgress.load() };
    if (!readingProgress.save(progress)) {
        return { ok: false, reason: 'The record could not be saved in this browser.' };
    }
    if (payload.ownedCollections && !saveOwnedCollections(new Set(payload.ownedCollections))) {
        readingProgress.save(previousProgress);
        return { ok: false, reason: 'The owned collection list could not be saved in this browser.' };
    }
    return { ok: true, applied: Object.keys(payload.works).length };
}

// ---------------------------------------------------------------------------
// Cross-device progress sync, with no server and no account.
//
// The site is a static page, so there is nothing to sync through. Instead the
// whole reading log is packed into a short code you can carry to another
// device by hand or as a link. Two bits per book over the alphabetically
// sorted key list gives 232 books in 58 bytes, about 78 base64 characters.
//
// Sorted alphabetically rather than by the displayed order, so re-sorting the
// chronology does not invalidate anyone's code. A short fingerprint of the key
// list is embedded. The previous 228-entry key list remains supported through
// a frozen migration snapshot. Other fingerprints are refused rather than
// silently decoded against shifted indices, which would corrupt the log.
// ---------------------------------------------------------------------------

const SYNC_PREFIX = 'HH2';
const SYNC_STATES = [null, 'reading', 'finished'];

function syncKeyList() {
    return Object.keys(bookData).slice().sort();
}

// A cheap, stable fingerprint. Not security, just a guard against decoding a
// code against a book list it was not written for.
function syncFingerprint(keys) {
    let h = 0x811c9dc5;
    for (const ch of keys.join('|')) {
        h ^= ch.charCodeAt(0);
        h = Math.imul(h, 0x01000193) >>> 0;
    }
    return h.toString(36).padStart(7, '0').slice(0, 7);
}

const toBase64Url = (bytes) =>
    btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

const fromBase64Url = (text) => {
    const padded = text.replace(/-/g, '+').replace(/_/g, '/');
    const binary = atob(padded + '='.repeat((4 - (padded.length % 4)) % 4));
    return Uint8Array.from(binary, (c) => c.charCodeAt(0));
};

function exportProgressCode() {
    const keys = syncKeyList();
    const progress = readingProgress.load();
    const bytes = new Uint8Array(Math.ceil(keys.length / 4));

    keys.forEach((key, i) => {
        const state = SYNC_STATES.indexOf(progress[key] || null);
        if (state > 0) bytes[i >> 2] |= state << ((i % 4) * 2);
    });

    return `${SYNC_PREFIX}-${syncFingerprint(keys)}-${toBase64Url(bytes)}`;
}

// Returns { ok, applied, reason }. Never partially applies.
function importProgressCode(code) {
    const cleaned = String(code || '').trim().replace(/\s+/g, '');
    const parts = cleaned.split('-');

    if (parts.length !== 3 || parts[0] !== SYNC_PREFIX) {
        return { ok: false, reason: 'That is not a record cipher.' };
    }

    const currentKeys = syncKeyList();
    const keys = parts[1] === syncFingerprint(currentKeys) ? currentKeys
        : parts[1] === legacyTransferKeysData.fingerprint ? legacyTransferKeysData.keys : null;
    if (!keys) {
        return {
            ok: false,
            reason: 'That cipher was struck from a different revision of the archive. ' +
                    'Reload both dataslates so they hold the same records, then issue a new cipher.',
        };
    }

    let bytes;
    try {
        bytes = fromBase64Url(parts[2]);
    } catch (error) {
        return { ok: false, reason: 'That cipher is corrupted or incomplete.' };
    }
    if (bytes.length !== Math.ceil(keys.length / 4)) {
        return { ok: false, reason: 'That cipher is the wrong length for this archive.' };
    }

    const restored = {};
    keys.forEach((key, i) => {
        const state = SYNC_STATES[(bytes[i >> 2] >> ((i % 4) * 2)) & 0b11];
        if (state) restored[key] = state;
    });

    if (!readingProgress.save(restored)) {
        return { ok: false, reason: 'The record could not be saved in this browser.' };
    }
    return { ok: true, applied: readingProgress.getCount() };
}

// Modal scroll lock. Every overlay used to set and clear document.body.overflow
// independently, so closing a nested modal unlocked the page while its parent
// was still open.
//
// The state is derived from the DOM rather than counted, because several modals
// have three separate close paths (button, backdrop, Escape) and a counter
// would drift the first time two of them fired for one dismissal.
const MODAL_SELECTOR = '.modal-overlay.active, .character-modal-overlay.active';

// Focus management for modals.
//
// Previously nothing called .focus() anywhere: opening a dialog left focus on
// the page behind it, Tab walked straight out of the modal into content the
// user could not see, and closing never returned focus to what opened it.
const focusManager = {
    _stack: [],

    _focusable(container) {
        return [...container.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea, [tabindex]:not([tabindex="-1"])'
        )].filter((el) => el.offsetParent !== null || el === document.activeElement);
    },

    trap(container) {
        this._stack.push({ container, returnTo: document.activeElement });

        const first = container.querySelector('[data-autofocus]') || this._focusable(container)[0];
        if (first) first.focus();

        container._trapHandler = (event) => {
            if (event.key !== 'Tab') return;
            const items = this._focusable(container);
            if (!items.length) return;
            const firstItem = items[0];
            const lastItem = items[items.length - 1];

            if (event.shiftKey && document.activeElement === firstItem) {
                event.preventDefault();
                lastItem.focus();
            } else if (!event.shiftKey && document.activeElement === lastItem) {
                event.preventDefault();
                firstItem.focus();
            }
        };
        container.addEventListener('keydown', container._trapHandler);
    },

    release(container) {
        if (container && container._trapHandler) {
            container.removeEventListener('keydown', container._trapHandler);
            delete container._trapHandler;
        }
        const entry = this._stack.pop();

        // Clear the background's inert state before restoring focus. The
        // trigger lives inside that container, and an inert element cannot
        // take focus, so restoring first silently did nothing.
        scrollLock.sync();

        if (entry && entry.returnTo && document.contains(entry.returnTo)) {
            entry.returnTo.focus();
        }
    }
};

const scrollLock = {
    sync: function() {
        const anyOpen = document.querySelector(MODAL_SELECTOR) !== null;
        // Content behind an open dialog must be hidden from assistive tech too,
        // or a screen reader can still walk into it.
        const shell = document.querySelector('.dataslate-container');
        if (shell) shell.toggleAttribute('inert', anyOpen);
        // The class goes on <html>, which is the scrolling element. Setting
        // overflow on <body> alone does not stop the page scrolling.
        document.documentElement.classList.toggle('modal-open', anyOpen);
        document.body.style.overflow = anyOpen ? 'hidden' : '';
    },
    acquire: function() { this.sync(); },
    release: function() { this.sync(); }
};

// Book records load from catalogue-data.js, generated from data/books.json.

// Numeral display. Roman numbering is High Gothic in the setting, so the plain
// form is Low Gothic. Only the numeral part is converted: P9 and SoT 8a are
// already Low Gothic and are left alone.
const NUMERALS_KEY = 'horusHeresyLowGothicNumerals';
let useLowGothicNumerals = false;

const ROMAN_VALUES = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

function romanToArabic(roman) {
    let total = 0;
    for (let i = 0; i < roman.length; i++) {
        const value = ROMAN_VALUES[roman[i]];
        const next = ROMAN_VALUES[roman[i + 1]];
        total += next && next > value ? -value : value;
    }
    return total;
}

// 'XXV.7' becomes '25.7'. Anything not purely Roman is returned untouched.
function displayBookNumber(number) {
    const raw = String(number ?? '');
    if (!useLowGothicNumerals) return raw;

    const match = /^([IVXLCDM]+)(\.\d+)?$/.exec(raw.toUpperCase());
    if (!match) return raw;
    return romanToArabic(match[1]) + (match[2] || '');
}

function loadNumeralPreference() {
    try {
        useLowGothicNumerals = localStorage.getItem(NUMERALS_KEY) === '1';
    } catch (error) {
        useLowGothicNumerals = false;
    }
    return useLowGothicNumerals;
}

function initializeNumerals() {
    const box = document.getElementById('lowGothicNumerals');
    const sample = document.getElementById('numeralSample');
    if (!box) return;

    box.checked = loadNumeralPreference();
    const updateSample = () => {
        if (sample) sample.textContent = useLowGothicNumerals ? '(16 \u2190 XVI)' : '(XVI \u2192 16)';
    };
    updateSample();

    box.addEventListener('change', () => {
        useLowGothicNumerals = box.checked;
        try {
            localStorage.setItem(NUMERALS_KEY, useLowGothicNumerals ? '1' : '0');
        } catch (error) {
            console.warn('Numeral preference could not be saved:', error);
        }
        updateSample();
        rerenderCurrentView();
    });
}

// Convert a series number into a numeric publication-order key.
// Returns UNKNOWN_NUMBER for anything unrecognised so bad data sorts last
// and is visible to the validator rather than silently landing mid-list.
const UNKNOWN_NUMBER = 999999;

function romanToNumber(roman) {
    if (!roman) return UNKNOWN_NUMBER;
    const romanNum = String(roman).toUpperCase().trim();
    const romanMap = {
        'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'V': 5, 'VI': 6, 'VII': 7, 'VIII': 8, 'IX': 9,
        'X': 10, 'XI': 11, 'XII': 12, 'XIII': 13, 'XIV': 14, 'XV': 15, 'XVI': 16, 'XVII': 17,
        'XVIII': 18, 'XIX': 19, 'XX': 20, 'XXI': 21, 'XXII': 22, 'XXIII': 23, 'XXIV': 24,
        'XXV': 25, 'XXVI': 26, 'XXVII': 27, 'XXVIII': 28, 'XXIX': 29, 'XXX': 30,
        'XXXI': 31, 'XXXII': 32, 'XXXIII': 33, 'XXXIV': 34, 'XXXV': 35, 'XXXVI': 36,
        'XXXVII': 37, 'XXXVIII': 38, 'XXXIX': 39, 'XL': 40, 'XLI': 41, 'XLII': 42,
        'XLIII': 43, 'XLIV': 44, 'XLV': 45, 'XLVI': 46, 'XLVII': 47, 'XLVIII': 48,
        'XLIX': 49, 'L': 50, 'LI': 51, 'LII': 52, 'LIII': 53, 'LIV': 54
    };

    // Anthology story numbers like "X.6" or "LII.14". The story index is kept
    // as a scaled component rather than a decimal fraction, because
    // parseFloat('10.10') === 10.1, which made story 10 collide with story 1.
    const dotted = romanNum.match(/^([IVXLCDM]+)\.(\d+)$/);
    if (dotted) {
        const volume = romanMap[dotted[1]];
        if (volume === undefined) return UNKNOWN_NUMBER;
        return volume + parseInt(dotted[2], 10) / 1000;
    }

    // The Primarchs series (P1 to P17)
    const primarch = romanNum.match(/^P\s*(\d+)$/);
    if (primarch) {
        return 100 + parseInt(primarch[1], 10);
    }

    // Siege of Terra. Three shapes to handle: plain numbers (SoT 5), the
    // three-volume finale (SoT 8a/8b/8c), and the interleaved novellas that sit
    // between numbered books (SoT 1.5, SoT 4.5, SoT 7.5).
    const sot = romanNum.match(/^SOT\s*(\d+)(?:\.(\d+))?([A-Z]?)$/);
    if (sot) {
        const between = sot[2] ? Number('0.' + sot[2]) : 0;
        const volume = sot[3] ? (sot[3].charCodeAt(0) - 64) / 100 : 0;
        return 200 + parseInt(sot[1], 10) + between + volume;
    }

    return romanMap[romanNum] ?? UNKNOWN_NUMBER;
}

// The chronological order IS the key insertion order of bookData, which is the
// curated sequence documented in ORDERING_DECISIONS.md. Derive the rank once.
//
// Do not reintroduce a per-entry `sortOrder` field. The previous scheme stored
// `<volume>.<story>` floats, which could not distinguish story 10 from story 1,
// and a duplicated property in 139 entries silently shadowed the intended value
// so that 223 of 224 books rendered in the wrong position.
const chronologicalRank = new Map(
    Object.keys(bookData).map((key, index) => [key, index + 1])
);

// Reading order rank, from reading-order.json. Falls back to chronological if
// the file could not be fetched, so the grid always renders something.
function readingRank(key) {
    if (!readingOrder) return chronologicalRank.get(key);
    const entry = readingOrder.byKey.get(key);
    return entry ? entry.rank : Number.MAX_SAFE_INTEGER;
}

// Sort books based on sort order
function getSortedBookKeys(sortOrder) {
    const keys = Object.keys(bookData);

    if (currentRoute === 'core' && sortOrder === 'view' && currentView === 'reading') {
        return CORE_ROUTE.filter((key) => bookData[key]);
    }

    switch (sortOrder) {
        case 'publication':
            return keys.sort((a, b) =>
                romanToNumber(bookData[a].number) - romanToNumber(bookData[b].number));
        case 'title':
            return keys.sort((a, b) => bookData[a].title.localeCompare(bookData[b].title));
        case 'author':
            return keys.sort((a, b) => bookData[a].author.localeCompare(bookData[b].author));
        case 'chronological':
            return keys.sort((a, b) => chronologicalRank.get(a) - chronologicalRank.get(b));
        case 'reading':
            return keys.sort((a, b) => readingRank(a) - readingRank(b));
        case 'view':
        default:
            return currentView === 'chronological'
                ? keys.sort((a, b) => chronologicalRank.get(a) - chronologicalRank.get(b))
                : keys.sort((a, b) => readingRank(a) - readingRank(b));
    }
}

// Generate book cards dynamically
function generateBookCards(filterLegion = '', searchQuery = '') {
    const bookDisplay = document.querySelector('.book-display');
    bookDisplay.innerHTML = ''; // Clear existing cards

    let displayedCount = 0;
    const matchedWorkIds = new Set();
    const query = searchQuery.toLowerCase().trim();
    const includePrimarchs = document.getElementById('includePrimarchs')?.checked ?? true;
    const includeSiegeOfTerra = document.getElementById('includeSiegeOfTerra')?.checked ?? true;
    const showSpoilers = document.getElementById('showSpoilers')?.checked ?? false;
    const sortOrder = document.getElementById('sortOrder')?.value || 'chronological';
    const collection = document.getElementById('collectionFilter')?.value || '';
    const format = document.getElementById('formatFilter')?.value || '';

    const sortedKeys = getSortedBookKeys(sortOrder);

    // Phase headings, but only when the reading view is showing its own order.
    // Under a title or author sort the phases would be meaningless.
    const showPhases = currentView === 'reading'
        && currentRoute === 'full'
        && readingOrder
        && (sortOrder === 'view' || sortOrder === 'reading');
    let lastPhase = null;

    sortedKeys.forEach((bookKey) => {
        const book = bookData[bookKey];
        // The book's fixed position in the chronology, not its position in the
        // current view. Sorting by title must not renumber the chronology.
        const chronologicalNumber = chronologicalRank.get(bookKey);
        const status = readingProgress.getStatus(bookKey);

        if (currentRoute === 'core' && !coreRouteRank.has(bookKey)) return;

        // Filter out Primarchs series if checkbox unchecked
        if (!includePrimarchs && book.series === 'primarchs') {
            return;
        }

        // Filter out Siege of Terra series if checkbox unchecked
        if (!includeSiegeOfTerra && book.series === 'siege-of-terra') {
            return;
        }
        if (collection && book.anthology !== collection) return;
        if (format && book.format !== format) return;

        // Filter by legion if specified
        if (filterLegion) {
            if (filterLegion === '__LOYALIST__') {
                if (!allegiancesFor(bookKey, book).has('loyalist')) return;
            } else if (filterLegion === '__TRAITOR__') {
                if (!allegiancesFor(bookKey, book).has('traitor')) return;
            } else if (filterLegion === '__BROAD_SCOPE__') {
                if (!book.factionScope) return;
            } else if (!book.legions.includes(filterLegion)) {
                return; // Skip this book
            }
        }

        // Search only text the current spoiler setting permits the reader to see.
        if (query) {
            const titleMatch = book.title.toLowerCase().includes(query);
            const authorMatch = book.author.toLowerCase().includes(query);
            const charactersMatch = showSpoilers && book.details.toLowerCase().includes(query);
            const visibleBlurb = showSpoilers ? book.blurb : (book.safeSummaryReview ? book.blurbSafe : '');
            const blurbMatch = visibleBlurb?.toLowerCase().includes(query) ?? false;

            if (!titleMatch && !authorMatch && !charactersMatch && !blurbMatch) {
                return; // Skip this book
            }
            const workId = workIdentityByKey.get(bookKey) || bookKey;
            if (matchedWorkIds.has(workId)) return;
            matchedWorkIds.add(workId);
        }

        displayedCount++;

        if (showPhases) {
            const entry = readingOrder.byKey.get(bookKey);
            const phaseId = entry ? entry.phase : null;
            if (phaseId && phaseId !== lastPhase) {
                lastPhase = phaseId;
                const phase = readingOrder.phases.get(phaseId);
                if (phase) {
                    const heading = document.createElement('div');
                    heading.className = 'phase-heading';
                    heading.innerHTML = `
                        <h2 class="phase-title">${escapeHtml(phase.title)}</h2>
                        <p class="phase-blurb">${escapeHtml(phase.blurb)}</p>
                    `;
                    bookDisplay.appendChild(heading);
                }
            }
        }

        // A button, not a div. The catalogue was the site's primary interaction
        // and could not be reached or activated without a mouse.
        const bookCard = document.createElement('button');
        bookCard.type = 'button';
        const statusClass = status ? ` book-${status}` : '';
        bookCard.className = 'book-card' + statusClass;
        bookCard.setAttribute('data-book', bookKey);
        bookCard.setAttribute('aria-label',
            `${book.title} by ${book.author}${status ? ', ' + status : ''}`);

        let statusBadge = '';
        if (status === 'reading') {
            statusBadge = '<div class="status-badge status-reading">📖 READING</div>';
        } else if (status === 'finished') {
            statusBadge = '<div class="status-badge status-finished">✓ FINISHED</div>';
        }

        // Name the parent volume. Printing the literal word "ANTHOLOGY" threw
        // away book.anthology, so a card for MYRIAD never told you it lives in
        // Heralds of the Siege, which is the one fact needed to buy it. Up to 21
        // entries share a single cover image, so the name is the only way to
        // tell many of these cards apart.
        let anthologyLabel = '';
        if (book.anthology) {
            const relation = book.collectionRelation === 'novelised in' ? 'NOVELISED IN' : 'IN';
            anthologyLabel = `<div class="anthology-label">${relation}: ${escapeHtml(book.anthology)}</div>`;
        }

        // A real img, not a CSS background: backgrounds cannot be lazy-loaded,
        // carry no alt text and are invisible to assistive technology.
        bookCard.innerHTML = `
            <div class="book-cover">
                <img class="book-cover-img" src="${encodeURI(optimisedImage(book.coverImage))}"
                     alt="Cover of ${escapeHtml(book.title)}"
                     loading="lazy" decoding="async" width="315" height="508">
                <div class="book-number-overlay">${escapeHtml(displayBookNumber(book.number))}</div>
                <div class="chronological-badge">Chrono: ${chronologicalNumber}</div>
                ${statusBadge}
            </div>
            <div class="book-title">${escapeHtml(book.title)}</div>
            ${anthologyLabel}
            <div class="book-author">${escapeHtml(book.author)}</div>
        `;

        // Add click event listener
        bookCard.addEventListener('click', () => {
            showModal(bookKey);
        });

        bookDisplay.appendChild(bookCard);
    });

    // Update progress counter
    updateProgressCounter();
    updateCollectionBulkButton();
    updateCollectionOwnedButton();

    // Show filter/search result info
    if (filterLegion || query || collection || format) {
        const filterInfo = document.createElement('div');
        filterInfo.className = 'filter-info';
        let infoText = `Showing ${displayedCount} book${displayedCount !== 1 ? 's' : ''}`;

        // Resolve the internal sentinels, or the UI prints "__LOYALIST__"
        const legionLabel = {
            __LOYALIST__: 'the Loyalist Legions',
            __TRAITOR__: 'the Traitor Legions',
            __BROAD_SCOPE__: 'multiple Legions or factions'
        }[filterLegion] || filterLegion;

        if (query && filterLegion) {
            infoText += ` matching "${searchQuery}" in ${legionLabel}`;
        } else if (query) {
            infoText += ` matching "${searchQuery}"`;
        } else if (filterLegion) {
            infoText += ` featuring ${legionLabel}`;
        }
        if (collection) infoText += ` in ${collection}`;
        if (format) infoText += ` · ${format}`;

        filterInfo.textContent = infoText;
        bookDisplay.insertBefore(filterInfo, bookDisplay.firstChild);
    }
}

// Load the derived reading order. Generated by tools/build-reading-order.mjs,
// fetched rather than inlined so the derivation stays in one place.
async function loadReadingOrder() {
    try {
        const response = await fetch('reading-order.json', { cache: 'no-cache' });
        if (!response.ok) throw new Error('HTTP ' + response.status);
        const data = await response.json();

        readingOrder = {
            phases: new Map(data.phases.map((p) => [p.id, p])),
            byKey: new Map(data.entries.map((e) => [e.bookKey, e])),
            // Books the phase ordering places ahead of a stated prerequisite.
            // Surfaced on the card rather than silently reordered.
            warnings: new Map((data.meta.prerequisiteViolations || [])
                .map((v) => [v.dependentKey, v])),
            meta: data.meta,
        };
        return true;
    } catch (error) {
        // fetch fails on file:// origins. Reading order then falls back to
        // chronological, which is wrong but not broken, so say so.
        console.warn('Reading order could not be loaded, falling back to chronological:', error);
        return false;
    }
}

// Switch view, persist it, and re-render.
function setView(view, { persist = true } = {}) {
    if (!VIEWS[view]) return;
    currentView = view;
    if (persist) { saveView(view); syncBrowseUrl(); }

    document.querySelectorAll('.view-btn').forEach((btn) => {
        const active = btn.dataset.view === view;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
    });

    const subtitle = document.getElementById('subtitleSeries');
    if (subtitle) {
        subtitle.textContent = {
            reading: 'HORUS HERESY FICTION - RECOMMENDED READING ORDER',
            chronological: 'HORUS HERESY FICTION - IN-UNIVERSE CHRONOLOGY',
            chart: 'HORUS HERESY FICTION - STORYLINE CHART',
        }[view];
    }

    const note = document.getElementById('viewNote');
    if (note) {
        let text = VIEWS[view].note;
        if (view === 'reading' && !readingOrder) {
            text = 'Reading order data could not be loaded, so this is showing chronological order. Serve the site over HTTP rather than opening the file directly.';
        } else if (view === 'reading' && currentRoute === 'core') {
            text = 'A short publisher-curated route through 12 pivotal novels. Full Fiction restores the wider archive. Your reading record is shared between paths.';
        }
        note.textContent = text;
    }

    const chartHost = document.getElementById('chartView');
    const grid = document.querySelector('.book-display');
    const filters = document.querySelector('.filter-section');
    const routes = document.querySelector('.route-choices');
    const nextReadGuide = document.getElementById('nextReadGuide');
    // The mobile disclosure button lives outside .filter-section, so it needs
    // hiding separately or it sits there controlling nothing.
    const filterToggle = document.getElementById('filterDisclosure');

    if (view === 'chart') {
        if (routes) routes.hidden = true;
        if (nextReadGuide) nextReadGuide.hidden = true;
        if (grid) grid.hidden = true;
        if (filters) filters.hidden = true;
        if (filterToggle) filterToggle.hidden = true;
        if (chartHost) chartHost.hidden = false;
        renderChartView();
    } else {
        if (routes) routes.hidden = false;
        if (nextReadGuide) nextReadGuide.hidden = false;
        if (chartHost) chartHost.hidden = true;
        if (grid) grid.hidden = false;
        if (filters) filters.hidden = false;
        if (filterToggle) filterToggle.hidden = false;
        const legion = document.getElementById('legionFilter')?.value || '';
        const search = document.getElementById('searchInput')?.value || '';
        generateBookCards(legion, search);
    }
    renderNextReadGuide();
}

function setRoute(route) {
    if (route !== 'core' && route !== 'full') return;
    currentRoute = route;
    if (route === 'core') {
        for (const id of ['searchInput', 'legionFilter', 'collectionFilter', 'formatFilter']) {
            document.getElementById(id).value = '';
        }
        document.getElementById('sortOrder').value = 'view';
    }
    try { localStorage.setItem(ROUTE_KEY, route); } catch { /* private browsing */ }
    document.getElementById('coreRoute').setAttribute('aria-pressed', String(route === 'core'));
    document.getElementById('fullRoute').setAttribute('aria-pressed', String(route === 'full'));
    document.getElementById('routeSource').hidden = route !== 'core';
    syncBrowseUrl();
    if (route === 'core' || currentView === 'chart') setView('reading');
    else setView(currentView, { persist: false });
}

function initializeRoutes() {
    document.querySelector('#routeSource a').href = readingRoutesData.core.source;
    document.getElementById('coreRoute').addEventListener('click', () => setRoute('core'));
    document.getElementById('fullRoute').addEventListener('click', () => setRoute('full'));
    document.getElementById('legionRoute').addEventListener('click', () => {
        setRoute('full');
        const filter = document.getElementById('legionFilter');
        const disclosure = document.getElementById('filterDisclosure');
        if (getComputedStyle(disclosure).display !== 'none' && disclosure.getAttribute('aria-expanded') === 'false') disclosure.click();
        filter.scrollIntoView({ block: 'center', behavior: 'smooth' });
        filter.focus({ preventScroll: true });
    });
    document.getElementById('coreRoute').setAttribute('aria-pressed', String(currentRoute === 'core'));
    document.getElementById('fullRoute').setAttribute('aria-pressed', String(currentRoute === 'full'));
    document.getElementById('routeSource').hidden = currentRoute !== 'core';
}

function loadSavedForLater() {
    try {
        const ids = JSON.parse(localStorage.getItem(SKIPPED_KEY) || '[]');
        return new Set(Array.isArray(ids) ? ids.filter((id) => workKeysById.has(id)) : []);
    } catch { return new Set(); }
}

function saveForLater(ids) {
    try { localStorage.setItem(SKIPPED_KEY, JSON.stringify([...ids])); }
    catch { /* Private browsing may disable storage. */ }
}

function recommendationKeys() {
    if (!readingOrder) return [];
    const legion = currentRoute === 'full' ? document.getElementById('legionFilter')?.value : '';
    const keys = currentRoute === 'core' ? CORE_ROUTE : getSortedBookKeys('reading');
    const seen = new Set();
    return keys.filter((key) => {
        const id = workIdentityByKey.get(key) || key;
        if (seen.has(id)) return false;
        seen.add(id);
        if (legion && !legion.startsWith('__') && !bookData[key].legions.includes(legion)) return false;
        return !readingProgress.getStatus(key);
    });
}

function unfinishedChartPrerequisites(bookKey) {
    const entry = readingOrder?.byKey.get(bookKey);
    if (!entry) return [];
    const ids = [...new Set(entry.prerequisites.map((key) => workIdentityByKey.get(key) || key))];
    return ids.filter((id) => readingProgress.getStatus(id) !== 'finished');
}

function renderNextReadGuide() {
    const host = document.getElementById('nextReadGuide');
    if (!host || host.hidden || !readingOrder) return;
    const skipped = loadSavedForLater();
    const choices = recommendationKeys().filter((key) => !skipped.has(workIdentityByKey.get(key) || key));
    const primary = choices[0];
    const explanation = document.getElementById('nextReadExplanation');
    const button = document.getElementById('nextReadPrimary');
    const chartNote = document.getElementById('nextReadChartNote');
    const alternatives = document.getElementById('nextReadAlternatives');
    const skip = document.getElementById('nextReadSkip');
    const reset = document.getElementById('nextReadReset');
    const shorter = document.getElementById('nextReadShorter');
    const legion = currentRoute === 'full' ? document.getElementById('legionFilter')?.value : '';
    const faction = legion && !legion.startsWith('__') ? ` for ${legion}` : '';
    const path = currentRoute === 'core' ? 'the publisher-curated Core path' : `the Archive reading order${faction}`;
    explanation.textContent = primary
        ? `The first work you have not started in ${path}. The two options below follow it in the same order. Your saved-for-later choices stay out of this suggestion.`
        : `No unstarted works remain in ${path} after your saved-for-later choices.`;
    button.hidden = !primary;
    button.dataset.workKey = primary || '';
    if (primary) button.textContent = `NEXT: ${bookData[primary].title}`;
    const chartFirst = currentRoute === 'full' && primary ? unfinishedChartPrerequisites(primary) : [];
    chartNote.hidden = chartFirst.length === 0;
    if (chartFirst.length) {
        const count = chartFirst.length;
        chartNote.textContent = `Daunt’s chart places ${count} unfinished ${count === 1 ? 'work' : 'works'} before this one. This is community reading advice. Enable spoilers to see the link in the work detail.`;
    }
    alternatives.replaceChildren();
    for (const key of choices.slice(1, 3)) {
        const option = document.createElement('button');
        option.type = 'button';
        option.textContent = bookData[key].title;
        option.addEventListener('click', () => showModal(key));
        alternatives.append(option);
    }
    skip.hidden = !primary;
    reset.hidden = skipped.size === 0;
    shorter.hidden = currentRoute === 'core';
}

function initializeNextReadGuide() {
    document.getElementById('nextReadPrimary').addEventListener('click', (event) => {
        const key = event.currentTarget.dataset.workKey;
        if (key) showModal(key);
    });
    document.getElementById('nextReadSkip').addEventListener('click', () => {
        const key = document.getElementById('nextReadPrimary').dataset.workKey;
        if (!key) return;
        const skipped = loadSavedForLater();
        skipped.add(workIdentityByKey.get(key) || key);
        saveForLater(skipped);
        renderNextReadGuide();
    });
    document.getElementById('nextReadReset').addEventListener('click', () => {
        saveForLater(new Set());
        renderNextReadGuide();
    });
    document.getElementById('nextReadShorter').addEventListener('click', () => setRoute('core'));
}

// The storyline chart.
//
// Node positions come from the geometry extracted out of the source PDF, so the
// layout is Daunt's own rather than a re-flow. Everything else is re-styled: the
// original fills are pastel and neon on white, which reads badly on a dark
// ground and leaves several labels unreadable.
//
// Faction is carried by colour, not by horizontal position, because the source
// reuses vertical bands as the timeline descends and its column extents overlap
// far too much to draw as swimlanes.

// A curated accent per faction, keyed on the original fill so the mapping stays
// traceable back to the PDF. Chosen for separation at small sizes rather than
// strict heraldry: Space Wolves and Ultramarines are both canonically blue, so
// one takes ice and the other cobalt.
const FACTION_ACCENTS = {
    '#dae8fc': '#3f9e8c',   // Sons of Horus / Luna Wolves, main Horus arc
    '#126b96': '#8fb3d9',   // Space Wolves and Thousand Sons, Prospero arc
    '#1478a8': '#8fb3d9',   // same arc, second blue in the source
    '#cccccc': '#d9d2c2',   // White Scars
    '#ff66ff': '#c064c8',   // Emperor's Children
    '#ccff99': '#b9a05a',   // Iron Warriors, Tallarn arc
    '#000000': '#79838f',   // Raven Guard
    '#009900': '#5fb04a',   // Salamanders
    '#6e3600': '#c0453f',   // Word Bearers / World Eaters, Calth and Betrayer
    '#cc6600': '#3f6fd8',   // Ultramarines / Imperium Secundus
    '#003300': '#2b6b52',   // Dark Angels, Thramas Crusade
    '#e3c800': '#e0b23a',   // Imperial Fists
    '#ffff33': '#cfd6de',   // Terra / Imperium
    '#4c0099': '#6f8a6a',   // Death Guard / Garro and the Knights-Errant
    '#4d4d4d': '#b4653a',   // Mechanicum
    '#ffffff': '#8b929b',   // no faction colour assigned
};

const CHART_INK = '#f2eee4';
const CHART_BASE = [22, 23, 26];
const FALLBACK_ACCENT = '#8b929b';

function hexToRgb(hex) {
    const h = String(hex || '').replace('#', '');
    const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
    const n = parseInt(full, 16);
    return Number.isNaN(n) ? [139, 146, 155] : [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

// Blend an accent over the dark ground so the fill reads as a tint of the
// faction rather than a flat pastel block.
function tint(accent, amount) {
    const [r, g, b] = hexToRgb(accent);
    const mix = (c, base) => Math.round(base + (c - base) * amount);
    return `rgb(${mix(r, CHART_BASE[0])}, ${mix(g, CHART_BASE[1])}, ${mix(b, CHART_BASE[2])})`;
}

// Share Tech Mono is monospace, so the advance width is a fixed fraction of the
// font size and text can be measured exactly without rendering it. That is what
// makes the fitting below reliable rather than approximate.
const CHAR_ADVANCE = 0.52;

// Wrap to a character budget, breaking over-long words so nothing can overflow.
function wrapToWidth(text, maxChars) {
    const words = String(text).split(/\s+/).filter(Boolean);
    const lines = [];
    let line = '';

    for (let word of words) {
        while (word.length > maxChars) {
            if (line) { lines.push(line); line = ''; }
            lines.push(word.slice(0, maxChars - 1) + '-');
            word = word.slice(maxChars - 1);
        }
        if (line && (line + ' ' + word).length > maxChars) { lines.push(line); line = word; }
        else line = line ? line + ' ' + word : word;
    }
    if (line) lines.push(line);
    return lines.length ? lines : [''];
}

// Lay out one node: wrap its label, then grow the box so the text actually fits.
// Height growth is preferred over width growth because the lanes are tight
// horizontally and there is usually vertical room between rows.
function layoutNode(node) {
    const FS = 9;
    const LINE = FS * 1.18;
    const PAD_X = 5;
    const PAD_Y = 4;
    const MIN_W = 62;

    let boxW = Math.max(node.w, MIN_W);
    let maxChars = Math.max(6, Math.floor((boxW - PAD_X * 2) / (FS * CHAR_ADVANCE)));

    const parts = [node.label];
    if (node.anthologyBook) parts.push(`(Book ${node.anthologyBook})`);

    let lines = parts.flatMap((part) => wrapToWidth(part, maxChars));

    // If a line still needs more room than the box allows, widen just enough.
    const longest = Math.max(...lines.map((l) => l.length));
    const neededW = longest * FS * CHAR_ADVANCE + PAD_X * 2;
    if (neededW > boxW) {
        boxW = Math.ceil(neededW);
        maxChars = Math.max(6, Math.floor((boxW - PAD_X * 2) / (FS * CHAR_ADVANCE)));
        lines = parts.flatMap((part) => wrapToWidth(part, maxChars));
    }

    const boxH = Math.max(node.h, lines.length * LINE + PAD_Y * 2);

    return {
        lines,
        fontSize: FS,
        lineHeight: LINE,
        // Grow about the original centre so the layout stays true to the source.
        x: node.x + (node.w - boxW) / 2,
        y: node.y + (node.h - boxH) / 2,
        w: boxW,
        h: boxH,
    };
}

let chartZoom = 1;

async function renderChartView() {
    const host = document.getElementById('chartView');
    if (!host) return;
    if (host.dataset.rendered === 'true') { fitChartToWidth(); return; }

    host.innerHTML = '<p class="chart-loading">RETRIEVING SCHEMATIC...</p>';

    if (!chartData) {
        try {
            const response = await fetch('daunt-chart.json', { cache: 'no-cache' });
            if (!response.ok) throw new Error('HTTP ' + response.status);
            chartData = await response.json();
        } catch (error) {
            console.error('Storyline chart could not be loaded:', error);
            host.innerHTML =
                '<div class="chart-error"><h2>SCHEMATIC UNAVAILABLE</h2>' +
                '<p>The storyline chart could not be retrieved. If you opened this page ' +
                'directly from disk, serve it over HTTP instead.</p></div>';
            return;
        }
    }

    const nodes = chartData.nodes;
    const layouts = new Map(nodes.map((n) => [n.id, layoutNode(n)]));

    // Match chart nodes to books so a node can open the existing book modal.
    const normalise = (s) => String(s).toLowerCase()
        .replace(/^(garro|bjorn):\s*/, '').replace(/[^a-z0-9]+/g, '');
    const ALIASES = {
        'thief of revelation': 'thief of revelations',
        'vulcan lives': 'vulkan lives',
        'the heart of pharos': 'the heart of the pharos',
        wolfhunt: 'wolf hunt',
        'guardian of the order': 'cypher: guardian of order',
        'herald of sangiunius': 'herald of sanguinius',
        'the devine adoratrice': 'the divine adoratrice',
    };
    const titleToKey = new Map();
    Object.keys(bookData).forEach((key) => {
        const n = normalise(bookData[key].title);
        if (!titleToKey.has(n)) titleToKey.set(n, key);
    });
    const keyForNode = (node) =>
        titleToKey.get(normalise(ALIASES[node.label.toLowerCase()] ?? node.label)) || null;

    const PAD = 46;
    const boxes = [...layouts.values()];
    const minX = Math.min(...boxes.map((b) => b.x)) - PAD;
    const minY = Math.min(...boxes.map((b) => b.y)) - PAD;
    const viewW = Math.max(...boxes.map((b) => b.x + b.w)) - minX + PAD;
    const viewH = Math.max(...boxes.map((b) => b.y + b.h)) - minY + PAD;

    const progress = readingProgress.load();
    const svgParts = [];

    // Edges first so nodes paint over them. Routed orthogonally with rounded
    // corners, which reads far more cleanly than straight diagonals at this
    // density.
    chartData.edges.forEach((edge) => {
        const a = layouts.get(edge.from);
        const b = layouts.get(edge.to);
        const nodeA = nodes.find((n) => n.id === edge.from);
        const nodeB = nodes.find((n) => n.id === edge.to);
        if (!a || !b) return;

        const ax = a.x + a.w / 2;
        const bx = b.x + b.w / 2;
        const downwards = (b.y + b.h / 2) >= (a.y + a.h / 2);
        const ay = downwards ? a.y + a.h : a.y;
        const by = downwards ? b.y : b.y + b.h;
        const r = 6;

        let d;
        if (Math.abs(ax - bx) < 3) {
            d = `M ${ax} ${ay} L ${bx} ${by}`;
        } else {
            const mid = ay + (by - ay) / 2;
            const sweepX = bx > ax ? 1 : -1;
            const sweepY = by > ay ? 1 : -1;
            d = `M ${ax} ${ay} V ${mid - r * sweepY}` +
                ` Q ${ax} ${mid} ${ax + r * sweepX} ${mid}` +
                ` H ${bx - r * sweepX}` +
                ` Q ${bx} ${mid} ${bx} ${mid + r * sweepY}` +
                ` L ${bx} ${by}`;
        }

        const accentFrom = FACTION_ACCENTS[(nodeA?.colour || '').toLowerCase()] || FALLBACK_ACCENT;
        svgParts.push(
            `<path class="edge" d="${d}" marker-end="url(#arrow)" ` +
            `data-from="${escapeHtml(edge.from)}" data-to="${escapeHtml(edge.to)}" ` +
            `data-colour="${escapeHtml(nodeA?.colour || '')}" ` +
            `style="--edge-accent:${accentFrom}" />`
        );
    });

    nodes.forEach((node) => {
        const box = layouts.get(node.id);
        const key = keyForNode(node);
        const status = key ? progress[key] : null;
        const accent = FACTION_ACCENTS[(node.colour || '').toLowerCase()] || FALLBACK_ACCENT;
        const isShort = node.format === 'short-story';
        const fill = tint(accent, isShort ? 0.13 : 0.2);

        const classes = [
            'chart-node',
            `format-${node.format || 'unknown'}`,
            key ? 'is-linked' : 'is-unlinked',
            status ? `is-${status}` : '',
        ].filter(Boolean).join(' ');

        const cx = box.x + box.w / 2;
        const firstDy = -((box.lines.length - 1) * box.lineHeight) / 2 + box.fontSize * 0.34;
        const label = node.label + (node.anthologyBook ? ` (Book ${node.anthologyBook})` : '');

        const shape = node.format === 'audio-drama'
            ? `<ellipse cx="${cx}" cy="${box.y + box.h / 2}" rx="${box.w / 2}" ry="${box.h / 2}" ` +
              `fill="${fill}" stroke="${accent}" />`
            : `<rect x="${box.x}" y="${box.y}" width="${box.w}" height="${box.h}" ` +
              `rx="${node.format === 'novella' ? 9 : 3}" fill="${fill}" stroke="${accent}" />`;

        // A left edge bar gives the faction a second, non-colour-only cue and
        // makes the columns readable when zoomed out.
        const bar = node.format === 'audio-drama' ? '' :
            `<rect class="node-bar" x="${box.x}" y="${box.y}" width="2.5" height="${box.h}" ` +
            `rx="1" fill="${accent}" />`;

        const text = box.lines.map((line, i) =>
            `<tspan x="${cx}" dy="${i === 0 ? firstDy : box.lineHeight}">${escapeHtml(line)}</tspan>`
        ).join('');

        svgParts.push(
            `<g class="${classes}" ${key ? `data-book="${escapeHtml(key)}"` : ''} ` +
            `data-node="${escapeHtml(node.id)}" data-colour="${escapeHtml(node.colour || '')}" ` +
            `tabindex="${key ? 0 : -1}" role="${key ? 'button' : 'presentation'}" ` +
            `aria-label="${escapeHtml(label)}" style="--node-accent:${accent}">` +
            shape + bar +
            // Inline style, not a presentation attribute, so the stylesheet
            // cannot override the size the fitting calculation depends on.
            `<text x="${cx}" y="${box.y + box.h / 2}" style="font-size:${box.fontSize}px">${text}</text>` +
            `</g>`
        );
    });

    // One entry per faction, deduplicated because two blues map to one arc.
    const factions = [];
    const seenFaction = new Set();
    for (const [colour, label] of Object.entries(chartData.meta.colourToFaction || {})) {
        if (seenFaction.has(label)) continue;
        seenFaction.add(label);
        factions.push({ colour, label, accent: FACTION_ACCENTS[colour.toLowerCase()] || FALLBACK_ACCENT });
    }

    host.innerHTML = `
        <div class="chart-toolbar">
            <div class="chart-toolbar-row">
                <div class="chart-controls">
                    <button type="button" class="chart-ctrl" id="chartZoomOut" aria-label="Zoom out">&minus;</button>
                    <span class="chart-zoom-label" id="chartZoomLabel" aria-live="polite">100%</span>
                    <button type="button" class="chart-ctrl" id="chartZoomIn" aria-label="Zoom in">+</button>
                    <button type="button" class="chart-ctrl chart-ctrl-wide" id="chartFit">FIT WIDTH</button>
                    <button type="button" class="chart-ctrl chart-ctrl-wide" id="chartFullscreen" aria-pressed="false">FULLSCREEN</button>
                </div>
                <span class="chart-hint">${nodes.length} entries, ${chartData.edges.length} prerequisites. Drag to pan, tap a book for details.</span>
            </div>

            <!-- The legend and the 15 faction keys are tall on a phone, so they
                 collapse behind a disclosure below the breakpoint. -->
            <button type="button" class="chart-key-toggle" id="chartKeyToggle"
                    aria-expanded="false" aria-controls="chartKey">KEY &amp; FACTIONS</button>

            <div class="chart-key" id="chartKey">
                <p class="chart-legend">
                    <span class="key key-novel">Novel</span>
                    <span class="key key-novella">Novella</span>
                    <span class="key key-short">Short story</span>
                    <span class="key key-audio">Audio drama</span>
                    <span class="key key-arrow">&rarr; read before</span>
                </p>
                <div class="chart-factions" role="group" aria-label="Highlight a faction">
                    ${factions.map((f) => `
                        <button type="button" class="faction-key" data-colour="${escapeHtml(f.colour)}"
                                aria-pressed="false" title="Highlight ${escapeHtml(f.label)}">
                            <span class="faction-swatch" style="background:${f.accent}"></span>
                            <span class="faction-label">${escapeHtml(f.label)}</span>
                        </button>`).join('')}
                </div>
            </div>
        </div>
        <div class="chart-scroll" id="chartScroll">
            <svg class="chart-svg" id="chartSvg" viewBox="${minX} ${minY} ${viewW} ${viewH}"
                 data-view-w="${viewW}" data-view-h="${viewH}"
                 role="group" aria-label="Storyline chart of the Horus Heresy by faction, with reading prerequisites">
                <defs>
                    <marker id="arrow" viewBox="0 0 10 10" refX="8.5" refY="5"
                            markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                        <path d="M 0 1 L 9 5 L 0 9 z" />
                    </marker>
                </defs>
                ${svgParts.join('\n')}
            </svg>
        </div>
    `;

    const svg = document.getElementById('chartSvg');

    const open = (target) => {
        const group = target.closest('.chart-node[data-book]');
        if (group) showModal(group.dataset.book);
    };
    svg.addEventListener('click', (e) => open(e.target));
    svg.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(e.target); }
    });

    // Highlight one faction at a time. With 185 nodes and 205 crossing edges,
    // following a single Legion's storyline by eye is otherwise very hard.
    host.querySelectorAll('.faction-key').forEach((btn) => {
        btn.addEventListener('click', () => {
            const wasActive = btn.getAttribute('aria-pressed') === 'true';
            host.querySelectorAll('.faction-key').forEach((b) => b.setAttribute('aria-pressed', 'false'));

            if (wasActive) svg.removeAttribute('data-highlight');
            else {
                btn.setAttribute('aria-pressed', 'true');
                svg.setAttribute('data-highlight', btn.dataset.colour);
            }

            const target = svg.getAttribute('data-highlight');
            svg.querySelectorAll('.chart-node').forEach((g) => {
                g.classList.toggle('is-dimmed', Boolean(target) && g.dataset.colour !== target);
            });
            svg.querySelectorAll('.edge').forEach((e) => {
                e.classList.toggle('is-dimmed', Boolean(target) && e.dataset.colour !== target);
            });
        });
    });

    const keyToggle = document.getElementById('chartKeyToggle');
    const keyPanel = document.getElementById('chartKey');
    keyToggle.addEventListener('click', () => {
        const open = keyToggle.getAttribute('aria-expanded') === 'true';
        keyToggle.setAttribute('aria-expanded', String(!open));
        keyPanel.classList.toggle('is-open', !open);
    });

    document.getElementById('chartZoomIn').addEventListener('click', () => setChartZoom(chartZoom * 1.25));
    document.getElementById('chartZoomOut').addEventListener('click', () => setChartZoom(chartZoom / 1.25));
    document.getElementById('chartFit').addEventListener('click', () => fitChartToWidth({ exact: true }));

    const fsButton = document.getElementById('chartFullscreen');
    fsButton.addEventListener('click', () => {
        if (document.fullscreenElement) document.exitFullscreen();
        else if (host.requestFullscreen) host.requestFullscreen().catch((err) =>
            console.warn('Fullscreen was refused:', err));
    });

    host.dataset.rendered = 'true';
    fitChartToWidth();
    scrollChartToEntryPoint();
}

// Open the chart looking at Horus Rising. The spine sits in the middle of the
// drawing, so at anything above fit-width the default scroll position of 0,0
// shows empty margin instead of the entry point.
function scrollChartToEntryPoint() {
    const scroll = document.getElementById('chartScroll');
    const svg = document.getElementById('chartSvg');
    if (!scroll || !svg) return;

    const entry = svg.querySelector('.chart-node[data-book="horus-rising"] rect')
        || svg.querySelector('.chart-node rect');
    if (!entry) return;

    const nodeBox = entry.getBBox();
    const scale = Number(svg.getAttribute('width')) / Number(svg.dataset.viewW);
    const [vbX] = svg.getAttribute('viewBox').split(/\s+/).map(Number);

    const centre = (nodeBox.x + nodeBox.width / 2 - vbX) * scale;
    scroll.scrollLeft = Math.max(0, centre - scroll.clientWidth / 2);
    scroll.scrollTop = 0;
}

// Zoom is applied as an explicit pixel size on the SVG rather than a transform,
// so the scroll container gets real scrollbars at every zoom level.
function setChartZoom(zoom) {
    const svg = document.getElementById('chartSvg');
    if (!svg) return;

    chartZoom = Math.min(3, Math.max(0.15, zoom));
    const viewW = Number(svg.dataset.viewW);
    const viewH = Number(svg.dataset.viewH);
    svg.setAttribute('width', Math.round(viewW * chartZoom));
    svg.setAttribute('height', Math.round(viewH * chartZoom));

    const label = document.getElementById('chartZoomLabel');
    if (label) label.textContent = Math.round(chartZoom * 100) + '%';
}

// Below this the 9px node labels stop being readable, so an automatic fit is
// clamped and the chart scrolls sideways inside its own box instead. A phone
// fitting the full 2210 unit width lands at about 16 percent, which renders the
// labels at roughly one and a half pixels.
const CHART_MIN_AUTO_ZOOM = 0.62;

// Fill whatever width is available. `exact` is used by the FIT WIDTH button,
// where the user has explicitly asked to see the whole thing however small.
function fitChartToWidth({ exact = false } = {}) {
    const scroll = document.getElementById('chartScroll');
    const svg = document.getElementById('chartSvg');
    if (!scroll || !svg) return;

    const available = scroll.clientWidth - 4;
    if (available <= 0) return;

    const fitted = available / Number(svg.dataset.viewW);
    setChartZoom(exact ? fitted : Math.max(fitted, CHART_MIN_AUTO_ZOOM));
}

// Re-fit when the viewport changes or fullscreen is entered or left.
window.addEventListener('resize', () => {
    if (currentView === 'chart') fitChartToWidth();
});

document.addEventListener('fullscreenchange', () => {
    const host = document.getElementById('chartView');
    const button = document.getElementById('chartFullscreen');
    const inFullscreen = document.fullscreenElement === host;
    if (button) {
        button.setAttribute('aria-pressed', String(inFullscreen));
        button.textContent = inFullscreen ? 'EXIT FULLSCREEN' : 'FULLSCREEN';
    }
    if (host) host.classList.toggle('is-fullscreen', inFullscreen);
    // Layout settles a frame after the transition, so re-fit on the next tick.
    requestAnimationFrame(() => { if (currentView === 'chart') fitChartToWidth(); });
});


function initializeSyncPanel() {
    const button = document.getElementById('syncBtn');
    const overlay = document.getElementById('syncModalOverlay');
    if (!button || !overlay) return;

    const codeField = document.getElementById('syncCode');
    const linkField = document.getElementById('syncLink');
    const pasteField = document.getElementById('syncPaste');
    const status = document.getElementById('syncStatus');
    const summary = document.getElementById('syncSummary');

    const say = (message, kind) => {
        status.textContent = message;
        status.className = 'sync-status' + (kind ? ' is-' + kind : '');
    };

    const refresh = () => {
        const code = exportProgressCode();
        codeField.value = code;
        linkField.value = `${location.origin}${location.pathname}#s=${code}`;
        const finished = readingProgress.getCount('finished');
        const reading = readingProgress.getCount('reading');
        summary.textContent = `${finished} read, ${reading} in progress, of ${readingProgress.getTotalBooks()} works.`;
    };

    const copy = async (field, btn) => {
        field.select();
        try {
            await navigator.clipboard.writeText(field.value);
        } catch (error) {
            document.execCommand('copy');   // older browsers and non-secure origins
        }
        const original = btn.textContent;
        btn.textContent = 'COPIED';
        setTimeout(() => { btn.textContent = original; }, 1400);
    };

    const open = () => {
        refresh();
        say('');
        pasteField.value = '';
        overlay.classList.add('active');
        scrollLock.acquire();
        focusManager.trap(overlay);
    };

    const close = () => {
        overlay.classList.remove('active');
        focusManager.release(overlay);
        scrollLock.release();
    };

    button.addEventListener('click', open);
    document.getElementById('closeSyncModal').addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) close();
    });

    document.getElementById('copyCodeBtn').addEventListener('click', (e) => copy(codeField, e.currentTarget));
    document.getElementById('copyLinkBtn').addEventListener('click', (e) => copy(linkField, e.currentTarget));

    document.getElementById('restoreBtn').addEventListener('click', () => {
        const result = importProgressCode(pasteField.value);
        if (!result.ok) { say(result.reason, 'error'); return; }
        say(`Transmission received. ${result.applied} record${result.applied === 1 ? '' : 's'} restored.`, 'ok');
        refresh();
        rerenderCurrentView();
    });

    document.getElementById('downloadProgress').addEventListener('click', () => {
        const blob = new Blob([JSON.stringify(exportProgressFile(), null, 2) + '\n'],
            { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'horus-heresy-progress.json';
        document.body.append(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    });

    const upload = document.getElementById('uploadProgress');
    document.getElementById('chooseProgress').addEventListener('click', () => upload.click());
    upload.addEventListener('change', async () => {
        const file = upload.files?.[0];
        upload.value = '';
        if (!file) return;
        if (file.size > 100_000) { say('The progress file is too large.', 'error'); return; }
        let payload;
        try { payload = JSON.parse(await file.text()); }
        catch { say('The progress file is not valid JSON.', 'error'); return; }
        // Validate before asking to replace the current record.
        if (!payload || payload.format !== 'horus-heresy-progress' || payload.version !== 1 ||
            !payload.works || typeof payload.works !== 'object' || Array.isArray(payload.works) ||
            !validOwnedCollections(payload.ownedCollections) ||
            Object.entries(payload.works).some(([id, value]) =>
                !workKeysById.has(id) || (value !== 'reading' && value !== 'finished'))) {
            say('This is not a supported Horus Heresy progress file.', 'error');
            return;
        }
        const existing = readingProgress.getCount();
        const owned = payload.ownedCollections ? loadOwnedCollections().size : 0;
        if ((existing || owned) && !confirm(`Restoring this file will replace your reading record${owned ? ' and owned collection list' : ''} on this device. Proceed?`)) return;
        const result = importProgressFile(payload);
        say(result.ok ? `${result.applied} work records restored from JSON.` : result.reason,
            result.ok ? 'ok' : 'error');
        if (result.ok) { refresh(); rerenderCurrentView(); updateCollectionOwnedButton(); }
    });

    // A sync link lands here. Ask first, because restoring replaces whatever
    // this device already has.
    const fromUrl = /[#&]s=([^&]+)/.exec(location.hash);   // still present at this point
    if (fromUrl) {
        history.replaceState(null, '', location.pathname + location.search);
        const existing = Object.values(readingProgress.load()).filter(Boolean).length;
        const proceed = existing === 0 || confirm(
            `This vector carries a reading record. Receiving it will overwrite the ${existing} record(s) already marked on this dataslate. Proceed?`);
        if (proceed) {
            const result = importProgressCode(decodeURIComponent(fromUrl[1]));
            open();
            say(result.ok ? `Transmission received. ${result.applied} records restored.` : result.reason,
                result.ok ? 'ok' : 'error');
            if (result.ok) { refresh(); rerenderCurrentView(); }
        }
    }
}

// Re-render whichever view is showing, after progress changes wholesale.
function rerenderCurrentView() {
    if (currentView === 'chart') {
        const host = document.getElementById('chartView');
        if (host) { host.dataset.rendered = 'false'; renderChartView(); }
    } else {
        const legion = document.getElementById('legionFilter')?.value || '';
        const search = document.getElementById('searchInput')?.value || '';
        generateBookCards(legion, search);
    }
    updateProgressCounter();
}

// Captured once, at parse time. The sync panel strips the hash with
// replaceState as soon as it initialises, so anything checking location.hash
// later sees a clean URL and cannot tell a restore link from a normal visit.
const ARRIVED_WITH_SYNC_CODE = /[#&]s=/.test(location.hash);

const WELCOME_KEY = 'horusHeresySeenWelcome';
const TOAST_KEY = 'horusHeresySeenSaveHint';

const flag = {
    get(key) {
        try { return localStorage.getItem(key) === '1'; } catch (e) { return false; }
    },
    set(key) {
        try { localStorage.setItem(key, '1'); } catch (e) { /* private browsing */ }
    },
};

// Shown once. Deliberately not a blocking tour: one panel, one button out.
function initializeWelcome() {
    const overlay = document.getElementById('welcomeOverlay');
    if (!overlay) return;

    const dismiss = () => {
        overlay.classList.remove('active');
        focusManager.release(overlay);
        scrollLock.release();
        flag.set(WELCOME_KEY);
    };

    document.getElementById('closeWelcome').addEventListener('click', dismiss);
    document.getElementById('welcomeBegin').addEventListener('click', dismiss);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) dismiss(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) dismiss();
    });

    // Someone arriving on a sync link has come to restore progress, not to read
    // an introduction, so stay out of the way.
    const hasProgress = Object.values(readingProgress.load()).some(Boolean);

    if (!flag.get(WELCOME_KEY) && !ARRIVED_WITH_SYNC_CODE &&
        !linkedWorkKey() && !linkedCharacterKey() && !hasProgress) {
        overlay.classList.add('active');
        scrollLock.acquire();
        focusManager.trap(overlay);
    } else if (!flag.get(WELCOME_KEY)) {
        // Returning user with existing progress: do not show it later either.
        flag.set(WELCOME_KEY);
    }
}

// The one-time save hint. Called after a status change.
function maybeShowSaveHint() {
    if (flag.get(TOAST_KEY)) return;
    const toast = document.getElementById('progressToast');
    if (!toast) return;

    flag.set(TOAST_KEY);
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add('is-visible'));

    const hide = () => {
        toast.classList.remove('is-visible');
        setTimeout(() => { toast.hidden = true; }, 300);
    };
    document.getElementById('toastDismiss').addEventListener('click', hide, { once: true });
    document.getElementById('toastSync').addEventListener('click', () => {
        hide();
        document.getElementById('syncBtn')?.click();
    }, { once: true });

    // Long enough to read, and it never returns.
    setTimeout(hide, 12000);
}

function initializeProgressHint() {
    const hint = document.getElementById('progressHint');
    if (!hint) return;
    hint.addEventListener('click', () => document.getElementById('syncBtn')?.click());
    document.getElementById('continueReading')?.addEventListener('click', (event) => {
        const key = event.currentTarget.dataset.workKey;
        if (key) showModal(key);
    });
}

function initializeViewSwitcher() {
    document.querySelectorAll('.view-btn').forEach((btn) => {
        btn.addEventListener('click', () => setView(btn.dataset.view));
    });
}

// Collapsible filters on small screens only. The button is display: none above
// the breakpoint, so the desktop filter bar is unaffected.
function initializeFilterDisclosure() {
    const button = document.getElementById('filterDisclosure');
    const section = document.getElementById('filterSection');
    if (!button || !section) return;

    button.addEventListener('click', () => {
        const open = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', String(!open));
        section.classList.toggle('is-open', !open);
    });
}

// Map a source image to its web-sized WebP derivative, generated by
// tools/optimise-images.mjs. The originals are full-resolution wiki downloads
// and were costing 18.1 MB on first paint. SVGs are already tiny and are
// passed straight through.
function optimisedImage(path) {
    if (!path) return 'images/cover-placeholder.svg';
    if (path.endsWith('.svg')) return path;
    return 'images/opt/' + path.replace(/^images\//, '').replace(/\.(jpe?g|png)$/i, '.webp');
}

// Escape text destined for innerHTML. No current field contains <, >, & or ",
// so the card markup is safe by luck of the data rather than by construction.
// One book title with an ampersand would otherwise break a card.
function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Reflect a status change on a single card, in place.
function updateBookCardStatus(bookKey, status) {
    const id = workIdentityByKey.get(bookKey) ?? bookKey;
    for (const key of workKeysById.get(id) ?? [bookKey]) {
        const card = document.querySelector(`.book-card[data-book="${key}"]`);
        if (!card) continue;   // filtered out of the current view

        card.className = 'book-card' + (status ? ` book-${status}` : '');

        const cover = card.querySelector('.book-cover');
        if (!cover) continue;

        cover.querySelector('.status-badge')?.remove();
        if (status) {
            const badge = document.createElement('div');
            badge.className = `status-badge status-${status}`;
            badge.textContent = status === 'reading' ? '📖 READING' : '✓ FINISHED';
            cover.appendChild(badge);
        }
    }
}

// Update reading progress counter
function updateProgressCounter() {
    const counter = document.getElementById('progressCounter');
    if (counter) {
        const includePrimarchs = document.getElementById('includePrimarchs')?.checked ?? true;
        const includeSiegeOfTerra = document.getElementById('includeSiegeOfTerra')?.checked ?? true;

        // Count works rather than anthology appearances of the same story.
        const allBooks = workIdentityData.identities.map((work) => work.id);
        const mainSeriesBooks = allBooks.filter(key => !bookData[key].series);
        const primarchsBooks = allBooks.filter(key => bookData[key].series === 'primarchs');
        const siegeBooks = allBooks.filter(key => bookData[key].series === 'siege-of-terra');

        const totalMain = mainSeriesBooks.length;
        const totalPrimarchs = primarchsBooks.length;
        const totalSiege = siegeBooks.length;

        // Count by status
        const finishedMain = mainSeriesBooks.filter(key => readingProgress.getStatus(key) === 'finished').length;
        const readingMain = mainSeriesBooks.filter(key => readingProgress.getStatus(key) === 'reading').length;
        const finishedPrimarchs = primarchsBooks.filter(key => readingProgress.getStatus(key) === 'finished').length;
        const readingPrimarchs = primarchsBooks.filter(key => readingProgress.getStatus(key) === 'reading').length;
        const finishedSiege = siegeBooks.filter(key => readingProgress.getStatus(key) === 'finished').length;
        const readingSiege = siegeBooks.filter(key => readingProgress.getStatus(key) === 'reading').length;

        // Build progress text
        let totalBooks = totalMain;
        let totalFinished = finishedMain;
        let totalReading = readingMain;

        if (includePrimarchs && totalPrimarchs > 0) {
            totalBooks += totalPrimarchs;
            totalFinished += finishedPrimarchs;
            totalReading += readingPrimarchs;
        }

        if (includeSiegeOfTerra && totalSiege > 0) {
            totalBooks += totalSiege;
            totalFinished += finishedSiege;
            totalReading += readingSiege;
        }

        counter.textContent = `PROGRESS: ${totalFinished}/${totalBooks} FINISHED | ${totalReading} READING`;
    }
    updateContinueReading();
    renderNextReadGuide();
}

function updateContinueReading() {
    const button = document.getElementById('continueReading');
    if (!button) return;
    const current = getSortedBookKeys('reading')
        .find((key) => readingProgress.getStatus(key) === 'reading');
    button.hidden = !current;
    if (!current) return;
    button.dataset.workKey = current;
    button.textContent = `CONTINUE: ${bookData[current].title}`;
}

// Get DOM elements
const modalOverlay = document.getElementById('modalOverlay');
const closeModalBtn = document.getElementById('closeModal');
const modalTitle = document.getElementById('modalTitle');
const keyDetails = document.getElementById('keyDetails');
const blurb = document.getElementById('blurb');

// Close modal events
closeModalBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Keyboard event for ESC key
document.addEventListener('keydown', (e) => {
    const charModal = document.getElementById('characterModalOverlay');
    if (e.key === 'Escape') {
        if (charModal && charModal.classList.contains('active')) {
            closeCharacterModal();
        } else if (modalOverlay.classList.contains('active')) {
            closeModal();
        }
    }
});

// Character modal close button
const closeCharModalBtn = document.getElementById('closeCharacterModal');
const charModalOverlay = document.getElementById('characterModalOverlay');

if (closeCharModalBtn) {
    closeCharModalBtn.addEventListener('click', closeCharacterModal);
}

if (charModalOverlay) {
    charModalOverlay.addEventListener('click', (e) => {
        if (e.target === charModalOverlay) {
            closeCharacterModal();
        }
    });
}

// Show modal function
function showModal(bookKey, { updateUrl = true } = {}) {
    const book = bookData[bookKey];

    if (!book) {
        console.error('Book data not found for:', bookKey);
        return;
    }

    document.title = `${book.title} | Horus Heresy Archive`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = book.safeSummaryReview ? book.blurbSafe : BASE_DESCRIPTION;

    if (updateUrl) {
        const id = workIdentityByKey.get(bookKey) || bookKey;
        if (new URLSearchParams(location.hash.slice(1)).get('work') !== id) {
            history.pushState({ workModal: true }, '', `#work=${encodeURIComponent(id)}`);
        }
    }

    const status = readingProgress.getStatus(bookKey);

    // Check spoiler setting
    const showSpoilers = document.getElementById('showSpoilers')?.checked ?? false;
    const blurbText = showSpoilers ? book.blurb : (book.safeSummaryReview
        ? book.blurbSafe
        : 'Introduction pending spoiler review. Enable spoilers to read the full synopsis.');

    // Populate modal content with clickable character names
    modalTitle.textContent = book.title;
    const clickableDetails = showSpoilers
        ? makeCharactersClickable(book.details)
        : '<p>Character and event details are hidden while spoilers are off.</p>';
    const safeFacts = showSpoilers ? '' : `<p class="work-safe-facts"><strong>Author:</strong> ${escapeHtml(book.author)}<br><strong>Format:</strong> ${escapeHtml(book.format)}</p>`;
    const clickableBlurb = makeCharactersClickable(blurbText, false);

    // Determine button text and class based on status
    let buttonText, buttonClass;
    if (!status) {
        buttonText = 'MARK AS READING';
        buttonClass = '';
    } else if (status === 'reading') {
        buttonText = '📖 MARK AS FINISHED';
        buttonClass = 'status-reading';
    } else if (status === 'finished') {
        buttonText = '✓ CLEAR STATUS';
        buttonClass = 'status-finished';
    }

    keyDetails.innerHTML = `
        <div class="modal-book-cover">
            <img src="${encodeURI(optimisedImage(book.coverImage))}"
                 alt="Cover of ${escapeHtml(book.title)}"
                 decoding="async" width="315" height="508" />
            <button class="mark-read-btn ${buttonClass}" id="markReadBtn" data-book="${bookKey}">
                ${buttonText}
            </button>
        </div>
        <div class="book-details-text">
            ${safeFacts}
            ${clickableDetails}
        </div>
    `;

    const spoilerWarning = !showSpoilers ? '<div class="spoiler-notice">📖 SPOILER-FREE MODE - Major plot points hidden</div>' : '';
    blurb.innerHTML = spoilerWarning + `<p>${clickableBlurb}</p>`;
    renderWorkCollections(bookKey);
    renderWorkEvents(bookKey);
    renderWorkRelationships(bookKey);
    renderWorkResearch(bookKey);

    // Add event listener for status cycle button
    const markReadBtn = document.getElementById('markReadBtn');
    markReadBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const newStatus = readingProgress.cycleStatus(bookKey);

        // Update button text and class
        let newText, newClass;
        if (!newStatus) {
            newText = 'MARK AS READING';
            newClass = '';
        } else if (newStatus === 'reading') {
            newText = '📖 MARK AS FINISHED';
            newClass = 'status-reading';
        } else if (newStatus === 'finished') {
            newText = '✓ CLEAR STATUS';
            newClass = 'status-finished';
        }

        markReadBtn.textContent = newText;
        markReadBtn.className = 'mark-read-btn ' + newClass;

        // Update just this card. Rebuilding all 224 reset the scroll position,
        // so marking book 90 as finished sent you back to book 1.
        updateBookCardStatus(bookKey, newStatus);
        updateProgressCounter();
        if (newStatus) maybeShowSaveHint();
    });

    // Add event listeners for character links
    setTimeout(() => {
        document.querySelectorAll('.character-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const charKey = e.target.getAttribute('data-character');
                showCharacterModal(charKey);
            });
        });
    }, 0);

    // Replacing the content of an open work dialog must not add another focus
    // trap or scroll lock. This also applies when the spoiler setting changes.
    const wasOpen = modalOverlay.classList.contains('active');
    modalOverlay.classList.add('active');
    modalOverlay.dataset.currentBook = bookKey;
    if (wasOpen) modalTitle.focus({ preventScroll: true });
    else {
        focusManager.trap(modalOverlay);
        scrollLock.acquire();
    }
}

function renderWorkCollections(bookKey) {
    const host = document.getElementById('workCollections');
    const workId = workIdentityByKey.get(bookKey) || bookKey;
    const names = [...new Set(Object.entries(bookData)
        .filter(([key]) => (workIdentityByKey.get(key) || key) === workId)
        .map(([, book]) => book.anthology)
        .filter(Boolean))];
    host.replaceChildren();
    host.hidden = names.length === 0;
    if (!names.length) return;

    const heading = document.createElement('h3');
    heading.textContent = bookData[bookKey].collectionRelation === 'novelised in'
        ? 'Novelised in this volume' : 'Found in these collections';
    host.append(heading);
    for (const name of names) {
        const count = new Set(Object.entries(bookData)
            .filter(([, book]) => book.anthology === name)
            .map(([key]) => workIdentityByKey.get(key) || key)).size;
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'collection-browse';
        button.textContent = `${name} · ${count} ${bookData[bookKey].collectionRelation === 'novelised in' ? 'related' : 'listed'} works`;
        button.addEventListener('click', () => {
            setRoute('full');
            const select = document.getElementById('collectionFilter');
            select.value = name;
            document.getElementById('legionFilter').value = '';
            document.getElementById('searchInput').value = '';
            document.getElementById('includePrimarchs').checked = true;
            document.getElementById('includeSiegeOfTerra').checked = true;
            document.getElementById('formatFilter').value = '';
            closeModal({ updateHistory: false });
            history.replaceState(null, '', location.pathname + location.search);
            if (currentView === 'chart') setView('reading');
            else generateBookCards();
            syncBrowseUrl();
            const results = document.querySelector('.book-display');
            results.scrollIntoView({ block: 'start' });
            const summary = results.querySelector('.filter-info');
            if (summary) {
                summary.tabIndex = -1;
                summary.focus({ preventScroll: true });
            }
        });
        host.append(button);
        const publisher = publisherCollectionsData.collections[name];
        if (publisher) {
            const note = document.createElement('p');
            note.className = 'collection-source';
            note.textContent = `Contents, titles and authors checked against `;
            const link = document.createElement('a');
            link.href = publisher.source;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = 'Black Library';
            note.append(link, document.createTextNode(` on ${publisher.reviewedAt || publisherCollectionsData.reviewedAt}.`));
            host.append(note);
        } else if (publisherCollectionsData.disputed?.[name]) {
            const dispute = publisherCollectionsData.disputed[name];
            const note = document.createElement('p');
            note.className = 'collection-source';
            note.textContent = dispute.note + ' ';
            for (const [label, url] of [['Publisher listing', dispute.publisherSource], ['Bibliographic record', dispute.bibliographicSource]]) {
                const link = document.createElement('a');
                link.href = url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.textContent = label;
                note.append(link, document.createTextNode(' '));
            }
            host.append(note);
        } else {
            const note = document.createElement('p');
            note.className = 'collection-source';
            if (bookData[bookKey].collectionRelation === 'novelised in') {
                note.textContent = 'The volume adapts these audio dramas and novella into a novel. ';
                const link = document.createElement('a');
                link.href = bookData[bookKey].collectionSource;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.textContent = 'Black Library explains the relationship';
                note.append(link);
            } else {
                note.textContent = 'Collection contents have not yet been checked against a publisher listing.';
            }
            host.append(note);
        }
    }
}

function renderWorkEvents(bookKey) {
    const host = document.getElementById('workEvents');
    const workId = workIdentityByKey.get(bookKey) || bookKey;
    const showSpoilers = document.getElementById('showSpoilers')?.checked ?? false;
    const related = showSpoilers ? eventData.events.filter((event) => event.works.some((work) =>
        (workIdentityByKey.get(work.key) || work.key) === workId)) : [];
    host.replaceChildren();
    host.hidden = related.length === 0;
    if (!related.length) return;

    const heading = document.createElement('h3');
    heading.textContent = 'Related events';
    host.append(heading);
    const list = document.createElement('ul');
    for (const event of related) {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = `events.html#${event.id}`;
        link.textContent = event.title;
        item.append(link);
        list.append(item);
    }
    host.append(list);
}

function renderWorkRelationships(bookKey) {
    const host = document.getElementById('workRelationships');
    host.replaceChildren();
    const showSpoilers = document.getElementById('showSpoilers')?.checked ?? false;
    const workId = workIdentityByKey.get(bookKey) || bookKey;
    const entry = readingOrder?.byKey.get(bookKey);
    if (!showSpoilers || !entry) { host.hidden = true; return; }
    const preceding = [...new Set(entry.prerequisites.map((key) => workIdentityByKey.get(key) || key))];
    const following = [...new Set([...readingOrder.byKey.values()]
        .filter((candidate) => candidate.prerequisites.some((key) =>
            (workIdentityByKey.get(key) || key) === workId))
        .map((candidate) => workIdentityByKey.get(candidate.bookKey) || candidate.bookKey))];
    if (!preceding.length && !following.length) { host.hidden = true; return; }
    host.hidden = false;

    const heading = document.createElement('h3');
    heading.textContent = 'Chart reading links';
    host.append(heading);
    for (const [label, ids] of [['Read first in the chart', preceding], ['The chart places this before', following]]) {
        if (!ids.length) continue;
        const subheading = document.createElement('h4');
        subheading.textContent = label;
        host.append(subheading);
        const list = document.createElement('ul');
        for (const id of ids) {
            const key = workKeysById.get(id)?.[0];
            if (!key) continue;
            const item = document.createElement('li');
            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = bookData[key].title;
            button.addEventListener('click', () => showModal(key));
            item.append(button);
            list.append(item);
        }
        host.append(list);
    }
    const source = document.createElement('p');
    source.textContent = 'These are arrows in ';
    const link = document.createElement('a');
    link.href = 'https://gaming.kylebb.com/hhtimeline/';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Daunt’s timeline';
    source.append(link, document.createTextNode(', not a single mandatory reading order.'));
    host.append(source);
}

function renderWorkResearch(bookKey) {
    const host = document.getElementById('workResearch');
    const book = bookData[bookKey];
    const research = book.research || {};
    const sources = Array.isArray(research.sources) ? research.sources : [];
    host.replaceChildren();

    const heading = document.createElement('h3');
    heading.textContent = 'Research and corrections';
    host.append(heading);

    const note = document.createElement('p');
    note.textContent = 'These links document research for the summary. Publication details and chronology have not all been checked against a primary source. External pages may contain spoilers.';
    host.append(note);

    if (coreRouteRank.has(bookKey)) {
        const publication = document.createElement('p');
        publication.textContent = 'Title, author and novel format: ';
        const link = document.createElement('a');
        link.href = readingRoutesData.core.source;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Warhammer Community’s Horus Heresy Saga list';
        publication.append(link, document.createTextNode(` (checked ${readingRoutesData.core.reviewedAt}).`));
        host.append(publication);
    }

    if (book.series === 'primarchs') {
        const publication = document.createElement('p');
        publication.textContent = 'Standalone Primarchs novel format: ';
        const link = document.createElement('a');
        link.href = primarchFormatReviewData.publisherNovelList;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Black Library novel catalogue';
        publication.append(link, document.createTextNode(` (reviewed ${primarchFormatReviewData.reviewedAt}).`));
        host.append(publication);
    }

    const publisherFacts = publisherWorkFactsData.works[bookKey];
    if (publisherFacts) {
        const publication = document.createElement('p');
        publication.textContent = publisherFacts.format ? 'Title, author and format: ' : 'Title and author: ';
        const link = document.createElement('a');
        link.href = publisherWorkFactsData.source;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Warhammer Community’s series overview';
        publication.append(link, document.createTextNode(` (checked ${publisherWorkFactsData.reviewedAt}).`));
        host.append(publication);
    }

    const directFacts = publisherWorkFactsData.directWorks[bookKey];
    if (directFacts) {
        const publication = document.createElement('p');
        publication.textContent = directFacts.formatSource
            ? 'Title and author: '
            : `Title, author and ${directFacts.format.toLowerCase()} format: `;
        const link = document.createElement('a');
        link.href = directFacts.source;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = directFacts.sourceLabel || 'Black Library product page';
        publication.append(link, document.createTextNode(` (checked ${directFacts.reviewedAt || publisherWorkFactsData.reviewedAt}).`));
        host.append(publication);
        if (directFacts.formatSource) {
            const format = document.createElement('p');
            format.textContent = `${directFacts.format} format: `;
            const formatLink = document.createElement('a');
            formatLink.href = directFacts.formatSource;
            formatLink.target = '_blank';
            formatLink.rel = 'noopener noreferrer';
            formatLink.textContent = 'Black Library’s Garro volume';
            format.append(formatLink, document.createTextNode(` (checked ${publisherWorkFactsData.reviewedAt}).`));
            host.append(format);
        }
        if (directFacts.formatConflict) {
            const conflict = document.createElement('p');
            conflict.textContent = `${directFacts.formatConflict.note} `;
            const conflictLink = document.createElement('a');
            conflictLink.href = directFacts.formatConflict.source;
            conflictLink.target = '_blank';
            conflictLink.rel = 'noopener noreferrer';
            conflictLink.textContent = 'Black Library collection page';
            conflict.append(conflictLink);
            host.append(conflict);
        }
    }

    const markListing = publisherCollectionsData.disputed?.['Mark of Calth'];
    if (markListing?.publisherListed?.some((entry) => entry.key === bookKey)) {
        const publication = document.createElement('p');
        publication.textContent = 'Title and author listed in ';
        const link = document.createElement('a');
        link.href = markListing.publisherSource;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Black Library’s Mark of Calth contents';
        publication.append(link, document.createTextNode(` (checked ${publisherCollectionsData.reviewedAt}). The full contents list remains disputed.`));
        host.append(publication);
    }
    if (bookKey === 'mark-of-calth-athame' && markListing) {
        const publication = document.createElement('p');
        publication.textContent = 'Title and author: ';
        const link = document.createElement('a');
        link.href = markListing.bibliographicSource;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'British National Bibliography record';
        publication.append(link, document.createTextNode('. Black Library’s current contents list omits this story.'));
        host.append(publication);
    }

    if (book.safeSummaryReview) {
        const review = document.createElement('p');
        review.textContent = 'Spoiler-free introduction checked against ';
        const link = document.createElement('a');
        link.href = book.safeSummaryReview.source;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Black Library’s product description';
        review.append(link, document.createTextNode(` (reviewed ${book.safeSummaryReview.reviewedAt}). The external page may contain spoilers.`));
        host.append(review);
    }

    const list = document.createElement('ul');
    for (const value of sources) {
        let url;
        try { url = new URL(value); } catch { continue; }
        if (url.protocol !== 'https:') continue;
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = url.href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = url.hostname.replace(/^www\./, '');
        item.append(link);
        list.append(item);
    }
    if (list.childElementCount) host.append(list);
    else {
        const missing = document.createElement('p');
        missing.textContent = 'No research link has been recorded for this summary yet.';
        host.append(missing);
    }

    const reviewed = document.createElement('p');
    reviewed.className = 'research-reviewed';
    reviewed.textContent = research.reviewedAt
        ? `Summary research last recorded: ${research.reviewedAt}.`
        : 'Summary research date has not been recorded.';
    host.append(reviewed);

    const permalink = document.createElement('a');
    permalink.href = `#work=${encodeURIComponent(workIdentityByKey.get(bookKey) || bookKey)}`;
    permalink.textContent = 'Link to this work';
    host.append(permalink, document.createTextNode(' · '));

    const correction = document.createElement('a');
    correction.href = `https://github.com/JamesTriggs/40k-horus-heresy/issues/new?template=catalogue-correction.yml&title=${encodeURIComponent('Correction: ' + book.title + ' [' + (workIdentityByKey.get(bookKey) || bookKey) + ']')}`;
    correction.target = '_blank';
    correction.rel = 'noopener noreferrer';
    correction.textContent = 'Suggest a correction';
    host.append(correction);
}

// Close modal function
function closeModal({ updateHistory = true } = {}) {
    if (!modalOverlay.classList.contains('active')) return;
    modalOverlay.classList.remove('active');
    document.title = BASE_TITLE;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = BASE_DESCRIPTION;
    focusManager.release(modalOverlay);
    scrollLock.release();
    if (updateHistory && linkedWorkKey()) {
        if (history.state?.workModal) history.back();
        else history.replaceState(null, '', location.pathname + location.search);
    }
}

window.addEventListener('popstate', () => {
    const characterKey = linkedCharacterKey();
    const characterOverlay = document.getElementById('characterModalOverlay');
    if (characterKey) {
        if (modalOverlay.classList.contains('active')) closeModal({ updateHistory: false });
        if (!characterOverlay.classList.contains('active') ||
            characterOverlay.dataset.currentCharacter !== characterKey) {
            if (characterOverlay.classList.contains('active')) closeCharacterModal({ updateHistory: false });
            showCharacterModal(characterKey, { updateUrl: false });
        }
        return;
    }
    if (characterOverlay.classList.contains('active')) closeCharacterModal({ updateHistory: false });
    const workKey = linkedWorkKey();
    if (workKey) {
        if (!modalOverlay.classList.contains('active') || modalOverlay.dataset.currentBook !== workKey) {
            showModal(workKey, { updateUrl: false });
        }
    } else if (modalOverlay.classList.contains('active')) {
        closeModal({ updateHistory: false });
    }
});

// Make character names clickable
function makeCharactersClickable(content, containsMarkup = true) {
    const root = document.createElement('div');
    if (containsMarkup) root.innerHTML = content;
    else root.textContent = content;

    // Name variations to catch different forms (surname only, first name, titles, etc.)
    const nameVariations = {
        'ahriman': ['Ahriman', 'Ahzek Ahriman'],
        'kharn': ['Khârn', 'Kharn'],
        'typhus': ['Typhus', 'Calas Typhon', 'Typhon'],
        'lucius': ['Lucius', 'Lucius the Eternal'],
        'alpharius-omegon': ['Alpharius', 'Omegon', 'Alpharius Omegon'],
        'lion-el-jonson': ['Lion El\'Jonson'],
        'jaghatai-khan': ['Jaghatai Khan'],
        'leman-russ': ['Leman Russ'],
        'roboute-guilliman': ['Roboute Guilliman', 'Guilliman'],
        'konrad-curze': ['Konrad Curze'],
        'corvus-corax': ['Corvus Corax', 'Corax'],
        'magnus-the-red': ['Magnus the Red', 'Magnus'],
        'horus-lupercal': ['Horus Lupercal', 'Horus'],
        'rogal-dorn': ['Rogal Dorn'],
        'lorgar-aurelian': ['Lorgar Aurelian', 'Lorgar'],
        'garviel-loken': ['Garviel Loken', 'Loken'],
        'nathaniel-garro': ['Nathaniel Garro', 'Garro'],
        'ezekyle-abaddon': ['Ezekyle Abaddon', 'Abaddon'],
        'erebus': ['Erebus'],
        'malcador-the-sigillite': ['Malcador the Sigillite', 'Malcador'],
        'tarik-torgaddon': ['Tarik Torgaddon', 'Torgaddon'],
        'saul-tarvitz': ['Saul Tarvitz', 'Tarvitz'],
        'argel-tal': ['Argel Tal'],
        'kor-phaeron': ['Kor Phaeron'],
        'sigismund': ['Sigismund'],
        'sanguinius': ['Sanguinius'],
        'vulkan': ['Vulkan'],
        'angron': ['Angron'],
        'fulgrim': ['Fulgrim'],
        'ferrus-manus': ['Ferrus Manus'],
        'perturabo': ['Perturabo'],
        'mortarion': ['Mortarion']
    };

    const aliasToKey = new Map();
    for (const [charKey, char] of Object.entries(characterData)) {
        for (const name of nameVariations[charKey] || [char.name]) {
            if (name) aliasToKey.set(name.toLocaleLowerCase(), charKey);
        }
    }
    const aliases = [...aliasToKey.keys()].sort((a, b) => b.length - a.length);
    const escaped = aliases.map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const pattern = new RegExp(`(?<![\\p{L}\\p{N}])(${escaped.join('|')})(?![\\p{L}\\p{N}])`, 'giu');
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);

    for (const node of textNodes) {
        const value = node.textContent;
        const fragment = document.createDocumentFragment();
        let last = 0;
        for (const match of value.matchAll(pattern)) {
            if (match.index > last) fragment.append(document.createTextNode(value.slice(last, match.index)));
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'character-link';
            button.dataset.character = aliasToKey.get(match[0].toLocaleLowerCase());
            button.textContent = match[0];
            fragment.append(button);
            last = match.index + match[0].length;
        }
        if (last === 0) continue;
        fragment.append(document.createTextNode(value.slice(last)));
        node.replaceWith(fragment);
    }
    return root.innerHTML;
}

// Show character modal
function showCharacterModal(characterKey, { updateUrl = true } = {}) {
    const char = characterData[characterKey];

    if (!char) {
        console.error('Character not found:', characterKey);
        return;
    }

    if (updateUrl && linkedCharacterKey() !== characterKey) {
        history.pushState({ characterModal: true }, '', `#character=${encodeURIComponent(characterKey)}`);
    }
    document.title = `${char.name} | Horus Heresy Archive`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = BASE_DESCRIPTION;

    // Populate character modal
    document.getElementById('characterImage').src = optimisedImage(char.image);
    document.getElementById('characterImage').alt = char.name
        ? `Portrait of ${char.name}` : '';
    document.getElementById('characterImage').decoding = 'async';
    document.getElementById('characterName').textContent = char.name;
    document.getElementById('characterPermalink').href = `#character=${encodeURIComponent(characterKey)}`;
    const showSpoilers = document.getElementById('showSpoilers')?.checked ?? false;
    document.getElementById('characterRole').textContent = showSpoilers ? char.role : '';
    document.getElementById('characterLegion').textContent = showSpoilers ? char.legion : '';
    document.getElementById('characterBio').textContent = showSpoilers
        ? char.bio : 'Character details are hidden while spoilers are off.';

    if (!showSpoilers) {
        document.getElementById('characterBooks').textContent = '';
        const charOverlay = document.getElementById('characterModalOverlay');
        const wasOpen = charOverlay.classList.contains('active');
        charOverlay.classList.add('active');
        charOverlay.dataset.currentCharacter = characterKey;
        if (!wasOpen) {
            focusManager.trap(charOverlay);
            scrollLock.acquire();
        }
        return;
    }

    // Explicit links from the catalogue's Main Characters field. A mention in
    // a synopsis is not enough to claim that a character appears in a work.
    const books = (characterAppearancesData.characters[characterKey] || [])
        .map((key) => ({ key, book: bookData[key] })).filter((item) => item.book);

    // Display books list
    const bookList = document.getElementById('characterBooks');
    bookList.replaceChildren();
    if (books.length) {
        const heading = document.createElement('div');
        heading.className = 'appears-in-label';
        heading.textContent = 'LISTED AS A MAIN CHARACTER IN:';
        bookList.append(heading);
        for (const { key, book } of books) {
            const item = document.createElement('button');
            item.type = 'button';
            item.className = 'character-book-item';
            item.textContent = `${book.number} - ${book.title}`;
            item.addEventListener('click', () => {
                const parentKey = modalOverlay.classList.contains('active')
                    ? modalOverlay.dataset.currentBook : null;
                closeCharacterModal({ updateHistory: false });
                if (parentKey && linkedCharacterKey()) {
                    const id = workIdentityByKey.get(key) || key;
                    history.replaceState({ workModal: true }, '', `#work=${encodeURIComponent(id)}`);
                    showModal(key, { updateUrl: false });
                } else {
                    showModal(key);
                }
            });
            bookList.append(item);
        }
    }

    // Show modal
    const charOverlay = document.getElementById('characterModalOverlay');
    const wasOpen = charOverlay.classList.contains('active');
    charOverlay.classList.add('active');
    charOverlay.dataset.currentCharacter = characterKey;
    if (!wasOpen) {
        focusManager.trap(charOverlay);
        scrollLock.acquire();
    }
}

// Close character modal
function closeCharacterModal({ updateHistory = true } = {}) {
    const overlay = document.getElementById('characterModalOverlay');
    if (!overlay.classList.contains('active')) return;
    overlay.classList.remove('active');
    focusManager.release(overlay);
    scrollLock.release();
    const parentKey = modalOverlay.classList.contains('active') ? modalOverlay.dataset.currentBook : null;
    document.title = parentKey ? `${bookData[parentKey].title} | Horus Heresy Archive` : BASE_TITLE;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = parentKey && bookData[parentKey].safeSummaryReview
        ? bookData[parentKey].blurbSafe : BASE_DESCRIPTION;
    if (updateHistory && linkedCharacterKey()) {
        if (history.state?.characterModal) history.back();
        else history.replaceState(null, '', location.pathname + location.search);
    }
}

// Define loyalist vs traitor legions
// Which side each faction fought on.
//
// The old version listed only the 19 Legions, so 22 further faction values
// matched neither filter and 64 books were invisible under both. Knights-Errant
// alone accounts for 17 entries.
//
// 'both' is for factions that genuinely split, such as the Mechanicum and the
// Titan Legions. 'neutral' is for those outside the war. Luna Wolves are 'both'
// because the Legion was the Emperor's finest before it fell, and books like
// HORUS RISING are set while they still were.
const FACTION_ALLEGIANCE = {
    // Loyalist Legions
    'Ultramarines': 'loyalist', 'Imperial Fists': 'loyalist', 'Blood Angels': 'loyalist',
    'Dark Angels': 'loyalist', 'Space Wolves': 'loyalist', 'White Scars': 'loyalist',
    'Raven Guard': 'loyalist', 'Salamanders': 'loyalist', 'Iron Hands': 'loyalist',
    // Traitor Legions
    'Sons of Horus': 'traitor', 'Death Guard': 'traitor', 'Emperor\'s Children': 'traitor',
    'World Eaters': 'traitor', 'Thousand Sons': 'traitor', 'Word Bearers': 'traitor',
    'Iron Warriors': 'traitor', 'Night Lords': 'traitor', 'Alpha Legion': 'traitor',
    'Luna Wolves': 'both',
    // Loyalist Imperial forces outside the Legions
    'Knights-Errant': 'loyalist', 'Custodian Guard': 'loyalist', 'Sisters of Silence': 'loyalist',
    'Imperial Army': 'loyalist', 'Officio Assassinorum': 'loyalist', 'Emperor': 'loyalist',
    'Thunder Warriors': 'loyalist', 'Legio Castigatra': 'loyalist',
    // Traitor forces outside the Legions
    'Dark Mechanicum': 'traitor', 'Chaos Daemons': 'traitor', 'Legio Audax': 'traitor',
    'All Traitor Legions': 'traitor',
    // Split down the middle
    'Mechanicum': 'both', 'Collegia Titanica': 'both', 'Imperial Knights': 'both',
    'All Legions': 'both',
    // Outside the war
    'Perpetuals': 'neutral', 'Remembrancers': 'neutral', 'Blackshields': 'neutral',
    'Various': 'neutral',
    // The Shattered Legions are the loyalist Isstvan V survivors fighting on
    // as a combined force.
    'Shattered Legions': 'loyalist',
    // Xenos
    'Orks': 'xenos', 'Dark Eldar': 'xenos',
};

// Per-entry overrides, because faction and allegiance are not the same thing.
// A story can feature a traitor Legion entirely from a loyalist viewpoint, and
// tagging it accurately would otherwise file it on the wrong side.
//
// Without this the research had to be made less accurate to protect the filter:
// correct faction tags were being withheld precisely to avoid these misfilings.
const ALLEGIANCE_OVERRIDES = {
    // Warsmith Dantioch is a loyalist Iron Warrior, besieged by traitor
    // Iron Warriors. The story belongs on both sides.
    'age-of-darkness-iron-within': 'both',
    // The Death Guard here are the loyalist Eisenstein Seventy.
    'silent-ghosts-speak': 'loyalist',
    // Dantioch again, holding the Pharos for Imperium Secundus.
    'burden-heart-pharos': 'loyalist',
    // Helig Gallor is a Knight-Errant drawn from the loyalist Death Guard.
    'silent-patience': 'loyalist',
    // Loyalist Night Lords working alongside the Raven Guard.
    'corax-value-fear': 'loyalist',
};

// Resolve which sides a book belongs to. Returns a Set of 'loyalist' and/or
// 'traitor'. An explicit override always wins over the faction mapping.
function allegiancesFor(bookKey, book) {
    const override = ALLEGIANCE_OVERRIDES[bookKey];
    if (override) {
        return new Set(override === 'both' ? ['loyalist', 'traitor'] : [override]);
    }

    const sides = new Set();
    for (const faction of book.legions || []) {
        const side = FACTION_ALLEGIANCE[faction];
        if (side === 'both') { sides.add('loyalist'); sides.add('traitor'); }
        else if (side === 'loyalist' || side === 'traitor') sides.add(side);
    }
    if (book.factionScope === 'all') { sides.add('loyalist'); sides.add('traitor'); }
    if (book.factionScope === 'all-traitor') sides.add('traitor');
    return sides;
}

// Populate legion filter dropdown
function populateLegionFilter() {
    const legionSet = new Set();

    Object.values(bookData).forEach(book => {
        if (book.legions) {
            book.legions.forEach(legion => {
                // Skip meta-categories
                if (legion !== 'Various' && legion !== 'All Legions' && legion !== 'All Traitor Legions') {
                    legionSet.add(legion);
                }
            });
        }
    });

    const sortedLegions = Array.from(legionSet).sort();
    const filterSelect = document.getElementById('legionFilter');

    // Add meta-filters first
    const loyalistOption = document.createElement('option');
    loyalistOption.value = '__LOYALIST__';
    loyalistOption.textContent = '⚔ ALL LOYALIST LEGIONS';
    filterSelect.appendChild(loyalistOption);

    const traitorOption = document.createElement('option');
    traitorOption.value = '__TRAITOR__';
    traitorOption.textContent = '☠ ALL TRAITOR LEGIONS';
    filterSelect.appendChild(traitorOption);

    // Add separator
    const separator = document.createElement('option');
    separator.disabled = true;
    separator.textContent = '──────────';
    filterSelect.appendChild(separator);

    // Add individual legions
    sortedLegions.forEach(legion => {
        const option = document.createElement('option');
        option.value = legion;
        option.textContent = legion;
        filterSelect.appendChild(option);
    });

    // Broad-scope records have a separate field rather than a fake Legion.
    const variousOption = document.createElement('option');
    variousOption.value = '__BROAD_SCOPE__';
    variousOption.textContent = 'Multiple Legions/Factions';
    filterSelect.appendChild(variousOption);
}

function populateCollectionFilter() {
    const select = document.getElementById('collectionFilter');
    const names = [...new Set(Object.values(bookData).map((book) => book.anthology).filter(Boolean))].sort();
    for (const name of names) {
        const option = document.createElement('option');
        option.value = name;
        option.textContent = name;
        select.append(option);
    }
}

function collectionWorkIds(name) {
    return [...new Set(Object.entries(bookData)
        .filter(([, book]) => book.anthology === name && book.collectionRelation !== 'novelised in')
        .map(([key]) => workIdentityByKey.get(key) || key))];
}

function updateCollectionBulkButton() {
    const button = document.getElementById('collectionBulk');
    const name = document.getElementById('collectionFilter')?.value;
    if (!button) return;
    const ids = name ? collectionWorkIds(name) : [];
    button.hidden = !ids.length;
    if (!ids.length) return;
    const remaining = ids.filter((id) => readingProgress.getStatus(id) !== 'finished').length;
    button.disabled = remaining === 0;
    button.textContent = remaining ? `MARK ${remaining} FINISHED` : 'COLLECTION COMPLETE';
}

function updateCollectionOwnedButton() {
    const button = document.getElementById('collectionOwned');
    const name = document.getElementById('collectionFilter')?.value;
    const collection = collectionByName.get(name);
    button.hidden = !collection;
    if (!collection) return;
    const owned = loadOwnedCollections().has(collection.id);
    button.setAttribute('aria-pressed', String(owned));
    button.textContent = owned ? 'OWNED · REMOVE' : 'I OWN A COPY';
}

// Set up filter and search event listeners
function setupFilterListeners() {
    const filterSelect = document.getElementById('legionFilter');
    const collectionSelect = document.getElementById('collectionFilter');
    const collectionBulk = document.getElementById('collectionBulk');
    const collectionOwned = document.getElementById('collectionOwned');
    const formatSelect = document.getElementById('formatFilter');
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearch');
    const clearAllBtn = document.getElementById('clearAllFilters');
    const primarchsCheckbox = document.getElementById('includePrimarchs');
    const siegeCheckbox = document.getElementById('includeSiegeOfTerra');
    const sortSelect = document.getElementById('sortOrder');
    const spoilersCheckbox = document.getElementById('showSpoilers');
    const layoutToggle = document.getElementById('layoutToggle');

    const setLayout = (list) => {
        document.querySelector('.book-display').classList.toggle('is-list-layout', list);
        layoutToggle.setAttribute('aria-pressed', String(list));
        layoutToggle.textContent = list ? 'COVER GRID' : 'COMPACT LIST';
        try { localStorage.setItem(LAYOUT_KEY, list ? 'list' : 'grid'); } catch (error) { /* private browsing */ }
    };
    let savedLayout = 'grid';
    try { savedLayout = localStorage.getItem(LAYOUT_KEY) || 'grid'; } catch (error) { /* private browsing */ }
    setLayout(savedLayout === 'list');
    layoutToggle.addEventListener('click', () => setLayout(layoutToggle.getAttribute('aria-pressed') !== 'true'));

    // Apply current filters
    const applyFilters = () => {
        const legion = filterSelect.value;
        const search = searchInput.value;
        generateBookCards(legion, search);
        syncBrowseUrl();
    };

    // Legion filter change
    filterSelect.addEventListener('change', applyFilters);
    collectionSelect.addEventListener('change', applyFilters);
    collectionBulk.addEventListener('click', () => {
        const name = collectionSelect.value;
        const ids = collectionWorkIds(name).filter((id) => readingProgress.getStatus(id) !== 'finished');
        if (!ids.length || !confirm(`Mark all ${ids.length} remaining stories in ${name} as finished?`)) return;
        const progress = readingProgress.load();
        for (const id of ids) {
            for (const key of workKeysById.get(id) || [id]) progress[key] = 'finished';
        }
        readingProgress.save(progress);
        rerenderCurrentView();
        maybeShowSaveHint();
    });
    collectionOwned.addEventListener('click', () => {
        const collection = collectionByName.get(collectionSelect.value);
        if (!collection) return;
        const owned = loadOwnedCollections();
        if (owned.has(collection.id)) owned.delete(collection.id);
        else owned.add(collection.id);
        if (saveOwnedCollections(owned)) updateCollectionOwnedButton();
    });
    formatSelect.addEventListener('change', applyFilters);

    // Sort order change
    sortSelect.addEventListener('change', applyFilters);

    // Primarchs series toggle
    primarchsCheckbox.addEventListener('change', applyFilters);

    // Siege of Terra series toggle
    siegeCheckbox.addEventListener('change', applyFilters);

    // Restore the saved spoiler preference before anything renders. This is a
    // safety preference, so losing it silently on reload is the worst possible
    // failure for a reader who deliberately opted out of spoilers.
    try {
        const savedSpoilers = localStorage.getItem(SPOILER_KEY);
        if (savedSpoilers !== null) {
            spoilersCheckbox.checked = savedSpoilers === 'true';
        }
    } catch (error) {
        console.warn('Spoiler preference could not be read:', error);
    }

    // Spoiler toggle - persist, then refresh open modal if any
    spoilersCheckbox.addEventListener('change', () => {
        try {
            localStorage.setItem(SPOILER_KEY, String(spoilersCheckbox.checked));
        } catch (error) {
            console.warn('Spoiler preference could not be saved:', error);
        }

        applyFilters();

        // If a book modal is currently open, refresh it
        const modalOverlay = document.getElementById('modalOverlay');
        if (modalOverlay && modalOverlay.classList.contains('active')) {
            const openBookKey = modalOverlay.dataset.currentBook;
            if (openBookKey) {
                showModal(openBookKey, { updateUrl: false });
            }
        }
    });

    // Search input with debounce
    let searchTimeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(applyFilters, 300); // Debounce 300ms
    });

    // Clear search button
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        applyFilters();
    });

    // Clear all filters
    clearAllBtn.addEventListener('click', () => {
        filterSelect.value = '';
        collectionSelect.value = '';
        formatSelect.value = '';
        searchInput.value = '';
        primarchsCheckbox.checked = true;
        siegeCheckbox.checked = true;
        // Reset the sort too. "Clear all" that left the sort alone made the
        // list look unchanged for no visible reason.
        sortSelect.value = 'view';
        generateBookCards('', '');
        syncBrowseUrl();
    });
}

// Thought for the Day quotes with attributions
const loyalistQuotes = [
    { quote: "BLESSED IS THE MIND TOO SMALL FOR DOUBT", attr: "Imperial Dictum" },
    { quote: "THE EMPEROR PROTECTS", attr: "Ministorum Catechism" },
    { quote: "FAITH IS THE STRONGEST SHIELD", attr: "Imperial Creed" },
    { quote: "DOUBT IS THE GATEWAY TO HERESY", attr: "Cardinal Astral" },
    { quote: "AN OPEN MIND IS LIKE A FORTRESS WITH ITS GATES UNBARRED", attr: "Imperial Proverb" },
    { quote: "HERESY GROWS FROM IDLENESS", attr: "Chaplain's Maxim" },
    { quote: "SUCCESS IS MEASURED IN BLOOD; YOURS OR YOUR ENEMY'S", attr: "Warmaster Horus (before the Fall)" },
    { quote: "HOPE IS THE FIRST STEP ON THE ROAD TO DISAPPOINTMENT", attr: "Imperial Thought" },
    { quote: "PRAYER CLEANSES THE SOUL, BUT PAIN CLEANSES THE BODY", attr: "Confessor's Scripture" },
    { quote: "THE WISE LEARN FROM THE DEATHS OF OTHERS", attr: "Tacticae Imperialis" },
    { quote: "TOLERANCE IS A SIGN OF WEAKNESS", attr: "Roboute Guilliman" },
    { quote: "VICTORY NEEDS NO EXPLANATION, DEFEAT ALLOWS NONE", attr: "Primarch Aphorism" },
    { quote: "TRUTH IS SUBJECTIVE", attr: "Inquisitorial Doctrine" },
    { quote: "DEATH IS THE SERVANT OF THE RIGHTEOUS", attr: "Ecclesiarchal Canon" },
    { quote: "A SMALL MIND IS EASILY FILLED WITH FAITH", attr: "Imperial Ministorum" },
    { quote: "KNOWLEDGE IS POWER, GUARD IT WELL", attr: "Librarius Maxim" },
    { quote: "THE REWARD FOR DUTY IS MORE DUTY", attr: "Imperial Fists Doctrine" },
    { quote: "TO ADMIT DEFEAT IS TO BLASPHEME AGAINST THE EMPEROR", attr: "Commissariat Edict" },
    { quote: "THE BLOOD OF MARTYRS IS THE SEED OF THE IMPERIUM", attr: "Lectitio Divinitatus" },
    { quote: "INNOCENCE PROVES NOTHING", attr: "Inquisitor's Maxim" },
    { quote: "THERE IS ONLY WAR", attr: "Imperial Truth" },
    { quote: "IN THE GRIM DARKNESS, THERE IS ONLY DUTY", attr: "Astartes Codex" },
    { quote: "THE EMPEROR'S WILL IS ABSOLUTE", attr: "High Lords of Terra" },
    { quote: "DEATH BEFORE DISHONOR", attr: "Captain Garviel Loken" }
];

const traitorQuotes = [
    { quote: "LET THE GALAXY BURN", attr: "Horus Lupercal" },
    { quote: "DEATH TO THE FALSE EMPEROR", attr: "Traitor Battle Cry" },
    { quote: "THE GODS DEMAND SACRIFICE", attr: "Erebus, First Chaplain" },
    { quote: "CHAOS IS THE ONLY CONSTANT", attr: "Word Bearers Doctrine" },
    { quote: "ABANDON YOUR FEAR, EMBRACE YOUR HATE", attr: "Chaos Champion's Oath" },
    { quote: "THE IMPERIUM IS A LIE BUILT ON CORPSES", attr: "Lorgar Aurelian" },
    { quote: "FREEDOM LIES IN THE WARP", attr: "Daemon Whisper" },
    { quote: "POWER IS THE ONLY TRUTH", attr: "Perturabo" },
    { quote: "THE WEAK DESERVE THEIR FATE", attr: "Night Lords Proverb" },
    { quote: "THE EMPEROR'S VISION WAS ALWAYS DOOMED", attr: "Magnus the Red" },
    { quote: "STRENGTH THROUGH CORRUPTION", attr: "Dark Apostle's Teaching" },
    { quote: "THE STRONG SHALL INHERIT THE STARS", attr: "Chaos Reaver Creed" },
    { quote: "BLOOD FOR THE BLOOD GOD", attr: "Khârn the Betrayer" },
    { quote: "THE GALAXY BELONGS TO THE BOLD", attr: "Warmaster's Decree" },
    { quote: "HORUS WAS RIGHT", attr: "Sons of Horus Mantra" },
    { quote: "THERE ARE NO GODS BUT THE FOUR", attr: "Kor Phaeron" },
    { quote: "THE LIES OF TERRA WILL CRUMBLE", attr: "Heretic Prophecy" },
    { quote: "FROM THE ASHES OF COMPLIANCE COMES TRUE FREEDOM", attr: "Alpha Legion Operative" },
    { quote: "THE WARMASTER SEES THE TRUTH", attr: "Ezekyle Abaddon" },
    { quote: "PERFECTION THROUGH EXCESS", attr: "Fulgrim" },
    { quote: "ALL FLESH IS DECAY", attr: "Mortarion" },
    { quote: "EMBRACE THE CHANGE", attr: "Thousand Sons Litany" },
    { quote: "ONLY THE STRONG SURVIVE", attr: "Angron" },
    { quote: "THE NAILS SING THE TRUTH", attr: "World Eaters War-Cant" }
];

// Get random quote with attribution
function getRandomQuote(isTraitor) {
    const quotes = isTraitor ? traitorQuotes : loyalistQuotes;
    const selected = quotes[Math.floor(Math.random() * quotes.length)];
    return selected;
}

// Allegiance Theme Switcher
function initializeAllegiance() {
    const allegianceToggle = document.getElementById('allegianceToggle');
    const allegianceText = document.getElementById('allegianceText');
    const classification = document.getElementById('classification');
    const thoughtForTheDay = document.getElementById('thoughtForTheDay');
    const headerSymbol = document.getElementById('headerSymbol');

    // Load saved allegiance and set random quote
    const savedAllegiance = localStorage.getItem('allegiance') || 'loyalist';
    if (savedAllegiance === 'traitor') {
        switchToTraitor();
    } else {
        // Set random loyalist quote on initial load
        const randomQuote = getRandomQuote(false);
        thoughtForTheDay.innerHTML = `THOUGHT FOR THE DAY: "${randomQuote.quote}" <span class="quote-attribution">— ${randomQuote.attr}</span>`;
    }

    // Toggle allegiance on click
    allegianceToggle.addEventListener('click', () => {
        const currentAllegiance = localStorage.getItem('allegiance') || 'loyalist';
        if (currentAllegiance === 'loyalist') {
            switchToTraitor();
        } else {
            switchToLoyalist();
        }
    });

    function switchToTraitor() {
        document.body.classList.add('traitor-theme');
        localStorage.setItem('allegiance', 'traitor');
        allegianceText.textContent = 'DEATH TO THE FALSE EMPEROR';
        allegianceToggle.querySelector('.allegiance-icon').textContent = '☠';
        classification.textContent = 'CLASSIFICATION: HERETICUS EXTREMIS';
        const randomQuote = getRandomQuote(true);
        thoughtForTheDay.innerHTML = `THOUGHT FOR THE DAY: "${randomQuote.quote}" <span class="quote-attribution">— ${randomQuote.attr}</span>`;
        headerSymbol.src = 'images/chaos-star.svg';
        headerSymbol.alt = 'Chaos Star';
    }

    function switchToLoyalist() {
        document.body.classList.remove('traitor-theme');
        localStorage.setItem('allegiance', 'loyalist');
        allegianceText.textContent = 'FOR THE EMPEROR';
        allegianceToggle.querySelector('.allegiance-icon').textContent = '⚔';
        classification.textContent = 'CLASSIFICATION: VERMILLION';
        const randomQuote = getRandomQuote(false);
        thoughtForTheDay.innerHTML = `THOUGHT FOR THE DAY: "${randomQuote.quote}" <span class="quote-attribution">— ${randomQuote.attr}</span>`;
        headerSymbol.src = 'images/imperial-aquila.png';
        headerSymbol.alt = 'Imperial Aquila';
    }
}

// Ordering Guide Modal functionality
function initializeOrderingGuide() {
    const orderingBtn = document.getElementById('orderingGuideBtn');
    const orderingModal = document.getElementById('orderingModalOverlay');
    const closeOrderingBtn = document.getElementById('closeOrderingModal');
    const orderingModalBody = document.getElementById('orderingModalBody');

    if (!orderingBtn || !orderingModal || !closeOrderingBtn || !orderingModalBody) {
        return;
    }

    // Simple markdown parser for ORDERING_DECISIONS.md content
    function parseMarkdown(markdown) {
        // The document is generated from catalogue fields. Treat its contents
        // as text before adding our small, known Markdown subset.
        let html = escapeHtml(markdown);

        // Convert headers
        html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
        html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

        // Convert bold and italic
        html = html.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

        // Convert inline code
        html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

        // Convert links
        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) =>
            href.startsWith('https://')
                ? `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`
                : label);

        // Convert horizontal rules
        html = html.replace(/^---$/gim, '<hr>');

        // Escaping the source turns the Markdown marker into &gt;.
        html = html.replace(/(?:^&gt;[ \t]?.*(?:\n|$))+/gm, (block) => {
            const text = block
                .replace(/^&gt;[ \t]?/gm, '')
                .trim()
                .replace(/\n/g, ' ');
            return `<blockquote>${text}</blockquote>\n`;
        });

        // Convert lists. Mark each item with its type first, then wrap each run
        // of adjacent items in a single container, so that ordered and
        // unordered lists keep their own wrapper instead of sharing one.
        html = html.replace(/^[-*] +(.*)$/gim, '<li data-list="ul">$1</li>');
        html = html.replace(/^\d+\. +(.*)$/gim, '<li data-list="ol">$1</li>');
        html = html.replace(
            /(?:<li data-list="(ul|ol)">.*<\/li>(?:\n|$))+/g,
            (run, type) => `<${type}>${run.replace(/ data-list="(?:ul|ol)"/g, '').trim()}</${type}>\n`
        );

        // Convert tables
        const tableRegex = /(\|[^\n]+\|\n)(\|[-:\s|]+\|\n)((\|[^\n]+\|\n)+)/g;
        html = html.replace(tableRegex, function(match, header, separator, body) {
            // Parse header
            const headerCells = header.trim().split('|').filter(cell => cell.trim());
            let tableHTML = '<table><thead><tr>';
            headerCells.forEach(cell => {
                tableHTML += `<th>${cell.trim()}</th>`;
            });
            tableHTML += '</tr></thead><tbody>';

            // Parse body rows
            const rows = body.trim().split('\n');
            rows.forEach(row => {
                const cells = row.trim().split('|').filter(cell => cell.trim());
                if (cells.length > 0) {
                    tableHTML += '<tr>';
                    cells.forEach(cell => {
                        tableHTML += `<td>${cell.trim()}</td>`;
                    });
                    tableHTML += '</tr>';
                }
            });

            tableHTML += '</tbody></table>';
            return tableHTML;
        });

        // Convert paragraphs
        html = html.split('\n\n').map(para => {
            para = para.trim();
            if (!para) return '';
            if (para.startsWith('<h') || para.startsWith('<ul') || para.startsWith('<ol') ||
                para.startsWith('<table') || para.startsWith('<hr') || para.startsWith('<li>') ||
                para.startsWith('<blockquote')) {
                return para;
            }
            return `<p>${para}</p>`;
        }).join('\n');

        return html;
    }

    // Load and display the generated ordering document.
    // This is fetched rather than embedded, because an embedded copy drifted
    // from the data until the two disagreed in 212 of 213 places.
    let cachedGuide = null;

    async function loadOrderingGuide() {
        if (!document.getElementById('showSpoilers')?.checked) {
            orderingModalBody.textContent = 'The chronological event log is hidden while spoilers are off. Enable Show spoilers to read it.';
            return;
        }
        if (cachedGuide) {
            orderingModalBody.innerHTML = cachedGuide;
            return;
        }

        orderingModalBody.innerHTML = '<p>RETRIEVING RECORDS...</p>';

        try {
            const response = await fetch('ORDERING_DECISIONS.md', { cache: 'no-cache' });
            if (!response.ok) throw new Error('HTTP ' + response.status);
            cachedGuide = parseMarkdown(await response.text());
            orderingModalBody.innerHTML = cachedGuide;
        } catch (error) {
            // fetch fails on file:// origins, so say so rather than showing nothing
            orderingModalBody.innerHTML =
                '<h2>RECORDS UNAVAILABLE</h2>' +
                '<p>The ordering log could not be retrieved. If you opened this page ' +
                'directly from disk, serve it over HTTP instead, for example ' +
                '<code>python3 -m http.server</code>.</p>' +
                '<p>The full log is in <code>ORDERING_DECISIONS.md</code>.</p>';
            console.error('Failed to load ORDERING_DECISIONS.md:', error);
        }
    }

    // Open modal
    orderingBtn.addEventListener('click', () => {
        void loadOrderingGuide();
        orderingModal.classList.add('active');
        focusManager.trap(orderingModal);
        scrollLock.acquire();
    });

    // Close modal - close button
    closeOrderingBtn.addEventListener('click', () => {
        orderingModal.classList.remove('active');
        focusManager.release(orderingModal);
        scrollLock.release();
    });

    // Close modal - click outside
    orderingModal.addEventListener('click', (e) => {
        if (e.target === orderingModal) {
            orderingModal.classList.remove('active');
            focusManager.release(orderingModal);
            scrollLock.release();
        }
    });

    // Close modal - Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && orderingModal.classList.contains('active')) {
            orderingModal.classList.remove('active');
            focusManager.release(orderingModal);
            scrollLock.release();
        }
    });
}

// Add glitch effect to title on load
window.addEventListener('load', async () => {
    initializeAllegiance(); // Initialize theme switcher
    initializeOrderingGuide(); // Initialize ordering guide modal
    populateLegionFilter(); // Populate filter dropdown
    populateCollectionFilter();
    restoreBrowseUrl();
    initializeRoutes();
    initializeNextReadGuide();
    setupFilterListeners(); // Set up filter events
    initializeViewSwitcher();
    initializeFilterDisclosure();
    initializeNumerals();
    initializeSyncPanel();
    initializeProgressHint();
    initializeWelcome();

    // Await the reading order before the first render, so a first-time visitor
    // never sees chronological order flash up as if it were the recommendation.
    await loadReadingOrder();
    setView(loadView(), { persist: false });
    const directWork = linkedWorkKey();
    if (directWork) showModal(directWork, { updateUrl: false });
    const directCharacter = linkedCharacterKey();
    if (directCharacter) showCharacterModal(directCharacter, { updateUrl: false });

    const mainTitle = document.querySelector('.main-title');
    let glitchCount = 0;
    const originalText = mainTitle.textContent;

    const glitchInterval = setInterval(() => {
        if (glitchCount % 2 === 0) {
            mainTitle.textContent = 'H̴O̴R̴U̴S̴ ̴H̴E̴R̴E̴S̴Y̴ ̴A̴R̴C̴H̴I̴V̴E̴';
        } else {
            mainTitle.textContent = originalText;
        }
        glitchCount++;

        if (glitchCount > 5) {
            clearInterval(glitchInterval);
            mainTitle.textContent = originalText;
        }
    }, 100);
});
