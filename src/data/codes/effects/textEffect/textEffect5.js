export default `<template>
  <div
    class="relative w-full max-w-xl mx-auto h-96 rounded-2xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center"
  >
    <!-- Texto con reflejo espejado -->
    <h2 class="reflect-text text-6xl font-black uppercase tracking-wider" data-text="Reflejo">
      Reflejo
    </h2>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Texto base */
.reflect-text {
  position: relative;
  display: inline-block;
  line-height: 1;
  color: #f8fafc;
}

/* Reflejo espejado que se desvanece hacia abajo */
.reflect-text::after {
  content: attr(data-text);
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  transform: scaleY(-1);
  color: #f8fafc;
  opacity: 0.4;
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent 80%);
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent 80%);
}
</style>
`
