<template>
  <div class="transparent-headers">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Sección de Carousels -->
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
              class="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"
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
      <ComponentInstructions theme="purple" />

      <!-- Casos de Uso Recomendados -->
      <RecommendedUseCases type="carousels" />

      <!-- Tecnologías Utilizadas -->
      <TechnologiesUsed type="interactions" title="Tecnologías de Carousel" />

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
import { useSEO, seoConfigs } from "../data/useSEO.js";
import RecommendedUseCases from "../components/RecommendedUseCases.vue";
import TechnologiesUsed from "../components/TechnologiesUsed.vue";
import Carousel1 from "../components/sliderCarousel/carousels/Carousel1.vue";
import Carousel2 from "../components/sliderCarousel/carousels/Carousel2.vue";
import Carousel3 from "../components/sliderCarousel/carousels/Carousel3.vue";
import Carousel4 from "../components/sliderCarousel/carousels/Carousel4.vue";
import Carousel5 from "../components/sliderCarousel/carousels/Carousel5.vue";
import Carousel6 from "../components/sliderCarousel/carousels/Carousel6.vue";

// Componentes de Carousels
const carouselComponents = [
  Carousel1,
  Carousel2,
  Carousel3,
  Carousel4,
  Carousel5,
  Carousel6,
];

// Datos de headers
const carouselData = [
  { id: 1, name: "Carousel 3D", component: "Carousel1" },
  { id: 2, name: "Carousel 5D", component: "Carousel2" },
  { id: 3, name: "Carousel Cartas", component: "Carousel3" },
  { id: 4, name: "Carousel Perruno", component: "Carousel4" },
  { id: 5, name: "Carousel Burritos", component: "Carousel5" },
  { id: 6, name: "Carousel Paisajes", component: "Carousel6" },
];

// Función para obtener el componente correcto
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