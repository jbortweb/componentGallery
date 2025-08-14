<template>
  <div class="transparent-products">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Desktop: Carousel View -->
      <div class="hidden lg:block">
        <CardCarousel
          :items="Array(6).fill({})"
          title="Productos - Vista Carrusel"
          description="Descubre los diferentes estilos para presentar productos comerciales"
          :autoPlay="false"
        >
          <template #default="{ index }">
            <component :is="getProductComponent(index)" />
          </template>
        </CardCarousel>
      </div>

      <!-- Tablet & Mobile: Grid View -->
      <div class="lg:hidden">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">Todos los Diseños</h2>
          <p class="text-gray-300">
            Vista en cuadrícula de todos los componentes de producto disponibles
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="index in 6"
            :key="index"
            class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl shadow-lg p-6"
          >
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-white mb-2">
                ProductCard{{ index }}
              </h3>
            </div>

            <div class="transform scale-90 origin-top">
              <component :is="getProductComponent(index - 1)" />
            </div>
          </div>
        </div>
      </div>

      <!-- Instructions -->
      <ComponentInstructions theme="blue" />

      <!-- Casos de Uso Recomendados -->
      <div
        class="mt-12 backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 shadow-2xl"
      >
        <h2 class="text-2xl font-bold text-white mb-6 text-center">
          Casos de Uso Recomendados
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">E-commerce</h3>
            <p class="text-sm text-gray-300 mt-1">
              Tiendas online y catálogos de productos
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
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
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Apps Móviles</h3>
            <p class="text-sm text-gray-300 mt-1">
              Showcases de aplicaciones y features
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Servicios</h3>
            <p class="text-sm text-gray-300 mt-1">
              Páginas de servicios profesionales
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Portfolios</h3>
            <p class="text-sm text-gray-300 mt-1">
              Showcases creativos y proyectos destacados
            </p>
          </div>
        </div>
      </div>

      <!-- Back to Categories -->
      <div class="mt-12 text-center">
        <router-link
          to="/"
          class="inline-flex items-center px-6 py-3 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl text-base font-medium text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
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
import CardCarousel from "../components/cardCarousel/CardCarousel.vue";
import ComponentInstructions from "../components/ComponentInstructions.vue";
import ProductCard1 from "../components/cards/products/ProductCard1.vue";
import ProductCard2 from "../components/cards/products/ProductCard2.vue";
import ProductCard3 from "../components/cards/products/ProductCard3.vue";
import ProductCard4 from "../components/cards/products/ProductCard4.vue";
import ProductCard5 from "../components/cards/products/ProductCard5.vue";
import ProductCard6 from "../components/cards/products/ProductCard6.vue";

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
</script>

<style scoped>
.transparent-products {
  background: transparent;
  min-height: 100vh;
  position: relative;
}

/* Animación de rotación lateral como moneda */
.coin-flip {
  transform-style: preserve-3d;
  transition: transform 0.5s linear;
}

.coin-flip:hover {
  transform: rotateY(360deg);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-image-section {
    margin: 0 1rem 3rem 1rem;
  }
}
</style>
