<template>
  <div
    class="relative w-full max-w-xl mx-auto h-96 rounded-2xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center"
  >
    <!-- Botón de código -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-50 w-10 h-10 bg-gray-800/90 hover:bg-gray-700 rounded-lg flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200 backdrop-blur-sm border-0 cursor-pointer"
      title="Ver código del componente"
      aria-label="Ver código del componente"
    >
      <svg
        class="w-5 h-5 text-white pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    </button>

    <!-- Texto con efecto neón -->
    <h2 class="neon-text text-6xl font-bold tracking-widest uppercase">Neón</h2>

    <!-- Modal de código -->
    <CodeModal
      ref="codeModal"
      cardType="Text Effect"
      cardVariant="Efecto Neón"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import textEffect1Code from "../../../data/codes/effects/textEffect/textEffect1.js";

// Configuración del modal
const codeModal = ref(null);
const cardCode = textEffect1Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>

<style scoped>
/* Texto con resplandor neón */
.neon-text {
  color: #fff;
  text-shadow:
    0 0 5px #22d3ee,
    0 0 10px #22d3ee,
    0 0 20px #22d3ee,
    0 0 40px #22d3ee,
    0 0 80px #22d3ee;
  animation: neon-pulse 2s ease-in-out infinite;
}

/* Pulso suave del resplandor */
@keyframes neon-pulse {
  0%,
  100% {
    text-shadow:
      0 0 5px #22d3ee,
      0 0 10px #22d3ee,
      0 0 20px #22d3ee,
      0 0 40px #22d3ee,
      0 0 80px #22d3ee;
  }
  50% {
    text-shadow:
      0 0 5px #22d3ee,
      0 0 10px #22d3ee,
      0 0 20px #22d3ee,
      0 0 40px #67e8f9,
      0 0 90px #67e8f9,
      0 0 120px #67e8f9;
  }
}
</style>
