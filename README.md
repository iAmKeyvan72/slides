# 🎯 Slides Collection

A comprehensive repository containing all my presentations, built with modern tools and shared components.

## 📋 Current Presentations

- 🚀 **[From Manual to Velocity: The Spec-Driven Way](./manual-to-velocity-the-spec-driven-way/)** - How we transformed weeks of manual work into seconds with Orval and spec-driven development

## 🚀 Quick Start

Each presentation is in its own folder. To run a presentation:

```bash
cd presentation-folder-name
npm install
npm run dev
```

Then visit:
- **Slide Show**: http://localhost:3030/
- **Presenter Mode**: http://localhost:3030/presenter/
- **Overview**: http://localhost:3030/overview/

## 🎨 Features

- ✅ **Dark/Light Mode Support** - All presentations adapt to your system theme
- ✅ **Interactive Elements** - Clickable links and smooth animations
- ✅ **Presenter Notes** - Detailed notes for each slide
- ✅ **Export Options** - PDF export available
- ✅ **Modern Design** - Clean, professional styling

## 📁 Repository Structure

```
slides/
├── README.md                                    # This file  
├── package.json                                 # Root package configuration
├── manual-to-velocity-the-spec-driven-way/     # Spec-driven development presentation
│   ├── slides.md                               # Main presentation content
│   ├── package.json                            # Presentation dependencies
│   ├── slides-export.pdf                       # Exported PDF
│   └── README.md                               # Presentation-specific docs
├── shared/                                      # Shared resources across presentations
│   ├── themes/                                 # Custom Slidev themes  
│   ├── assets/                                 # Common images, icons, logos
│   └── components/                             # Reusable presentation components
└── scripts/                                     # Build and deployment scripts
```

## 🛠️ Adding New Presentations

Use the helper script to create a new presentation:

```bash
npm run create-new "My New Presentation"
```

Or manually:
1. Create a new folder with a descriptive name
2. Copy basic structure from an existing presentation
3. Update the README.md index above

---

**Tech Stack**: [Slidev](https://slidev.antfu.me/) • [Vue.js](https://vuejs.org/) • [Tailwind CSS](https://tailwindcss.com/) • [TypeScript](https://www.typescriptlang.org/)
