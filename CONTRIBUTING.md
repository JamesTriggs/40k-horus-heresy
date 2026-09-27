# Contributing to Horus Heresy Archive

Thank you for your interest in contributing to this project!

## 🐛 Reporting Bugs

If you find a bug, please [open an issue](https://github.com/JamesTriggs/40k-horus-heresy/issues) with:

- **Description**: Clear description of the bug
- **Steps to reproduce**: How to trigger the bug
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Browser/Device**: What you're using (Chrome on Mac, Safari on iPhone, etc.)
- **Screenshots**: If applicable

## 💡 Suggesting Features

Feature suggestions are welcome! Please [open an issue](https://github.com/JamesTriggs/40k-horus-heresy/issues) with:

- **Feature description**: What you'd like to see
- **Use case**: Why it would be useful
- **Examples**: Similar features in other apps (if applicable)

## 🔧 Code Contributions

### Before You Start

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Test thoroughly
5. Commit with clear messages
6. Push to your fork
7. Open a Pull Request

### Code Style

- **JavaScript**: ES6+ syntax, clear variable names
- **CSS**: Use existing CSS custom properties when possible
- **Comments**: Add comments for complex logic
- **Formatting**: Match existing code style

### Testing Your Changes

```bash
npm ci

# Generate and check catalogue data
node tools/build-catalogue.mjs
node tools/generate-ordering-doc.mjs
node tools/reconcile-catalogue.mjs
npm run build

# Start a local server in another terminal
python3 -m http.server 8000 --directory dist

# Run browser and accessibility checks
BASE_URL=http://localhost:8000/ npm run check:browser
BASE_URL=http://localhost:8000/ npm run check:accessibility
BASE_URL=http://localhost:8000/ npm run check:engines

# Test in multiple browsers
# - Chrome/Edge
# - Firefox
# - Safari

# Test responsive design
# - Desktop
# - Tablet
# - Mobile phone
```

### What to Test

- [ ] Book modals open correctly
- [ ] Search works for titles, authors, characters
- [ ] Filters work (legion, series toggles, sort)
- [ ] Reading progress saves and loads
- [ ] Character links are clickable
- [ ] Theme toggle works
- [ ] Mobile responsive layout works
- [ ] No JavaScript errors in console

## 📝 Adding Book Data

If adding new books or fixing book information:

- **Verify publication facts with a primary source**: Prefer Black Library or the publication itself. Record the URL or bibliographic reference, the date checked and any uncertainty.
- **Edit `data/books.json`**: Include title, author, timeline, legions, details, blurb, blurbSafe and research metadata.
- **Keep work IDs stable**: Add new works to `data/work-identities.json`. Reprints should share an identity with the existing work, while every legacy entry key remains mapped.
- **Regenerate derived files**: Run `node tools/build-catalogue.mjs` and `node tools/reconcile-catalogue.mjs`.
- **Test spoiler toggle**: Ensure both blurb and blurbSafe are present

## 👤 Adding Character Data

If adding or updating character information:

- **Cite sources**: Verify character details against published material where possible
- **Include image**: Character portrait (or use placeholder)
- **Full bio**: 2-3 sentences about the character
- **Check appearances**: Verify character appears in listed books
- **Test clickability**: Ensure character name matching works

## 🎨 Design Changes

If proposing design changes:

- **Maintain theme**: Keep 40K grimdark aesthetic
- **Both allegiances**: Test in Imperial and Chaos themes
- **Mobile-first**: Ensure it works on small screens
- **Accessibility**: Maintain readability

## ⚠️ What NOT to Change

- **Games Workshop IP**: Don't add non-Warhammer content
- **Core functionality**: Major breaking changes require discussion first
- **External dependencies**: Keep it vanilla JS (no frameworks)

## 📜 Legal

By contributing, you agree that:

- Your code will be under MIT License
- Warhammer 40K content remains © Games Workshop

## Questions?

Open an issue or discussion on GitHub!

---

**The Emperor Protects** (your pull requests)
