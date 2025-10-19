export default `<template>
  <div
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="relative w-[400px] h-[600px] mx-auto my-12 overflow-visible cursor-pointer perspective-container"
  >
    <!-- Contenedor del prisma 3D vertical -->
    <div
      class="prism-container w-full h-full transition-transform duration-[1200ms] ease-in-out"
      :style="{
        transform: isHovered ? 'rotateY(-80deg)' : 'rotateY(0deg)',
      }"
    >
      <!-- Cara frontal (cara 1) - Primera imagen -->
      <div class="prism-face prism-left">
        <div class="relative w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&q=80"
            alt="Paisaje de montaña #1"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Cara derecha (cara 2) - Segunda imagen con texto -->
      <div class="prism-face prism-right">
        <div class="relative w-full h-full flex flex-col overflow-hidden">
          <!-- Imagen superior (75%) -->
          <div class="w-full h-3/4 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=450&fit=crop&q=80"
              alt="Paisaje de montaña #2"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Sección de texto inferior (25%) -->
          <div
            class="w-full h-1/4 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center px-6"
          >
            <div class="text-center">
              <h3 class="text-2xl font-bold text-white mb-1">
                Naturaleza Salvaje
              </h3>
              <p class="text-gray-300 text-sm">
                Explora los paisajes más impresionantes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Estado reactivo para controlar el hover
const isHovered = ref(false);
</script>

<style scoped>
/* Contenedor con perspectiva para efecto 3D realista */
.perspective-container {
  perspective: 2000px;
  perspective-origin: center center;
}

/* Contenedor del prisma vertical con transformación 3D */
.prism-container {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
}

/* Caras del prisma - configuración base */
.prism-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
}

/* Cara izquierda (frontal) - visible inicialmente */
.prism-left {
  transform: rotateY(0deg) translateZ(200px);
}

/* Cara derecha - visible al hacer hover (pegada sin hueco) */
.prism-right {
  transform: rotateY(90deg) translateZ(200px);
}
</style>
`
