# Pro-Flow: Professional Portfolio Workflow 🚀

This workflow defines the standard for a world-class portfolio, integrating strategy, design, engineering, marketing, and quality.

## ⌨️ Entry Commands
- **/pro-audit** | **/pro-bmad** | **/pro-reconcile** | **/pro-responsive**

## 🔄 The Pro-Flow Cycle

### 1. Product Strategy (Product Owner)
**Goal**: Define the "Why" and the "What".
- **Besoin (Need)**: Audit the target audience (Recruiters, Clients, Partners).
- **Roadmap**: Define the 3 key pillars of the project/portfolio.
- **Value Proposition**: "I solve X problem using Y method for Z impact."

### 2. Design & Experience (UX/UI Designer)
**Goal**: Visual impact and seamless usability.
- **Responsive-First**: Design using Bento grids and fluid containers.
- **Glassmorphism**: Use premium transparency, blurs, and border glows.
- **Micro-Interactions**: Define hover states, scroll reveals, and smooth transitions.
- **Typography**: Establish a clear hierarchy (Inter/Outfit).

### 3. High-End Engineering (Senior React/IA Dev)
**Goal**: Build the technical core.
- **React Architecture**: Atomic components, clean hooks, and performance optimization.
- **IA Integration**: Integrate LLMs, RAG, or AI-powered automations.
- **Modern CSS**: Vanilla CSS with custom properties (HSL tokens).
- **Clean Code**: High maintainability and documentation.

### 4. Growth & Authority (Marketing Director)
**Goal**: Build authority and convert visitors.
- **Personal Branding**: Consistent tone of voice and professional visual identity.
- **Conversion Tunnel**: 
    - **Hero**: Immediate hook.
    - **Proof**: Skills and testimonials.
    - **Case Studies**: BMAD articles.
    - **Action**: Seamless contact form.
- **Storytelling**: Narrative journey from experience to future vision.

### 5. Quality & Industrialization (Q/A Tester)
**Goal**: Zero-friction and accessibility.
- **Responsive Audit**: Test on Mobile (375px), Tablet (768px), and Desktop (1440px+).
- **Accessibility (A11y)**:
    - WCAG Compliance (Contrast, Aria-labels).
    - Keyboard Navigation.
    - Semantic HTML.
- **CI/CD**: Automate deployments and performance monitoring (Lighthouse).

---

## 📐 Responsive Engineering Standards (Anti-Regression Rules)

> These rules are derived from real bugs fixed during development. Apply them systematically to every component.

### Typography
| Rule | ✅ Do | ❌ Don't |
| :--- | :--- | :--- |
| Section headings | `text-3xl sm:text-4xl` | `text-4xl` (overflows on 375px) |
| Section subtitles | `text-base sm:text-lg` | `text-xl` fixed |
| Card titles | `text-xl sm:text-2xl` | `text-2xl` fixed |

