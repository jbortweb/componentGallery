export default `<template>
  <div
    class="relative w-full max-w-xl mx-auto h-96 rounded-2xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center"
  >
    <!-- Texto con efecto neón -->
    <h2 class="neon-text text-6xl font-bold tracking-widest uppercase">Neón</h2>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Texto con resplandor neón */
.neon-text {
  color: #fff;
  text-shadow:
    0 0 5px #22d3ee,
    0 0 10px #22d3ee,
    0 0 20px #22d3ee,
    0 0 40px #22d3ee,
    0 0 80px #22d3ee;
  animation: neon-pulse 2s ease-in-out infinite;
}

/* Pulso suave del resplandor */
@keyframes neon-pulse {
  0%,
  100% {
    text-shadow:
      0 0 5px #22d3ee,
      0 0 10px #22d3ee,
      0 0 20px #22d3ee,
      0 0 40px #22d3ee,
      0 0 80px #22d3ee;
  }
  50% {
    text-shadow:
      0 0 5px #22d3ee,
      0 0 10px #22d3ee,
      0 0 20px #22d3ee,
      0 0 40px #67e8f9,
      0 0 90px #67e8f9,
      0 0 120px #67e8f9;
  }
}
</style>
`
