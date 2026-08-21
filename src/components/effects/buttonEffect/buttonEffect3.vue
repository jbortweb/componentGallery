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

    <!-- Botón magnético -->
    <div
      ref="magnetWrap"
      :class="{ snapped: isSnapped }"
      @mousemove="onMove"
      @mouseleave="onLeave"
      @mousedown="snap"
      class="magnet-wrap flex items-center justify-center p-12"
    >
      <button
        ref="magnetBtn"
        class="magnetic-btn px-10 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-lg shadow-lg shadow-emerald-500/30 border-0 cursor-pointer"
      >
        Botón Magnético
      </button>
    </div>

    <!-- Modal de código -->
    <CodeModal
      ref="codeModal"
      cardType="Button Effect"
      cardVariant="Botón Magnético"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import buttonEffect3Code from "../../../data/codes/effects/buttonEffect/buttonEffect3.js";

// Configuración del modal
const codeModal = ref(null);
const cardCode = buttonEffect3Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};

// Efecto magnético que sigue al cursor
const magnetWrap = ref(null);
const magnetBtn = ref(null);

const onMove = (event) => {
  const wrap = magnetWrap.value;
  const btn = magnetBtn.value;
  if (!wrap || !btn) return;

  const rect = wrap.getBoundingClientRect();
  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;

  btn.style.transform =
    "translate(" + x * 0.3 + "px, " + y * 0.3 + "px)";
};

const onLeave = () => {
  if (magnetBtn.value) {
    magnetBtn.value.style.transform = "translate(0, 0)";
  }
};

// Rebote al hacer clic
const isSnapped = ref(false);

const snap = () => {
  if (isSnapped.value) return;
  isSnapped.value = true;
  setTimeout(() => {
    isSnapped.value = false;
  }, 400);
};
</script>

<style scoped>
/* Transición suave del movimiento magnético */
.magnetic-btn {
  transition: transform 0.1s ease-out;
  will-change: transform;
}

/* Rebote elástico al hacer clic */
.magnet-wrap.snapped {
  animation: magnet-snap 0.4s ease;
}

@keyframes magnet-snap {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.85);
  }
  70% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}
</style>
