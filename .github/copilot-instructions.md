<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Instrucciones del Proyecto para GitHub Copilot

Este es un proyecto **Component Gallery** construido con **Vue 3 + Vite + Tailwind CSS** que demuestra **30 componentes únicos** organizados en tres categorías principales: Cards, Headers y Footers.

## Visión General del Proyecto

- **Propósito**: Galería interactiva completa de componentes UI modernos
- **Componentes**: 18 cards + 6 headers + 6 footers = 30 componentes únicos
- **Características**: Sistema de modales de código, navegación SPA, diseño responsivo
- **Arquitectura**: Diseño modular basado en componentes con Vue 3 Composition API

## Estructura del Proyecto

```
src/
├── components/
│   ├── cards/              # 18 componentes de tarjetas organizados por tipo
│   │   ├── articles/       # Tarjetas de artículos (6 componentes)
│   │   │   ├── ArticleCard1.vue  # Diseño clean y moderno para blogs
│   │   │   ├── ArticleCard2.vue  # Estilo magazine vibrante
│   │   │   ├── ArticleCard3.vue  # Dark mode con tema terminal
│   │   │   ├── ArticleCard4.vue  # Diseño nature con colores emerald
│   │   │   ├── ArticleCard5.vue  # Estilo newspaper clásico
│   │   │   └── ArticleCard6.vue  # Tema futurista holográfico
│   │   ├── products/       # Tarjetas de productos (6 componentes)
│   │   │   ├── ProductCard1.vue  # Diseño moderno con gradientes azules
│   │   │   ├── ProductCard2.vue  # Estilo magazine con overlays
│   │   │   ├── ProductCard3.vue  # Tema futurista holográfico
│   │   │   ├── ProductCard4.vue  # Diseño cyberpunk con neon
│   │   │   ├── ProductCard5.vue  # Estilo minimalista glassmorphism
│   │   │   └── ProductCard6.vue  # Tema espacial con scanner
│   │   └── profiles/       # Tarjetas de perfiles (6 componentes)
│   │       ├── ProfileCard1.vue  # Glassmorphism con efectos 3D
│   │       ├── ProfileCard2.vue  # Neumorphism suave elegante
│   │       ├── ProfileCard3.vue  # Tema retro-futurista vibrante
│   │       ├── ProfileCard4.vue  # Diseño warm con gradientes cálidos
│   │       ├── ProfileCard5.vue  # Estilo corporativo moderno
│   │       └── ProfileCard6.vue  # Terminal/tech style con código
│   ├── headfoot/           # 12 componentes de layout (headers y footers)
│   │   ├── headers/        # Headers temáticos (6 componentes)
│   │   │   ├── Header1.vue       # Header minimalista con neumorfismo
│   │   │   ├── Header2.vue       # Header gaming cyberpunk con neon
│   │   │   ├── Header3.vue       # Header artístico con efectos pintura
│   │   │   ├── Header4.vue       # Header glassmorphism con partículas
│   │   │   ├── Header5.vue       # Header terminal con efectos matriz
│   │   │   └── Header6.vue       # Header espacial con estrellas
│   │   └── footers/        # Footers diversos (6 componentes)
│   │       ├── Footer1.vue       # Footer corporativo con columnas
│   │       ├── Footer2.vue       # Footer minimalista con enlaces
│   │       ├── Footer3.vue       # Footer social con redes sociales
│   │       ├── Footer4.vue       # Footer newsletter con suscripción
│   │       ├── Footer5.vue       # Footer completo con mapa del sitio
│   │       └── Footer6.vue       # Footer creativo con gráficos
│   ├── carousel/
│   │   └── CardCarousel.vue      # Carousel responsivo para cards
│   ├── AppHeader.vue       # Header principal de la aplicación
│   ├── AppFooter.vue       # Footer principal de la aplicación
│   ├── CodeModal.vue       # Modal para mostrar código fuente
│   ├── ComponentInstructions.vue # Componente de instrucciones reutilizable
│   └── Navigation.vue      # Navegación con dropdowns por categorías
├── views/                  # Páginas principales (SPA)
│   ├── Home.vue           # Página de inicio
│   ├── ProductCards.vue   # Galería de tarjetas de productos
│   ├── ProfileCards.vue   # Galería de tarjetas de perfiles
│   ├── ArticleCards.vue   # Galería de tarjetas de artículos
│   ├── Headers.vue        # Galería de headers temáticos
│   └── Footers.vue        # Galería de footers diversos
├── data/
│   ├── cardData.js        # Datos de ejemplo para todas las cards
│   ├── cardCodes.js       # [DEPRECATED] Archivo legacy - usar codes/ folder
│   ├── headCodes.js       # [DEPRECATED] Archivo legacy - usar codes/ folder
│   └── codes/             # 📁 NUEVA ESTRUCTURA ORGANIZADA DE CÓDIGOS
│       ├── cards/         # Códigos de componentes de tarjetas
│       │   ├── index.js   # Exportaciones centralizadas de todos los códigos
│       │   ├── articles/  # Códigos de tarjetas de artículos
│       │   │   ├── ArticleCard1.js  # Código sin modal del componente
│       │   │   ├── ArticleCard2.js  # Código sin modal del componente
│       │   │   ├── ArticleCard3.js  # Código sin modal del componente
│       │   │   ├── ArticleCard4.js  # Código sin modal del componente
│       │   │   ├── ArticleCard5.js  # Código sin modal del componente
│       │   │   └── ArticleCard6.js  # Código sin modal del componente
│       │   ├── products/  # Códigos de tarjetas de productos
│       │   │   ├── ProductCard1.js  # Código sin modal del componente
│       │   │   ├── ProductCard2.js  # Código sin modal del componente
│       │   │   ├── ProductCard3.js  # Código sin modal del componente
│       │   │   ├── ProductCard4.js  # Código sin modal del componente
│       │   │   ├── ProductCard5.js  # Código sin modal del componente
│       │   │   └── ProductCard6.js  # Código sin modal del componente
│       │   └── profiles/  # Códigos de tarjetas de perfiles
│       │       ├── ProfileCard1.js  # Código sin modal del componente
│       │       ├── ProfileCard2.js  # Código sin modal del componente
│       │       ├── ProfileCard3.js  # Código sin modal del componente
│       │       ├── ProfileCard4.js  # Código sin modal del componente
│       │       ├── ProfileCard5.js  # Código sin modal del componente
│       │       └── ProfileCard6.js  # Código sin modal del componente
│       └── headfoot/      # Códigos de headers y footers
│           ├── headers/   # Códigos de componentes de headers
│           │   ├── Header1.js     # Código del header minimalista
│           │   ├── Header2.js     # Código del header gaming
│           │   ├── Header3.js     # Código del header artístico
│           │   ├── Header4.js     # Código del header glassmorphism
│           │   ├── Header5.js     # Código del header terminal
│           │   └── Header6.js     # Código del header espacial
│           └── footers/   # Códigos de componentes de footers
│               ├── Footer1.js     # Código del footer corporativo
│               ├── Footer2.js     # Código del footer minimalista
│               ├── Footer3.js     # Código del footer social
│               ├── Footer4.js     # Código del footer newsletter
│               ├── Footer5.js     # Código del footer completo
│               └── Footer6.js     # Código del footer creativo
├── router/
│   └── index.js           # Configuración de rutas Vue Router
├── App.vue                # Componente raíz con layout principal
└── main.js                # Punto de entrada de la aplicación
```

