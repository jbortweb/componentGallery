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

    <!-- Botón con efecto fill -->
    <button
      class="fill-button px-10 py-4 rounded-lg font-semibold text-lg border-0 cursor-pointer"
    >
      Relléname
    </button>

    <!-- Modal de código -->
    <CodeModal
      ref="codeModal"
      cardType="Button Effect"
      cardVariant="Efecto Fill"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import buttonEffect4Code from "../../../data/codes/effects/buttonEffect/buttonEffect4.js";

// Configuración del modal
const codeModal = ref(null);
const cardCode = buttonEffect4Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>

<style scoped>
/* Relleno de fondo que sube desde abajo */
.fill-button {
  position: relative;
  overflow: hidden;
  background: transparent;
  border: 2px solid #a855f7;
  color: #fff;
  z-index: 0;
  transition: transform 0.15s ease;
}

.fill-button::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.4s ease;
  z-index: -1;
}

.fill-button:hover::before {
  transform: scaleY(1);
}

/* Al mantener pulsado se rellena al instante y se hunde */
.fill-button:active::before {
  transform: scaleY(1);
  transition: transform 0.1s ease;
}

.fill-button:active {
  transform: scale(0.96);
}
</style>
