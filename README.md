# 🎨 Component Cards Gallery

Una galería interactiva de componentes de tarjetas construida con **Vue 3**, **Vite** y **Tailwind CSS** que demuestra 18 diseños únicos con funcionalidad de visualización de código y presentación en carousel⭐ **¡Si te gusta este proyecto, no olvides darle una estrella en GitHub!** ⭐

## 🎨 Personalización

### Modificar Datos

Edita `src/data/cardData.js` para añadir o modificar las tarjetas:

```javascript
export const cardData = {
  products: [
    {
      id: 1,
      title: 'Tu Producto',
      description: 'Descripción del producto',
      price: '$99',
      image: 'url-de-imagen',
      // ... más propiedades
    },
  ],
  // ... otras categorías
}
```

### Añadir Nuevos Tipos de Tarjetas

1. Crear un nuevo componente en `src/components/cards/`
2. Añadir los datos en `src/data/cardData.js`
3. Actualizar la navegación en `src/components/Navigation.vue`
4. Integrar en `src/App.vue`

### Personalizar Estilos

El proyecto utiliza Tailwind CSS. Puedes:

- Modificar las clases de Tailwind existentes
- Añadir estilos personalizados en `src/style.css`
- Configurar Tailwind en `tailwind.config.js` (si es necesario)

## 📱 Responsividad

El proyecto está optimizado para diferentes tamaños de pantalla:

- **Escritorio**: 3 tarjetas por vista en carousel
- **Tableta**: 2 tarjetas por vista
- **Móvil**: Vista de rejilla vertical adaptativa

## 🛠️ Desarrollo

### Comandos de Desarrollo Adicionales

```bash
# Instalar dependencias específicas
npm install [nombre-paquete]

# Actualizar dependencias
npm update

# Verificar dependencias obsoletas
npm outdated

# Limpiar caché de node_modules
npm ci
```

## 🧪 Testing (Opcional)

Para añadir pruebas al proyecto:

```bash
# Instalar Vitest para testing
npm install -D vitest @vue/test-utils jsdom

# Instalar Cypress para E2E testing
npm install -D cypress
```

## 🎯 Próximas Características

- [ ] Sistema de temas (claro/oscuro)
- [ ] Filtros avanzados por categoría
- [ ] Búsqueda en tiempo real
- [ ] Favoritos persistentes
- [ ] Compartir tarjetas individuales
- [ ] Modo presentación fullscreen

## 🙏 Reconocimientos

- **Vue.js** - Framework progresivo y potente
- **Vite** - Herramienta de desarrollo ultrarrápida
- **Tailwind CSS** - Framework de CSS utilitario
- **Heroicons** - Iconos SVG elegantes

## 💬 Soporte

Si tienes preguntas o necesitas ayuda:

