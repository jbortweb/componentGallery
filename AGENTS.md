# AGENTS.md

Vue 3 component showcase/gallery (SPA). All UI text and code comments are in **Spanish** (castellano) — keep new code/comments in Spanish. Component files use **PascalCase**, functions/variables use **camelCase**.

## Stack & commands

- Vue 3 (Composition API + `<script setup>`), Vue Router 4, Vite 5, Tailwind CSS **v4** (`@tailwindcss/vite`).
- No linter, formatter, typecheck, or test framework is configured (ignore any docs suggesting Vitest/Cypress/ESLint — they are not installed).
- Node `22.1.0` (`.nvmrc`, `netlify.toml`).
- Commands:
  - `npm run dev` — Vite dev server (port 5173, `host: true`)
  - `npm run build` — `vite build` (this is the only verification available)
  - `npm run preview` / `npm run serve` — preview the build

## Tailwind v4 gotcha (important)

Tailwind is configured CSS-first via `@import "tailwindcss"` in `src/style.css`. The `tailwind.config.js` file is **legacy and NOT auto-loaded** (no `@config` directive references it), so editing it has no effect and classes defined only there (e.g. `rounded-system-*`, `shadow-spectral-*`, `spectral-*`/`glass-*`/`particle-*` colors) do not generate CSS. Custom design tokens and utilities (`bg-glass-light`, `text-gradient-primary`, `.bg-grid-pattern`, CSS variables, keyframes) live as plain CSS in `src/style.css`.

## Component ↔ code sync (mandatory)

Every showcase component has a matching `.js` file under `src/data/codes/` that exports the component's source as a template-string `export default`. This is what `CodeModal` displays.

- When you change a `.vue` component, update its matching `src/data/codes/**` file too, so the shown code stays in sync.
- The stored code must be **exactly equal** to the component, excluding the modal button + its logic and unused imports. Comments in Spanish.
- `data/codes/` mirrors component paths (mostly): `cards/{articles,products,profiles}`, `headfoot/{headers,footers}`, `slidercarousel/{carousel,slider}`, `effects/imageEffect`. Note casing quirks (e.g. component `imageEffect1.vue` ↔ code `ImageEffect1.js`).
- Import pattern inside components: `import ProductCard1Code from "../../../data/codes/cards/products/ProductCard1.js"` (relative path from the component).

## Code modal pattern (cards)

Cards show their source via `CodeModal`, which uses the native HTML `<dialog>` element and exposes `openModal()` through `defineExpose`. Cards must follow this exact pattern:

- A "code" button (top-right, `</>` SVG icon) with `@click="showCode"`, `title`/`aria-label="Ver código del componente"`.
- A `CodeModal` with `ref="codeModal"`, `cardType`, `cardVariant`, and `:codeContent="cardCode"` where `cardCode` is the imported code string.
- `showCode` calls `codeModal.value.openModal()`.

See `src/components/cards/products/ProductCard1.vue` as the reference.

## Adding a new component

1. Create the `.vue` in `src/components/<category>/`.
2. Create the matching code file in `src/data/codes/<category>/`.
3. Register it in the matching view (`src/views/*.vue`): import + add to the component array.
4. Update the hardcoded component counts — they are duplicated in several places and drift: `Home.vue` (category labels), `AppHeader.vue` (`animatedStats` targets, e.g. `components: 46`), and `package.json`/`README.md` (still say "30"). Keep them consistent.

## Architecture notes

- Entry: `src/main.js` → `src/App.vue` (renders the global animated glassmorphism background — gradient, 60 floating particles, light orbs, grid — plus `AppHeader`, `<router-view>`, `AppFooter`).
- Routes (all lazy-loaded) are in `src/router/index.js`; `meta.title` sets `document.title` via `beforeEach`. SPA fallback redirect is in `netlify.toml`.
- Category components live under `src/components/`: `cards/{articles,products,profiles}`, `headfoot/{headers,footers}`, `sliderCarousel/{carousels,slider}`, `effects/imageEffect`. Shared UI: `CodeModal.vue`, `ComponentInstructions.vue`, `RecommendedUseCases.vue`, `TechnologiesUsed.vue`, `MobileMenu.vue`, `cardCarousel/CardCarousel.vue`, `AppHeader.vue`, `AppFooter.vue`.
- `vite.config.js` uses `manualChunks` to split `/components/cards/` → `cards` and `/components/headfoot/` → `layout`.
- No global state management (no Vuex/Pinia) — use props, router, and local `ref`s only.
- `ComponentInstructions` takes a `theme` prop (`"blue" | "purple" | "green"`): ProductCards=blue, ProfileCards=purple, ArticleCards=green, Headers=purple, Footers=green.
- Best practices by category: cards always include the code button and realistic sample data; headers/footers use semantic HTML (`<header>`, `<nav>`, `<footer>`, `<section>`).

## Known inconsistencies / gotchas

- **Two SEO composables exist and diverge**: `src/composables/useSEO.js` (used by Home, ProductCards, ProfileCards, ImageEffectView) and the older `src/data/useSEO.js` (used by Headers, Footers, ArticleCards, CarouselView, SliderView). Different titles/config. Don't assume there's a single source of truth.
- `src/data/usePerformance.js` is a second "data" composable (lazy-load/preconnect/web-vitals), imported by `App.vue`.
- `README.md` and `.github/copilot-instructions.md` are **stale** (reference deleted files like `Navigation.vue` and `src/data/cardData.js`, an outdated `carousel/` layout, and "30 componentes"). Trust the code over those docs.
