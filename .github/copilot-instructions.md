<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Instrucciones del Proyecto para GitHub Copilot

Este es un proyecto **Component Gallery** construido con **Vue 3 + Vite + Tailwind CSS** que demuestra **30 componentes únicos** organizados en tres categorías principales: Cards, Headers y Footers.

## Visión General del Proyecto

- **Propósito**: Galería interactiva completa de componentes UI modernos
- **Componentes**: 18 cards + 6 headers + 6 footers = 30 componentes únicos
- **Tema Global**: **Glassmorphism Dark** con fondo transparente y 60 partículas animadas
- **Arquitectura**: Diseño modular basado en componentes con Vue 3 Composition API
- **Navegación**: Sistema responsive con menú hamburguesa integrado en AppHeader.vue

## Estructura Unificada del Proyecto

### 🎨 **Diseño Global Glassmorphism**

Todas las páginas siguen la **misma estructura y estilos**:

- **Fondo transparente** con 60 partículas animadas constantes
- **Contenedores glassmorphism** con `backdrop-blur-lg bg-white/5 border border-white/10`
- **ComponentInstructions** con themes específicos por página (blue, purple, green)
- **Efectos hover interactivos** con coin-flip en iconos de recomendaciones
- **Consistencia visual** total entre todas las vistas

### 📁 **Estructura Actualizada**

```
src/
├── components/
│   ├── cards/              # 18 componentes organizados por tipo
│   │   ├── articles/       # 6 tarjetas de artículos
│   │   ├── products/       # 6 tarjetas de productos
│   │   └── profiles/       # 6 tarjetas de perfiles
│   ├── headfoot/           # 12 componentes de layout
│   │   ├── headers/        # 6 headers temáticos
│   │   └── footers/        # 6 footers diversos
│   ├── carousel/
│   │   └── CardCarousel.vue      # Carousel responsivo
│   ├── AppHeader.vue       # Header con navegación responsive integrada
│   ├── AppFooter.vue       # Footer principal
│   ├── CodeModal.vue       # Modal de código fuente
│   └── ComponentInstructions.vue # Instrucciones temáticas reutilizables
├── views/                  # Páginas SPA con estructura unificada
│   ├── Home.vue           # Página inicio con efectos espectaculares
│   ├── ProductCards.vue   # Galería productos + ComponentInstructions blue
│   ├── ProfileCards.vue   # Galería perfiles + ComponentInstructions purple
│   ├── ArticleCards.vue   # Galería artículos + ComponentInstructions green
│   ├── Headers.vue        # Galería headers + ComponentInstructions purple
│   └── Footers.vue        # Galería footers + ComponentInstructions green
├── data/
│   ├── cardData.js        # Datos de ejemplo sincronizados
│   └── codes/             # 📁 ESTRUCTURA ORGANIZADA DE CÓDIGOS
│       ├── cards/         # Códigos por categorías
│       │   ├── articles/  # ArticleCard1.js - ArticleCard6.js
│       │   ├── products/  # ProductCard1.js - ProductCard6.js
│       │   └── profiles/  # ProfileCard1.js - ProfileCard6.js
│       └── headfoot/      # Códigos de layout
│           ├── headers/   # Header1.js - Header6.js
│           └── footers/   # Footer1.js - Footer6.js
├── router/
│   └── index.js           # Configuración rutas Vue Router
├── App.vue                # Componente raíz con layout glassmorphism
└── main.js                # Punto de entrada
```

## Stack Tecnológico

- **Vue 3** con Composition API y `<script setup>`
- **Vue Router 4** para navegación SPA
- **Vite** como build tool y servidor de desarrollo
- **Tailwind CSS v4.1** con glassmorphism utilities personalizadas
- **Native HTML Dialog** para funcionalidad de modales
- **AppHeader.vue** con menú hamburguesa responsive integrado

## Arquitectura Glassmorphism Unificada

### 🎨 **Sistema de Diseño Global**

- **Todas las páginas** siguen la misma estructura glassmorphism
- **Fondo transparente** con 60 partículas animadas constantes
- **ComponentInstructions** temáticas con efectos interactivos
- **Efectos hover uniformes** en todas las interfaces
- **Consistencia visual total** entre vistas

