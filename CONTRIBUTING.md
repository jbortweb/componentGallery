# Guía de Contribución

¡Gracias por tu interés en contribuir a Component Gallery! Este documento proporciona pautas para contribuir al proyecto.

## 🤝 Cómo Contribuir

### 1. Fork y Clone

```bash
# Fork el repositorio en GitHub
# Luego clona tu fork
git clone https://github.com/tu-username/component-gallery.git
cd component-gallery
npm install
```

### 2. Crear una Rama

```bash
git checkout -b feature/mi-nueva-caracteristica
# o
git checkout -b fix/arreglo-de-bug
```

### 3. Hacer Cambios

Sigue las [Pautas de Código](#-pautas-de-código) cuando hagas cambios.

### 4. Commit y Push

```bash
git add .
git commit -m "feat: descripción clara del cambio"
git push origin feature/mi-nueva-caracteristica
```

### 5. Crear Pull Request

- Ve a GitHub y crea un Pull Request
- Describe claramente los cambios realizados
- Incluye screenshots si hay cambios visuales

## � Estructura de Archivos y Organización

### 🏗️ Arquitectura del Proyecto

El proyecto sigue una **estructura modular organizada por tipos de componentes**:

```
src/
├── components/
│   ├── cards/                    # 📋 TARJETAS (18 componentes)
│   │   ├── articles/            # 📰 Tarjetas de artículos (6)
│   │   │   ├── ArticleCard1.vue  # Diseño clean y moderno
│   │   │   ├── ArticleCard2.vue  # Estilo magazine vibrante
│   │   │   ├── ArticleCard3.vue  # Dark mode con tema terminal
│   │   │   ├── ArticleCard4.vue  # Diseño nature con emerald
│   │   │   ├── ArticleCard5.vue  # Estilo newspaper clásico
│   │   │   └── ArticleCard6.vue  # Tema futurista holográfico
│   │   ├── products/            # 🛍️ Tarjetas de productos (6)
│   │   │   ├── ProductCard1.vue  # Gradientes azules modernos
│   │   │   ├── ProductCard2.vue  # Estilo magazine con overlays
│   │   │   ├── ProductCard3.vue  # Tema futurista holográfico
│   │   │   ├── ProductCard4.vue  # Diseño cyberpunk con neon
│   │   │   ├── ProductCard5.vue  # Minimalista glassmorphism
│   │   │   └── ProductCard6.vue  # Tema espacial con scanner
│   │   └── profiles/            # 👤 Tarjetas de perfiles (6)
│   │       ├── ProfileCard1.vue  # Glassmorphism con 3D
│   │       ├── ProfileCard2.vue  # Neumorphism suave
│   │       ├── ProfileCard3.vue  # Retro-futurista vibrante
│   │       ├── ProfileCard4.vue  # Warm con gradientes cálidos
│   │       ├── ProfileCard5.vue  # Corporativo moderno
│   │       └── ProfileCard6.vue  # Terminal/tech style
│   ├── headfoot/                # 🔝🔻 LAYOUT (12 componentes)
│   │   ├── headers/             # 6 headers temáticos
│   │   │   ├── Header1.vue      # Header minimalista
│   │   │   ├── Header2.vue      # Header gaming cyberpunk
│   │   │   ├── Header3.vue      # Header artístico
│   │   │   ├── Header4.vue      # Header glassmorphism
│   │   │   ├── Header5.vue      # Header terminal
│   │   │   └── Header6.vue      # Header espacial
│   │   └── footers/             # 6 footers diversos
│   │       ├── Footer1.vue      # Footer corporativo
│   │       ├── Footer2.vue      # Footer minimalista
│   │       ├── Footer3.vue      # Footer social
│   │       ├── Footer4.vue      # Footer newsletter
│   │       ├── Footer5.vue      # Footer completo
│   │       └── Footer6.vue      # Footer creativo
│   └── [otros componentes comunes]
├── data/
│   ├── cardData.js              # 📊 Datos de ejemplo
│   ├── codes/                   # 💾 CÓDIGOS ORGANIZADOS
│   │   ├── cards/               # Códigos de tarjetas
│   │   │   ├── articles/        # Códigos ArticleCard1-6.js
│   │   │   ├── products/        # Códigos ProductCard1-6.js
│   │   │   └── profiles/        # Códigos ProfileCard1-6.js
│   │   └── headfoot/            # Códigos headers/footers
│   │       ├── headers/         # Códigos Header1-6.js
│   │       └── footers/         # Códigos Footer1-6.js
│   └── [archivos legacy deprecated]
└── views/                       # 🖼️ Páginas SPA
    ├── ArticleCards.vue         # Galería de artículos
    ├── ProductCards.vue         # Galería de productos
    ├── ProfileCards.vue         # Galería de perfiles
    ├── Headers.vue              # Galería de headers
    └── Footers.vue              # Galería de footers
```

### 📋 Reglas de Organización

#### ✅ Para Cards (Tarjetas)

1. **Ubicación de Componentes**: `src/components/cards/[tipo]/`

   - `articles/` → Contenido, blogs, noticias
   - `products/` → Comercio, catálogos, tiendas
   - `profiles/` → Usuarios, equipos, contactos

2. **Ubicación de Códigos**: `src/data/codes/cards/[tipo]/`

   - Misma estructura que componentes
   - Un archivo `.js` por componente

3. **Nomenclatura**: `[Tipo]Card[Número].vue` (ej: `ArticleCard1.vue`)

#### ✅ Para Headers/Footers

1. **Ubicación de Componentes**: `src/components/headfoot/[tipo]/`

   - `headers/` → Header1-6.vue (componentes de header)
   - `footers/` → Footer1-6.vue (componentes de footer)

2. **Ubicación de Códigos**: `src/data/codes/headfoot/[tipo]/`

   - `headers/` → Header1-6.js (códigos de header)
   - `footers/` → Footer1-6.js (códigos de footer)

3. **Nomenclatura**: `[Tipo][Número].vue` (ej: `Header1.vue`, `Footer1.vue`)

4. **Importaciones en Vistas**:
   ```javascript
   // Componentes
   import Header1 from '../components/headfoot/headers/Header1.vue'
   import Footer1 from '../components/headfoot/footers/Footer1.vue'
   // Códigos
   import Header1Code from '../data/codes/headfoot/headers/Header1.js'
   import Footer1Code from '../data/codes/headfoot/footers/Footer1.js'
   ```

### 🔄 Rutas de Importación

#### Desde Vistas (views/) hacia Componentes:

```javascript
// Cards organizadas por tipo
import ProductCard1 from '../components/cards/products/ProductCard1.vue'
import ProfileCard2 from '../components/cards/profiles/ProfileCard2.vue'
import ArticleCard3 from '../components/cards/articles/ArticleCard3.vue'

// Headers/footers organizados por tipo
import Header1 from '../components/headfoot/headers/Header1.vue'
import Footer1 from '../components/headfoot/footers/Footer1.vue'
```

#### Desde Vistas hacia Códigos:

```javascript
// Códigos de cards por tipo
import ProductCard1Code from '../data/codes/cards/products/ProductCard1.js'
import ProfileCard2Code from '../data/codes/cards/profiles/ProfileCard2.js'
import ArticleCard3Code from '../data/codes/cards/articles/ArticleCard3.js'

// Códigos de headers/footers
import Header1Code from '../data/codes/headfoot/headers/Header1.js'
import Footer1Code from '../data/codes/headfoot/footers/Footer1.js'
```

#### Desde Cards hacia CodeModal:

````javascript
#### Desde Cards hacia CodeModal:
```javascript
// Para cards en subcarpetas (articles/, products/, profiles/)
import CodeModal from '../../CodeModal.vue'

// Para headers y footers en subcarpetas (headers/, footers/)
import CodeModal from '../../CodeModal.vue'
````

```

## �📋 Tipos de Contribuciones

### 🐛 Reportar Bugs

- Usa la plantilla de issue para bugs
- Incluye pasos para reproducir
- Proporciona información del entorno

### ✨ Nuevas Características

- Discute primero en un issue
- Sigue los patrones existentes
- Incluye documentación

### 📚 Documentación

- Mejoras en README.md
- Comentarios en código
- Ejemplos de uso

### 🎨 Nuevos Componentes

#### Para Tarjetas (Cards):

1. **Crear componente en la carpeta correspondiente**:

```

```

2. **Seguir el patrón de modal existente** (ver ejemplo en Pautas de Código)

4. **Registrar código** en la estructura organizada:

```

#### Para Headers/Footers:

1. **Crear componente** en `src/components/headfoot/`
2. **Registrar código** en la estructura separada:
   ```
   src/data/codes/headfoot/
   ├── headers/     # Header1.js - Header6.js
   └── footers/     # Footer1.js - Footer6.js
   ```
3. **Importar en vista correspondiente** usando rutas específicas:
   ```javascript
   import Header1Code from '../data/codes/headfoot/headers/Header1.js'
   import Footer1Code from '../data/codes/headfoot/footers/Footer1.js'
   ```
4. **Añadir a datos del componente** en la vista correspondiente

## 💻 Pautas de Código

### Estilo Vue

```vue
<template>
  <!-- Usar estructura semántica -->
  <div class="semantic-container">
    <!-- Contenido aquí -->

    <!-- Botón de código para cards -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 cursor-pointer"
      title="Ver código del componente"
      aria-label="Ver código del componente"
    >
      <!-- SVG icon -->
    </button>

    <!-- Modal para cards -->
    <CodeModal
      ref="codeModal"
      cardType="Tipo Card"
      cardVariant="Descripción"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CodeModal from '../../CodeModal.vue' // Ajustar path según carpeta

// Props si es necesario
defineProps({
  // Props con tipos para article, product o profile
})

// Composables y reactivity
const codeModal = ref(null)
const cardCode = componentCode // Importar desde data/codes/cards/

// Funciones
const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal()
  }
}
</script>
```

### Estilo CSS/Tailwind

```html
<!-- Mobile-first design -->
<div
  class="
  w-full p-4
  sm:p-6 sm:max-w-md
  md:max-w-lg md:p-8
  lg:max-w-xl
  hover:shadow-lg transition-all duration-300
