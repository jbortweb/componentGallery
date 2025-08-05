# Card Gallery - Galería de Componentes Vue 3

Una moderna galería de tarjetas construida con Vue 3, Vite y Tailwind CSS que demuestra diferentes tipos de componentes card con funcionalidad de carousel interactivo.

## ✨ Características

- 🎨 **Diseño Moderno**: Interfaz limpia y atractiva con Tailwind CSS
- 🎠 **Carousel Interactivo**: Navegación suave con controles y indicadores
- 📊 **Múltiples Tipos de Tarjetas**: Productos, perfiles y artículos
- 📱 **Completamente Responsivo**: Adaptado para todos los dispositivos
- ⚡ **Alto Rendimiento**: Construido con Vite para desarrollo rápido
- 🔧 **Arquitectura Escalable**: Componentes modulares y reutilizables

## 🛠️ Tecnologías

- **Vue 3** - Framework progresivo de JavaScript
- **Vite** - Build tool rápido y moderno
- **Tailwind CSS** - Framework de CSS utilitario
- **Composition API** - API moderna de Vue 3

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

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
src/
├── components/
│   ├── cards/
│   │   ├── ProductCard.vue    # Tarjeta de producto
│   │   ├── ProfileCard.vue    # Tarjeta de perfil
│   │   └── ArticleCard.vue    # Tarjeta de artículo
│   ├── carousel/
│   │   └── CardCarousel.vue   # Componente de carousel
│   └── Navigation.vue         # Navegación principal
├── data/
│   └── cardData.js           # Datos mock para las tarjetas
├── App.vue                   # Componente principal
├── main.js                   # Punto de entrada
└── style.css                 # Estilos globales
```

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