- 📧 **Email**: [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)
- 💬 **Discord**: Tu servidor de Discord
- 📱 **Twitter**: [@tu-twitter](https://twitter.com/tu-twitter)
- 🐛 **Issues**: [Reportar problemas](https://github.com/tu-usuario/componentCards/issues)

---

**Hecho con ❤️ y Vue 3 en España** Características Principales

- � **18 Componentes Únicos**: 6 tarjetas de productos, 6 de perfiles y 6 de artículos
- 📄 **Visualización de Código**: Modal integrado que muestra el código fuente de cada componente
- 🎠 **Carousel Responsivo**: Navegación suave con controles adaptativos por dispositivo
- � **Diseño Mobile-First**: Optimizado para todos los tamaños de pantalla
- ♿ **Accesibilidad**: Implementado con mejores prácticas de accesibilidad web
- ⚡ **Alto Rendimiento**: Construido con Vite para carga ultrarrápida
- 🎨 **Diseños Variados**: Estilos modernos, glassmorphism, dark mode, futurista y más

## 🛠️ Stack Tecnológico

- **Vue 3** con Composition API y `<script setup>`
- **Vite** como build tool y servidor de desarrollo
- **Tailwind CSS v4.1** para diseño utilitario y responsivo
- **JavaScript ES6+** con sintaxis moderna

## 🚀 Instalación y Uso

### Prerrequisitos

- **Node.js** (versión 18 o superior)
- **npm** o **yarn**

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd componentCards

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar la build de producción
npm run preview
```

## 📁 Estructura del Proyecto

```
componentCards/
├── src/
│   ├── components/
│   │   ├── cards/              # 18 componentes de tarjetas
│   │   │   ├── ProductCard1-6.vue     # Tarjetas de productos
│   │   │   ├── ProfileCard1-6.vue     # Tarjetas de perfiles
│   │   │   └── ArticleCard1-6.vue     # Tarjetas de artículos
│   │   ├── carousel/
│   │   │   └── CardCarousel.vue       # Componente de carousel
│   │   ├── CodeModal.vue              # Modal para mostrar código
│   │   └── Navigation.vue             # Navegación de categorías
│   ├── data/
│   │   ├── cardData.js               # Datos de ejemplo
│   │   └── cardCodes.js              # Códigos fuente para modales
│   ├── App.vue                       # Componente principal
│   └── main.js                       # Punto de entrada
├── .github/
│   └── copilot-instructions.md       # Instrucciones para GitHub Copilot
└── README.md                         # Este archivo
```

## 🎭 Tipos de Tarjetas

### �️ Product Cards (Tarjetas de Productos)

- **ProductCard1**: Diseño moderno con gradientes
- **ProductCard2**: Estilo magazine con overlays
- **ProductCard3**: Tema futurista con efectos
- **ProductCard4**: Diseño holográfico con animaciones
- **ProductCard5**: Estilo minimalista elegante
- **ProductCard6**: Tema cyberpunk con scanning effects

### 👤 Profile Cards (Tarjetas de Perfiles)

- **ProfileCard1**: Glassmorphism con efectos 3D
- **ProfileCard2**: Neumorphism suave y elegante
- **ProfileCard3**: Tema retro-futurista
- **ProfileCard4**: Diseño warm con gradientes cálidos
- **ProfileCard5**: Estilo corporativo moderno
- **ProfileCard6**: Terminal/tech style con efectos de código

### 📰 Article Cards (Tarjetas de Artículos)

- **ArticleCard1**: Diseño clean y moderno
- **ArticleCard2**: Estilo magazine vibrante
- **ArticleCard3**: Dark mode con tema terminal
- **ArticleCard4**: Diseño nature con colores emerald
- **ArticleCard5**: Estilo newspaper clásico
- **ArticleCard6**: Tema futurista holográfico

## 🔧 Funcionalidades Técnicas

### Sistema de Modales de Código

Cada tarjeta incluye un botón que muestra el código fuente del componente:

- 🖱️ **Accesibilidad mejorada**: Cursor pointer, tooltips y aria-labels
- 📄 **Código limpio**: Se muestra sin la lógica del modal
- 🎨 **Sintaxis resaltada**: Presentación clara del código
- ✨ **Diseño responsivo**: Modal adaptativo a todos los dispositivos

### Carousel Adaptativo

- 📱 **Mobile**: Vista de rejilla vertical
- 💻 **Tablet**: 2 elementos por vista
- 🖥️ **Desktop**: 3 elementos por vista
- 🎮 **Controles intuitivos**: Navegación con flechas y dots

### Navegación por Categorías

- 🔄 **Cambio dinámico**: Filtrado reactivo por tipo
- 🎯 **Estado activo**: Indicador visual de categoría seleccionada
- ⚡ **Transiciones suaves**: Animaciones fluidas entre categorías

## 🎨 Guía de Desarrollo

### Estructura de Componentes de Tarjeta

Todos los componentes de tarjeta siguen este patrón consistente:

```vue
<template>
  <!-- Contenido de la tarjeta -->

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
import { cardCodes } from '../../data/cardCodes.js'

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

### Estándares de Código

- ✅ **Composition API**: Uso exclusivo de `<script setup>`
- ✅ **Accesibilidad**: Implementación completa de ARIA y semántica
- ✅ **Responsividad**: Mobile-first con breakpoints de Tailwind
- ✅ **Consistencia**: Patrón uniforme en todos los componentes
- ✅ **Performance**: Optimizaciones de Vue 3 y lazy loading

## 📋 Scripts Disponibles

```bash
# Desarrollo con hot reload
npm run dev

# Build para producción
npm run build

# Preview de la build
npm run preview

# Linting (si está configurado)
npm run lint
```

## 🌟 Características de Accesibilidad

- ♿ **Navegación por teclado**: Totalmente accesible
- 🔊 **Screen readers**: Etiquetas ARIA completas
- 🎯 **Focus management**: Indicadores visuales claros
- 📱 **Touch targets**: Áreas de toque optimizadas
- 🎨 **Contraste**: Cumple con estándares WCAG

## 🚀 Performance

- ⚡ **Lazy loading**: Carga de componentes bajo demanda
- 🗜️ **Optimización de bundle**: Tree shaking automático
- 📱 **Responsive images**: Carga adaptativa de imágenes
- 💾 **Caching**: Estrategias de cache optimizadas

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## � Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙋‍♂️ Autor

**Tu Nombre**

- GitHub: [@tu-username](https://github.com/tu-username)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)

---

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella en GitHub!** ⭐
src/
├── components/
│ ├── cards/
│ │ ├── ProductCard.vue # Tarjeta de producto
│ │ ├── ProfileCard.vue # Tarjeta de perfil
│ │ └── ArticleCard.vue # Tarjeta de artículo
│ ├── carousel/
│ │ └── CardCarousel.vue # Componente de carousel
│ └── Navigation.vue # Navegación principal
├── data/
│ └── cardData.js # Datos mock para las tarjetas
├── App.vue # Componente principal
├── main.js # Punto de entrada
└── style.css # Estilos globales

````

## 🎯 Componentes Principales

### ProductCard

Tarjeta diseñada para mostrar productos con:

- Imagen del producto
- Información de precio y valoraciones
- Botones de acción (añadir al carrito, favoritos)
- Efectos hover interactivos

### ProfileCard

Tarjeta de perfil profesional con:

- Avatar y información personal
- Habilidades y tecnologías
- Enlaces a redes sociales
- Diseño con gradiente atractivo

### ArticleCard

Tarjeta de artículo/blog con:

- Imagen destacada
- Metadatos (autor, fecha, tiempo de lectura)
- Tags categorizados
- Estadísticas de engagement

### CardCarousel

Carousel avanzado con:

- Navegación por flechas y indicadores
- Autoplay opcional
- Navegación por teclado
- Barra de progreso
- Completamente responsivo

## 🎨 Personalización

### Modificar Datos

Edita `src/data/cardData.js` para añadir o modificar las tarjetas:

```javascript
export const cardData = {
  products: [
    {
      id: 1,
      title: 'Tu Producto',
      description: 'Descripción del producto',
      price: '$99',
      image: 'url-de-imagen',
      // ... más propiedades
    },
  ],
  // ... otras categorías
}
````

### Añadir Nuevos Tipos de Tarjetas

1. Crear un nuevo componente en `src/components/cards/`
2. Añadir los datos en `src/data/cardData.js`
3. Actualizar la navegación en `src/components/Navigation.vue`
4. Integrar en `src/App.vue`

### Personalizar Estilos

El proyecto utiliza Tailwind CSS. Puedes:

- Modificar las clases de Tailwind existentes
- Añadir estilos personalizados en `src/style.css`
- Configurar Tailwind en `tailwind.config.js` (si se crea)

## 📱 Responsividad

El proyecto está optimizado para diferentes tamaños de pantalla:

- **Desktop**: 3 tarjetas por fila en carousel
- **Tablet**: 2 tarjetas por fila
- **Mobile**: 1 tarjeta por fila, vista grid por defecto

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Reconocimientos

- Vue.js por el excelente framework
- Tailwind CSS por el sistema de diseño
- Unsplash por las imágenes de ejemplo 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).
