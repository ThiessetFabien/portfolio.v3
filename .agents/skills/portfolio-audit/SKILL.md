---
name: Portfolio Audit
description: Strict workflow orchestrator for auditing, optimizing, and deploying Fabien Thiesset's professional portfolio. Enforces WCAG AAA compliance, perfect responsive layouts, resume coherence, and zero-regression principles.
---

# Portfolio Audit & Optimization Skill

This skill defines the strict audit, validation, and optimization workflows for the portfolio. It ensures the app meets a professional "Wow" factor while strictly maintaining existing standards.

## Core Directives

### 1. Zero Text/Content Regressions (Resume Coherence)
* **Vigilance** : All text changes must be cross-referenced with `public/docs/resume.pdf` to guarantee 100% coherence.
* **Permission** : Never modify or rewrite any copy, headings, descriptions, or project details without asking the user first. Exception: Fixing obvious typographical or grammatical errors that do not affect context.
* **Project Context & Tags** : Verify and adjust project metadata (tags, technical keywords, confidentiality, BMAD metrics) to ensure accurate technical branding and alignment with the resume.

### 2. WCAG AAA Accessibility Standards
* **Contrast** : Ensure a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.
* **Keyboard Navigation** : The entire application must be navigable via keyboard alone (Tab, Shift+Tab, Enter, Space, Escape).
* **Focus Indicators** : High-contrast focus rings (`focus-visible`) must be present and consistent.
* **ARIA & Semantics** : Correct semantic tags (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`) and ARIA properties (`aria-expanded`, `aria-live`, `aria-label`) must be preserved/added where missing.

### 3. Absolute Responsiveness
* **Mobile First** : Optimized layouts for 320px–480px viewports. No text clipping, no horizontal overflow.
* **Tablet** : Seamless transition for 481px–1024px viewports.
* **Desktop** : Sleek, standard, high-DPI scaling support for 1025px+ viewports.

### 4. Code Quality & Design System
* **Tailwind & CSS** : Follow the custom theme design system defined in `src/index.css` (Cormorant Garamond, Space Grotesk, Inter).
* **Component Cohesion** : Reuse utility components. Avoid ad-hoc utility classes that break layout rules.
* **React/Vite Best Practices** : Ensure optimal bundle size, proper React hooks usage, and fast loading times (lazy loading, code-splitting).

## Audit Checklist & Steps

1. **Accessibility Validation** : Check all elements for keyboard focusable states, labels, and aria roles.
2. **Visual Inspection** : Check alignment, margin, padding, typography, hover effects, and active animations.
3. **Responsive Verification** : Check layout behavior under 375px (Mobile), 768px (Tablet), and 1440px (Desktop).
4. **Resume & Project Consistency Check** : Cross-reference experience details, project tags, and BMAD metadata in `public/api/data.json` with the PDF CV.
5. **Deployment Dry-run** : Verify that `npm run build` and `npm run deploy` cleanups are prepared.