## Stack Tecnológico

- **Vue 3** con Composition API y `<script setup>`
- **Vue Router 4** para navegación SPA
- **Vite** como build tool y servidor de desarrollo
- **Tailwind CSS v4.1** para styling responsivo y utilitario
- **Native HTML Dialog** para funcionalidad de modales

## Categorías de Componentes

### 🎴 Cards (18 componentes)

#### ProductCard (6 variantes)

- **ProductCard1**: Diseño moderno con gradientes azules
- **ProductCard2**: Estilo magazine con overlays elegantes
- **ProductCard3**: Tema futurista con efectos holográficos
- **ProductCard4**: Diseño cyberpunk con animaciones neon
- **ProductCard5**: Estilo minimalista con glassmorphism
- **ProductCard6**: Tema espacial con efectos de scanner

#### ProfileCard (6 variantes)

- **ProfileCard1**: Glassmorphism con efectos 3D y partículas
- **ProfileCard2**: Neumorphism suave con sombras elegantes
- **ProfileCard3**: Tema retro-futurista con colores vibrantes
- **ProfileCard4**: Diseño warm con gradientes cálidos
- **ProfileCard5**: Estilo corporativo moderno y limpio
- **ProfileCard6**: Terminal/tech style con efectos de código

#### ArticleCard (6 variantes)

