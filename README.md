# Horus Heresy Archive - Interactive Dataslate

<div align="center">

**A comprehensive, interactive archive of the complete Horus Heresy saga**

[Live Demo](https://jamestriggs.github.io/40k-horus-heresy/) | [Report Issue](https://github.com/JamesTriggs/40k-horus-heresy/issues)

</div>

---

## 📖 Overview

An immersive, grimdark-themed web application showcasing all **224 entries** from the Horus Heresy universe, featuring:
- 39 main Horus Heresy novels
- 158 individual anthology stories, novellas and audio dramas, across 15 volumes
- 17 The Primarchs character novels
- 10 Siege of Terra finale books

Built with pure vanilla JavaScript, featuring a Warhammer 40K Imperial dataslate aesthetic with full character encyclopedia, reading tracker, and dual Loyalist/Traitor themes.

## ✨ Features

### 🧭 Three views

**Chronological order and reading order are not the same thing**, and this site used to conflate them, labelling a chronological index as "story order".

- **Reading Order** (default). What a newcomer should actually read, grouped into phases with the opening quartet pinned first: *Horus Rising*, *False Gods*, *Galaxy in Flames*, *The Flight of the Eisenstein*. Derived from the prerequisite arrows in Daunt's Horus Heresy Timeline.
- **Chronological**. Strict in-universe date order, earliest event first. A reference index, not advice: it puts 31 books ahead of *Horus Rising*, one of which is *A Thousand Sons*, so it spoils the main arc for a first-time reader.
- **Storyline Chart**. The graph itself, 185 entries and 205 prerequisites, with zoom, fit-to-width, fullscreen and faction highlighting. Node colour is the faction signal, because the source chart reuses vertical bands as the timeline descends and its column extents overlap too heavily to draw as swimlanes. Node boxes are grown to fit their labels: the font is monospace, so text is measured exactly rather than estimated.

For scale, *Horus Rising* is **1st** to read and **32nd** chronologically.

### 📚 Complete Book Collection
- **224 entries** with official Black Library cover artwork
- **Chronological ordering** by in-story timeline (730.M30 → 036.M31), strict, with no series held back as an appendix
- **Publication order** sorting option
- **Full book details**: authors, legions, timelines, character lists, synopses
- **Spoiler toggle**: Switch between spoiler-free and full summaries

### 🔍 Search & Filter
- **Real-time search** by title, author, or character name
- **Legion filters**: Filter by specific legion or all Loyalist/Traitor books
- **Sort options**: Chronological, Publication, Title A-Z, Author A-Z
- **Series toggles**: Show/hide Primarchs and Siege of Terra series

### 📖 Reading Progress Tracker
- **Three-state system**: Not Started, Reading, Finished
- **Visual indicators**: themed badges per allegiance, with the cover art dimmed on finished books while the title and badge stay legible
- **Progress counter**: Shows breakdown across all series
- **Persistent storage**: Progress saved in browser localStorage

### 👤 Character Encyclopedia
- **123 characters** with clickable encyclopedia entries
- **32 with Lexicanum artwork**, 91 with themed placeholders
- **Full bios** from Warhammer 40K lore
- **"Appears In"** section listing all books featuring each character
- Click any character name in book descriptions to view their entry

### 🎨 Dual Theme System
- **Imperial/Loyalist theme**: Gold accents, Imperial Aquila, righteous quotes
- **Chaos/Traitor theme**: Blood red, Chaos Star, heretical quotes
- **Dynamic quotes**: 48 Thought for the Day quotes with attributions
- **Complete visual transformation** between allegiances

### 📱 Fully Responsive
- Optimized for desktop, tablet, and mobile devices
- Touch-friendly interactions
- Adaptive layouts for all screen sizes

## 🚀 Quick Start

### Option 1: GitHub Pages (Easiest)
Visit the live site: **[https://jamestriggs.github.io/40k-horus-heresy/](https://jamestriggs.github.io/40k-horus-heresy/)**

### Option 2: Local Development
```bash
# Clone the repository
git clone https://github.com/JamesTriggs/40k-horus-heresy.git
cd 40k-horus-heresy

# Start a local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Option 3: Deploy Your Own
Deploy to any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: One-click deployment
- **GitHub Pages**: Fork this repo and enable Pages

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
├── script.js                     # Data and application logic
├── images/                       # Book covers and character portraits
│   ├── *.jpg                     # 81 cover images shared across 224 entries
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

## 🧪 Checks

Two gates, neither of which needs a build step.

```bash
# Data integrity. Catches duplicated properties inside an entry, sort-key
# collisions, unparseable series numbers, missing images, and asserts the
# rendered order matches ORDERING_DECISIONS.md position by position.
node tools/validate-data.mjs

# Regenerate the ordering log after changing the order of keys in bookData.
node tools/generate-ordering-doc.mjs

# Rebuild the recommended reading order after changing dates or the chart.
node tools/build-reading-order.mjs

# 47 browser checks: the three views, ordering, modals, scroll lock, contrast in
# both themes, mobile layout. Needs Playwright and a local server.
npm i -D playwright && npx playwright install chromium-headless-shell
python3 -m http.server 8899 &
node tools/ui-checks.mjs
```

**Chronological order comes from the order of the keys in `bookData`.** There is
no per-entry sort field. To move a book, move its entry, then regenerate the
ordering log and run the validator.

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

- **224 entries** across 4 series groupings
- **123 characters** in encyclopedia
- **48 quotes** with attributions
- **5,174 lines** of JavaScript, of which roughly 86% is data
- **1,938 lines** of CSS
- **143 lines** of HTML
- **All images** from official Lexicanum sources

## 🔒 Security

- ✅ No user input vulnerabilities
- ✅ No eval() or unsafe code execution
- ✅ Client-side only (no backend/database)
- ✅ External resources from trusted sources only
- ✅ localStorage usage is safe
- ✅ No inline event handlers

## 🤝 Contributing

This is a personal project, but suggestions and bug reports are welcome!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📜 License

This project displays content and imagery from Warhammer 40,000, which is owned by Games Workshop Ltd.

**All Warhammer 40K content is © Games Workshop.**

Book covers and character artwork sourced from [Warhammer 40k Lexicanum](https://wh40k.lexicanum.com/) under fair use for educational/fan purposes.

Code and implementation: MIT License (see LICENSE file)

## 🙏 Acknowledgments

- **Games Workshop** - Warhammer 40,000 universe and lore
- **Black Library** - Publishing the Horus Heresy series
- **Warhammer 40k Lexicanum** - Cover artwork and character images
- **All the authors** - Dan Abnett, Graham McNeill, Aaron Dembski-Bowden, and many more

## 📝 Data Sources

- Cover artwork and character images: Warhammer 40k Lexicanum
- Series numbering, titles and authors: Black Library
- In-universe dates for the main novels: largely follow [Adeptus Ars's chronological guide](https://www.adeptusars.com/features/the-horus-heresy-books-in-chronological-order), which is one community source's editorial judgement rather than settled canon, and it differs from other reputable chronologies on roughly a dozen books
- Dates for The Primarchs series and previously undated stories: researched per entry, with sources and confidence recorded in `tools/proposed-dates.json`
- Anthology story summaries and legion tags: **currently unreliable and being rewritten from primary sources**, see the review notes

---

<div align="center">

*"Blessed is the mind too small for doubt."*

**The Emperor Protects.**

</div>
