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

    <!-- Texto con animación de ondas letra a letra -->
    <h2 class="wave-text text-5xl font-bold tracking-widest text-white">
      <span
        v-for="(letter, index) in letters"
        :key="index"
        :style="{ animationDelay: index * 0.1 + 's' }"
        >{{ letter }}</span
      >
    </h2>

    <!-- Modal de código -->
    <CodeModal
      ref="codeModal"
      cardType="Text Effect"
      cardVariant="Efecto Ondas"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import textEffect6Code from "../../../data/codes/effects/textEffect/textEffect6.js";

// Configuración del modal
const codeModal = ref(null);
const cardCode = textEffect6Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};

// Letras que componen el texto animado
const letters = "GALERÍA".split("");
</script>

<style scoped>
/* Cada letra es un bloque animable */
.wave-text span {
  display: inline-block;
  animation: wave 1.2s ease-in-out infinite;
}

/* Movimiento ondulatorio vertical */
@keyframes wave {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
