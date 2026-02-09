# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Eco_Page is a personal portfolio website built with **Astro 5** (static site generator), **Solid.js** for interactive components, **Tailwind CSS 3** for styling, and **TypeScript**. It uses an island architecture — only interactive elements hydrate on the client.

**Node.js >=22.0.0 is required.**

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (http://localhost:4321) |
| `npm run build` | Type-check (`astro check`) then build for production |
| `npm run preview` | Serve production build locally |

There are no lint or test commands configured.

## Architecture

### Routing & i18n

- **Default locale is Spanish (`es`)**, English (`en`) is secondary
- Spanish pages live at `/` (no prefix), English at `/en/`
- Configured in `astro.config.mjs` with `prefixDefaultLocale: false` and `fallback: { en: "es" }`
- Two i18n systems coexist:
  - **`src/i18n/utils.ts`**: `getLangFromUrl()`, `useTranslations()`, `useTranslatedPath()` — used in Astro components with `ui.ts` key-value maps
  - **`src/i18n/index.ts`**: `getI18N()` — merges JSON translation files (`es.json`, `en.json`) with Spanish as base
- All user-facing text must go through the i18n system

### Component Organization

- `src/components/cards/` — Bento-grid card components (CardMain, AboutCard, IndexGrid, etc.)
- `src/components/icons/` — SVG icon components as `.astro` files
- `src/components/interactive/` — Client-side Solid.js components (Globe.tsx with d3, Tooltip.tsx)
- `src/components/mainPage/` — Page section components (About, Experience, Team, Technology)
- `src/components/pages/App.astro` — Main page assembler with Motion scroll animations
- `src/layouts/Layout.astro` — Base layout with meta/OG tags, JSON-LD schema, global styles

### Interactive Components (Solid.js)

Solid.js components use `client:visible` for lazy hydration. They are placed in `src/components/interactive/`. The Globe component uses d3 for an orthographic world map projection with visited countries highlighted.

### Styling

- Tailwind with a custom purple gradient palette (`Eco-10` through `Eco-160`)
- Background color: `bg-100` (#0f1115)
- Custom fonts: `font-satoshi`, `font-satoshi-italic`, `font-cabinet` (loaded from `public/fonts/`)
- Glassmorphism pattern via `Glass.astro` wrapper component
- Background texture overlay: repeating 128px pattern at 0.06 opacity

### Animations

The Motion library powers scroll-triggered animations in `App.astro`:
- `.inAnimateR` — slides in from right
- `.inAnimateL` — slides in from left
- `.inAnimateB` — slides in from bottom
- Navbar reveals on scroll past 50% viewport height

### Path Alias

`@/*` maps to `src/*` (configured in `tsconfig.json`).

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys to GitHub Pages on push to `main`. Uses Node 22.10.0.
