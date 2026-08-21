<template>
  <div class="transparent-text-effects">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Sección de Text Effects -->
      <div class="space-y-16">
        <div
          v-for="(effect, index) in textEffectData"
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

          <!-- Componente text effect centrado -->
          <div class="flex justify-center items-center min-h-[400px] p-8">
            <component :is="getTextEffectComponent(index)" class="mb-10" />
          </div>
        </div>
      </div>

      <!-- Instructions -->
      <ComponentInstructions theme="purple" />

      <!-- Casos de Uso Recomendados -->
      <RecommendedUseCases type="textEffects" />

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

// Importación de componentes de text effects
import textEffect1 from "../components/effects/textEffect/textEffect1.vue";
import textEffect2 from "../components/effects/textEffect/textEffect2.vue";
import textEffect3 from "../components/effects/textEffect/textEffect3.vue";
import textEffect4 from "../components/effects/textEffect/textEffect4.vue";
import textEffect5 from "../components/effects/textEffect/textEffect5.vue";
import textEffect6 from "../components/effects/textEffect/textEffect6.vue";

// SEO para la página de efectos de texto
useSEO(seoConfigs.textEffects);

// Componentes de efectos de texto
const textEffectComponents = [
  textEffect1,
  textEffect2,
  textEffect3,
  textEffect4,
  textEffect5,
  textEffect6,
];

// Datos de text effects
const textEffectData = [
  { id: 1, name: "Efecto Neón", component: "TextEffect1" },
  { id: 2, name: "Efecto Máquina de Escribir", component: "TextEffect2" },
  { id: 3, name: "Efecto Volumen", component: "TextEffect3" },
  { id: 4, name: "Efecto Contorno", component: "TextEffect4" },
  { id: 5, name: "Efecto Reflejo", component: "TextEffect5" },
  { id: 6, name: "Efecto Ondas", component: "TextEffect6" },
];

// Función para obtener el componente correcto
const getTextEffectComponent = (index) => {
  return textEffectComponents[index] || textEffect1;
};
</script>

<style scoped>
.transparent-text-effects {
  background: transparent;
  min-height: 100vh;
  position: relative;
}
</style>
