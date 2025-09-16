// Composable para optimizaciones de rendimiento y SEO
import { onMounted, nextTick } from 'vue'

export const usePerformance = () => {

  // Función para lazy loading de imágenes
  const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]')

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove('lazy')
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach(img => imageObserver.observe(img))
  }

  // Función para preload de recursos críticos
  const preloadCriticalResources = (resources = []) => {
    resources.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = resource.href
      link.as = resource.as
      if (resource.type) link.type = resource.type
      document.head.appendChild(link)
    })
  }

  // Función para optimizar Core Web Vitals
  const optimizeWebVitals = () => {
    // Preconectar a dominios externos
    const domains = ['fonts.googleapis.com', 'fonts.gstatic.com']
    domains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'preconnect'
      link.href = `https://${domain}`
      link.crossOrigin = 'anonymous'
      document.head.appendChild(link)
    })

    // Optimizar carga de fonts
    const fontLink = document.createElement('link')
    fontLink.rel = 'preload'
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    fontLink.as = 'style'
    fontLink.onload = function () { this.rel = 'stylesheet' }
    document.head.appendChild(fontLink)
  }

  // Función para medir Core Web Vitals con APIs nativas
  const measureWebVitals = () => {
    // Usar PerformanceObserver nativo para medir métricas
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      try {
        // Medir LCP (Largest Contentful Paint)
        const lcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('LCP:', entry.startTime)
          }
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // Medir FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.log('FID:', entry.processingStart - entry.startTime)
          }
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Medir CLS (Cumulative Layout Shift)
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              console.log('CLS:', entry.value)
            }
          }
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

      } catch (error) {
        console.log('Performance measurement not fully supported')
      }
    }
  }

  onMounted(async () => {
    await nextTick()

    // Aplicar optimizaciones
    lazyLoadImages()
    optimizeWebVitals()

    // Medir performance en desarrollo
    if (import.meta.env.DEV) {
      measureWebVitals()
    }
  })

  return {
    lazyLoadImages,
    preloadCriticalResources,
    optimizeWebVitals,
    measureWebVitals
  }
}