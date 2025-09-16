<template>
  <div class="transparent-profiles">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Desktop: Carousel View -->
      <div class="hidden lg:block">
        <CardCarousel
          :items="Array(6).fill({})"
          title="Perfiles - Vista Carrusel"
          description="Explora los diferentes estilos de tarjetas de perfil profesional"
          :autoPlay="false"
        >
          <template #default="{ index }">
            <component :is="getProfileComponent(index)" />
          </template>
        </CardCarousel>
      </div>

      <!-- Tablet & Mobile: Grid View -->
      <div class="lg:hidden">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">Todos los Diseños</h2>
          <p class="text-gray-300">
            Vista en cuadrícula de todos los componentes de perfil disponibles
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
                ProfileCard{{ index }}
              </h3>
            </div>

            <div class="transform scale-90 origin-top">
              <component :is="getProfileComponent(index - 1)" />
            </div>
          </div>
        </div>
      </div>

      <!-- Instructions -->
      <ComponentInstructions theme="purple" />

      <!-- Casos de Uso Recomendados -->
      <RecommendedUseCases type="profiles" />

      <!-- Tecnologías Utilizadas -->
      <TechnologiesUsed type="vue" />

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
import { useSEO, seoConfigs } from "../composables/useSEO.js";
import CardCarousel from "../components/cardCarousel/CardCarousel.vue";
import ComponentInstructions from "../components/ComponentInstructions.vue";
import RecommendedUseCases from "../components/RecommendedUseCases.vue";
import TechnologiesUsed from "../components/TechnologiesUsed.vue";
import ProfileCard1 from "../components/cards/profiles/ProfileCard1.vue";
import ProfileCard2 from "../components/cards/profiles/ProfileCard2.vue";
import ProfileCard3 from "../components/cards/profiles/ProfileCard3.vue";
import ProfileCard4 from "../components/cards/profiles/ProfileCard4.vue";
import ProfileCard5 from "../components/cards/profiles/ProfileCard5.vue";
import ProfileCard6 from "../components/cards/profiles/ProfileCard6.vue";

// SEO para la página de perfiles
useSEO(seoConfigs.profiles);

// Componentes de perfiles
const profileComponents = [
  ProfileCard1,
  ProfileCard2,
  ProfileCard3,
  ProfileCard4,
  ProfileCard5,
  ProfileCard6,
];

// Función para obtener el componente correcto
const getProfileComponent = (index) => {
  return profileComponents[index] || ProfileCard1;
};
</script>

<style scoped>
.transparent-profiles {
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