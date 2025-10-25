# Quick Reference Card

Fast reference for common Slidev + Theme patterns. Keep this open while working!

## 🎯 Basic Slide Structure

```markdown
---
layout: default
---

# Slide Title

Content here...
```

## 🎨 Theme Classes Quick Reference

### Text Utilities
```markdown
<span class="text-primary">Orange text</span>
<span class="text-muted">Gray text</span>
<span class="gradient-text">Gradient text</span>
<span class="highlight">Highlighted text</span>
```

### Inline Markdown Styling
```markdown
Use *emphasis* for orange text
Use **bold** for strong text
Use [links](url) for orange links
```

## 📦 Components

### Card
```markdown
<div class="card">
  <h3 class="text-primary">Title</h3>
  <p>Content</p>
</div>
```

### Callouts
```markdown
<div class="callout">💡 Regular note</div>
<div class="callout-info">ℹ️ Information (blue)</div>
<div class="callout-warning">⚠️ Warning (yellow)</div>
<div class="callout-success">✅ Success (green)</div>
```

### Grids
```markdown
<!-- 2 columns -->
<div class="grid-2">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

<!-- 3 columns -->
<div class="grid-3">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
</div>
```

## 📐 Layouts

### Cover (Title Slide)
```markdown
---
layout: cover
class: text-center
---

# Title
Subtitle
```

### Two Columns
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

### Center
```markdown
---
layout: center
class: text-center
---

# Centered
```

### Statement
```markdown
---
layout: statement
---

# Big Statement
```

### End (Closing)
```markdown
---
layout: end
class: text-center
---

# Thank You!
```

## 💻 Code Blocks

### Basic
````markdown
```typescript
const hello = "world";
```
````

### With Highlighting
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

### Multiple Clicks
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
  Auto fades in
</div>
```

## 🖼️ Images

```markdown
![Alt text](/images/file.png)
```

Images go in: `presentation-folder/public/images/`

## 📝 Presenter Notes

```markdown
---
layout: default
---

# Slide Content

<!--
These are presenter notes
Press 'p' to see them
-->
```

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` / `→` | Next slide |
| `←` | Previous slide |
| `d` | Toggle dark mode |
| `o` | Overview mode |
| `p` | Presenter view |
| `f` | Fullscreen |
| `g` | Go to slide # |

## 🎯 Common Patterns

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

### Statistics
```markdown
<div class="grid-3 mt-8">
  <div class="text-center">
    <div class="text-5xl font-bold gradient-text mb-4">100+</div>
    <div class="text-muted">Label</div>
  </div>
  <!-- Repeat 2 more times -->
</div>
```

### About Me
```markdown
<div class="speaker-info">
  <img src="url" alt="Name" />
  <div class="speaker-details">
    <h3>Name</h3>
    <p>Title</p>
    <p class="text-primary">Skills</p>
  </div>
</div>
```

## 📦 Package.json Scripts

```json
{
  "scripts": {
    "dev": "slidev slides.md",
    "build": "slidev build slides.md",
    "export": "slidev export slides.md --format pdf"
  }
}
```

## 🚀 Commands

```bash
# Development
npm run dev

# Build
npm run build

# Export PDF
npm run export

# Install Playwright (first time PDF export)
npx playwright install chromium

# Different port
npx slidev slides.md --port 3031
```

## 🎨 Brand Colors

```css
Primary Orange: #ea580c
Primary Light:  #f97316
Primary Dark:   #dc2626
```

Use in custom styles:
```css
color: var(--slidev-theme-primary);
```

## 📁 New Presentation Template

```markdown
---
theme: default
title: "Your Title"
highlighter: shiki
lineNumbers: false
fonts:
  sans: 'Work Sans'
  mono: 'JetBrains Mono'
layout: cover
---

<style src="../theme/style.css"></style>

# Your Title

Subtitle

---

# Content Slide

Your content...

---
layout: end
class: text-center
---

# Thank You!
```

## 🔧 Troubleshooting Quick Fixes

| Issue | Fix |
|-------|-----|
| Styles not loading | Check `<style src="../theme/style.css"></style>` |
| Port in use | Use `--port 3031` |
| PDF fails | `npx playwright install chromium` |
| Images missing | Put in `public/images/`, use `/images/file.png` |

## 📚 Documentation Links

- Full Guide: [THEME_USAGE.md](./THEME_USAGE.md)
- Setup Guide: [HOW_TO_CREATE_NEW_PRESENTATION.md](./HOW_TO_CREATE_NEW_PRESENTATION.md)
- Example: [theme/example.md](./theme/example.md)

---

**Pro Tip:** Keep this file open in a split screen while creating presentations!

