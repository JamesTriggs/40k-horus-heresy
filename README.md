# Horus Heresy Archive - Interactive Dataslate

<div align="center">

**A comprehensive, interactive archive of the complete Horus Heresy saga**

[Live Demo](https://jamestriggs.github.io/40k-horus-heresy/) | [Report Issue](https://github.com/JamesTriggs/40k-horus-heresy/issues)

</div>

---

## 📖 Overview

An immersive, grimdark-themed web application showcasing all **81 books** from the Horus Heresy universe, featuring:
- 54 Main Horus Heresy novels
- 17 Primarchs character novels
- 10 Siege of Terra finale books

Built with pure vanilla JavaScript, featuring a Warhammer 40K Imperial dataslate aesthetic with full character encyclopedia, reading tracker, and dual Loyalist/Traitor themes.

## ✨ Features

### 📚 Complete Book Collection
- **81 books** with official Black Library cover artwork
- **Chronological ordering** by in-story timeline (820.M30 → 014.M31)
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
- **Visual indicators**: Blue badges for reading, green for finished, grayed out completed books
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
├── script.js                     # Application logic (2900+ lines)
├── images/                       # Book covers and character portraits
│   ├── *.jpg                     # 81 book covers
│   ├── character-*.jpg           # 32 character portraits
│   ├── character-placeholder.svg # Placeholder for minor characters
│   ├── imperial-aquila.png       # Loyalist symbol
│   └── chaos-star.svg           # Traitor symbol
├── lexicanum_characters.json    # Character data source
├── complete-characters.json     # Full character database
├── blurbs-safe.json             # Spoiler-free summaries
├── netlify.toml                 # Netlify configuration
├── .gitignore                   # Git ignore rules
└── README.md                    # This file
```

## 🎨 Design Features

### Color Schemes
**Imperial/Loyalist:**
- Primary: Imperial Gold (#d4af37)
- Accent: Blood Red (#8b0000)
- Background: Dark Metal (#1a1a1a)
- Text: Parchment (#e8dcc4)

**Chaos/Traitor:**
- Primary: Chaos Red (#cc0000)
- Accent: Warp Purple (#6b2d5c)
- Background: Daemon Black (#0d0d0d)
- Emphasis: Corruption Red (#8b0000)

### Typography
- **Headers**: Cinzel (serif, gothic)
- **Body**: Share Tech Mono (monospace, dataslate)
- **Effects**: Scanlines, vignette, glow effects

## 📊 Statistics

- **81 books** across 3 series
- **123 characters** in encyclopedia
- **48 quotes** with attributions
- **3,010 lines** of JavaScript
- **1,658 lines** of CSS
- **130 lines** of HTML
- **4,798 total lines** of production code
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

- Book information: Warhammer 40k Lexicanum
- Cover artwork: Warhammer 40k Lexicanum
- Character data: Warhammer 40k Lexicanum
- Lore and synopses: Compiled from official sources

---

<div align="center">

*"Blessed is the mind too small for doubt."*

**The Emperor Protects.**

</div>
