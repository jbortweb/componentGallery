<template>
  <div class="transparent-headers">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Sección de Headers -->
      <div class="space-y-16">
        <div
          v-for="(slider, index) in sliderData"
          :key="slider.id"
          class="w-full"
        >
          <!-- Título centrado y elegante -->
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-white mb-2">
              {{ slider.name }}
            </h3>
            <div
              class="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"
            ></div>
          </div>

          <!-- Componente slider -->
          <div
            class="w-[95%] mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-2xl overflow-hidden"
          >
            <component :is="getSliderComponent(index)" />
          </div>
        </div>
      </div>

      <!-- Instructions -->
      <ComponentInstructions theme="purple" />

      <!-- Casos de Uso Recomendados -->
      <RecommendedUseCases type="sliders" />

      <!-- Tecnologías Utilizadas -->
      <TechnologiesUsed type="interactions" title="Tecnologías de Slider" />

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
import Slider1 from "../components/sliderCarousel/slider/Slider1.vue";
import Slider2 from "../components/sliderCarousel/slider/Slider2.vue";
import Slider3 from "../components/sliderCarousel/slider/Slider3.vue";
import Slider4 from "../components/sliderCarousel/slider/Slider4.vue";
import Slider5 from "../components/sliderCarousel/slider/Slider5.vue";
import Slider6 from "../components/sliderCarousel/slider/Slider6.vue";

// SEO para la página de sliders
useSEO(seoConfigs.sliders);

// Componentes de sliders
const sliderComponents = [Slider1, Slider2, Slider3, Slider4, Slider5, Slider6];

// Datos de sliders
const sliderData = [
  { id: 1, name: "Slider Minimalista", component: "Slider1" },
  { id: 2, name: "Slider Separado", component: "Slider2" },
  { id: 3, name: "Slider Círculo", component: "Slider3" },
  { id: 4, name: "Slider Cortina", component: "Slider4" },
  { id: 5, name: "Slider difuminado", component: "Slider5" },
  { id: 6, name: "Slider lego", component: "Slider6" },
];

// Función para obtener el componente correcto
const getSliderComponent = (index) => {
  return sliderComponents[index] || Slider1;
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