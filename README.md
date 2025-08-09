# 🎨 Component Gallery

Una galería interactiva construida con **Vue 3**, **Vite** y **Tailwind CSS** que demuestra **30 componentes únicos** organizados en tres categorías principales: Cards, Headers y Footers.

## ✨ Características Principales

- 🎴 **18 Tarjetas**: 6 productos, 6 perfiles y 6 artículos con diseños modernos
- 🔝 **6 Headers Temáticos**: Desde minimalista hasta espacial
- 🔻 **6 Footers Diversos**: Estilos variados para diferentes aplicaciones
- 📄 **Visualización de Código**: Modal integrado con código fuente
- 🎠 **Navegación SPA**: Sistema de rutas con Vue Router
- 📱 **Diseño Responsivo**: Optimizado para todos los dispositivos
- ⚡ **Alto Rendimiento**: Construido con Vite

## 🛠️ Stack Tecnológico

- **Vue 3** con Composition API
- **Vue Router 4** para navegación
- **Vite** como build tool
- **Tailwind CSS** para styling

## 🚀 Instalación

```bash
# Clonar e instalar
git clone https://github.com/jbortweb/componentGallery.git
cd componentGallery
npm install

# Desarrollo
npm run dev

# Producción
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── cards/                  # 18 tarjetas organizadas por tipo
│   │   ├── articles/           # 6 tarjetas de artículos
│   │   ├── products/           # 6 tarjetas de productos
│   │   └── profiles/           # 6 tarjetas de perfiles
│   ├── headfoot/               # Headers y footers
│   │   ├── headers/            # 6 headers temáticos
│   │   └── footers/            # 6 footers diversos
│   ├── carousel/               # Componente carousel
│   └── CodeModal.vue           # Modal de código
├── views/                      # Páginas SPA
├── data/codes/                 # Códigos fuente organizados
└── router/                     # Configuración de rutas
```

## 🎭 Catálogo de Componentes

### 🛒 Product Cards

6 diseños únicos: Moderno, Magazine, Futurista, Cyberpunk, Minimalista, Espacial

### 👤 Profile Cards

6 estilos variados: Glassmorphism, Neumorphism, Retro-futurista, Warm, Corporativo, Terminal

### 📰 Article Cards

6 variantes: Clean, Magazine, Dark terminal, Nature, Newspaper, Holográfico

### 🔝 Headers

6 temas: Minimalista, Gaming, Artístico, Glassmorphism, Terminal, Espacial

### 🔻 Footers

6 tipos: Corporativo, Minimalista, Social, Newsletter, Completo, Creativo

## 🎯 Próximos Objetivos

- [ ] **Formularios**: Componentes de login, registro, contacto y checkout
- [ ] **Artículos**: Layouts de blog, revista y documentación
- [ ] **Menús**: Navegación horizontal, vertical y mega-menús
- [ ] **Sidebars**: Paneles de navegación y filtros
- [ ] **Modales**: Confirmaciones, galerías y notificaciones
- [ ] **Tablas**: Data tables, pricing y comparativas
- [ ] **Hero Sections**: Banners principales con diferentes layouts
- [ ] **Call-to-Actions**: Botones y secciones de conversión

## 🙋‍♂️ Autor

**Jordi Bort**

- 🐙 GitHub: [@jbortweb](https://github.com/jbortweb)
- 💼 LinkedIn: [Jordi Bort](https://www.linkedin.com/in/jordi-bort/)
- 🌐 Portafolio: [portafoliojbortweb.netlify.app](https://portafoliojbortweb.netlify.app/)
- 📋 Vida Laboral: [vida-laboral.netlify.app](https://vida-laboral.netlify.app/)
- 📧 Email: jbortweb@gmail.com

---

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!** ⭐

## 🎨 Desarrollo

### Patrón de Componentes

Todos los componentes de cards siguen un patrón consistente con modal integrado. Los headers y footers no incluyen modal pero su código se almacena en `headCodes.js`.

### Añadir Componentes

1. **Cards**: Crear en `cards/`, añadir datos en `cardData.js`, código en `cardCodes.js`
2. **Headers/Footers**: Crear en `headfoot/`, código en `headCodes.js`

### Personalización

- **Datos**: Editar `src/data/cardData.js`
- **Estilos**: Usar clases Tailwind o CSS custom en `style.css`
- **Rutas**: Configurar en `src/router/index.js`

## 🌟 Características Avanzadas

- **Accesibilidad**: ARIA completo, navegación por teclado, WCAG 2.1 AA
- **Performance**: Lazy loading, tree shaking, bundle optimizado
- **Responsive**: Breakpoints Tailwind (sm, md, lg, xl)

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

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'feat: nueva funcionalidad'`)
4. Push y crear Pull Request

## 📄 Licencia

MIT License - ver `LICENSE` para detalles.

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!** ⭐
