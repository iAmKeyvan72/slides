# 🎤 Slides by Keyvan Mahmoudi

Professional presentations powered by [Slidev](https://sli.dev) and hosted with Next.js.

**Live at**: [slides.keyvanmahmoudi.com](https://slides.keyvanmahmoudi.com)

---

## 📁 Project Structure

```
slides/
├── app/                    # Next.js App Router
├── presentations/          # All Slidev presentations
│   └── manual-to-velocity-the-spec-driven-way/
├── theme/                  # Shared Slidev theme
├── scripts/               # Build automation
├── lib/                   # Presentation metadata
└── public/slides/         # Built presentations (auto-generated)
```

---

## 🚀 Quick Start

### View All Presentations

```bash
npm install
npm run dev
```

Visit: `http://localhost:3000`

### Develop a Specific Presentation

```bash
cd presentations/manual-to-velocity-the-spec-driven-way
npm install
npm run dev
```

Visit: `http://localhost:3030` (Slidev default port)

---

## ➕ Creating a New Presentation

### 1. Create Presentation Directory

```bash
mkdir presentations/my-awesome-talk
cd presentations/my-awesome-talk
npm init -y
```

### 2. Install Slidev

```bash
npm install -D @slidev/cli @slidev/theme-default playwright-chromium
```

### 3. Add Favicon Files

```bash
mkdir public
cp ../../app/favicon.ico ../../app/favicon-16x16.png ../../app/favicon-32x32.png public/
```

### 4. Create `slides.md`

```markdown
---
theme: default
fonts:
  sans: 'Work Sans'
favicon: '/favicon.ico'
---

<style src="../../theme/style.css"></style>

# My Awesome Talk

By <span class="gradient-text">Keyvan Mahmoudi</span>

---

## Slide 2

Your content here...
```

### 5. Add Build Scripts to `package.json`

```json
{
  "scripts": {
    "dev": "slidev slides.md",
    "build": "slidev build",
    "export": "slidev export --format pdf"
  }
}
```

### 6. Register in Metadata

Edit `/lib/presentations.ts`:

```typescript
export const presentations: Presentation[] = [
  {
    slug: 'my-awesome-talk',  // Must match directory name
    title: 'My Awesome Talk',
    description: 'A great presentation about...',
    date: '2025',
    tags: ['Technology', 'Development'],
  },
  // ... other presentations
];
```

### 7. Test Locally

```bash
# From presentation directory
npm run dev

# Or from root (builds all and serves with Next.js)
npm run build
npm start
```

---

## 🎨 Using the Custom Theme

Your presentations automatically use the custom theme matching `keyvanmahmoudi.com` branding.

### Brand Colors

- **Orange**: `#ea580c` - For your name/branding
- **Semantic colors**: Blue (info), Green (success), Amber (warning), Red (error)

### Special Classes

```markdown
<!-- Gradient text for your name -->
<span class="gradient-text">Keyvan Mahmoudi</span>

<!-- Cards -->
<div class="card">Content</div>

<!-- Callouts -->
<div class="callout callout-info">Info message</div>
```

See **[docs/THEME_GUIDE.md](./docs/THEME_GUIDE.md)** for complete documentation.

---

## 🏗️ Building for Production

### Build All Presentations

```bash
npm run build
```

This will:
1. Build all Slidev presentations to static HTML
2. Build Next.js app with static export
3. Output everything to `/out` directory

### Build Single Presentation

```bash
cd presentations/my-awesome-talk
npm run build
# Output in ./dist
```

---

## 🌐 Deployment

### Automated with Vercel

This project is configured for automatic deployment to Vercel:

1. Push to GitHub `main` branch
2. Vercel automatically builds and deploys
3. Live at `slides.keyvanmahmoudi.com`

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for complete deployment guide.

### Manual Deployment

```bash
npm run build
# Deploy /out directory to any static hosting
```

---

## 📚 Documentation

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Complete deployment guide
- **[docs/THEME_GUIDE.md](./docs/THEME_GUIDE.md)** - Theme customization
- **[docs/QUICK_REFERENCE.md](./docs/QUICK_REFERENCE.md)** - Syntax reference
- **[theme/example.md](./theme/example.md)** - Working example

---

## ⌨️ Slidev Shortcuts

| Key | Action |
|-----|--------|
| `Space` / `→` | Next slide |
| `←` | Previous slide |
| `d` | Toggle dark mode |
| `o` | Overview mode |
| `p` | Presenter view |
| `g` | Go to slide # |
| `f` | Fullscreen |

---

## 📦 Tech Stack

- **[Slidev](https://sli.dev)** - Markdown-based presentations
- **[Next.js 14](https://nextjs.org)** - React framework with App Router
- **[Tailwind CSS](https://tailwindcss.com)** - Styling
- **[TypeScript](https://www.typescriptlang.org)** - Type safety
- **[Vercel](https://vercel.com)** - Deployment platform

---

## 🎯 Features

- ✅ Multiple presentations in one site
- ✅ Beautiful landing page with presentation listing
- ✅ Automatic builds with Vercel
- ✅ Custom brand theme
- ✅ Dark mode support
- ✅ Presenter view
- ✅ PDF export capability
- ✅ Static site generation (fast loading)

---

## 📄 Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Build all presentations + Next.js app |
| `npm run build:slides` | Build only Slidev presentations |
| `npm start` | Start production server (after build) |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

1. Create a new presentation in `/presentations`
2. Add metadata to `/lib/presentations.ts`
3. Test locally
4. Commit and push
5. Vercel deploys automatically!

---

## 📞 Contact

**Keyvan Mahmoudi**
- 🌐 [keyvanmahmoudi.com](https://keyvanmahmoudi.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/keyvanmahmoudi)
- 🐙 [GitHub](https://github.com/iAmKeyvan72)

---

## 📝 License

MIT © Keyvan Mahmoudi

---

**Built with ❤️ using Slidev and Next.js**
