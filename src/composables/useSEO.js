import { onMounted } from 'vue'

export function useSEO({
  title = 'Component Gallery - Colección de Componentes Vue 3',
  description = 'Galería completa de 30 componentes UI únicos con Vue 3, Tailwind CSS y efectos modernos. Cards, Headers, Footers, Sliders, Carousels y más.',
  keywords = 'vue 3, tailwind css, componentes ui, cards, headers, footers, slider, carousel, glassmorphism, frontend, desarrollo web',
  image = '/logo.svg',
  url = window.location.href,
  type = 'website',
  siteName = 'Component Gallery',
  twitterCard = 'summary_large_image',
  structuredData = null
}) {

  const updateMetaTag = (name, content, property = false) => {
    if (!content) return

    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`
    let meta = document.querySelector(selector)

    if (!meta) {
      meta = document.createElement('meta')
      if (property) {
        meta.setAttribute('property', name)
      } else {
        meta.setAttribute('name', name)
      }
      document.head.appendChild(meta)
    }

    meta.setAttribute('content', content)
  }

  const updateLinkTag = (rel, href) => {
    if (!href) return

    let link = document.querySelector(`link[rel="${rel}"]`)

    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', rel)
      document.head.appendChild(link)
    }

    link.setAttribute('href', href)
  }

  const setStructuredData = (data) => {
    if (!data) return

    // Eliminar script existente
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

  onMounted(() => {
    // Título de la página
    document.title = title

    // Meta tags básicos
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', 'Component Gallery Team')
    updateMetaTag('robots', 'index, follow')
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0')

    // Open Graph
    updateMetaTag('og:title', title, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:url', url, true)
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:site_name', siteName, true)
    updateMetaTag('og:locale', 'es_ES', true)

    // Twitter Card
    updateMetaTag('twitter:card', twitterCard)
    updateMetaTag('twitter:title', title)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', image)
    updateMetaTag('twitter:site', '@componentgallery')
    updateMetaTag('twitter:creator', '@componentgallery')

    // Canonical URL
    updateLinkTag('canonical', url)

    // Structured Data
    if (structuredData) {
      setStructuredData(structuredData)
    }
  })

  return {
    updateMetaTag,
    updateLinkTag,
    setStructuredData
  }
}

// Configuraciones SEO predefinidas por página
export const seoConfigs = {
  home: {
    title: 'Component Gallery - 30 Componentes Vue 3 con Tailwind CSS',
    description: 'Descubre una colección completa de 30 componentes UI únicos: Cards, Headers, Footers, Sliders, Carousels y efectos modernos con Vue 3 y Tailwind CSS.',
    keywords: 'vue 3 componentes, tailwind css gallery, ui components, glassmorphism, frontend components, vue cards, vue headers, vue footers',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Component Gallery",
      "description": "Galería completa de componentes UI modernos con Vue 3 y Tailwind CSS",
      "url": "https://componentgallery.netlify.app",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://componentgallery.netlify.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  },

  products: {
    title: 'Tarjetas de Productos - 6 Diseños únicos Vue 3 | Component Gallery',
    description: '6 componentes de tarjetas de productos modernos para e-commerce. Diseños responsivos con Tailwind CSS, efectos hover y glassmorphism.',
    keywords: 'tarjetas producto vue, product cards tailwind, e-commerce components, vue 3 product cards, tailwind product design',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Tarjetas de Productos",
      "description": "Colección de 6 tarjetas de productos modernas para e-commerce",
      "numberOfItems": 6
    }
  },

  profiles: {
    title: 'Tarjetas de Perfil - 6 Diseños de Usuario Vue 3 | Component Gallery',
    description: '6 componentes de tarjetas de perfil elegantes. Perfectos para equipos, redes sociales y directorios con Vue 3 y Tailwind CSS.',
    keywords: 'profile cards vue, user cards tailwind, team cards components, vue 3 profile design, social cards ui',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Tarjetas de Perfil",
      "description": "Colección de 6 tarjetas de perfil para equipos y usuarios",
      "numberOfItems": 6
    }
  },

  articles: {
    title: 'Tarjetas de Artículos - 6 Diseños de Contenido Vue 3 | Component Gallery',
    description: '6 componentes de tarjetas de artículos para blogs y noticias. Diseños modernos con Vue 3, Tailwind CSS y efectos interactivos.',
    keywords: 'article cards vue, blog cards tailwind, content cards components, vue 3 article design, news cards ui',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Tarjetas de Artículos",
      "description": "Colección de 6 tarjetas de artículos para blogs y contenido",
      "numberOfItems": 6
    }
  },

  headers: {
    title: 'Headers Modernos - 6 Navegaciones Vue 3 | Component Gallery',
    description: '6 componentes de header responsivos para sitios web. Navegaciones modernas con Vue 3, Tailwind CSS y efectos glassmorphism.',
    keywords: 'headers vue 3, navigation tailwind, header components, vue navbar, responsive header design',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Headers",
      "description": "Colección de 6 headers modernos para navegación web",
      "numberOfItems": 6
    }
  },

  footers: {
    title: 'Footers Elegantes - 6 Pies de Página Vue 3 | Component Gallery',
    description: '6 componentes de footer profesionales. Diseños completos con enlaces, redes sociales y información legal usando Vue 3 y Tailwind CSS.',
    keywords: 'footers vue 3, footer tailwind css, footer components, vue footer design, responsive footer',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Footers",
      "description": "Colección de 6 footers elegantes para sitios web",
      "numberOfItems": 6
    }
  },

  sliders: {
    title: 'Sliders Interactivos - 6 Componentes Vue 3 | Component Gallery',
    description: '6 sliders modernos con controles intuitivos. Perfectos para testimonios, contenido y promociones con Vue 3 y Tailwind CSS.',
    keywords: 'sliders vue 3, carousel tailwind, slider components, vue slider design, interactive sliders',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Sliders",
      "description": "Colección de 6 sliders interactivos",
      "numberOfItems": 6
    }
  },

  carousels: {
    title: 'Carousels Avanzados - 6 Galerías Vue 3 | Component Gallery',
    description: '6 carousels responsivos para mostrar contenido. Galerías modernas con navegación táctil usando Vue 3 y Tailwind CSS.',
    keywords: 'carousels vue 3, gallery tailwind, carousel components, vue gallery design, responsive carousels',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Carousels",
      "description": "Colección de 6 carousels para galerías de contenido",
      "numberOfItems": 6
    }
  },

  effects: {
    title: 'Efectos de Imagen - Zoom y Hover Vue 3 | Component Gallery',
    description: 'Efectos interactivos para imágenes: zoom con lupa, hover modernos y transiciones suaves con Vue 3 y CSS avanzado.',
    keywords: 'image effects vue, hover effects tailwind, zoom effect vue, css transforms, interactive images',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Efectos de Imagen",
      "description": "Colección de efectos interactivos para imágenes",
      "numberOfItems": 2
    }
  }
}