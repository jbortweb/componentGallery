<template>
  <div
    class="group relative w-full max-w-xl mx-auto h-96 rounded-2xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center"
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

    <!-- Texto de contorno que se rellena al hacer hover -->
    <h2 class="outline-text text-6xl font-black tracking-widest uppercase">
      Contorno
    </h2>

    <!-- Modal de código -->
    <CodeModal
      ref="codeModal"
      cardType="Text Effect"
      cardVariant="Efecto Contorno"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import textEffect4Code from "../../../data/codes/effects/textEffect/textEffect4.js";

// Configuración del modal
const codeModal = ref(null);
const cardCode = textEffect4Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>

<style scoped>
/* Texto con solo contorno (relleno transparente) */
.outline-text {
  color: transparent;
  -webkit-text-stroke: 2px #e2e8f0;
  transition: color 0.4s ease, text-shadow 0.4s ease;
}

/* Al hacer hover el texto se rellena con un resplandor */
.group:hover .outline-text {
  color: #e2e8f0;
  text-shadow: 0 0 20px rgba(226, 232, 240, 0.5);
}
</style>
