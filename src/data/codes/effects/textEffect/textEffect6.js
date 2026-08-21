export default `<template>
  <div
    class="relative w-full max-w-xl mx-auto h-96 rounded-2xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center"
  >
    <!-- Texto con animación de ondas letra a letra -->
    <h2 class="wave-text text-5xl font-bold tracking-widest text-white">
      <span
        v-for="(letter, index) in letters"
        :key="index"
        :style="{ animationDelay: index * 0.1 + 's' }"
        >{{ letter }}</span
      >
    </h2>
  </div>
</template>

<script setup>
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
`
