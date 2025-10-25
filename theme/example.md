---
theme: default
highlighter: shiki
lineNumbers: false
info: |
  ## Example Presentation
  Using Keyvan Mahmoudi custom theme
drawings:
  persist: false
transition: slide-left
title: Theme Example
mdc: true
---

<style src="./style.css"></style>

# Welcome to Your Presentation

Building Amazing Things with Modern Tech

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space to continue <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://keyvanmahmoudi.com" target="_blank" alt="Website"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:globe />
  </a>
  <a href="https://github.com/keyvanmahmoudi" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:logo-github />
  </a>
  <a href="https://www.linkedin.com/in/keyvanmahmoudi" target="_blank" alt="LinkedIn"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:logo-linkedin />
  </a>
</div>

---
transition: fade-out
---

# About Me

<div class="speaker-info">
  <img src="https://keyvanmahmoudi.com/images/profile.jpg" alt="Keyvan Mahmoudi" />
  <div class="speaker-details">
    <h3>Keyvan Mahmoudi</h3>
    <p>Senior Full-Stack Developer & Product Builder</p>
    <p class="text-primary">9+ Years Experience | React • Next.js • Node.js</p>
  </div>
</div>

<div class="mt-8">

- 🏢 Currently at **NN Netherlands** via **iO Digital**
- 🚀 Founded **Musicisho** - reached 430K+ daily users
- 🎯 Specialized in **0-to-1 product development**
- 📍 Based in **Amsterdam, Netherlands**

</div>

---
layout: default
---

# What We'll Cover Today

<div class="grid-2 mt-8">

<div class="card fade-in">
  <h3 class="text-primary">🎯 Topic 1</h3>
  <p>Brief description of the first main topic you'll cover in this presentation.</p>
</div>

<div class="card fade-in">
  <h3 class="text-primary">🚀 Topic 2</h3>
  <p>Brief description of the second main topic you'll cover in this presentation.</p>
</div>

<div class="card fade-in">
  <h3 class="text-primary">💡 Topic 3</h3>
  <p>Brief description of the third main topic you'll cover in this presentation.</p>
</div>

<div class="card fade-in">
  <h3 class="text-primary">⚡ Topic 4</h3>
  <p>Brief description of the fourth main topic you'll cover in this presentation.</p>
</div>

</div>

---
layout: two-cols
---

# Two Column Layout

This is the left column content. You can add text, lists, or any markdown here.

- Point 1
- Point 2
- Point 3

::right::

# Right Side

```typescript
// Code example
interface User {
  name: string;
  role: string;
}

const keyvan: User = {
  name: "Keyvan Mahmoudi",
  role: "Senior Full Stack Developer"
};
```

---

# Key Concepts

<div class="mt-8">

## Concept 1: <span class="text-primary">Foundation</span>

Building solid foundations is crucial for scalable applications.

<div class="callout">
💡 <strong>Pro Tip:</strong> Always start with a clear architecture plan before diving into code.
</div>

## Concept 2: <span class="text-primary">Performance</span>

Performance isn't just about speed—it's about user experience.

</div>

---

# Callout Examples

<div class="callout">
📝 <strong>Note:</strong> This is a regular callout for general information.
</div>

<div class="callout-info">
ℹ️ <strong>Info:</strong> This is an informational callout with blue accent.
</div>

<div class="callout-warning">
⚠️ <strong>Warning:</strong> This is a warning callout for important notices.
</div>

<div class="callout-success">
✅ <strong>Success:</strong> This is a success callout for positive outcomes.
</div>

---

# Statistics & Impact

<div class="grid-3 mt-8">

<div class="text-center">
  <div class="text-5xl font-bold gradient-text mb-4">9+</div>
  <div class="text-muted">Years Experience</div>
</div>

<div class="text-center">
  <div class="text-5xl font-bold gradient-text mb-4">430K+</div>
  <div class="text-muted">Daily Users</div>
</div>

<div class="text-center">
  <div class="text-5xl font-bold gradient-text mb-4">20+</div>
  <div class="text-muted">Developers Led</div>
</div>

</div>

<div class="mt-12 text-center">
  <p class="text-xl text-muted">These numbers represent real impact and growth</p>
</div>

---

# Lists & Highlights

You can use *emphasis* to highlight text in orange, or **bold** for stronger emphasis.

<div class="mt-8">

Key takeaways:

- First important point with <span class="highlight">highlighted text</span>
- *This entire point is emphasized in orange*
- Another crucial point to remember
- **This is bold and stands out**

</div>

<div class="mt-12">
  <blockquote>
    "The best way to predict the future is to build it."
  </blockquote>
</div>

---
layout: center
class: text-center
---

# Learn More

<div class="mt-8">

[Website](https://keyvanmahmoudi.com) · [GitHub](https://github.com/keyvanmahmoudi) · [LinkedIn](https://www.linkedin.com/in/keyvanmahmoudi)

</div>

<div class="mt-8 text-muted">
  <p>Questions?</p>
  <p class="text-primary text-xl mt-4">keyvanmahmoudi72@gmail.com</p>
</div>

---
layout: end
class: text-center
---

# Thank You!

<div class="mt-8">
  <h2>Let's Connect</h2>
  <p class="mt-4 text-xl">keyvanmahmoudi.com</p>
</div>

<div class="abs-br m-6 flex gap-4 text-2xl">
  <carbon:logo-github />
  <carbon:logo-linkedin />
  <carbon:globe />
</div>

