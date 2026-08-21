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

    <!-- Texto con reflejo espejado -->
    <h2 class="reflect-text text-6xl font-black uppercase tracking-wider" data-text="Reflejo">
      Reflejo
    </h2>

    <!-- Modal de código -->
    <CodeModal
      ref="codeModal"
      cardType="Text Effect"
      cardVariant="Efecto Reflejo"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import textEffect5Code from "../../../data/codes/effects/textEffect/textEffect5.js";

// Configuración del modal
const codeModal = ref(null);
const cardCode = textEffect5Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>

<style scoped>
/* Texto base */
.reflect-text {
  position: relative;
  display: inline-block;
  line-height: 1;
  color: #f8fafc;
}

/* Reflejo espejado que se desvanece hacia abajo */
.reflect-text::after {
  content: attr(data-text);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  transform: scaleY(-1);
  color: #f8fafc;
  opacity: 0.4;
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent 80%);
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent 80%);
}
</style>
