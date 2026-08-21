export default `<template>
  <div
    class="relative w-full max-w-xl mx-auto h-96 rounded-2xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center"
  >
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
  </div>
</template>

<script setup>
import { ref } from "vue";

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
`
