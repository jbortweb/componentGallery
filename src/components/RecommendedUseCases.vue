<template>
  <div
    class="mt-12 backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 shadow-2xl"
  >
    <h2 class="text-2xl font-bold text-white mb-6 text-center">
      Casos de Uso Recomendados
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="useCase in useCases" :key="useCase.id" class="text-center">
        <div
          class="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
          :class="useCase.gradient"
        >
          <svg
            class="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="useCase.iconPath"
            />
          </svg>
        </div>
        <h3 class="font-semibold text-white">{{ useCase.title }}</h3>
        <p class="text-sm text-gray-300 mt-1">
          {{ useCase.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "products", // products, profiles, articles, headers, footers, effects, sliders, carousels
    validator: (value) =>
      [
        "products",
        "profiles",
        "articles",
        "headers",
        "footers",
        "effects",
        "sliders",
        "carousels",
      ].includes(value),
  },
});

// Configuración de casos de uso por tipo de componente
const useCaseConfigs = {
  products: [
    {
      id: 1,
      title: "E-commerce",
      description: "Tiendas online y catálogos de productos",
      iconPath: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Apps Móviles",
      description: "Showcases de aplicaciones y features",
      iconPath:
        "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Servicios",
      description: "Páginas de servicios profesionales",
      iconPath:
        "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Portfolios",
      description: "Showcases creativos y proyectos destacados",
      iconPath:
        "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
  ],
  profiles: [
    {
      id: 1,
      title: "Redes Sociales",
      description: "Plataformas sociales y comunidades",
      iconPath:
        "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20a3 3 0 01-3-3v-2a3 3 0 013-3h7a3 3 0 013 3v2a3 3 0 01-3 3H7z",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Equipos",
      description: "Páginas de equipo y staff corporativo",
      iconPath:
        "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Directorios",
      description: "Listados de profesionales y contactos",
      iconPath:
        "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Testimonios",
      description: "Secciones de testimonios y reseñas",
      iconPath:
        "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
  ],
  articles: [
    {
      id: 1,
      title: "Blogs",
      description: "Artículos y publicaciones de blog",
      iconPath:
        "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Noticias",
      description: "Portales informativos y noticias",
      iconPath:
        "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Documentación",
      description: "Guías técnicas y documentación",
      iconPath:
        "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Educación",
      description: "Plataformas educativas y cursos",
      iconPath:
        "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z",
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
  ],
  headers: [
    {
      id: 1,
      title: "Landing Pages",
      description: "Páginas de aterrizaje y marketing",
      iconPath:
        "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "E-commerce",
      description: "Tiendas online y marketplaces",
      iconPath: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Corporativo",
      description: "Sitios empresariales y profesionales",
      iconPath:
        "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Portfolios",
      description: "Sitios creativos y showcases",
      iconPath:
        "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
  ],
  footers: [
    {
      id: 1,
      title: "Información Legal",
      description: "Políticas, términos y condiciones",
      iconPath:
        "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Redes Sociales",
      description: "Enlaces a perfiles sociales",
      iconPath:
        "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Contacto",
      description: "Información de contacto y ubicación",
      iconPath:
        "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Newsletter",
      description: "Suscripciones y formularios",
      iconPath:
        "M15 17h5l-5 5v-5zM4.828 17.172a4 4 0 010-5.656L8 8.343V12h-2a2 2 0 002-2V7.172l2.828 2.828a4 4 0 010 5.656l-4.828 4.828z",
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
  ],
  effects: [
    {
      id: 1,
      title: "Galleries",
      description: "Galerías de imágenes interactivas",
      iconPath:
        "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "E-commerce",
      description: "Vistas de productos con zoom",
      iconPath: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Portfolios",
      description: "Showcases creativos y artísticos",
      iconPath:
        "M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 110 2h-1v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6H3a1 1 0 110-2h4z",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Interfaces",
      description: "Efectos UI y microinteracciones",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
  ],
  sliders: [
    {
      id: 1,
      title: "Landing Pages",
      description: "Secciones hero y banners principales",
      iconPath: "M4 6h16M4 10h16M4 14h16M4 18h16",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Testimonios",
      description: "Carruseles de reseñas y opiniones",
      iconPath:
        "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Contenido",
      description: "Deslizadores de artículos y posts",
      iconPath:
        "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Promociones",
      description: "Ofertas y contenido promocional",
      iconPath:
        "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
  ],
  carousels: [
    {
      id: 1,
      title: "Productos",
      description: "Showcases de productos y servicios",
      iconPath: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Galerías",
      description: "Colecciones de imágenes y medios",
      iconPath:
        "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Equipos",
      description: "Presentación de miembros y staff",
      iconPath:
        "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20a3 3 0 01-3-3v-2a3 3 0 013-3h7a3 3 0 013 3v2a3 3 0 01-3 3H7z",
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "Destacados",
      description: "Contenido principal y featured",
      iconPath:
        "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-500",
    },
  ],
};

const useCases = computed(() => {
  return useCaseConfigs[props.type] || useCaseConfigs.products;
});
</script>

<style scoped>
/* Animación de rotación lateral como moneda */
.coin-flip {
  transform-style: preserve-3d;
  transition: transform 0.5s linear;
}

.coin-flip:hover {
  transform: rotateY(360deg);
}
</style>