export default `<template>
  <div
    class="relative w-full max-w-xl mx-auto h-96 rounded-2xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center"
  >
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
  </div>
</template>

<script setup>
import { ref } from "vue";

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
`