- **ArticleCard1**: Diseño clean y moderno para blogs
- **ArticleCard2**: Estilo magazine vibrante con tipografía destacada
- **ArticleCard3**: Dark mode con tema terminal y efectos matrix
- **ArticleCard4**: Diseño nature con colores emerald y orgánicos
- **ArticleCard5**: Estilo newspaper clásico y elegante
- **ArticleCard6**: Tema futurista holográfico con animaciones

### 🔝 Headers (6 componentes temáticos)

- **Header1**: Minimalista - Diseño limpio con efectos neumorfismo
- **Header2**: Gaming - Tema cyberpunk con efectos neon y terminal
- **Header3**: Artístico - Estilo creativo con efectos de pintura
- **Header4**: Glassmorphism - Diseño moderno con partículas flotantes
- **Header5**: Terminal - Interfaz de terminal con efectos matriz
- **Header6**: Espacial - Tema galáctico con estrellas animadas

### 🔻 Footers (6 componentes diversos)

- **Footer1**: Diseño corporativo con múltiples columnas
- **Footer2**: Estilo minimalista con enlaces esenciales
- **Footer3**: Footer social con énfasis en redes sociales
- **Footer4**: Diseño newsletter con suscripción destacada
- **Footer5**: Footer completo con mapa del sitio
- **Footer6**: Estilo creativo con elementos gráficos

## Guías de Estilo de Código

### Componentes Vue

- Usar Composition API con sintaxis `<script setup>`
- Implementar función `showCode()` para todos los componentes con modal
- Usar `ref()` para referencias de modal: `const codeModal = ref(null)`
- Seguir mejores prácticas de Vue 3 y patrones de reactividad

### Styling

- Usar exclusivamente clases utilitarias de Tailwind CSS
- Implementar diseño responsivo (`sm:`, `md:`, `lg:` breakpoints)
- Usar esquemas de colores semánticos por tipo de componente
- Aplicar efectos hover y transiciones suaves

### Accesibilidad

- Incluir `cursor-pointer` en botones interactivos
- Proporcionar tooltips con `title` y atributos `aria-label`
- Usar estructura HTML semántica

## Arquitectura de Componentes

### Componentes de Cards - NUEVA ESTRUCTURA ORGANIZADA

- **Estructura por Categorías**: Las cards están organizadas en 3 carpetas temáticas
  - `src/components/cards/articles/` - Tarjetas de artículos y contenido
  - `src/components/cards/products/` - Tarjetas de productos comerciales
  - `src/components/cards/profiles/` - Tarjetas de perfiles de usuario
- **Consistencia de Diseño**: Cada categoría mantiene 6 variantes numeradas (Card1-Card6)
- **Integración Modal**: Todos los componentes incluyen integración con CodeModal
- **Rutas de Importación**: Ajustadas para la nueva estructura anidada
- **Props Específicas**: Cada tipo acepta objetos de datos correspondientes (`article`, `product`, `profile`)

