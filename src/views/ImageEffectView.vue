<template>
  <div class="transparent-image-effects">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Sección de Image Effects -->
      <div class="space-y-16">
        <div
          v-for="(effect, index) in imageEffectData"
          :key="effect.id"
          class="w-full"
        >
          <!-- Título centrado y elegante -->
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-white mb-2">
              {{ effect.name }}
            </h3>
            <div
              class="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
            ></div>
          </div>

          <!-- Componente image effect centrado -->
          <div class="flex justify-center items-center min-h-[400px] p-8">
            <component :is="getImageEffectComponent(index)" />
          </div>
        </div>
      </div>

      <!-- Instructions -->
      <ComponentInstructions theme="purple" />

      <!-- Casos de Uso Recomendados -->
      <RecommendedUseCases type="effects" />

      <!-- Tecnologías Utilizadas -->
      <TechnologiesUsed type="effects" title="Tecnologías y Efectos" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSEO, seoConfigs } from "../composables/useSEO.js";
import ComponentInstructions from "../components/ComponentInstructions.vue";
import RecommendedUseCases from "../components/RecommendedUseCases.vue";
import TechnologiesUsed from "../components/TechnologiesUsed.vue";

// Importación de componentes de image effects
import imageEffect1 from "../components/effects/imageEffect/imageEffect1.vue";
import imageEffect2 from "../components/effects/imageEffect/imageEffect2.vue";

// SEO para la página de efectos de imagen
useSEO(seoConfigs.effects);

// Componentes de efectos de imagen
const imageEffectComponents = [imageEffect1, imageEffect2];

// Datos de image effects
const imageEffectData = [
  { id: 1, name: "Efecto Hover Moderno", component: "ImageEffect1" },
  { id: 2, name: "Efecto Lupa", component: "ImageEffect2" },
];

// Función para obtener el componente correcto
const getImageEffectComponent = (index) => {
  return imageEffectComponents[index] || imageEffect1;
};
</script>

<style scoped>
.transparent-image-effects {
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