### 📱 **Navegación Responsive**

- **AppHeader.vue** contiene menú hamburguesa funcional
- **Navigation.vue** eliminado (obsoleto)
- **Menú móvil glassmorphism** con dropdown organizado
- **Efectos hover espectaculares** en tarjetas principales del Home

#### **ComponentInstructions.vue** - Reutilizable

- **Props theme**: `"blue"`, `"purple"`, `"green"`
- **Uso por página**:
  - ProductCards: `theme="blue"`
  - ProfileCards: `theme="purple"`
  - ArticleCards: `theme="green"`
  - Headers: `theme="purple"`
  - Footers: `theme="green"`
- **Efectos**: Fondo animado + iconos coin-flip + glassmorphism

#### **CodeModal.vue** - Modal de Código

- **Native HTML Dialog** con backdrop glassmorphism
- **Sintaxis highlighting** automático
- **Botón de copia** con feedback visual
- **Responsive** y accesible

#### **AppHeader.vue** - Navegación Principal

- **Menú hamburguesa responsive** integrado
- **Dropdowns glassmorphism** en desktop
- **Logo interactivo** con efectos 3D
- **Título dinámico** basado en ruta actual

### Arquitectura de Componentes

- **Estructura por Categorías**: Las cards están organizadas en 3 carpetas temáticas
  - `src/components/cards/articles/` - Tarjetas de artículos y contenido
  - `src/components/cards/products/` - Tarjetas de productos comerciales
  - `src/components/cards/profiles/` - Tarjetas de perfiles de usuario
- **Consistencia de Diseño**: Cada categoría mantiene 6 variantes numeradas (Card1-Card6)
- **Integración Modal**: Todos los componentes incluyen integración con CodeModal
- **Rutas de Importación**: Ajustadas para la nueva estructura anidada
- **Props Específicas**: Cada tipo acepta objetos de datos correspondientes (`article`, `product`, `profile`)

### Códigos de Componentes - ESTRUCTURA ORGANIZADA

- **Estructura Jerárquica**: `src/data/codes/` contiene toda la organización de códigos
- **Separación por Tipo**:
  - `codes/cards/` - Todos los códigos de tarjetas organizados por subcategorías
  - `codes/headfoot/` - Headers y footers separados en carpetas específicas
- **Archivos Individuales**: Cada componente tiene su propio archivo `.js`
- **Sin Lógica Modal**: Los códigos excluyen botones modales y funcionalidad de modales
- **Exportación Default**: Todos los archivos usan `export default` para consistencia

### Sistema de Modales

- **CodeModal Component**: Modal reutilizable para mostrar código fuente
- **Native Dialog**: Usa elemento HTML `<dialog>` para mejor accesibilidad
- **Almacenamiento de Código**: Templates de componentes almacenados en archivos de datos
- **Sin Lógica Modal**: El código mostrado excluye botón modal y funcionalidad

### Gestión de Datos

- **Estructura Actualizada**: Todo el código está en `src/data/codes/` con estructura jerárquica
- **Patrones de Importación**:

  ```javascript
  // Para tarjetas de artículos
  import ArticleCard1Code from '../data/codes/cards/articles/ArticleCard1.js'

  // Para tarjetas de productos
  import ProductCard1Code from '../data/codes/cards/products/ProductCard1.js'

  // Para tarjetas de perfiles
  import ProfileCard1Code from '../data/codes/cards/profiles/ProfileCard1.js'

  // Para headers
  import Header1Code from '../data/codes/headfoot/headers/Header1.js'

  // Para footers
  import Footer1Code from '../data/codes/headfoot/footers/Footer1.js'
  ```

## Convenciones de Nomenclatura

- **Componentes**: PascalCase con nombres descriptivos (`ProductCard1`, `CardCarousel`)
- **Funciones**: camelCase (`showCode`, `openModal`)
- **Variables**: camelCase (`codeModal`, `cardCode`)
- **Archivos**: PascalCase para componentes, camelCase para utilidades

## Patrón de Integración Modal

