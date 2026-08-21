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

    <!-- Botón con efecto shine -->
    <button
      @click="flash"
      :class="{ flashing: isFlashing }"
      class="shine-button px-10 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-lg shadow-purple-600/30 border-0 cursor-pointer"
    >
      Pasa el cursor
    </button>

    <!-- Modal de código -->
    <CodeModal
      ref="codeModal"
      cardType="Button Effect"
      cardVariant="Efecto Shine"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import buttonEffect2Code from "../../../data/codes/effects/buttonEffect/buttonEffect2.js";

// Configuración del modal
const codeModal = ref(null);
const cardCode = buttonEffect2Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};

// Destello al hacer clic
const isFlashing = ref(false);

const flash = () => {
  if (isFlashing.value) return;
  isFlashing.value = true;
  setTimeout(() => {
    isFlashing.value = false;
  }, 400);
};
</script>

<style scoped>
/* Barrido de brillo diagonal */
.shine-button {
  position: relative;
  overflow: hidden;
}

.shine-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  transform: skewX(-20deg);
}

.shine-button:hover::before {
  left: 130%;
  transition: left 0.7s ease;
}

/* Destello blanco al hacer clic */
.shine-button::after {
  content: "";
  position: absolute;
  inset: 0;
  background: #fff;
  opacity: 0;
  pointer-events: none;
}

.shine-button.flashing::after {
  animation: shine-flash 0.4s ease-out forwards;
}

@keyframes shine-flash {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0.9;
  }
  100% {
    opacity: 0;
  }
}
</style>
