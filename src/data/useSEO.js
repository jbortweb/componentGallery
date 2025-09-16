// Composable para gestión de SEO
import { onMounted, nextTick } from 'vue'

// Función para actualizar meta tags
const updateMetaTag = (name, content, property = false) => {
  let selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
  let meta = document.querySelector(selector)

  if (meta) {
    meta.setAttribute('content', content)
  } else {
    meta = document.createElement('meta')
    if (property) {
      meta.setAttribute('property', name)
    } else {
      meta.setAttribute('name', name)
    }
    meta.setAttribute('content', content)
    document.head.appendChild(meta)
  }
}

// Función para inyectar structured data
const injectStructuredData = (data) => {
  // Remover structured data existente
  const existingScript = document.querySelector('script[type="application/ld+json"]')
  if (existingScript) {
    existingScript.remove()
  }

  // Crear nuevo script
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(data)
  document.head.appendChild(script)
}

// Composable principal
export const useSEO = (config) => {
  onMounted(async () => {
    await nextTick()

    // Actualizar título
    if (config.title) {
      document.title = config.title
    }

    // Meta tags básicos
    if (config.description) {
      updateMetaTag('description', config.description)
    }

    if (config.keywords) {
      updateMetaTag('keywords', config.keywords)
    }

    // Open Graph
    if (config.ogTitle) {
      updateMetaTag('og:title', config.ogTitle, true)
    }

    if (config.ogDescription) {
      updateMetaTag('og:description', config.ogDescription, true)
    }

    if (config.ogImage) {
      updateMetaTag('og:image', config.ogImage, true)
    }

    if (config.ogUrl) {
      updateMetaTag('og:url', config.ogUrl, true)
    }

    updateMetaTag('og:type', config.ogType || 'website', true)
    updateMetaTag('og:site_name', 'Component Gallery', true)

    // Twitter Cards
    updateMetaTag('twitter:card', 'summary_large_image')
    if (config.twitterTitle) {
      updateMetaTag('twitter:title', config.twitterTitle)
    }
    if (config.twitterDescription) {
      updateMetaTag('twitter:description', config.twitterDescription)
    }
    if (config.twitterImage) {
      updateMetaTag('twitter:image', config.twitterImage)
    }

    // Structured Data
    if (config.structuredData) {
      injectStructuredData(config.structuredData)
    }
  })
}