"
>
  <!-- Contenido responsivo -->
</div>
```

### Accesibilidad

- ✅ Usar elementos semánticos HTML5
- ✅ Incluir `aria-label` en elementos interactivos
- ✅ Proporcionar `title` tooltips
- ✅ Mantener contraste adecuado
- ✅ Navegación por teclado funcional

### Datos y Códigos


### Checklist Pre-Commit

- [ ] El código sigue las convenciones del proyecto
- [ ] Los componentes son responsivos
- [ ] La accesibilidad está implementada
- [ ] Los comentarios están en español
- [ ] Los datos de ejemplo son realistas
- [ ] **El código está en los archivos organizados por carpetas:**
  - [ ] Cards en `src/data/codes/cards/[articles|products|profiles]/`
  - [ ] Headers en `src/data/codes/headfoot/headers/`
  - [ ] Footers en `src/data/codes/headfoot/footers/`
- [ ] **Los componentes están en las carpetas correctas:**
  - [ ] Cards en `src/components/cards/[articles|products|profiles]/`
  - [ ] Headers en `src/components/headfoot/headers/`
  - [ ] Footers en `src/components/headfoot/footers/`
- [ ] **Las rutas de importación son correctas** para la estructura anidada
- [ ] **Los códigos NO incluyen** lógica de modal ni botones de código

## 📝 Convenciones de Commit

Usar [Conventional Commits](https://www.conventionalcommits.org/):


### Tipos de Commit

- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato/estilo
- `refactor`: Refactorización de código
- `test`: Añadir o modificar tests
- `chore`: Mantenimiento general

## 🎯 Estándares de Calidad

### Performance

- ⚡ Lazy loading cuando sea posible
- 🗜️ Optimización de imágenes
- 📦 Bundle size optimizado
- 🔄 Evitar re-renderizados innecesarios

### Responsividad

- 📱 Mobile-first approach
- 🖥️ Testear en múltiples dispositivos
- 📐 Usar breakpoints de Tailwind
- 🎨 Mantener legibilidad en todos los tamaños

### Accesibilidad

- ♿ Cumplir WCAG 2.1 AA
- ⌨️ Navegación por teclado
- 🔊 Compatibilidad con screen readers
- 🎯 Focus management apropiado

## 🚫 Qué NO hacer

- ❌ No usar librerías externas innecesarias
- ❌ No romper la consistencia visual
- ❌ No ignorar la responsividad
- ❌ No incluir lógica de modal en archivos de datos
- ❌ No usar comentarios en inglés
- ❌ No subir archivos de configuración personal
- ❌ **No colocar componentes en carpetas incorrectas**
- ❌ **No mezclar tipos de componentes** en carpetas incorrectas
- ❌ **No olvidar actualizar rutas** al mover o crear componentes

## ❓ ¿Necesitas Ayuda?

- 📧 **Email**: jbortweb@gmail.com
- 💬 **Issues**: [GitHub Issues](https://github.com/jbortweb/component-gallery/issues)
- 📖 **Documentación**: Revisa el README.md completo
- 🤖 **Copilot**: Revisa `.github/copilot-instructions.md`

## 🙏 Reconocimiento

Todos los contribuidores serán reconocidos en el README.md del proyecto.

---

¡Gracias por ayudar a mejorar Component Gallery! 🎨✨
