<template>
  <div class="transparent-button-effects">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Sección de Button Effects -->
      <div class="space-y-16">
        <div
          v-for="(effect, index) in buttonEffectData"
          :key="effect.id"
          class="w-full"
        >
          <!-- Título centrado y elegante -->
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-white mb-2">
              {{ effect.name }}
            </h3>
            <div
              class="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
            ></div>
          </div>

          <!-- Componente button effect centrado -->
          <div class="flex justify-center items-center min-h-[400px] p-8">
            <component :is="getButtonEffectComponent(index)" class="mb-10" />
          </div>
        </div>
      </div>

      <!-- Instructions -->
      <ComponentInstructions theme="blue" />

      <!-- Casos de Uso Recomendados -->
      <RecommendedUseCases type="buttonEffects" />

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

// Importación de componentes de button effects
import buttonEffect1 from "../components/effects/buttonEffect/buttonEffect1.vue";
import buttonEffect2 from "../components/effects/buttonEffect/buttonEffect2.vue";
import buttonEffect3 from "../components/effects/buttonEffect/buttonEffect3.vue";
import buttonEffect4 from "../components/effects/buttonEffect/buttonEffect4.vue";
import buttonEffect5 from "../components/effects/buttonEffect/buttonEffect5.vue";
import buttonEffect6 from "../components/effects/buttonEffect/buttonEffect6.vue";

// SEO para la página de efectos de botones
useSEO(seoConfigs.buttonEffects);

// Componentes de efectos de botones
const buttonEffectComponents = [
  buttonEffect1,
  buttonEffect2,
  buttonEffect3,
  buttonEffect4,
  buttonEffect5,
  buttonEffect6,
];

// Datos de button effects
const buttonEffectData = [
  { id: 1, name: "Efecto Ripple", component: "ButtonEffect1" },
  { id: 2, name: "Efecto Shine", component: "ButtonEffect2" },
  { id: 3, name: "Botón Magnético", component: "ButtonEffect3" },
  { id: 4, name: "Efecto Fill", component: "ButtonEffect4" },
  { id: 5, name: "Efecto Borde Animado", component: "ButtonEffect5" },
  { id: 6, name: "Botón 3D", component: "ButtonEffect6" },
];

// Función para obtener el componente correcto
const getButtonEffectComponent = (index) => {
  return buttonEffectComponents[index] || buttonEffect1;
};
</script>

<style scoped>
.transparent-button-effects {
  background: transparent;
  min-height: 100vh;
  position: relative;
}
</style>
