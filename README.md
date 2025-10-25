# Slidev Presentations by Keyvan Mahmoudi

Professional presentations using a custom Slidev theme matching keyvanmahmoudi.com branding.

## 🎨 Features

- **Brand Colors**: Orange primary (#ea580c)
- **Typography**: Work Sans font family
- **Dark Mode**: Full dark mode support
- **Components**: Cards, badges, callouts, grids
- **Reusable**: Shared theme across all presentations

## 📁 Structure

```
slides/
├── theme/                    # Shared theme (all presentations use this)
│   ├── style.css            # Main stylesheet
│   ├── example.md           # Complete working example
│   └── README.md
│
├── docs/                     # Documentation
│   ├── THEME_GUIDE.md       # Complete usage guide
│   └── QUICK_REFERENCE.md   # Quick cheat sheet
│
└── [presentation-folders]/   # Your presentations
```

## 🚀 Quick Start

### For Existing Presentations

```bash
cd manual-to-velocity-the-spec-driven-way
npm install
npm run dev
```

### Create New Presentation

```bash
# 1. Create directory
mkdir my-presentation
cd my-presentation

# 2. Setup
npm init -y
npm install -D @slidev/cli @slidev/theme-default playwright-chromium

# 3. Create slides.md (see docs/THEME_GUIDE.md for template)

# 4. Run
npm run dev
```

**Important:** Add `<style src="../theme/style.css"></style>` to your slides.md frontmatter!

## 📚 Documentation

- **[docs/THEME_GUIDE.md](./docs/THEME_GUIDE.md)** - Complete guide (setup, features, patterns)
- **[docs/QUICK_REFERENCE.md](./docs/QUICK_REFERENCE.md)** - Quick syntax reference
- **[theme/example.md](./theme/example.md)** - Working example with all features
- **[theme/README.md](./theme/README.md)** - Theme-specific documentation

## 🎯 Presentations

### From Manual to Velocity: The Spec-Driven Way
**Path:** `manual-to-velocity-the-spec-driven-way/`  
**Topic:** Transforming weeks of manual work into seconds with Orval and spec-driven development

## 🎨 Quick Examples

### Cards Grid
```markdown
<div class="grid-2">
  <div class="card">
    <h3 class="text-primary">Feature 1</h3>
    <p>Description</p>
  </div>
  <div class="card">
    <h3 class="text-primary">Feature 2</h3>
    <p>Description</p>
  </div>
</div>
```

### Callouts
```markdown
<div class="callout">💡 Note</div>
<div class="callout-warning">⚠️ Warning</div>
<div class="callout-success">✅ Success</div>
```

### Text Utilities
```markdown
<span class="text-primary">Orange text</span>
<span class="gradient-text">Gradient text</span>
Use *emphasis* for orange highlights
```

See [docs/THEME_GUIDE.md](./docs/THEME_GUIDE.md) for complete documentation.

## 🛠️ Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run export       # Export to PDF
```

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` / `→` | Next slide |
| `d` | Dark mode |
| `o` | Overview |
| `p` | Presenter view |
| `f` | Fullscreen |

## 🔄 Theme Updates

The theme is shared across all presentations:

1. Edit `theme/style.css`
2. All presentations automatically update ✅

No need to modify individual presentations!

## 💡 Tips

1. **Test dark mode** (press `d`) before presenting
2. **Use presenter mode** (press `p`) for notes and timer
3. **Export PDF** backup before presenting
4. **Keep one idea per slide**
5. **Reference** `theme/example.md` for patterns

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Styles not loading | Check `<style src="../theme/style.css"></style>` in slides.md |
| Port in use | Use `--port 3031` flag |
| PDF export fails | Run `npx playwright install chromium` |
| Images missing | Place in `public/images/`, use `/images/file.png` |

## 📞 Contact

**Keyvan Mahmoudi**
- 🌐 [keyvanmahmoudi.com](https://keyvanmahmoudi.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/keyvanmahmoudi)
- 🐙 [GitHub](https://github.com/keyvanmahmoudi)

---

**Getting Started?** → Read [docs/THEME_GUIDE.md](./docs/THEME_GUIDE.md)

**Need Quick Syntax?** → Check [docs/QUICK_REFERENCE.md](./docs/QUICK_REFERENCE.md)

**See Examples?** → Run `slidev theme/example.md`
