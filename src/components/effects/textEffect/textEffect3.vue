<template>
  <div
    class="relative w-full max-w-xl mx-auto h-96 rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center"
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

    <!-- Texto con extrusión 3D -->
    <h2 class="extrude-text text-6xl font-black tracking-wider uppercase">
      Volumen
    </h2>

    <!-- Modal de código -->
    <CodeModal
      ref="codeModal"
      cardType="Text Effect"
      cardVariant="Efecto Volumen"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import textEffect3Code from "../../../data/codes/effects/textEffect/textEffect3.js";

// Configuración del modal
const codeModal = ref(null);
const cardCode = textEffect3Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>

<style scoped>
/* Texto con sombras apiladas que crean profundidad */
.extrude-text {
  color: #f59e0b;
  text-shadow:
    1px 1px 0 #b45309,
    2px 2px 0 #b45309,
    3px 3px 0 #92400e,
    4px 4px 0 #92400e,
    5px 5px 0 #78350f,
    6px 6px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, text-shadow 0.3s ease;
}

/* Al pasar el cursor el texto se eleva */
.extrude-text:hover {
  transform: translate(-3px, -3px);
  text-shadow:
    1px 1px 0 #b45309,
    2px 2px 0 #b45309,
    3px 3px 0 #92400e,
    4px 4px 0 #92400e,
    5px 5px 0 #78350f,
    6px 6px 0 #451a03,
    8px 8px 12px rgba(0, 0, 0, 0.6);
}
</style>