// Configuraciones predefinidas para cada página
export const seoConfigs = {
  home: {
    title: 'Component Gallery - Galería de Componentes UI Modernos',
    description: 'Descubre 30+ componentes UI únicos construidos con Vue 3, Vite y Tailwind CSS. Cards, headers, footers y efectos glassmorphism para tus proyectos web.',
    keywords: 'component gallery, vue 3, tailwind css, ui components, glassmorphism, cards, headers, footers, vite, frontend',
    ogTitle: 'Component Gallery - Galería de Componentes UI Modernos',
    ogDescription: 'Descubre 30+ componentes UI únicos construidos con Vue 3, Vite y Tailwind CSS. Cards, headers, footers y efectos glassmorphism.',
    ogImage: '/img/og-home.jpg',
    ogUrl: 'https://component-gallery.netlify.app/',
    twitterTitle: 'Component Gallery - Galería de Componentes UI Modernos',
    twitterDescription: 'Descubre 30+ componentes UI únicos construidos con Vue 3, Vite y Tailwind CSS.',
    twitterImage: '/img/twitter-home.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Component Gallery",
      "description": "Galería de componentes UI modernos construidos con Vue 3 y Tailwind CSS",
      "url": "https://component-gallery.netlify.app/",
      "author": {
        "@type": "Organization",
        "name": "Component Gallery Team"
      },
      "keywords": "vue 3, tailwind css, ui components, glassmorphism, frontend development"
    }
  },

  products: {
    title: 'Product Cards - Tarjetas de Productos | Component Gallery',
    description: 'Explora 6 diseños únicos de tarjetas de productos con efectos glassmorphism y animaciones modernas. Perfectas para e-commerce y catálogos.',
    keywords: 'product cards, tarjetas de productos, e-commerce, vue 3, tailwind css, glassmorphism, component gallery',
    ogTitle: 'Product Cards - Tarjetas de Productos Modernas',
    ogDescription: 'Explora 6 diseños únicos de tarjetas de productos con efectos glassmorphism y animaciones modernas.',
    ogImage: '/img/og-products.jpg',
    ogUrl: 'https://component-gallery.netlify.app/products',
    twitterTitle: 'Product Cards - Tarjetas de Productos Modernas',
    twitterDescription: 'Explora 6 diseños únicos de tarjetas de productos con efectos glassmorphism.',
    twitterImage: '/img/twitter-products.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Product Cards Gallery",
      "description": "Colección de tarjetas de productos modernas con Vue 3 y Tailwind CSS",
      "url": "https://component-gallery.netlify.app/products",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 6,
        "itemListElement": [
          {
            "@type": "SoftwareSourceCode",
            "name": "Product Card 1",
            "description": "Tarjeta de producto con diseño glassmorphism",
            "programmingLanguage": "Vue.js"
          }
        ]
      }
    }
  },

  profiles: {
    title: 'Profile Cards - Tarjetas de Perfiles | Component Gallery',
    description: 'Descubre 6 variaciones de tarjetas de perfiles con diseños glassmorphism. Ideales para equipos, testimonios y redes sociales.',
    keywords: 'profile cards, tarjetas de perfiles, team cards, testimonios, vue 3, tailwind css, glassmorphism',
    ogTitle: 'Profile Cards - Tarjetas de Perfiles Elegantes',
    ogDescription: 'Descubre 6 variaciones de tarjetas de perfiles con diseños glassmorphism.',
    ogImage: '/img/og-profiles.jpg',
    ogUrl: 'https://component-gallery.netlify.app/profiles',
    twitterTitle: 'Profile Cards - Tarjetas de Perfiles Elegantes',
    twitterDescription: 'Descubre 6 variaciones de tarjetas de perfiles con diseños glassmorphism.',
    twitterImage: '/img/twitter-profiles.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Profile Cards Gallery",
      "description": "Colección de tarjetas de perfiles modernas con Vue 3 y Tailwind CSS",
      "url": "https://component-gallery.netlify.app/profiles"
    }
  },

  articles: {
    title: 'Article Cards - Tarjetas de Artículos | Component Gallery',
    description: 'Explora 6 estilos de tarjetas para artículos y contenido editorial. Diseños glassmorphism perfectos para blogs y publicaciones.',
    keywords: 'article cards, tarjetas de artículos, blog cards, contenido editorial, vue 3, tailwind css, glassmorphism',
    ogTitle: 'Article Cards - Tarjetas de Artículos Modernas',
    ogDescription: 'Explora 6 estilos de tarjetas para artículos y contenido editorial.',
    ogImage: '/img/og-articles.jpg',
    ogUrl: 'https://component-gallery.netlify.app/articles',
    twitterTitle: 'Article Cards - Tarjetas de Artículos Modernas',
    twitterDescription: 'Explora 6 estilos de tarjetas para artículos y contenido editorial.',
    twitterImage: '/img/twitter-articles.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Article Cards Gallery",
      "description": "Colección de tarjetas de artículos modernas con Vue 3 y Tailwind CSS",
      "url": "https://component-gallery.netlify.app/articles"
    }
  },

  headers: {
    title: 'Headers - Cabeceras Modernas | Component Gallery',
    description: 'Descubre 6 diseños de headers con navegación responsive y efectos glassmorphism. Perfectos para cualquier sitio web moderno.',
    keywords: 'headers, cabeceras, navegación, responsive design, vue 3, tailwind css, glassmorphism, component gallery',
    ogTitle: 'Headers - Cabeceras Modernas y Responsive',
    ogDescription: 'Descubre 6 diseños de headers con navegación responsive y efectos glassmorphism.',
    ogImage: '/img/og-headers.jpg',
    ogUrl: 'https://component-gallery.netlify.app/headers',
    twitterTitle: 'Headers - Cabeceras Modernas y Responsive',
    twitterDescription: 'Descubre 6 diseños de headers con navegación responsive y efectos glassmorphism.',
    twitterImage: '/img/twitter-headers.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Headers Gallery",
      "description": "Colección de cabeceras modernas con Vue 3 y Tailwind CSS",
      "url": "https://component-gallery.netlify.app/headers"
    }
  },

  footers: {
    title: 'Footers - Pies de Página Elegantes | Component Gallery',
    description: 'Explora 6 variaciones de footers con diseños glassmorphism. Links organizados, información de contacto y estilos modernos.',
    keywords: 'footers, pies de página, footer design, vue 3, tailwind css, glassmorphism, component gallery',
    ogTitle: 'Footers - Pies de Página Elegantes',
    ogDescription: 'Explora 6 variaciones de footers con diseños glassmorphism.',
    ogImage: '/img/og-footers.jpg',
    ogUrl: 'https://component-gallery.netlify.app/footers',
    twitterTitle: 'Footers - Pies de Página Elegantes',
    twitterDescription: 'Explora 6 variaciones de footers con diseños glassmorphism.',
    twitterImage: '/img/twitter-footers.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Footers Gallery",
      "description": "Colección de pies de página modernos con Vue 3 y Tailwind CSS",
      "url": "https://component-gallery.netlify.app/footers"
    }
  },

  sliders: {
    title: 'Sliders - Deslizadores Interactivos | Component Gallery',
    description: 'Descubre 6 tipos de sliders con controles interactivos y transiciones suaves. Perfectos para galerías de imágenes y contenido.',
    keywords: 'sliders, deslizadores, image sliders, vue 3, tailwind css, component gallery, interactive components',
    ogTitle: 'Sliders - Deslizadores Interactivos',
    ogDescription: 'Descubre 6 tipos de sliders con controles interactivos y transiciones suaves.',
    ogImage: '/img/og-sliders.jpg',
    ogUrl: 'https://component-gallery.netlify.app/sliders',
    twitterTitle: 'Sliders - Deslizadores Interactivos',
    twitterDescription: 'Descubre 6 tipos de sliders con controles interactivos y transiciones suaves.',
    twitterImage: '/img/twitter-sliders.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Sliders Gallery",
      "description": "Colección de deslizadores interactivos con Vue 3 y Tailwind CSS",
      "url": "https://component-gallery.netlify.app/sliders"
    }
  },

  carousels: {
    title: 'Carousels - Carruseles Modernos | Component Gallery',
    description: 'Explora 6 diseños de carousels con autoplay y navegación táctil. Componentes perfectos para showcases y presentaciones.',
    keywords: 'carousels, carruseles, autoplay, navigation, vue 3, tailwind css, component gallery, touch navigation',
    ogTitle: 'Carousels - Carruseles Modernos',
    ogDescription: 'Explora 6 diseños de carousels con autoplay y navegación táctil.',
    ogImage: '/img/og-carousels.jpg',
    ogUrl: 'https://component-gallery.netlify.app/carousels',
    twitterTitle: 'Carousels - Carruseles Modernos',
    twitterDescription: 'Explora 6 diseños de carousels con autoplay y navegación táctil.',
    twitterImage: '/img/twitter-carousels.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Carousels Gallery",
      "description": "Colección de carruseles modernos con Vue 3 y Tailwind CSS",
      "url": "https://component-gallery.netlify.app/carousels"
    }
  },

  effects: {
    title: 'Image Effects - Efectos de Imagen | Component Gallery',
    description: 'Descubre efectos interactivos para imágenes como zoom lens y hover animations. Perfectos para portfolios y galerías.',
    keywords: 'image effects, efectos de imagen, zoom lens, hover effects, vue 3, tailwind css, interactive images',
    ogTitle: 'Image Effects - Efectos de Imagen Interactivos',
    ogDescription: 'Descubre efectos interactivos para imágenes como zoom lens y hover animations.',
    ogImage: '/img/og-effects.jpg',
    ogUrl: 'https://component-gallery.netlify.app/image-effects',
    twitterTitle: 'Image Effects - Efectos de Imagen Interactivos',
    twitterDescription: 'Descubre efectos interactivos para imágenes como zoom lens y hover animations.',
    twitterImage: '/img/twitter-effects.jpg',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Image Effects Gallery",
      "description": "Colección de efectos de imagen interactivos con Vue 3 y Tailwind CSS",
      "url": "https://component-gallery.netlify.app/image-effects"
    }
  }
}