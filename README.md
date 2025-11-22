# Culver City Comets Website

A Vue 3 application built with Vite.

## Features

- **Vue 3** with Composition API
- **Vue Router** for navigation
- **Pinia** for state management
- **Tailwind CSS** for utility-first styling
- **Radix Colors** for accessible color system
- **Tabler Icons** for beautiful SVG icons
- **Vite** for fast development and building

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
public/
└── assets/
    ├── logo.png              # Culver City Comets logo
    ├── comets-logo-mark.svg    # Header logo icon
    ├── background-1.svg      # Decorative background (top)
    ├── background-2.svg      # Decorative background (bottom)
    ├── caret-down.svg        # Dropdown icon
    ├── hero-video.mp4        # Hero video (add your own)
    └── README.md             # Assets documentation

src/
├── App.vue          # Root component
├── main.js          # Application entry point
├── style.css        # Global styles with Tailwind
├── styles/
│   └── colors.css   # Radix Colors configuration
├── components/
│   ├── Button.vue            # Reusable button component
│   ├── Navigation.vue        # Header navigation component
│   ├── NavigationButton.vue  # Navigation link component
│   └── README.md             # Component documentation
├── router/
│   └── index.js     # Router configuration
└── views/
    ├── Home.vue     # Home page
    └── About.vue    # About page
```

## Assets

All graphic and video assets from Figma have been imported to `/public/assets/`:

- ✅ **Logo** (130KB PNG) - Main Culver City Comets logo
- ✅ **Icon** (2KB SVG) - Small logo for header navigation
- ✅ **Backgrounds** (1.5KB each SVG) - Decorative patterns
- ✅ **Icons** (938B SVG) - UI icons (dropdown, etc.)
- ✅ **Video** - Hero video playing on homepage

See `public/assets/README.md` for detailed asset documentation.

## Components

### Navigation Component

Sticky header with automatic active section highlighting.

```vue
<script setup>
import Navigation from '@/components/Navigation.vue'
</script>

<template>
	<Navigation />
</template>
```

### Button Component

Reusable button component with multiple variants.

```vue
<script setup>
import Button from '@/components/Button.vue'
</script>

<template>
	<!-- Primary (Yellow) Button -->
	<Button variant="primary">Register</Button>
	
	<!-- Secondary (Teal) Button -->
	<Button variant="secondary">Learn More</Button>
	
	<!-- Outline Button -->
	<Button variant="outline">Contact</Button>
	
	<!-- Different Sizes -->
	<Button size="small">Small</Button>
	<Button size="large">Large</Button>
	
	<!-- As Link -->
	<Button to="/about">About Us</Button>
</template>
```

See `src/components/README.md` for full documentation.

## Responsive Design

The website is fully responsive with mobile-first breakpoints:

### Breakpoints

- **Mobile**: < 640px (base styles)
- **Small (sm)**: ≥ 640px (landscape mobile / small tablets)
- **Medium (md)**: ≥ 768px (tablets)
- **Large (lg)**: ≥ 1024px (desktops)

### Mobile Adaptations

**Navigation:**
- Hidden on mobile/tablet (< 1024px)
- Full navigation visible on desktop

**Hero Section:**
- Height: 30rem on mobile → 41.625rem on desktop
- Logo: 16rem on mobile → 24.5rem on desktop

**Layout:**
- All horizontal sections stack vertically on mobile
- Age Groups: 1 column → 3 columns
- Seasonal Programs: 1 column → 4 columns (wrapping at 2)
- Tournaments: 1 column → 2 columns

**Spacing:**
- Reduced padding on mobile (1rem → 2rem on md+)
- Reduced gaps for better mobile layout

**Form:**
- Full width on mobile
- Fixed width on desktop (21.0625rem)

## Styling

### Tailwind CSS + Radix Colors

The project uses **Tailwind CSS configured exclusively with Radix Colors**. Default Tailwind colors have been completely replaced with Radix color scales to prevent conflicts.

**Only Radix colors are available** in Tailwind classes:

```vue
<div class="bg-teal-3 text-teal-11 border border-teal-6">
  Beautiful accessible colors!
</div>
```

**Currently available color scales:** `slate`, `blue`, `green`, `red`, `amber`, `violet`, `teal`, `yellow` (steps 1-12 each)

**Essential colors preserved:** `transparent`, `current`, `white`, `black`

**Note:** Standard Tailwind colors (like `bg-blue-500`, `text-gray-800`) are NOT available. Use Radix scales instead (like `bg-teal-9`, `text-teal-12`).

### Design System

**Primary Colors:**
- Teal (from Radix): Used for primary UI elements and navigation
- Yellow (from Radix): Used for call-to-action buttons

**Typography:**
- **Headings:** Agdasima (Bold, 700 weight)
- **Body:** Montserrat (Regular 400, Medium 500, SemiBold 600, Bold 700)

**Font Sizes:**
- H1: 64px (Agdasima)
- H2: 48px (Agdasima)  
- H3: 36px (Agdasima)
- H4: 24px (Agdasima)
- Large: 20px (Montserrat)
- Medium: 16px (Montserrat)

#### Adding More Radix Colors

To add additional Radix color scales (e.g., `purple`, `orange`):
1. Import them in `src/styles/colors.css`
2. Add the scale mapping to `tailwind.config.js`

### Tabler Icons

Import icons from `@tabler/icons-vue`:

```vue
<script setup>
import { IconHome, IconUser } from '@tabler/icons-vue'
</script>

<template>
  <IconHome :size="24" />
</template>
```

Browse icons at: https://tabler.io/icons