### Layout & Grid
| Rule | ✅ Do | ❌ Don't |
| :--- | :--- | :--- |
| 3-column grids | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` | `md:grid-cols-3` (too cramped on tablet) |
| Flex rows with badges | `flex flex-wrap gap-2` | `flex space-x-2` (no wrap, overflows) |
| Inline date + label pairs | `flex flex-col sm:flex-row gap-2` | `flex justify-between` (overlaps on narrow) |
| Decorative SVG / illustration | `hidden md:block` on mobile | always visible (squeezes text) |
| Vertical Alignment (Cards) | Fixed height on text blocks (`h-[100px]`) | Auto height (misaligns card bottoms) |
| Floating Overlays (Mobile) | Outward positioning (`-left-2`, `-right-2`) | Inward percentage (`left-[10%]`) |

### 3D Animations & Interactions
- **Jitter Prevention**: Never apply 3D transforms (`rotateX`, `scale`) directly to the element holding the `:hover` state. Use a static parent `group` as the hitbox, and transform the child.
- **Hardware Acceleration**: Always use `transform-gpu` on 3D-transformed elements and their text children to prevent blurring and shaking during animation.
- **Ghost Borders**: Do not apply borders to `overflow-hidden` containers undergoing 3D rotation (causes sub-pixel white flashes). Isolate the border in an `absolute inset-0 pointer-events-none rounded-[inherit]` overlay.

### Z-Index Stack (Never break this hierarchy)
```
z-[70]  → Progress bar (always on top)
z-[65]  → Mobile menu overlay (above navbar when open)
z-[60]  → Navbar
z-[50]  → Modals / Tooltips
z-[40]  → Sticky sidebars
z-[10]  → Cards / elevated content
z-[0]   → Base content
```

### Navigation (Mobile/Tablet)
- Burger menu triggers at **`lg:hidden`** (< 1024px) — NOT `md:hidden`
- Overlay must have `z-[65]` to cover the navbar (`z-[60]`)
- Always include **three closing methods**: `X` button in panel + `Escape` key + backdrop click
- Body scroll must be locked while overlay is open (`overflow: hidden`)
- CTA button ("Me Contacter") stays visible next to burger when `showContactBtn === true`
- The burger icon **always shows `<Menu>`** — the panel `<X>` is the only close trigger

### Icons & Decorative Elements
- Inline icons in tight badges: `hidden sm:block` on mobile (saves 24px+ per icon)
- Purely decorative SVGs/maps: `hidden md:block` — text content takes priority

### Cards (Flip / Interactive)
- Fixed-height cards need **both** a `min-h` and content overflow handling on the back face
- Never use `line-clamp` on primary descriptive text — use it only on secondary/supporting text
- Tech tag rows: `flex-wrap gap-2` — never `flex` without `flex-wrap`
- **Backend & Form Security Standards**:
    - **Strict Typing**: Always validate input types (`typeof === 'string'`) before processing to prevent TypeErrors and malformed data injections.
    - **Sanitization**: Systematically use `validator.escape()` for all user-provided strings before inclusion in emails or DB.
    - **Email Normalization**: Use `validator.normalizeEmail()` but always handle the `false` return value to avoid `TypeError`.
    - **Honeypot**: Maintain a hidden `bot-field` for basic spam protection.
    - **Error Transparency**: Never reveal sensitive server details in responses; return generic but helpful messages (e.g., "Format d'email invalide").

- **Lighthouse / SEO Performance Standards**:
    - **Target: Lighthouse AAA (A11y)**: Aim for a perfect 100/100 and WCAG 2.1 AAA compliance.
    - **Contrast**: Maintain a minimum contrast ratio of 7:1 for normal text (AAA standard).
    - **Text Size**: Avoid text smaller than 12px (0.75rem) even for secondary labels.
    - **LCP Optimization**: Important hero images must have `fetchpriority="high"`.
    - **CLS Prevention**: All images must have explicit `width` and `height` attributes or a reserved aspect-ratio container.
    - **A11y (Accessibility)**: All interactive elements (buttons, links) must have an `aria-label` or descriptive text. Tap targets must be at least 44x44px. Every section must have a `role="region"` and `aria-labelledby`.
    - **SEO**: Always include a canonical URL and meta descriptions.

- **Alwaysdata Deployment Procedure (Local Build Strategy)**:
    - **Context**: Remote `npm run build` often fails on shared hosting due to RAM limits.
    - **Step 1 (Local)**: Run `npm run build` to generate the `dist/` folder.
    - **Step 2 (Local)**: Ensure `server.cjs` and `api/` are at the root.
    - **Step 3 (Transfer)**: Upload only `dist/`, `api/`, `server.cjs`, and `package.json` via SFTP.
    - **Step 4 (Remote)**: Run `npm install --production` on the Alwaysdata terminal.
    - **Step 5 (Config)**: Set environment variables (`SMTP_USER`, `SMTP_PASS`) in the Alwaysdata dashboard.

- **Skill & Development Security Audit**:
    - **Skill Integrity**: Every new AI Skill created must be audited for security patterns (no hardcoded secrets, no dangerous commands, no injection risks in prompts).
    - **Frontend Sanitization**: Beyond React's native protection, prioritize **Schema Validation** (e.g., Zod) and, if rendering raw HTML, use a sanitizer like **DOMPurify** to prevent client-side injections.

---

## 🤝 The Conciliation Review (Final Gate)

Before any deployment, each role must perform a "Quality & Meaning" check to ensure no regressions in tone, values, or technical integrity.

### 📋 Review Checklist by Role

| Role | Focus | Check |
| :--- | :--- | :--- |
| **Product Owner** | **Meaning & Values** | Does this change respect our core values (Bientraitance, Authenticity)? Does it serve the user or just the ego? |
| **UX/UI Designer** | **Empathy & Flow** | Is the interface inclusive? Does the design simplify or complicate the human experience? |
| **Marketing Dir.** | **Personal Brand** | Is the tone consistent? Does it balance "Professional Authority" with "Human Clinical Roots"? (Avoid "Dehumanized" terms like 'Machine'). |
| **React/IA Dev** | **Technical Ethics** | Is the IA implementation transparent and ethical? Is the code clean and performant? |
| **Q/A Tester** | **Reliability & A11y** | Is it perfectly responsive? Does it meet A11y standards? Are there any regressions in previous features/texts? |

---

## 🛠️ Execution Checklist

- [ ] Does this project have a **BMAD** case study?
- [ ] Is the design **Responsive** and visually **Premium**?
- [ ] Does it demonstrate **AI/React** senior expertise?
- [ ] Is there a clear **Conversion Tunnel** (meaningful journey) for the visitor?
- [ ] **Security**: Are all inputs strictly type-checked and escaped? No `TypeError` risks in validators?
- [ ] **Lighthouse**: Does the page achieve 90+ on Perf/A11y/SEO? (Check `fetchpriority`, `width/height`, `aria-labels`).
- [ ] **Responsive Anti-Regression**: Have all rules in the "Responsive Engineering Standards" section been applied?
- [ ] **CONCILIATION**: Have all 5 roles approved the "Soul" of the change? (No loss of human-centricity).
