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

    <!-- Botón 3D con efecto de presión -->
    <button
      class="button-3d px-10 py-4 rounded-xl text-white font-semibold text-lg border-0 cursor-pointer"
    >
      Púlsame
    </button>

    <!-- Modal de código -->
    <CodeModal
      ref="codeModal"
      cardType="Button Effect"
      cardVariant="Botón 3D"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import buttonEffect6Code from "../../../data/codes/effects/buttonEffect/buttonEffect6.js";

// Configuración del modal
const codeModal = ref(null);
const cardCode = buttonEffect6Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>

<style scoped>
/* Botón 3D con profundidad y presión al hacer clic */
.button-3d {
  background: linear-gradient(180deg, #f59e0b, #d97706);
  box-shadow:
    0 6px 0 #92400e,
    0 8px 16px rgba(0, 0, 0, 0.4);
  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
}

.button-3d:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 0 #92400e,
    0 12px 20px rgba(0, 0, 0, 0.4);
}

.button-3d:active {
  transform: translateY(4px);
  box-shadow:
    0 2px 0 #92400e,
    0 4px 8px rgba(0, 0, 0, 0.4);
}
</style>
