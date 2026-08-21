export default `<template>
  <div
    class="group relative w-full max-w-xl mx-auto h-96 rounded-2xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center"
  >
    <!-- Texto de contorno que se rellena al hacer hover -->
    <h2 class="outline-text text-6xl font-black tracking-widest uppercase">
      Contorno
    </h2>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Texto con solo contorno (relleno transparente) */
.outline-text {
  color: transparent;
  -webkit-text-stroke: 2px #e2e8f0;
  transition: color 0.4s ease, text-shadow 0.4s ease;
}

/* Al hacer hover el texto se rellena con un resplandor */
.group:hover .outline-text {
  color: #e2e8f0;
  text-shadow: 0 0 20px rgba(226, 232, 240, 0.5);
}
</style>
`