### Códigos de Componentes - NUEVA ESTRUCTURA ORGANIZADA

- **Estructura Jerárquica**: `src/data/codes/` contiene toda la organización de códigos
- **Separación por Tipo**:
  - `codes/cards/` - Todos los códigos de tarjetas organizados por subcategorías
  - `codes/headfoot/` - Headers y footers separados en carpetas específicas
- **Archivos Individuales**: Cada componente tiene su propio archivo `.js`
- **Sin Lógica Modal**: Los códigos excluyen botones modales y funcionalidad de modales
- **Exportación Default**: Todos los archivos usan `export default` para consistencia
- **Centralización**: `codes/cards/index.js` actúa como punto central de exportación

### Sistema de Modales

- **CodeModal Component**: Modal reutilizable para mostrar código fuente
- **Native Dialog**: Usa elemento HTML `<dialog>` para mejor accesibilidad
- **Almacenamiento de Código**: Templates de componentes almacenados en archivos de datos
- **Sin Lógica Modal**: El código mostrado excluye botón modal y funcionalidad

### Gestión de Datos

- **cardData.js**: Datos de ejemplo para todos los tipos de tarjetas
- **Estructura Deprecated**: `cardCodes.js` y `headCodes.js` son archivos legacy
- **Nueva Organización**: Todo el código está en `src/data/codes/` con estructura jerárquica
- **Patrones de Importación**:

  ```javascript
  // Para tarjetas de artículos
  import ArticleCard1Code from '../data/codes/cards/articles/ArticleCard1.js'

  // Para tarjetas de productos
  import ProductCard1Code from '../data/codes/cards/products/ProductCard1.js'
  import ProductCard1 from '../components/cards/products/ProductCard1.vue'

  // Para tarjetas de perfiles
  import ProfileCard1Code from '../data/codes/cards/profiles/ProfileCard1.js'
  import ProfileCard1 from '../components/cards/profiles/ProfileCard1.vue'

  // Para headers
  import Header1Code from '../data/codes/headfoot/headers/Header1.js'
  import Header1 from '../components/headfoot/headers/Header1.vue'

  // Para footers
  import Footer1Code from '../data/codes/headfoot/footers/Footer1.js'
  import Footer1 from '../components/headfoot/footers/Footer1.vue'
  ```

### Sistema de Rutas

- **Vue Router 4**: Configuración SPA con rutas dinámicas
- **Navegación por Categorías**: Sistema de dropdown con indicadores de estado
- **Meta Tags**: Títulos dinámicos y metadata por ruta
- **Lazy Loading**: Carga de componentes bajo demanda

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

// Definición de props
defineProps({
  /* ... */
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

```vue
<template>
  <!-- Contenido del header/footer -->
</template>

<script setup>
// Lógica específica del componente
</script>

<style scoped>
/* Estilos específicos si son necesarios */
</style>
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
- **Importante**: El código que se coloca en archivos de data/codes debe estar en sus respectivas carpetas, bien organizadas y mantenibles, si hace falta crear una carpeta, hazlo. El código de los archivos debe ser exactamente igual al del componente que se quiere replicar, excluyendo el botón de modal y su lógica, también las importaciones innecesarias.
  Los comentarios deben estar en castellano.
- **Estructura de Códigos**:
  - Cards por categorías: `codes/cards/articles/`, `codes/cards/products/`, `codes/cards/profiles/`
  - Headers y footers: `codes/headfoot/headers/`, `codes/headfoot/footers/`
  - Cada componente tiene su propio archivo individual con `export default`
- **Rutas de Importación**: Usar paths relativos correctos desde las vistas hacia los códigos
- **Organización Modular**: Mantener separación clara entre tipos de componentes

## Mejores Prácticas Específicas

### Componentes

- Los componentes deben tener los mismos estilos en su estructura, deben importar el componente de instrucciones y estas tener el mismo color que su elemento siguiente.

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
