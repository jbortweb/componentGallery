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

    <!-- Botón con borde animado -->
    <button
      :class="{ bursting: isBursting }"
      @mousedown="startBurst"
      @mouseup="stopBurst"
      @mouseleave="stopBurst"
      class="border-animated"
    >
      <span class="border-animated-inner">Borde Animado</span>
    </button>

    <!-- Modal de código -->
    <CodeModal
      ref="codeModal"
      cardType="Button Effect"
      cardVariant="Efecto Borde Animado"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import buttonEffect5Code from "../../../data/codes/effects/buttonEffect/buttonEffect5.js";

// Configuración del modal
const codeModal = ref(null);
const cardCode = buttonEffect5Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};

// Aceleración del giro al mantener pulsado
const isBursting = ref(false);

const startBurst = () => {
  isBursting.value = true;
};

const stopBurst = () => {
  isBursting.value = false;
};
</script>

<style scoped>
/* Borde con gradiente cónico que gira constantemente */
.border-animated {
  position: relative;
  overflow: hidden;
  border: 0;
  border-radius: 12px;
  padding: 3px;
  background: transparent;
  cursor: pointer;
}

.border-animated::before {
  content: "";
  position: absolute;
  inset: -100px;
  background: conic-gradient(
    from 0deg,
    #22d3ee,
    #a855f7,
    #ec4899,
    #22d3ee
  );
  animation: border-spin 3s linear infinite;
}

.border-animated-inner {
  position: relative;
  display: block;
  border-radius: 9px;
  background: #0f172a;
  color: #fff;
  padding: 14px 36px;
  font-weight: 600;
  font-size: 1.125rem;
}

/* El borde gira muy rápido al mantener pulsado */
.border-animated.bursting::before {
  animation-duration: 0.3s;
}

@keyframes border-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
