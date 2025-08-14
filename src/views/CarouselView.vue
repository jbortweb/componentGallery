<template>
  <div class="transparent-headers">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Sección de Carouseles -->
      <div class="space-y-16">
        <div
          v-for="(carousel, index) in carouselData"
          :key="carousel.id"
          class="w-full"
        >
          <!-- Título centrado y elegante -->
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-white mb-2">
              {{ carousel.name }}
            </h3>
            <div
              class="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
            ></div>
          </div>
          <!-- Componente carousel -->
          <div
            class="w-[95%] mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-2xl overflow-hidden"
          >
            <component :is="getCarouselComponent(index)" />
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
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-5 0-9-4-9-9m9 9c5 0 9-4 9-9m-9 9V3m0 9H3"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Portfolios Creativos</h3>
            <p class="text-sm text-gray-300 mt-1">
              Presentación visual de proyectos y galerías
            </p>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
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
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Landing Pages</h3>
            <p class="text-sm text-gray-300 mt-1">
              Promoción de productos y servicios visuales
            </p>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
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
              Catálogo de productos y galerías de imágenes
            </p>
          </div>
          <div class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
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
            <h3 class="font-semibold text-white">Blogs Visuales</h3>
            <p class="text-sm text-gray-300 mt-1">
              Galerías de fotos y contenido multimedia
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
import ComponentInstructions from "../components/ComponentInstructions.vue";
import Carousel1 from "../components/slider&carousel/Carousel1.vue";
import Carousel2 from "../components/slider&carousel/Carousel2.vue";
import Carousel3 from "../components/slider&carousel/Carousel3.vue";
import Carousel4 from "../components/slider&carousel/Carousel4.vue";
import Carousel5 from "../components/slider&carousel/Carousel5.vue";
import Carousel6 from "../components/slider&carousel/Carousel6.vue";

const carouselComponents = [
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel4,
  Carousel5,
  Carousel6,
];

const carouselData = [
  { id: 1, name: "Carousel Perspectiva 3D", component: "Carousel1" },
  { id: 2, name: "Carousel Coverflow 3D", component: "Carousel2" },
  { id: 3, name: "Carousel Flip Card Radial", component: "Carousel3" },
  {
    id: 4,
    name: "Carousel Minimalista con Miniaturas",
    component: "Carousel4",
  },
  { id: 5, name: "Carousel Redondo con Hover", component: "Carousel5" },
  { id: 6, name: "Carousel Spinning 3D", component: "Carousel6" },
];

const getCarouselComponent = (index) => {
  return carouselComponents[index] || Carousel1;
};
</script>

<style scoped>
.transparent-headers {
  background: transparent;
  min-height: 100vh;
  position: relative;
}
.coin-flip {
  transform-style: preserve-3d;
  transition: transform 0.5s linear;
}
.coin-flip:hover {
  transform: rotateY(360deg);
}
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
