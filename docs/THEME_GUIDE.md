# Theme Guide

Complete guide for using the Keyvan Mahmoudi Slidev theme.

## 🚀 Quick Start

### Create a New Presentation

```bash
# 1. Create directory
cd /Users/thek1/Developer/slides
mkdir my-presentation
cd my-presentation

# 2. Create package.json
npm init -y

# 3. Install dependencies
npm install -D @slidev/cli @slidev/theme-default playwright-chromium
```

### Update package.json

```json
{
  "name": "my-presentation",
  "scripts": {
    "dev": "slidev slides.md",
    "build": "slidev build slides.md",
    "export": "slidev export slides.md --format pdf"
  },
  "devDependencies": {
    "@slidev/cli": "^52.1.0",
    "@slidev/theme-default": "^0.25.0",
    "playwright-chromium": "^1.55.0"
  }
}
```

### Create slides.md

```markdown
---
theme: default
title: "Your Presentation Title"
highlighter: shiki
lineNumbers: false
fonts:
  sans: 'Work Sans'
  mono: 'JetBrains Mono'
layout: cover
class: text-center
---

<style src="../theme/style.css"></style>

# Your Presentation Title

Your subtitle here

<div class="abs-br m-6">
  <a href="https://keyvanmahmoudi.com" target="_blank">
    keyvanmahmoudi.com
  </a>
</div>

---

# Your Content

Start creating slides...
```

### Run

```bash
npm run dev
```

## 🎨 Theme Features

### Color Strategy

**Your branding (use orange):**
```markdown
<!-- Your name - use gradient -->
<div class="gradient-text">Keyvan Mahmoudi</div>

<!-- Or solid orange -->
<span class="text-primary">keyvanmahmoudi.com</span>
```

**Content (use semantic colors):**
- Blue for information/technical content
- Green for success/solutions
- Amber for warnings/challenges  
- Red for problems/errors

### Text Styling

Use markdown emphasis for orange text (not italic):
```markdown
Use *emphasis* for orange text
Use **bold** for strong emphasis
```

### Custom Classes

#### Text Utilities
```markdown
<span class="text-primary">Orange text</span>
<span class="text-muted">Muted gray</span>
<span class="gradient-text">Gradient orange-red</span>
<span class="highlight">Highlighted background</span>
```

#### Cards
```markdown
<div class="card">
  <h3 class="text-primary">Card Title</h3>
  <p>Card content</p>
</div>
```

#### Grids
```markdown
<!-- 2 columns -->
<div class="grid-2">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

<!-- 3 columns -->
<div class="grid-3">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</div>
```

#### Callouts
```markdown
<div class="callout">
💡 Regular note
</div>

<div class="callout-info">
ℹ️ Information (blue)
</div>

<div class="callout-warning">
⚠️ Warning (yellow)
</div>

<div class="callout-success">
✅ Success (green)
</div>
```

### Layouts

#### Cover (Title Slide)
```markdown
---
layout: cover
class: text-center
---

# Title
Subtitle
```

#### Two Columns
```markdown
---
layout: two-cols
---

# Left
Content

::right::

# Right
Content
```

#### Center
```markdown
---
layout: center
class: text-center
---

# Centered Content
```

#### Statement
```markdown
---
layout: statement
---

# Big Statement
```

#### End (Closing)
```markdown
---
layout: end
class: text-center
---

# Thank You!
```

## 📝 Common Patterns

### Feature Grid
```markdown
<div class="grid-2 mt-8">

<div class="card">
  <h3 class="text-primary">🎯 Feature 1</h3>
  <p>Description</p>
</div>

<div class="card">
  <h3 class="text-primary">🚀 Feature 2</h3>
  <p>Description</p>
</div>

</div>
```

### Statistics Display
```markdown
<div class="grid-3 mt-8">

<div class="text-center">
  <div class="text-5xl font-bold gradient-text mb-4">100+</div>
  <div class="text-muted">Metric Label</div>
</div>

<div class="text-center">
  <div class="text-5xl font-bold gradient-text mb-4">50K</div>
  <div class="text-muted">Metric Label</div>
</div>

<div class="text-center">
  <div class="text-5xl font-bold gradient-text mb-4">24/7</div>
  <div class="text-muted">Metric Label</div>
</div>

</div>
```

### About Me Slide
```markdown
<div class="speaker-info">
  <img src="https://example.com/photo.jpg" alt="Name" />
  <div class="speaker-details">
    <h3>Your Name</h3>
    <p>Your Title</p>
    <p class="text-primary">Your Skills</p>
  </div>
</div>

<div class="mt-8">

- 🏢 Your position
- 🚀 Your achievements
- 🎯 Your specialty

</div>
```

## 💻 Code Blocks

### Basic
````markdown
```typescript
const hello = "world";
```
````

### With Line Highlighting
````markdown
```typescript {2-4|6|all}
// Line 1
// Lines 2-4 highlighted first
// More code
// Line 6 highlighted second
// All highlighted last
```
````

## 🎬 Animations

### Single Click
```markdown
<v-click>
Appears on click
</v-click>
```

### Multiple Items
```markdown
<v-clicks>

- Item 1
- Item 2
- Item 3

</v-clicks>
```

### Auto Fade In
```markdown
<div class="fade-in">
  Fades in automatically
</div>
```

## 🖼️ Images

Place images in `public/images/`:

```
my-presentation/
└── public/
    └── images/
        └── diagram.png
```

Reference:
```markdown
![Diagram](/images/diagram.png)
```

## 📝 Presenter Notes

```markdown
---
layout: default
---

# Slide Content

<!--
Presenter notes here
Press 'p' to see in presenter mode
-->
```

## 📤 Exporting

### PDF
```bash
npm run export

# First time? Install Playwright
npx playwright install chromium
```

### Static Site
```bash
npm run build
# Deploy dist/ folder
```

## 🎨 Brand Colors

```css
Primary:       #ea580c
Primary Light: #f97316
Primary Dark:  #dc2626
```

Use in custom CSS:
```css
color: var(--slidev-theme-primary);
```

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` / `→` | Next slide |
| `←` | Previous slide |
| `d` | Dark mode toggle |
| `o` | Overview mode |
| `p` | Presenter view |
| `f` | Fullscreen |

## 🔧 Troubleshooting

### Styles Not Loading
Check: `<style src="../theme/style.css"></style>` in slides.md

### Port In Use
```bash
npx slidev slides.md --port 3031
```

### PDF Export Fails
```bash
npx playwright install chromium
```

### Images Not Showing
- Place in `public/images/`
- Use absolute path: `/images/file.png`
- Restart dev server

## 💡 Tips

1. Use theme classes instead of inline styles
2. Test both light and dark modes (press `d`)
3. Use presenter mode for notes (press `p`)
4. Export PDF backup before presenting
5. Keep one idea per slide

## 📚 Examples

See `theme/example.md` for a complete working example demonstrating all features.

See existing presentations in the repo for real-world usage patterns.

