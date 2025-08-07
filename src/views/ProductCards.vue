<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Hero Section -->
      <section class="relative py-20 sm:py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span class="block">Product Card</span>
              <span class="block text-blue-600">Gallery</span>
            </h1>
            <p
              class="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Una colección de tarjetas de productos modernas e interactivas
              construidas con
              <span class="font-semibold text-green-600">Vue 3</span>,
              <span class="font-semibold text-purple-600">Vite</span> y
              <span class="font-semibold text-blue-600">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </section>

      <!-- Instructions -->
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div class="flex items-start">
          <svg
            class="w-6 h-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <h3 class="text-lg font-semibold text-blue-900 mb-2">
              Cómo usar estos componentes
            </h3>
            <p class="text-blue-800 mb-3">
              Haz clic en el icono de código (🔍) en cualquier tarjeta para ver
              el código fuente completo del componente.
            </p>
            <div class="text-sm text-blue-700">
              <p>
                <strong>Tecnologías:</strong> Vue 3 (Composition API), Tailwind
                CSS v4.1
              </p>
              <p>
                <strong>Características:</strong> Responsive design, efectos
                hover, modal de código integrado
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop: Carousel View -->
      <div class="hidden lg:block">
        <CardCarousel
          :items="products"
          title="Productos - Vista Carrusel"
          description="Navega entre los diferentes diseños usando las flechas o los indicadores"
          :autoPlay="false"
        >
          <template #default="{ item, index }">
            <component :is="getProductComponent(index)" :product="item" />
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
            Vista en cuadrícula de todos los componentes disponibles
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="(product, index) in products"
            :key="product.id"
            class="bg-white rounded-xl shadow-lg p-6"
          >
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                ProductCard{{ index + 1 }}
              </h3>
              <p class="text-sm text-gray-600">
                {{ getCardDescription(index) }}
              </p>
            </div>

            <div class="transform scale-90 origin-top">
              <component :is="getProductComponent(index)" :product="product" />
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
              ProductCard{{ index + 1 }}
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
import ProductCard1 from "../components/cards/ProductCard1.vue";
import ProductCard2 from "../components/cards/ProductCard2.vue";
import ProductCard3 from "../components/cards/ProductCard3.vue";
import ProductCard4 from "../components/cards/ProductCard4.vue";
import ProductCard5 from "../components/cards/ProductCard5.vue";
import ProductCard6 from "../components/cards/ProductCard6.vue";
import { cardData } from "../data/cardData.js";

// Datos de productos
const products = computed(() => cardData.products);

// Componentes de productos
const productComponents = [
  ProductCard1,
  ProductCard2,
  ProductCard3,
  ProductCard4,
  ProductCard5,
  ProductCard6,
];

// Función para obtener el componente correcto
const getProductComponent = (index) => {
  return productComponents[index] || ProductCard1;
};

// Descripciones de las tarjetas
const getCardDescription = (index) => {
  const descriptions = [
    "Diseño minimalista con imagen grande",
    "Estilo moderno con gradientes",
    "Diseño compacto con información destacada",
    "Estilo premium con efectos visuales",
    "Diseño clásico con bordes redondeados",
    "Estilo futurista con elementos interactivos",
  ];
  return descriptions[index] || "Diseño único";
};

// Información detallada de componentes
const componentInfo = [
  {
    description:
      "Diseño limpio y minimalista con imagen prominente y información esencial.",
    style: "Minimalista",
    features: "Imagen grande, tipografía clara, CTA destacado",
  },
  {
    description:
      "Estilo moderno con gradientes sutiles y efectos de hover suaves.",
    style: "Moderno",
    features: "Gradientes, animaciones, diseño responsive",
  },
  {
    description:
      "Diseño compacto que maximiza la información en espacio reducido.",
    style: "Compacto",
    features: "Layout eficiente, iconografía, colores vibrantes",
  },
  {
    description:
      "Estilo premium con sombras profundas y efectos visuales elegantes.",
    style: "Premium",
    features: "Sombras avanzadas, efectos 3D, acabados de lujo",
  },
  {
    description:
      "Diseño clásico con bordes redondeados y paleta de colores tradicional.",
    style: "Clásico",
    features: "Bordes suaves, colores neutros, layout equilibrado",
  },
  {
    description:
      "Estilo futurista con elementos interactivos y efectos de neón.",
    style: "Futurista",
    features: "Efectos neón, interactividad avanzada, diseño sci-fi",
  },
];
</script>
