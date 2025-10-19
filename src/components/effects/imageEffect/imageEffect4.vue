<template>
  <div
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="relative w-[400px] h-[600px] mx-auto my-12 overflow-visible cursor-pointer perspective-container"
  >
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-50 w-10 h-10 bg-gray-800/90 hover:bg-gray-700 rounded-lg flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200 backdrop-blur-sm border-0 cursor-pointer"
      title="Ver código del componente"
      aria-label="Ver código del componente"
    >
      <svg
        class="w-5 h-5 text-white pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    </button>

    <!-- Contenedor del prisma 3D vertical -->
    <div
      class="prism-container w-full h-full transition-transform duration-[1200ms] ease-in-out"
      :style="{
        transform: isHovered ? 'rotateY(-80deg)' : 'rotateY(0deg)',
      }"
    >
      <!-- Cara frontal (cara 1) - Número 1 del dado -->
      <div class="prism-face prism-left">
        <div class="relative w-full h-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&q=80"
            alt="Paisaje de montaña #1"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- Cara derecha (cara 2) - Número 2 del dado con texto -->
      <div class="prism-face prism-right">
        <div class="relative w-full h-full flex flex-col overflow-hidden">
          <!-- Imagen (75%) -->
          <div class="w-full h-3/4 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=450&fit=crop&q=80"
              alt="Paisaje de montaña #2"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Texto (25%) -->
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

    <CodeModal
      ref="codeModal"
      cardType="Image Effect"
      cardVariant="Prisma 3D Rotatorio"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import imageEffect4Code from "../../../data/codes/effects/imageEffect/imageEffect4.js";

const codeModal = ref(null);
const cardCode = imageEffect4Code;
const isHovered = ref(false);

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
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

/* Estado rotado del prisma - gira 90° para mostrar cara derecha */
.prism-rotated {
  transform: rotateY(-90deg);
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