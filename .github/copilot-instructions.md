<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Project Instructions for GitHub Copilot

This is a Vue 3 + Vite + Tailwind CSS project showcasing 18 unique interactive card components with modal code viewing functionality and carousel presentation.

## Project Overview

- **Purpose**: Interactive card gallery demonstrating various design patterns
- **Components**: 18 unique card designs (6 products, 6 profiles, 6 articles)
- **Features**: Code modal system, responsive carousel, interactive navigation
- **Architecture**: Modular component-based design with Vue 3 Composition API

## Project Structure

```
src/
├── components/
│   ├── cards/              # 18 unique card components
│   │   ├── ProductCard1-6.vue
│   │   ├── ProfileCard1-6.vue
│   │   └── ArticleCard1-6.vue
│   ├── carousel/
│   │   └── CardCarousel.vue
│   ├── CodeModal.vue       # Modal for displaying component code
│   └── Navigation.vue      # Category navigation
├── data/
│   ├── cardData.js        # Sample data for all cards
│   └── cardCodes.js       # Component source code for modals
└── App.vue                # Main application component
```

## Technology Stack

- **Vue 3** with Composition API and `<script setup>`
- **Vite** as build tool and development server
- **Tailwind CSS v4.1** for styling and responsive design
- **Native HTML Dialog** for modal functionality

## Code Style Guidelines

### Vue Components

- Use Composition API with `<script setup>` syntax
- Implement `showCode()` function for all card components
- Use `ref()` for modal references: `const codeModal = ref(null)`
- Follow Vue 3 best practices and reactivity patterns

### Styling

- Use Tailwind utility classes exclusively
- Implement responsive design (`sm:`, `md:`, `lg:` breakpoints)
- Use semantic color schemes per card type
- Apply hover effects and smooth transitions

### Accessibility

- Include `cursor-pointer` on interactive buttons
- Add `pointer-events-none` to SVG icons inside buttons
- Provide `title` tooltips and `aria-label` attributes
- Use semantic HTML structure

## Component Architecture

### Card Components

- **Consistent Structure**: All cards follow same modal integration pattern
- **Unique Designs**: Each numbered variant has distinct visual style
- **Modal Integration**: Every card includes CodeModal component
- **Props**: Accept data objects (`product`, `profile`, or `article`)

### Modal System

- **CodeModal Component**: Reusable modal for displaying source code
- **Native Dialog**: Uses HTML `<dialog>` element for better accessibility
- **Code Storage**: Component templates stored in `cardCodes.js`
- **No Modal Logic**: Displayed code excludes modal button and functionality

### Data Management

- **cardData.js**: Sample data for all card types
- **cardCodes.js**: Complete component source code templates
- **Structured Props**: Category-specific data structures

## Naming Conventions

- **Components**: PascalCase with descriptive names (`ProductCard1`, `CardCarousel`)
- **Functions**: camelCase (`showCode`, `openModal`)
- **Variables**: camelCase (`codeModal`, `cardCode`)
- **Files**: PascalCase for components, camelCase for utilities

## Modal Integration Pattern

All card components must follow this exact pattern:

```vue
<template>
  <!-- Card content here -->

  <!-- Code button -->
  <button
    @click="showCode"
    class="absolute top-4 right-4 ... cursor-pointer"
    title="Ver código del componente"
    aria-label="Ver código del componente"
  >
    <svg class="... pointer-events-none">...</svg>
  </button>

  <!-- Code Modal -->
  <CodeModal
    ref="codeModal"
    cardType="[Type] Card"
    cardVariant="[Style Description]"
    :codeContent="cardCode"
  />
</template>

<script setup>
import { ref } from 'vue'
import CodeModal from '../CodeModal.vue'
import { cardCodes } from '../../data/cardCodes.js'

// Props definition
defineProps({
  /* ... */
})

// Modal setup
const codeModal = ref(null)
const cardCode = cardCodes.ComponentName

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal()
  }
}
</script>
```

## Development Guidelines

- **Consistency**: All 18 cards use identical modal integration
- **Accessibility**: Every interactive element must be accessible
- **Responsiveness**: Design for mobile-first, scale up
- **Performance**: Use Vue 3 optimizations and lazy loading where appropriate
- **Code Quality**: Follow ESLint rules and Vue 3 style guide
