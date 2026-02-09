# AGENTS.md

Guidance for AI coding agents working in the Eco_Page codebase.

## Project Overview

Personal portfolio website built with **Astro 5**, **Solid.js**, **Tailwind CSS 3**, and **TypeScript**. Uses island architecture with minimal client-side hydration. Node.js **>=22.0.0 required**.

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at http://localhost:4321 |
| `npm run build` | Type-check with `astro check`, then build for production |
| `npm run preview` | Serve production build locally |
| `npm run astro` | Run Astro CLI commands |

**No lint, test, or format commands configured.** There are no Prettier or ESLint configs. Code style is maintained manually.

## Code Style Guidelines

### Formatting

- **NO SEMICOLONS** - entire codebase is semicolon-free
- **Double quotes** for strings and imports
- **2-space indentation** throughout
- **Space after colon** in objects: `{ key: value }`
- **Space around operators**: `x = y`, `x + y`
- **No space before function parens**: `function name()`

### Imports

Always use **`@/` path alias** for internal imports (maps to `src/`). Never use relative paths like `../`.

**Import order:**
1. Astro layouts/components
2. Internal components (using `@/`)
3. Utilities/constants (from `@/lib/`, `@/i18n/`)
4. External packages

```typescript
// Example
import Layout from "@/layouts/Layout.astro"
import CardMain from "@/components/cards/CardMain.astro"
import { LINKS } from "@/lib/constants"
import { getI18N } from "@/i18n/index"
import { spring, inView } from "motion"
```

### Naming Conventions

- **Files:**
  - Components: `PascalCase.astro`, `PascalCase.tsx`
  - Utilities: `camelCase.ts` or `lowercase.ts`
  - Config: `lowercase.ts`, `lowercase.json`
- **Components:** `PascalCase` (Astro and Solid.js)
- **Functions:** `camelCase`
  - Use prefixes: `get` (retrieval), `use` (hooks), `handle` (event handlers)
- **Variables:** `camelCase`
- **Constants:** `UPPER_SNAKE_CASE`
- **CSS classes:** `kebab-case` (custom) or Tailwind utilities
- **Animation classes:** `camelCase` (e.g., `inAnimateR`, `inAnimateL`)

### TypeScript

**Props definition:**
```typescript
// Astro components
type Props = {
  title: string
  description?: string  // Optional with ?
  class?: string
}

const { title, description = "default" } = Astro.props
```

**Solid.js components:**
```typescript
type Props = {
  children: JSX.Element
}

const Component = (props: Props) => {
  return <div>{props.children}</div>
}

export default Component
```

**Type patterns:**
- Use `type` for props interfaces
- Explicit types for complex objects, inferred for simple variables
- `const` assertions for constant objects: `as const`
- Avoid `any` - use `@ts-ignore` only when necessary for external libraries
- Enable `strictNullChecks: true`

### Error Handling

**No explicit error handling** - rely on TypeScript type safety and defensive programming:

```typescript
// Null checks with early returns
if (!element) return

// Fallback values
const value = possiblyNull || "default"

// Default parameters
const { hover = false, glow = false } = Astro.props
```

Do not add try-catch blocks or error boundaries unless explicitly required.

### Astro Component Structure

```astro
---
// 1. Imports
import Component from "@/components/Component.astro"
import { utility } from "@/lib/utility"

// 2. Props interface
type Props = {
  prop: string
}

// 3. Prop destructuring
const { prop } = Astro.props

// 4. Logic and data
const data = processData()
---

<!-- 5. Template -->
<div>
  <Component />
</div>

<!-- 6. Styles (if needed) -->
<style>
  .class { /* styles */ }
</style>

<!-- 7. Scripts (if needed) -->
<script>
  // Client-side code
</script>
```

**Template patterns:**
- Expressions: `{variable}`, `{object.property}`
- Conditionals: `{condition && <Element />}` or ternary
- Class binding: `` class=`${base} ${dynamic}` `` or `class:list={[...]}`
- Spread: `{...rest}`

