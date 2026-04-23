# Culver City Comets Website

A Vue 3 single-page app for Culver City Youth Lacrosse, built with Vite.

## Stack

- **Vue 3** (Composition API, `<script setup>`)
- **Vue Router** for client-side routing
- **Pinia** for state (available if you add stores)
- **Vite** for dev server and production builds
- **Radix Colors** (`@radix-ui/colors`) — imported in `src/styles/colors.css`, used as CSS variables (e.g. `var(--teal-9)`)
- **Tabler Icons** (`@tabler/icons-vue`) for UI icons
- **VueUse Motion** (`@vueuse/motion`) — scroll-triggered section animations on the home page

Styling is **scoped CSS in Vue components** plus shared tokens in `src/styles/` (not Tailwind).

## Scripts

```bash
npm install    # install dependencies
npm run dev    # dev server (default http://localhost:5173)
npm run build  # production build → dist/
npm run preview # serve dist/ locally
```

## Project structure

```
public/
└── assets/              # static files (served as-is)
    ├── comets-logo.png
    ├── comets-logo-mark.svg       # header mark (white)
    ├── comets-logo-mark-teal.svg  # teal mark (e.g. favicon)
    ├── hero-video.mp4
    └── …

index.html               # root HTML; favicon link → public/assets/

src/
├── main.js              # app bootstrap, Pinia, Router, Motion plugin
├── App.vue
├── router/index.js      # routes
├── utils/
│   ├── assets.js              # getAssetPath() for base-aware public URLs
│   └── trialSignupEmail.js    # signup notification (Web3Forms + mailto fallback)
├── styles/              # global CSS (imported from main.js)
│   ├── styles.css
│   ├── colors.css
│   ├── typography.css
│   ├── spaces.css
│   └── breakpoints.css
├── components/
│   ├── Navigation.vue       # sticky header; mobile slide-over menu
│   ├── NavigationButton.vue
│   ├── Button.vue
│   ├── SignUpForm.vue       # trial/contact form (highlight + plain variants)
│   └── HeroMediaCarousel.vue # hero: images + video, autoplay, crossfade
└── views/
    ├── Home.vue
    ├── About.vue
    ├── Programs.vue
    ├── Register.vue
    └── FAQ.vue
```

More detail on exported graphics: `public/assets/README.md`.

## Routes

| Path | View | Notes |
|------|------|--------|
| `/` | `Home.vue` | Hero carousel, intro, age groups, testimonials, motion |
| `/about` | `About.vue` | |
| `/programs` | `Programs.vue` | Seasonal copy + placeholder figures |
| `/register` | `Register.vue` | Uses `SignUpForm` with `variant="plain"` |
| `/faq` | `FAQ.vue` | Accordion-style FAQ |

## Notable UI behavior

- **Navigation:** Below `40rem` width, primary links live in a **mobile menu** (hamburger). From `40rem` up, inline nav links show and the menu button is hidden.
- **Hero:** `HeroMediaCarousel` cycles slides (images and/or video) with prev/next, keyboard support, and optional autoplay timing.
- **Sign-up form:** Client-side validation, honeypot + short time gate for light bot friction, full-width submit. Submissions are sent via **[Web3Forms](https://web3forms.com)** when `VITE_WEB3FORMS_ACCESS_KEY` is set (configure the destination inbox in the Web3Forms dashboard—no recipient address in client code). If the key is missing, the app falls back to a **mailto** draft; the inbox address is built at runtime from character codes in `trialSignupEmail.js` so it is not stored as a plain literal string. Copy `.env.example` to `.env` or `.env.local` and add your key for production.
- **Home testimonials:** Rotating quotes with directional transitions; click or timed advance.
- **Motion:** `@vueuse/motion` is registered globally; home sections and age-group cards use `v-motion` with `visible-once` for scroll-in effects.

## Breakpoints (CSS variables)

Defined in `src/styles/breakpoints.css`:

- `--breakpoint-phone`: 40rem (640px)
- `--breakpoint-tablet`: 48rem (768px)
- `--breakpoint-desktop`: 64rem (1024px)
- …and larger desktop steps

Use in CSS: `@media (min-width: 40rem) { … }` (plain `rem` values work everywhere; custom properties inside `@media` can be unreliable in some browsers).

## Favicon

`index.html` points the favicon at **`assets/comets-logo-mark-teal.svg`**. Swap the `href` if you change the asset name.

## Components

See `src/components/README.md` for older component notes. Prefer reading the `.vue` sources for up-to-date props and usage.

---

If you deploy under a subpath (e.g. GitHub Pages), set `base` via **`BASE_PATH`** when building (see `vite.config.js`) and use `getAssetPath()` from `@/utils/assets` for public asset URLs in JavaScript.
