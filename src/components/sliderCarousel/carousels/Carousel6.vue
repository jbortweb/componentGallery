<template>
  <div class="relative">
    <!-- Botón de código -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-50 w-10 h-10 bg-gray-800/90 hover:bg-gray-700 rounded-lg flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200 backdrop-blur-sm border border-gray-400/30 cursor-pointer"
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

    <!-- Contenedor principal transparente y sin sombra -->
    <div
      class="relative bg-transparent overflow-visible max-w-7xl mx-auto py-12 select-none flex flex-col items-center justify-center min-h-[600px]"
    >
      <!-- Carrusel 3D tipo spinning -->
      <div
        class="flex flex-col items-center justify-start w-full max-w-5xl z-10 mt-12"
      >
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
              class="relative w-[260px] h-[360px] rounded-3xl overflow-hidden group"
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
            class="absolute left-0 top-1/2 -translate-y-1/2 bg-[#232526]/80 hover:bg-[#414345] text-white hover:text-[#c2c2c2] rounded-full w-16 h-16 flex items-center justify-center z-20 transition-all duration-300 border-2 border-white"
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
            class="absolute right-0 top-1/2 -translate-y-1/2 bg-[#232526]/80 hover:bg-[#414345] text-white hover:text-[#c2c2c2] rounded-full w-16 h-16 flex items-center justify-center z-20 transition-all duration-300 border-2 border-white"
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
            class="w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 group relative"
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
        <!-- Modal de código -->
        <CodeModal
          ref="codeModal"
          cardType="Carousel Card"
          cardVariant="Espacial transparente"
          :codeContent="cardCode"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import Carousel6Code from "../../../data/codes/slidercarousel/carousel/Carousel6.js";

const images = [
  {
    src: "https://images.unsplash.com/photo-1484603738253-e5b73679e8cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG5pZXZlfGVufDB8MHwwfHx8MA%3D%3D",
    caption: "Paisaje nevado",
  },
  {
    src: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiYSVDMyVCMWF8ZW58MHwwfDB8fHww",
    caption: "Cabaña en el bosque",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1669927131902-a64115445f0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2l1ZGFkfGVufDB8MHwwfHx8MA%3D%3D",
    caption: "Ciudad nocturna",
  },
  {
    src: "https://images.unsplash.com/photo-1563968743333-044cef800494?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJvYm90aWNhfGVufDB8MHwwfHx8MA%3D%3D",
    caption: "Robótica",
  },
  {
    src: "https://images.unsplash.com/photo-1517886877123-e4a01ac527ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bHVjZXN8ZW58MHwwfDB8fHww",
    caption: "Luces y reflejos",
  },
  {
    src: "https://images.unsplash.com/photo-1495571758719-6ec1e876d6ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGF0YXJkZWNlcnxlbnwwfDB8MHx8fDA%3D",
    caption: "Atardecer",
  },
];

const currentIndex = ref(0);
const codeModal = ref(null);
const cardCode = Carousel6Code;

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

function showCode() {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
}
</script>

<style>
</style>