**Script tags:**
- `<script>` - bundled, runs on page load
- `<script is:inline>` - inlined, no processing
- `<script is:inline data-astro-rerun>` - runs on every navigation

### Solid.js Component Structure

```typescript
import { onMount, createSignal } from "solid-js"

const Component = ({ prop = "default" }) => {
  let ref: HTMLDivElement | undefined
  const [state, setState] = createSignal(0)

  onMount(() => {
    // Initialization
  })

  return (
    <div ref={ref}>
      {state()}
    </div>
  )
}

export default Component
```

**Patterns:**
- Use `createSignal` for reactive state
- Refs: `let ref: Type | undefined`
- Event handlers: inline arrow functions
- Conditional rendering: `<Show when={condition()}>...</Show>`
- Always export as default

**Client directives in Astro:**
```astro
<SolidComponent client:visible>
  <Content />
</SolidComponent>
```

## i18n System

**Two coexisting systems:**

### 1. Key-Value (`ui.ts` + `utils.ts`)
For simple text in Navbar, Footer:

```typescript
import { getLangFromUrl, useTranslations } from "@/i18n/utils"

const lang = getLangFromUrl(Astro.url)
const t = useTranslations(lang)

// In template: {t("nav.home")}
```

### 2. Nested JSON (`index.ts` + `es.json`, `en.json`)
For complex content:

```typescript
import { getI18N } from "@/i18n/index"

const { currentLocale } = Astro
const i18n = getI18N({ currentLocale })

// In template: {i18n.Card_Main.welcome}
```

**Locale config:**
- Default: Spanish (`es`) - no URL prefix
- Secondary: English (`en`) - `/en/` prefix
- Spanish pages at `/`, English at `/en/`

**All user-facing text must use i18n system.**

## Styling

### Tailwind

- **Custom purple gradient palette**: `Eco-{10..160}` (10-step increments)
- **Background**: `bg-100` (#0f1115)
- **Custom shadows**: `eco-shadow`, `social-btn`, `clear-shadow`
- **Custom fonts**: `font-satoshi`, `font-satoshi-italic`, `font-cabinet`
- **Custom screen**: `cero: "0px"`
- **Typography plugin** enabled for Markdown styling

### Custom Patterns

- **Glassmorphism**: Use `Glass.astro` wrapper component
- **Pattern texture**: 128px repeating background at 0.06 opacity
- **Animations**: Motion library for scroll-triggered effects
  - `.inAnimateR` - slide from right
  - `.inAnimateL` - slide from left
  - `.inAnimateB` - slide from bottom

## Comments

- Bilingual (Spanish/English) in some files - maintain this pattern
- Single-line: `//`
- Multi-line: `/* */`
- Commented-out code is acceptable for experimental features

## Common Patterns

**Constants:**
```typescript
export const CONSTANT = { /* ... */ }
export const array = [ /* ... */ ] as const
```

**Animations:**
```typescript
import { spring, inView, animate } from "motion"

inView(".selector", ({target}) => {
  animate(target, { x: ["30%", "0%"] }, { duration: 0.8 })
})
```

**Web Components:**
```typescript
if (!customElements.get("component-name")) {
  customElements.define("component-name", ComponentClass)
}
```

## Project Structure

```
src/
├── components/
│   ├── cards/          # Bento grid cards
│   ├── icons/          # SVG icons as .astro files
│   ├── interactive/    # Solid.js components
│   └── mainPage/       # Page sections
├── i18n/               # Translation systems
├── layouts/            # Base layouts
├── lib/                # Utilities and constants
└── pages/              # Routes
```

## Important Notes

- Never create lint/test files unless explicitly requested
- Maintain semicolon-free style
- Use `@/` alias for all internal imports
- Keep TypeScript strict null checks enabled
- No Prettier/ESLint - maintain style manually
- Prefer editing existing files over creating new ones
- Deploy via GitHub Actions to GitHub Pages on push to `main`
