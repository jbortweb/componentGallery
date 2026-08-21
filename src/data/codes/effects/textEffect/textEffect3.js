export default `<template>
  <div
    class="relative w-full max-w-xl mx-auto h-96 rounded-2xl overflow-hidden cursor-pointer bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center"
  >
    <!-- Texto con extrusión 3D -->
    <h2 class="extrude-text text-6xl font-black tracking-wider uppercase">
      Volumen
    </h2>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Texto con sombras apiladas que crean profundidad */
.extrude-text {
  color: #f59e0b;
  text-shadow:
    1px 1px 0 #b45309,
    2px 2px 0 #b45309,
    3px 3px 0 #92400e,
    4px 4px 0 #92400e,
    5px 5px 0 #78350f,
    6px 6px 8px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, text-shadow 0.3s ease;
}

/* Al pasar el cursor el texto se eleva */
.extrude-text:hover {
  transform: translate(-3px, -3px);
  text-shadow:
    1px 1px 0 #b45309,
    2px 2px 0 #b45309,
    3px 3px 0 #92400e,
    4px 4px 0 #92400e,
    5px 5px 0 #78350f,
    6px 6px 0 #451a03,
    8px 8px 12px rgba(0, 0, 0, 0.6);
}
</style>
`
