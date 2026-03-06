# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack at localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

There are no tests in this project.

## Architecture

Single-page marketing site for ARZ Web Concept (French web agency based in Strasbourg). Built with Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS.

**Page structure** (`src/app/page.tsx`): Linear single-page layout composed of section components in order: `CustomCursor → Header → Hero → About → Services → Faq → Footer`. All section components are Client Components (`"use client"`).

**Section IDs** for anchor navigation: `#home`, `#about`, `#services`, `#faq`, `#footer`.

**Fonts** (configured in `globals.css`):
- Primary: `Konkhmer Sleokchher` (headings, default body)
- Secondary: `Gideon Roman` — applied via `.font-secondary` class (hero tagline)
- Body text: `Poppins` — applied automatically to `#about p`, `#services p`, `#faq`

**Liquid glass effect**: A recurring visual pattern used on the Header nav, contact forms, and buttons. Requires two things together:
1. An inline hidden SVG with `<filter id="glass-distortion">` (feTurbulence + feDisplacementMap pipeline) present in the same component
2. The `.liquid-glass` CSS class on the element (defined in `globals.css`)

**Animation**: Framer Motion is used throughout for entrance animations (character-by-character text reveal via `splitStringUsingRegex`), scroll-driven opacity transitions, and spring physics.

**Contact forms**: EmailJS (`@emailjs/browser`) is used in both `Hero.tsx` and `Footer.tsx` with hardcoded service/template/public keys. The contact form is toggled in-place via `useState(showForm)`.

**Globe**: The About section uses the `cobe` library via `src/components/eldoraui/cobegloberotatetolocation.tsx` (a third-party component from EldoraUI).

**SVGs**: Imported as React components via `@svgr/webpack` (configured in `next.config.ts`). Static SVG assets are also served from `public/assets/`.

**Utility**: `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge). `src/utils/splitStringUsingRegex.ts` splits strings character-by-character for per-character animations.

**Path alias**: `@/` maps to `src/` (configured in `tsconfig.json`).
