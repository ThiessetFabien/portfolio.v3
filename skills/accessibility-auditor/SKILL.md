# Accessibility Auditor (A11y) 🛡️

A specialized skill designed to enforce digital inclusion, ensuring that our applications meet WCAG AAA and RGAA standards. Because true innovation is accessible to everyone.

## The Funny Team Ensemble Insights
- **The Architect**: "Accessibility is not a feature; it's the foundation of 'bientraitance numérique'."
- **The Hammer**: "If I can't navigate this site with my monitor turned off and just a keyboard, it's broken."
- **Sparkle**: "Good contrast doesn't mean ugly! We can make AAA look premium."

---

## Workflow (BMAD)

### 1. Besoin (Need Discovery)
- **Problem**: Digital exclusion due to poor contrast, missing semantics, or keyboard traps.
- **Goal**: Ensure the application is usable by all individuals, regardless of physical or cognitive abilities.

### 2. Méthode (Design)
- **Automated Scanning**: Use tools like `axe-core` to catch low-hanging fruits.
- **Semantic Structure**: Validate the use of HTML5 landmarks (`<main>`, `<nav>`, `<header>`, `<footer>`).
- **Keyboard Navigation**: Implement skip links and visible focus rings (`focus-visible`).
- **Visual Design**: Strict adherence to minimum contrast ratios (AAA) and `prefers-reduced-motion`.

### 3. Action (Implementation)
- Execute `npx @axe-core/cli http://localhost:5173`.
- Audit React components for missing `aria-label`, `alt` texts, and proper heading hierarchy (`<h1>` to `<h6>`).
- Fix all reported violations immediately.

### 4. Données (Results)
- A clean accessibility report with 0 critical or serious violations.
- Enhanced Lighthouse Accessibility Score (Target: 100).

---

## Security & Ethics Audit
- **Privacy**: No user data is collected during the audit.
- **Ethics**: Enforces the "Loi Bien Vieillir" and "Bientraitance" by reducing cognitive and visual load.
