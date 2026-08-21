export default `<template>
  <div
    class="relative w-full max-w-xl mx-auto h-96 rounded-2xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center"
  >
    <!-- Botón con efecto fill -->
    <button
      class="fill-button px-10 py-4 rounded-lg font-semibold text-lg border-0 cursor-pointer"
    >
      Relléname
    </button>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Relleno de fondo que sube desde abajo */
.fill-button {
  position: relative;
  overflow: hidden;
  background: transparent;
  border: 2px solid #a855f7;
  color: #fff;
  z-index: 0;
  transition: transform 0.15s ease;
}

.fill-button::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.4s ease;
  z-index: -1;
}

.fill-button:hover::before {
  transform: scaleY(1);
}

/* Al mantener pulsado se rellena al instante y se hunde */
.fill-button:active::before {
  transform: scaleY(1);
  transition: transform 0.1s ease;
}

.fill-button:active {
  transform: scale(0.96);
}
</style>
`
