export default `<template>
  <div
    class="relative w-full max-w-xl mx-auto h-96 rounded-2xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center"
  >
    <!-- Botón con efecto shine -->
    <button
      @click="flash"
      :class="{ flashing: isFlashing }"
      class="shine-button px-10 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg shadow-lg shadow-purple-600/30 border-0 cursor-pointer"
    >
      Pasa el cursor
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
`
