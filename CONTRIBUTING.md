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

## 📋 Tipos de Contribuciones

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

1. Crear componente en `src/components/cards/`
2. Seguir el patrón de modal existente
3. Añadir datos de ejemplo en `src/data/cardData.js`
4. Registrar código en `src/data/cardCodes.js`
5. Importar en la vista correspondiente

#### Para Headers/Footers:

1. Crear componente en `src/components/headfoot/`
2. Registrar código en `src/data/headCodes.js`
3. Importar en vista correspondiente
4. Añadir a datos del componente

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
// Importaciones ordenadas

// Props si es necesario
defineProps({
  // Props con tipos
})

// Composables y reactivity
const codeModal = ref(null)

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

```javascript
// cardData.js - Datos estructurados
export const cardData = {
  products: [
    {
      id: 1,
      title: 'Nombre del Producto',
      description: 'Descripción detallada',
      price: '€99',
      image: 'https://...',
      category: 'Categoría',
      rating: 4.5,
      reviews: 123,
    },
  ],
}

// cardCodes.js - Sin lógica de modal
export const cardCodes = {
  ProductCard1: `<template>
  <!-- Solo el contenido del componente -->
  <!-- SIN botón de modal ni CodeModal -->
</template>

<script setup>
// Solo imports necesarios
// Solo lógica del componente
</script>`,
}
```

## 🧪 Testing

```bash
# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Verificar build
npm run preview
```

### Checklist Pre-Commit

- [ ] El código sigue las convenciones del proyecto
- [ ] Los componentes son responsivos
- [ ] La accesibilidad está implementada
- [ ] Los comentarios están en español
- [ ] Los datos de ejemplo son realistas
- [ ] El código está en los archivos de datos correspondientes

## 📝 Convenciones de Commit

Usar [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: nueva tarjeta de producto con tema cyberpunk
fix: corregir responsividad en móviles
docs: actualizar README con nuevos componentes
style: mejorar espaciado en ProfileCard2
refactor: simplificar lógica de modal
test: añadir tests para CardCarousel
```

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

## ❓ ¿Necesitas Ayuda?

- 📧 **Email**: tu-email@ejemplo.com
- 💬 **Issues**: [GitHub Issues](https://github.com/tu-username/component-gallery/issues)
- 📖 **Documentación**: Revisa el README.md completo
- 🤖 **Copilot**: Revisa `.github/copilot-instructions.md`

## 🙏 Reconocimiento

Todos los contribuidores serán reconocidos en el README.md del proyecto.

---

¡Gracias por ayudar a mejorar Component Gallery! 🎨✨
