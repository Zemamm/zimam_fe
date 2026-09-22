# Zimam Frontend

Marketing landing page for **Zimam**, a company that builds **SaaS platforms** and **desktop applications**.

This repo is the public-facing web frontend: brand presentation, offerings overview, and contact CTA.

---

## Tech stack

| Area | Choice |
|------|--------|
| UI | React 19 + TypeScript |
| Build | Vite 8 |
| Components / styling | MUI 9 + Emotion (`sx` only) |
| Lint | Oxlint |
| Path alias | `@/` → `src/` |

**Requirements:** Node.js 20+ and npm.

---

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

| Script | Purpose |
|--------|---------|
| `npm run dev` | Local development server |
| `npm run build` | Typecheck + production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run Oxlint |

---

## Project structure

```
src/
  app/                      # App shell (providers)
  design-system/
    tokens/                 # colors, typography, spacing, layout
    theme/                  # MUI theme + ThemeProvider
    components/ui/          # Shared Ui* primitives
  components/ui/            # Re-exports design-system UI
  pages/landing/
    LandingPage.tsx         # Composes page sections
    sections/               # Hero, Offerings, Contact, Footer
    components/             # Page-local UI (e.g. OfferingCard)
    data/                   # Static copy and offerings content
```

**How to think about it**

- `pages/landing` owns the marketing page (sections + local components + copy).
- `design-system` owns brand tokens, theme, and reusable UI.
- Do **not** use DDD layers (domain / application / infrastructure) for this marketing site.

Cursor rules that enforce this live in `.cursor/rules/`.

---

## Design system

All UI styling goes through the design system + MUI. **No** `.css`, `.scss`, or CSS modules.

### Visual direction

- Cool, professional software brand (ink neutrals + teal accent)
- Light cool backgrounds (`ink.50`), not cream / purple / terracotta looks
- Hero uses a dark ink → teal gradient for contrast

### Typography

| Role | Font | Usage |
|------|------|--------|
| Display | **Syne** | Brand name, major headings (`h1`–`h3`) |
| Body | **DM Sans** | Body copy, UI text, smaller headings |
| Mono | IBM Plex Mono | Reserved for code-like text if needed |

Fonts are loaded in `index.html` (Google Fonts).

### Color tokens

Defined in `src/design-system/tokens/colors.ts`:

| Token family | Role |
|--------------|------|
| `ink.*` | Neutrals / text / surfaces (`950` darkest → `50` lightest) |
| `teal.*` | Primary brand / actions (`600` is primary main) |
| `semantic.*` | success, warning, error, info |
| `common.white` / `common.black` | Absolute whites/blacks |

Primary MUI mapping: `primary.main` = `teal.600`, `secondary` = ink, backgrounds = `ink.50` / white.

### Spacing & layout

Defined in `src/design-system/tokens/spacing.ts`:

- Spacing scale in 4px steps (`0.5` = 4, `1` = 8, …)
- Content max width: `1120px` (narrow: `720px`)
- Section vertical padding: `64px` mobile / `112px` desktop
- Radii: `sm` 6 · `md` 10 · `lg` 16 · `xl` 24

### Shared UI primitives

Prefer these before inventing new wrappers:

| Component | Role |
|-----------|------|
| `UiButton` | Primary actions / CTAs |
| `UiContainer` | Horizontal page width |
| `UiSection` | Vertical section padding |
| `UiHeading` | Headings |
| `UiText` | Body / supporting text |

Import from `@/design-system` or `@/components/ui`.

### Styling conventions

1. Use MUI `sx` and design tokens.
2. Put repeated styles in `ComponentName.styles.ts` next to the component.
3. Wrap the app with `ThemeProvider` from the design system (already done in `src/app/App.tsx`).
4. Don’t hardcode hex colors or fonts when a token exists.

```tsx
import { UiButton, UiHeading } from '@/design-system'
import { heroSectionStyles } from './HeroSection.styles'

<UiHeading sx={heroSectionStyles.brand}>Zimam</UiHeading>
<UiButton size="large" href="#offerings">Explore offerings</UiButton>
```

---

## Editing landing content

Marketing copy and offerings are static data (no API yet):

| File | What to edit |
|------|----------------|
| `src/pages/landing/data/content.ts` | Brand line, headlines, contact copy, email CTA |
| `src/pages/landing/data/offerings.ts` | SaaS / desktop offering cards |

Sections live under `src/pages/landing/sections/`:

- `HeroSection` — brand + primary CTA
- `OfferingsSection` — what Zimam builds
- `ContactSection` — contact CTA
- `SiteFooter` — footer

---

## Useful paths

| Path | Purpose |
|------|---------|
| `src/app/App.tsx` | Root composition + theme |
| `src/design-system/theme/zimamTheme.ts` | MUI theme overrides |
| `src/design-system/tokens/` | Brand tokens |
| `.cursor/rules/project-structure.mdc` | Structure conventions for AI / team |
| `.cursor/rules/design-system-mui.mdc` | MUI + design-system conventions |

---

## Notes

- Contact CTA currently uses `mailto:hello@zimam.com` — update in `data/content.ts` when the real address is ready.
- Brand assets (logo, hero imagery) can be added under `public/` or `src/assets/` and wired into sections when available.
