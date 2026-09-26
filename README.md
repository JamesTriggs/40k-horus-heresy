# Horus Heresy Archive - Interactive Dataslate

<div align="center">

**An independent, interactive guide to Horus Heresy fiction**

[Live Demo](https://jamestriggs.github.io/40k-horus-heresy/) | [Report Issue](https://github.com/JamesTriggs/40k-horus-heresy/issues)

</div>

---

## 📖 Overview

An immersive, grimdark-themed web application with **228 catalogue entries representing 226 distinct works** from the Horus Heresy universe, featuring:
- 39 main Horus Heresy novels
- 158 individual anthology stories, novellas and audio dramas, across 15 volumes
- 17 standalone Primarchs novels
- 14 Siege of Terra books, including the three interleaved novellas and the Era of Ruin epilogue anthology

Built with pure vanilla JavaScript, featuring a Warhammer 40K Imperial dataslate aesthetic with full character encyclopedia, reading tracker, and dual Loyalist/Traitor themes.

## ✨ Features

### 🧭 Three views

**Chronological order and reading order are not the same thing**, and this site used to conflate them, labelling a chronological index as "story order".

- **Reading Order** (default). What a newcomer should actually read, grouped into phases with the opening quartet pinned first: *Horus Rising*, *False Gods*, *Galaxy in Flames*, *The Flight of the Eisenstein*. Derived from the prerequisite arrows in Daunt's Horus Heresy Timeline.
- **Chronological**. Strict in-universe date order, earliest event first. A reference index, not advice: it puts 31 books ahead of *Horus Rising*, one of which is *A Thousand Sons*, so it spoils the main arc for a first-time reader.
- **Storyline Chart**. The graph itself, 185 entries and 205 prerequisites, with zoom, fit-to-width, fullscreen and faction highlighting. Node colour is the faction signal, because the source chart reuses vertical bands as the timeline descends and its column extents overlap too heavily to draw as swimlanes. Node boxes are grown to fit their labels: the font is monospace, so text is measured exactly rather than estimated.

For scale, *Horus Rising* is **1st** to read and **32nd** chronologically.

The reading view offers a **Core** path through the 12 novels in [Warhammer Community's curated Horus Heresy Saga](https://www.warhammer-community.com/en-gb/articles/17oswfuf/world-championships-preview-experience-the-greatest-hits-of-the-horus-heresy-saga-in-a-new-curated-series/), **Full Fiction** for the whole archive, and a shortcut to the Legion filter. Path choice is linkable and does not change saved progress.
The expandable next-read guide picks the first unstarted work in the chosen path, explains the order, and offers two following titles. Readers can save a suggestion for later, restore saved choices and switch from Full Fiction to the shorter Core path.

### 📚 Fiction catalogue
- **228 entries** with cover images
- **Chronological ordering** by in-story timeline (730.M30 → 036.M31), strict, with no series held back as an appendix
- **Publication order** sorting option
- **Full book details**: authors, legions, timelines, character lists, synopses
- **Work links**: opening a book gives it a shareable `#work=` URL, and browser Back returns to the catalogue
- **Chart relationships**: spoiler-controlled work details show Daunt's read-first and follow-up arrows with a source link, separate from the Archive's chosen reading order
- **Browse links and layouts**: filters, search and view choices are reflected in the URL, and readers can switch between cover grid and a compact list
- **Spoiler toggle**: Spoilers start hidden. Enabling them reveals full summaries, character details and the chronological event log
- **Event atlas**: Fifteen sourced turning points connect distinct viewpoints to the works that cover them. Work details reveal related events when spoilers are enabled

### 🔍 Search & Filter
- **Real-time search** by title, author, or character name
- **Legion filters**: Filter by specific legion or all Loyalist/Traitor books
- **Collection and format filters**: Browse a named anthology or choose novels, novellas, short stories, audio dramas or anthology containers
- **Sort options**: Chronological, Publication, Title A-Z, Author A-Z
- **Series toggles**: Show/hide Primarchs and Siege of Terra series
- **Numerals**: switch book numbering between High Gothic (`XVI`) and Low Gothic (`16`). Series prefixes such as `P9` and `SoT 8a` are already Low Gothic and pass through untouched

### 📖 Reading Progress Tracker
- **Three-state system**: Not Started, Reading, Finished
- **Visual indicators**: themed badges per allegiance, with the cover art dimmed on finished books while the title and badge stay legible
- **Progress counter**: Shows breakdown across all series
- **Persistent storage**: Progress saved in browser localStorage
- **Portable backup**: compact transfer codes or a readable JSON file keyed by stable work ID
- **Collection ownership**: mark a represented volume as owned without changing its stories' reading statuses. The JSON backup includes owned volume IDs

### 👤 Character Encyclopedia
- **121 characters** with clickable encyclopedia entries
- **32 with portrait images**, 89 with themed placeholders
- **Full bios** from Warhammer 40K lore
- **Catalogue listings** for 85 characters, drawn from explicit names in the inherited Main Characters fields. These links are incomplete and still need editorial review
- Click any character name in book descriptions to view their entry

### 🎨 Dual Theme System
- **Imperial/Loyalist theme**: Gold accents, Imperial Aquila, righteous quotes
- **Chaos/Traitor theme**: Blood red, Chaos Star, heretical quotes
- **Dynamic quotes**: 48 Thought for the Day quotes with attributions
- **Complete visual transformation** between allegiances

### ♿ Keyboard and screen reader

- Book cards and character names are real buttons, so the catalogue is fully operable without a mouse
- Dialogs use `role="dialog"`, trap Tab, mark the background `inert`, and return focus to whatever opened them
- Visible focus rings throughout, and `prefers-reduced-motion` is respected

### 📱 Fully Responsive
- Optimized for desktop, tablet, and mobile devices
- Touch-friendly interactions
- Adaptive layouts for all screen sizes

## 🚀 Quick Start

### Option 1: Published site
Visit **[https://jamestriggs.github.io/40k-horus-heresy/](https://jamestriggs.github.io/40k-horus-heresy/)**. Features on an open pull request appear there only after deployment.

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/JamesTriggs/40k-horus-heresy.git
cd 40k-horus-heresy

# Build and serve the same files used for deployment
npm ci
npm run build
cd dist
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Option 3: Deploy Your Own
Run `npm ci && npm run build`, then publish the generated `dist/` directory on a static host. The included Netlify configuration already uses this build and publish directory.

## 🎮 How to Use

1. **Browse Books**: Scroll through the grid of book covers
2. **Click a Book**: View full details, characters, and synopsis
3. **Track Progress**: Mark books as Reading or Finished
4. **Search**: Find books by title, author, or character (e.g., "Loken")
5. **Filter**: View books by legion or allegiance (Loyalist/Traitor)
6. **Explore Characters**: Click character names to view their encyclopedia entries
7. **Switch Allegiance**: Click the button in top-right to embrace the Ruinous Powers

## 🛠️ Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Grid, Flexbox, Custom Properties, Animations
- **Vanilla JavaScript** - ES6+, no frameworks
- **LocalStorage API** - Reading progress persistence
- **Google Fonts** - Cinzel (headers), Share Tech Mono (body)

## 📂 Project Structure

```
40k-horus-heresy/
├── index.html                    # Main application
├── styles.css                    # All styling and themes
├── script.js                     # Application logic
├── tools/build-site.mjs          # Copies only deployable files into dist/
├── catalogue-data.js             # Generated browser data
├── data/books.json               # Reviewable book records
├── data/characters.json          # Reviewable character records
├── data/character-appearances.json # Explicit links from the Main Characters field
├── data/work-identities.json     # Stable work IDs and legacy key map
├── data/collections.json         # Stable IDs for represented volumes
├── data/publisher-collections.json # Checked anthology contents and disputes
├── data/reading-routes.json      # Sourced Core route
├── data/publisher-work-facts.json # Publisher facts for 18 overview works and 47 Black Library listings
├── data/primarch-format-review.json # Publisher evidence for Primarchs novel formats
├── data/events.json              # Sourced event and viewpoint relationships
├── sources.html                  # Research and correction information
├── events.html                   # Event atlas
├── events.js                     # Event atlas rendering
├── ROADMAP.md                    # Product and editorial roadmap
├── BUILD_LOG.md                  # Slice-by-slice implementation record
├── CHART_RECONCILIATION.md       # Publisher evidence for chart-only works
├── images/                       # Book covers and character portraits
│   ├── *.jpg                     # 81 cover images shared across 228 entries
│   ├── character-*.jpg           # 32 character portraits
│   ├── character-placeholder.svg # Placeholder for minor characters
│   ├── imperial-aquila.png       # Loyalist symbol
│   └── chaos-star.svg           # Traitor symbol
├── ORDERING_DECISIONS.md        # Generated ordering log, fetched by the guide modal
├── reading-order.json           # Generated reading order, phase-grouped
├── daunt-chart.json             # Storyline graph: 185 nodes, 205 prerequisites
├── tools/
│   ├── validate-data.mjs        # Data integrity gate, run before committing
│   ├── generate-ordering-doc.mjs # Regenerates ORDERING_DECISIONS.md from the data
│   ├── build-reading-order.mjs  # Derives reading-order.json from the chart
│   ├── ui-checks.mjs            # Browser checks, including contrast and layout
│   └── proposed-dates.json      # Sourced dates for previously undated entries
├── netlify.toml                 # Netlify configuration
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

## 🔄 Progress sync, without a server

The site is a static page with no backend, so progress lives in `localStorage`.
To carry it between devices, the whole reading log is packed into a short code:
two bits per book over the alphabetically sorted key list, which is 228 books in
57 bytes, about 88 characters including the header.

Press the **⇄** button for your cipher, or a vector that carries it. Enter the
cipher on another dataslate to receive it.
The same panel can download a readable JSON backup or restore one after validating its work IDs, statuses and owned collection IDs. The compact transfer code carries reading statuses only.

The wording throughout is framed in the setting: a **dataslate transfer** issues
a **record cipher** that you **transmit** to another dataslate. One deliberate
exception: anywhere the interface describes *losing* data it drops the flavour
and says plainly that clearing your browser data will erase it. The browser
suite asserts both halves of that rule, so flavour cannot creep into a warning.

- Nothing is uploaded. There is no account, no service, and nothing to shut down.
- Sorted alphabetically rather than by display order, so re-sorting the
  chronology never invalidates an existing code.
- A short fingerprint of the book list is embedded. A code from a different
  dataset is **refused** rather than decoded against shifted indices, which
  would silently corrupt the log.
- Restoring replaces this device's progress, and a sync link asks first if the
  device already has any.

## 🧪 Checks

Catalogue data is generated from JSON. Run these checks after editing it:

```bash
# Data integrity. Catches duplicated properties inside an entry, sort-key
# collisions, unparseable series numbers, missing images, and asserts the
# rendered order matches ORDERING_DECISIONS.md position by position.
node tools/validate-data.mjs
node tools/build-catalogue.mjs
node tools/build-catalogue.mjs --check
node tools/reconcile-catalogue.mjs
node tools/reconcile-catalogue.mjs --check

# Regenerate the ordering log after changing the order of keys in bookData.
node tools/generate-ordering-doc.mjs

# Rebuild the recommended reading order after changing dates or the chart.
node tools/build-reading-order.mjs

# Build the deployable static site. Netlify publishes dist/, not the repo root.
npm run build

# 118 browser checks: the three views, routes, events, ordering, modals, scroll lock, contrast in
# both themes, keyboard access, progress sync, mobile layout.
# Needs the checked-in npm dependencies and a local server.
npm ci && npx playwright install chromium-headless-shell firefox webkit
python3 -m http.server 8899 &
npm run check:browser
npm run check:accessibility
npm run check:engines
```

**Chronological order comes from the order of the keys in `data/books.json`.** There is
no per-entry sort field. To move a book, move its entry, then regenerate the
ordering log and generated browser data, and run the validator. Work IDs in
`data/work-identities.json` remain stable when display titles change.

## 🎨 Design Features

### Color Schemes
**Imperial/Loyalist:**
- Primary: Imperial Gold (#d4af37)
- Accent: Blood Red (#8b0000)
- Background: Dark Metal (#1a1a1a)
- Text: Parchment (#e8dcc4)

**Chaos/Traitor:**
- Primary: Ember (#ff6b5a) for all text, chosen for legibility
- Accent: Warp Purple (#a855a0)
- Background: Daemon Black (#0d0d0d)
- Borders and fills only: Chaos Red (#8b0000), never text

### Typography
- **Headers**: Cinzel (serif, gothic)
- **Body**: Share Tech Mono (monospace, dataslate)
- **Effects**: Scanlines, vignette, glow effects

## 📊 Statistics

- **228 entries** representing **226 distinct work IDs**
- **121 characters** in encyclopedia
- **48 quotes** with attributions
- Book and character data in JSON, with a generated static browser bundle

## 🔒 Security

- Static site with no account or backend
- Reading status stays in browser storage unless a reader shares a transfer code
- External research links are restricted to HTTPS when rendered

## 🤝 Contributing

This is a personal project, but suggestions and bug reports are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📜 License

This project displays content and imagery from Warhammer 40,000, which is owned by Games Workshop Ltd.

**All Warhammer 40K content is © Games Workshop.**

Code and implementation: MIT License (see LICENSE file)

## 🙏 Acknowledgments

- **Games Workshop** - Warhammer 40,000 universe and lore
- **Black Library** - Publishing the Horus Heresy series
- **Warhammer 40k Lexicanum** - Cover artwork and character images
- **All the authors** - Dan Abnett, Graham McNeill, Aaron Dembski-Bowden, and many more

## 📝 Data Sources

- Series numbering, titles and authors: inherited catalogue data undergoing primary-source verification
- In-universe dates for the main novels: largely follow [Adeptus Ars's chronological guide](https://www.adeptusars.com/features/the-horus-heresy-books-in-chronological-order), which is one community source's editorial judgement rather than settled canon, and it differs from other reputable chronologies on roughly a dozen books
- Dates for The Primarchs series and previously undated stories: researched per entry, with sources and confidence recorded in `tools/proposed-dates.json`
- Story summaries: research links are recorded per entry in `data/books.json`. Only 30 of 228 entries currently include a Black Library or Warhammer Community URL in summary research. Separately, 13 anthology contents pages covering 143 entries have been checked for title, author and membership. A source link does not independently verify every field. See [Sources and corrections](sources.html).

---

<div align="center">

*"Blessed is the mind too small for doubt."*

**The Emperor Protects.**

</div>