Todos los componentes de card DEBEN seguir este patrón exacto:

```vue
<template>
  <!-- Contenido de la card aquí -->

  <!-- Botón de código -->
  <button
    @click="showCode"
    class="absolute top-4 right-4 ... cursor-pointer"
    title="Ver código del componente"
    aria-label="Ver código del componente"
  >
    <svg class="... pointer-events-none">...</svg>
  </button>

  <!-- Modal de código -->
  <CodeModal
    ref="codeModal"
    cardType="[Tipo] Card"
    cardVariant="[Descripción del Estilo]"
    :codeContent="cardCode"
  />
</template>

<script setup>
import { ref } from 'vue'
import CodeModal from '../CodeModal.vue'
import cardCodes from '../data/codes/cards/[tipo]/[CardType]Card1.js' // Ajusta según el tipo de card
})

// Configuración del modal
const codeModal = ref(null)
const cardCode = cardCodes.ComponentName

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal()
  }
}
</script>
```

## Responsive Design

### Breakpoints

- **Mobile**: < 640px (sm) - Layout de 1 columna
- **Tablet**: 640px - 1024px (md) - Layout de 2 columnas
- **Desktop**: > 1024px (lg) - Layout de 3 columnas

### Comportamiento del Carousel

- **Mobile**: Vista de rejilla vertical responsiva
- **Tablet**: 2 elementos por vista en carousel
- **Desktop**: 3 elementos por vista en carousel

## Gestión de Estado

- **Props**: Para datos de componentes individuales
- **Router**: Para estado de navegación y rutas
- **Reactive Data**: Para datos locales del componente
- **No Vuex/Pinia**: El proyecto no requiere gestión de estado global

## Pautas de Desarrollo

- **Consistencia**: Los 30 componentes siguen patrones uniformes
- **Accesibilidad**: Cada elemento interactivo debe ser accesible
- **Responsividad**: Diseño mobile-first, escalar hacia arriba
- **Performance**: Usar optimizaciones de Vue 3 y lazy loading
- **Calidad de Código**: Seguir reglas ESLint y guía de estilo Vue 3
- **Estructura de Códigos**:
  - Cards por categorías: `codes/cards/articles/`, `codes/cards/products/`, `codes/cards/profiles/`
  - Headers y footers: `codes/headfoot/headers/`, `codes/headfoot/footers/`
  - Cada componente tiene su propio archivo individual con `export default`
- **Rutas de Importación**: Usar paths relativos correctos desde las vistas hacia los códigos
- **Organización Modular**: Mantener separación clara entre tipos de componentes
- **Sincronización de Datos**: El código que se coloca en archivos de data/codes debe estar sincronizado con los componentes, bien organizadas y mantenibles. El código debe ser exactamente igual al del componente que se quiere replicar, excluyendo el botón de modal y su lógica, también las importaciones innecesarias. Los comentarios deben estar en castellano.

## Mejores Prácticas Específicas

### Para Cards

- Incluir siempre el botón de código en la esquina superior derecha
- Usar datos de ejemplo realistas y variados
- Implementar efectos hover sutiles pero visibles
- Mantener la legibilidad en todos los tamaños de pantalla

### Para Headers

- Asegurar que la navegación sea accesible
- Implementar animaciones sutiles que no distraigan
- Mantener la funcionalidad en todas las resoluciones
- Usar semántica HTML correcta (`<header>`, `<nav>`, etc.)

### Para Footers

- Incluir enlaces útiles y organizados
- Mantener un diseño limpio y no sobrecargado
- Asegurar contraste adecuado para textos pequeños
- Usar estructura semántica HTML (`<footer>`, `<section>`, etc.)

## Testing (Opcional)

El proyecto está preparado para integrar:

- **Vitest**: Para testing unitario de componentes
- **Cypress**: Para testing E2E de navegación
- **Testing Library**: Para testing de comportamiento de usuario

## Deployment

- **Build**: `npm run build` - Optimiza para producción
- **Preview**: `npm run preview` - Previsualiza la build
- **Compatibilidad**: Modern browsers con soporte ES6+

```

```
