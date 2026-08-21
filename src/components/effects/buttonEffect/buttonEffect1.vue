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

    <!-- Botón con efecto ripple -->
    <button
      @click="createRipple"
      class="relative overflow-hidden px-10 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-lg shadow-lg shadow-blue-500/30 transition-transform duration-200 active:scale-95 border-0 cursor-pointer"
    >
      <span
        v-for="ripple in ripples"
        :key="ripple.id"
        class="ripple"
        :style="{
          left: ripple.x + 'px',
          top: ripple.y + 'px',
          width: ripple.size + 'px',
          height: ripple.size + 'px',
        }"
      ></span>
      Haz clic aquí
    </button>

    <!-- Modal de código -->
    <CodeModal
      ref="codeModal"
      cardType="Button Effect"
      cardVariant="Efecto Ripple"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import buttonEffect1Code from "../../../data/codes/effects/buttonEffect/buttonEffect1.js";

// Configuración del modal
const codeModal = ref(null);
const cardCode = buttonEffect1Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};

// Estado del efecto ripple
const ripples = ref([]);
let rippleId = 0;

const createRipple = (event) => {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 2;
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  const id = ++rippleId;

  ripples.value.push({ id, x, y, size });

  setTimeout(() => {
    ripples.value = ripples.value.filter((ripple) => ripple.id !== id);
  }, 600);
};
</script>

<style scoped>
/* Onda expansiva del efecto ripple */
.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  transform: scale(0);
  animation: ripple 0.7s ease-out forwards;
  pointer-events: none;
  z-index: 10;
}

@keyframes ripple {
  from {
    transform: scale(0);
    opacity: 0.8;
  }
  to {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
