<template>
  <div
    class="w-screen min-h-screen flex flex-col items-center justify-start overflow-hidden bg-gradient-to-br from-[#232526] via-[#414345] to-[#232526]"
  >
    <div
      class="flex flex-col items-center justify-start w-full max-w-5xl z-10 mt-12"
    >
      <!-- Carrusel 3D tipo spinning -->
      <div
        class="relative flex items-center justify-center h-[300px] w-full"
        style="perspective: 1200px; perspective-origin: 50% 30%"
      >
        <div
          v-for="(img, i) in images"
          :key="img.src"
          class="absolute transition-all duration-700 ease-[cubic-bezier(.4,1.2,.3,1)] cursor-pointer"
          :style="get3DStyle(i)"
        >
          <div
            class="relative w-[260px] h-[360px] rounded-3xl shadow-2xl overflow-hidden group"
          >
            <img
              :src="img.src"
              :alt="img.caption"
              class="w-full h-full object-cover rounded-3xl"
              draggable="false"
            />
            <div
              class="absolute inset-0 bg-gradient-to-tr from-[#fff6] via-[#fcb69f99] to-[#d7266099] backdrop-blur-md flex items-end justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <span class="text-xl font-bold text-white drop-shadow-lg">{{
                img.caption
              }}</span>
            </div>
          </div>
        </div>
        <!-- Flechas -->
        <button
          @click="prev"
          class="absolute left-0 top-1/2 -translate-y-1/2 bg-[#232526]/80 hover:bg-[#414345] text-white hover:text-[#c2c2c2] rounded-full shadow-2xl w-16 h-16 flex items-center justify-center z-20 transition-all duration-300 border-2 border-white backdrop-blur-md"
        >
          <svg width="36" height="36" viewBox="0 0 24 24">
            <path
              d="M15 19l-7-7 7-7"
              stroke="currentColor"
              stroke-width="2.5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          @click="next"
          class="absolute right-0 top-1/2 -translate-y-1/2 bg-[#232526]/80 hover:bg-[#414345] text-white hover:text-[#c2c2c2] rounded-full shadow-2xl w-16 h-16 flex items-center justify-center z-20 transition-all duration-300 border-2 border-white backdrop-blur-md"
        >
          <svg width="36" height="36" viewBox="0 0 24 24">
            <polyline
              points="9 5 15 12 9 19"
              stroke="currentColor"
              stroke-width="2.5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <!-- Miniaturas -->
      <div class="flex items-center justify-center gap-3 mt-60">
        <button
          v-for="(img, i) in images"
          :key="i"
          @click="goTo(i)"
          class="w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-md group relative"
          :class="
            i === currentIndex
              ? 'border-white scale-110 ring-2 ring-[#232526]'
              : 'border-white opacity-60 hover:opacity-100'
          "
        >
          <img
            :src="img.src"
            :alt="img.caption"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    caption: "Amanecer en la costa",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    caption: "Olas poderosas",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    caption: "Montañas lejanas",
  },
  {
    src: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80",
    caption: "Bosque mágico",
  },
  {
    src: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=800&q=80",
    caption: "Luz dorada",
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
    caption: "Cielo infinito",
  },
];

const currentIndex = ref(0);

function prev() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
}
function next() {
  currentIndex.value = (currentIndex.value + 1) % images.length;
}
function goTo(i) {
  currentIndex.value = i;
}
function get3DStyle(i) {
  const total = images.length;
  const idx = (i - currentIndex.value + total) % total;
  const baseAngle = 360 / total;
  const angle = baseAngle * idx;
  const radius = 320;
  // Zonas para z-index y opacidad
  let scale = 1;
  let opacity = 1;
  let zIndex = 1;
  if (idx === 0) {
    scale = 1.1;
    opacity = 1;
    zIndex = 10;
  } else if (idx === 1 || idx === total - 1) {
    scale = 0.95;
    opacity = 0.9;
    zIndex = 8;
  } else if (idx === 2 || idx === total - 2) {
    scale = 0.85;
    opacity = 0.7;
    zIndex = 5;
  } else if (idx === Math.floor(total / 2)) {
    scale = 0.7;
    opacity = 0.5;
    zIndex = 2;
  }
  return {
    left: "50%",
    top: "50%",
    transform: `translate(-50%, -50%) rotateY(${angle}deg) rotateX(-18deg) translateZ(${radius}px) scale(${scale})`,
    zIndex,
    opacity,
    transition: "all 0.7s cubic-bezier(.4,1.2,.3,1)",
  };
}
</script>

<style>
/* Estilos globales para el cuerpo */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Asegura que el componente ocupe toda la pantalla */
html,
body,
#app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>