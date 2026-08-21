export default `<template>
  <div
    class="relative w-full max-w-xl mx-auto h-96 rounded-2xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center"
  >
    <!-- Botón 3D con efecto de presión -->
    <button
      class="button-3d px-10 py-4 rounded-xl text-white font-semibold text-lg border-0 cursor-pointer"
    >
      Púlsame
    </button>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Botón 3D con profundidad y presión al hacer clic */
.button-3d {
  background: linear-gradient(180deg, #f59e0b, #d97706);
  box-shadow:
    0 6px 0 #92400e,
    0 8px 16px rgba(0, 0, 0, 0.4);
  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
}

.button-3d:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 0 #92400e,
    0 12px 20px rgba(0, 0, 0, 0.4);
}

.button-3d:active {
  transform: translateY(4px);
  box-shadow:
    0 2px 0 #92400e,
    0 4px 8px rgba(0, 0, 0, 0.4);
}
</style>
`
