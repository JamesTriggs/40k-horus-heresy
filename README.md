# Horus Heresy Dataslate

A grimdark Warhammer 40K themed interactive webpage showcasing all 54 books of the Horus Heresy series in chronological order, with full cover artwork and detailed information.

## Features

- **Authentic Dataslate Aesthetic**: Grimdark Imperial design with scanlines, metallic borders, and gothic typography
- **Interactive Book Display**: Hover over each book to reveal detailed information
- **Modal System**: Smooth animations with comprehensive book details and spoiler-filled summaries
- **Responsive Design**: Fully functional on desktop and mobile devices
- **Pure Vanilla JavaScript**: No frameworks required, lightweight and fast

## The Books

1. **Horus Rising** by Dan Abnett - The fall begins
2. **False Gods** by Graham McNeill - The corruption complete
3. **Galaxy in Flames** by Ben Counter - The betrayal unleashed

## Tech Stack

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- Google Fonts (Cinzel, Share Tech Mono)

## Installation & Usage

### Desktop Viewing
1. Navigate to the project directory:
   ```bash
   cd /Users/jamestriggs/dev/horus-heresy-dataslate
   ```

2. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```

3. Open your browser to:
   ```
   http://localhost:8000
   ```

4. Click on any book to reveal its secrets

### Mobile Viewing

**⚠️ IMPORTANT:** The standalone `horus-heresy-complete.html` file may not work on mobile devices due to its size (14.5MB with embedded images).

**For Mobile Devices:**
1. Extract the `horus-heresy-dashboard.zip` file
2. Share/AirDrop the ENTIRE extracted folder
3. Open `index.html` on the mobile device

**Best Option - Host Online (Recommended):**
Upload the extracted folder to a free hosting service:
- [Netlify](https://netlify.com) - Drag & drop the folder
- [GitHub Pages](https://pages.github.com) - Free hosting via Git
- [Vercel](https://vercel.com) - One-click deployment

Then share the URL - works perfectly on all devices!

## Project Structure

```
horus-heresy-dataslate/
├── index.html      # Main HTML structure
├── styles.css      # Grimdark styling and animations
├── script.js       # Modal interactions and book data
├── QA-REPORT.md    # Comprehensive test results
└── README.md       # Project documentation
```

## Code Statistics

- **HTML**: 77 lines
- **CSS**: 498 lines
- **JavaScript**: 137 lines
- **Total**: 712 lines of production code

## Design Elements

- Imperial Gold (#d4af37)
- Blood Red (#8b0000)
- Steel Grey & Dark Metal
- Gothic typography with Cinzel font
- Dataslate monospace display
- Scanline and vignette effects
- Animated Imperial Aquila
- Purity seals and warning strips

## Browser Support

Modern browsers supporting:
- CSS Grid & Flexbox
- CSS Custom Properties
- ES6+ JavaScript
- CSS Animations & Transitions

## Testing

See `QA-REPORT.md` for comprehensive testing results.

All tests passed successfully.

---

*"Blessed is the mind too small for doubt."*

**The Emperor Protects.**
