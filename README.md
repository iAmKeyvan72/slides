# Slidev Presentations by Keyvan Mahmoudi

Professional presentations using a custom theme matching keyvanmahmoudi.com branding.

## 🚀 Quick Start

### Run Existing Presentation
```bash
cd manual-to-velocity-the-spec-driven-way
npm install
npm run dev
```

### Create New Presentation
```bash
mkdir my-presentation
cd my-presentation
npm init -y
npm install -D @slidev/cli @slidev/theme-default playwright-chromium
```

Create `slides.md`:
```markdown
---
theme: default
fonts:
  sans: 'Work Sans'
---

<style src="../theme/style.css"></style>

# Your Title

Your content...
```

Run: `npm run dev`

## 📚 Documentation

- **[docs/THEME_GUIDE.md](./docs/THEME_GUIDE.md)** - Complete how-to guide
- **[docs/QUICK_REFERENCE.md](./docs/QUICK_REFERENCE.md)** - Quick syntax reference
- **[theme/example.md](./theme/example.md)** - Working example

## 🎨 Theme Features

- **Brand Colors**: Orange (#ea580c)
- **Typography**: Work Sans
- **Dark Mode**: Full support
- **Components**: Cards, callouts, grids
- **Your Name**: Use `.gradient-text` class

## ⌨️ Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Next slide |
| `d` | Toggle dark mode |
| `p` | Presenter view |
| `o` | Overview |

## 🎯 Color Usage

**Your branding** → Orange/gradient:
```markdown
<div class="gradient-text">Keyvan Mahmoudi</div>
```

**Content** → Semantic colors:
- Blue = Information
- Green = Success
- Amber = Warning
- Red = Problems

## 📞 Contact

**Keyvan Mahmoudi**
- 🌐 [keyvanmahmoudi.com](https://keyvanmahmoudi.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/keyvanmahmoudi)
- 🐙 [GitHub](https://github.com/keyvanmahmoudi)
