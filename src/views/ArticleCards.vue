<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <section class="relative py-20 sm:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span class="block">Article Card</span>
              <span class="block text-blue-600">Gallery</span>
            </h1>
            <p
              class="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Una colección de tarjetas de artículos modernas e interactivas
              construidas con
              <span class="font-semibold text-green-600">Vue 3</span>,
              <span class="font-semibold text-purple-600">Vite</span> y
              <span class="font-semibold text-blue-600">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </section>

      <!-- Instructions -->
      <div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div class="flex items-start">
          <svg
            class="w-6 h-6 text-green-600 mt-0.5 mr-3 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <div>
            <h3 class="text-lg font-semibold text-green-900 mb-2">
              Tarjetas de Contenido Editorial
            </h3>
            <p class="text-green-800 mb-3">
              Cada diseño incluye diferentes layouts para presentar artículos
              con imágenes, metadatos y llamadas a la acción.
            </p>
            <div class="text-sm text-green-700">
              <p>
                <strong>Incluye:</strong> Imagen destacada, título, extracto,
                metadatos, botones de acción
              </p>
              <p>
                <strong>Casos de uso:</strong> Blogs, noticias, revistas,
                documentación, portfolios
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop: Carousel View -->
      <div class="hidden lg:block">
        <CardCarousel
          :items="articles"
          title="Artículos - Vista Carrusel"
          description="Descubre los diferentes estilos para presentar contenido editorial"
          :autoPlay="false"
        >
          <template #default="{ item, index }">
            <component :is="getArticleComponent(index)" :article="item" />
          </template>
        </CardCarousel>
      </div>

      <!-- Tablet & Mobile: Grid View -->
      <div class="lg:hidden">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            Todos los Diseños
          </h2>
          <p class="text-gray-600">
            Vista en cuadrícula de todos los componentes de artículo disponibles
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(article, index) in articles"
            :key="article.id"
            class="bg-white rounded-xl shadow-lg p-6"
          >
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                ArticleCard{{ index + 1 }}
              </h3>
              <p class="text-sm text-gray-600">
                {{ getCardDescription(index) }}
              </p>
            </div>

            <div class="transform scale-90 origin-top">
              <component :is="getArticleComponent(index)" :article="article" />
            </div>
          </div>
        </div>
      </div>

      <!-- Component Info Section -->
      <div class="mt-16 bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">
          Información de los Componentes
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(info, index) in componentInfo"
            :key="index"
            class="border border-gray-200 rounded-lg p-4"
          >
            <h3 class="font-semibold text-gray-900 mb-2">
              ArticleCard{{ index + 1 }}
            </h3>
            <p class="text-sm text-gray-600 mb-3">
              {{ info.description }}
            </p>
            <div class="space-y-1">
              <p class="text-xs text-gray-500">
                <strong>Estilo:</strong> {{ info.style }}
              </p>
              <p class="text-xs text-gray-500">
                <strong>Características:</strong> {{ info.features }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Types Section -->
      <div
        class="mt-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8"
      >
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
          Tipos de Contenido Ideales
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div
              class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3"
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
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Artículos de Blog</h3>
            <p class="text-sm text-gray-600 mt-1">
              Posts, tutoriales y guías técnicas
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3"
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Noticias</h3>
            <p class="text-sm text-gray-600 mt-1">
              Artículos de actualidad e información
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3"
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Revistas</h3>
            <p class="text-sm text-gray-600 mt-1">
              Contenido editorial y publicaciones
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3"
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900">Documentación</h3>
            <p class="text-sm text-gray-600 mt-1">
              Guías, manuales y recursos técnicos
            </p>
          </div>
        </div>
      </div>

      <!-- Interactive Features -->
      <div class="mt-12 bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
          Características Interactivas
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div
              class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              Botones "Leer más"
            </h3>
            <p class="text-gray-600">
              Todos los artículos incluyen botones funcionales que dirigen al
              contenido completo
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0v16a2 2 0 002 2h6a2 2 0 002-2V4"
                />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              Metadatos Visibles
            </h3>
            <p class="text-gray-600">
              Fecha de publicación, autor, categoría y tiempo de lectura
              claramente mostrados
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                class="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">
              Efectos Hover
            </h3>
            <p class="text-gray-600">
              Animaciones suaves y efectos visuales que mejoran la experiencia
              de usuario
            </p>
          </div>
        </div>
      </div>

      <!-- Back to Categories -->
      <div class="mt-12 text-center">
        <router-link
          to="/"
          class="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
        >
          <svg
            class="mr-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver al Inicio
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import CardCarousel from "../components/carousel/CardCarousel.vue";
import ArticleCard1 from "../components/cards/ArticleCard1.vue";
import ArticleCard2 from "../components/cards/ArticleCard2.vue";
import ArticleCard3 from "../components/cards/ArticleCard3.vue";
import ArticleCard4 from "../components/cards/ArticleCard4.vue";
import ArticleCard5 from "../components/cards/ArticleCard5.vue";
import ArticleCard6 from "../components/cards/ArticleCard6.vue";
import { cardData } from "../data/cardData.js";

// Datos de artículos
const articles = computed(() => cardData.articles);

// Componentes de artículos
const articleComponents = [
  ArticleCard1,
  ArticleCard2,
  ArticleCard3,
  ArticleCard4,
  ArticleCard5,
  ArticleCard6,
];

// Función para obtener el componente correcto
const getArticleComponent = (index) => {
  return articleComponents[index] || ArticleCard1;
};

// Descripciones de las tarjetas
const getCardDescription = (index) => {
  const descriptions = [
    "Diseño limpio con imagen destacada y botón simple",
    "Layout moderno con metadatos prominentes",
    "Estilo compacto con información esencial",
    "Diseño elegante con múltiples acciones",
    "Estilo revista con tipografía destacada",
    "Diseño futurista con efectos holográficos",
  ];
  return descriptions[index] || "Diseño único";
};

// Información detallada de componentes
const componentInfo = [
  {
    description:
      "Diseño limpio y directo con imagen destacada y botón de acción simple.",
    style: "Minimalista",
    features: "Imagen grande, botón simple, layout limpio",
  },
  {
    description:
      "Layout moderno que destaca los metadatos con un diseño equilibrado.",
    style: "Moderno",
    features: "Metadatos visibles, botón estilizado, diseño responsive",
  },
  {
    description:
      "Estilo compacto que maximiza la información en espacio reducido.",
    style: "Compacto",
    features: "Layout eficiente, información esencial, botón integrado",
  },
  {
    description:
      "Diseño elegante con múltiples opciones de acción y gradientes suaves.",
    style: "Elegante",
    features: "Botones múltiples, gradientes, efectos hover",
  },
  {
    description: "Estilo revista con tipografía destacada y diseño editorial.",
    style: "Editorial",
    features: "Tipografía prominente, diseño magazine, botones duales",
  },
  {
    description:
      "Diseño futurista con efectos holográficos y elementos interactivos.",
    style: "Futurista",
    features: "Efectos holográficos, interfaz sci-fi, animaciones avanzadas",
  },
];
</script>
