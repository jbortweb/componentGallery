
<template>
  <div class="relative">
    <!-- Botón de código -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-50 w-10 h-10 bg-blue-600/90 hover:bg-blue-500 rounded-lg flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200 backdrop-blur-sm shadow-lg border border-blue-400/30 cursor-pointer"
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

    <!-- Contenedor principal con fondo y medidas globales -->
    <div
      class="relative bg-transparentoverflow-hidden max-w-7xl mx-auto py-12 select-none flex flex-col items-center justify-center min-h-[600px]"
    >
      <!-- Formas geométricas sutiles de fondo -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full translate-y-1/2 -translate-x-1/2"
        ></div>
      </div>

      <!-- Carrusel -->
      <div
        class="relative flex flex-col items-center justify-center w-full min-h-[520px]"
      >
        <!-- Flecha izquierda -->
        <button
          @click="prev"
          class="absolute left-0 z-20 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 -translate-y-1/2 top-1/2 transition-all duration-200 group"
        >
          <svg
            class="w-6 h-6 text-gray-700 group-hover:text-blue-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div
          class="flex w-full overflow-visible justify-center items-center relative min-h-[520px]"
          style="perspective: 1200px; min-height: 520px"
        >
          <div
            v-for="(img, i) in images"
            :key="i"
            class="absolute transition-all duration-700 ease-in-out"
            :class="getSlideClass(i)"
            @mouseenter="hovered = i"
            @mouseleave="hovered = null"
          >
            <img
              :src="img.src"
              :alt="img.alt"
              class="rounded-2xl shadow-2xl object-cover w-[320px] h-[420px] md:w-[400px] md:h-[520px] border-4 border-white carousel-img"
              :style="
                hovered === i
                  ? 'transform: scale(1.06) rotateY(0deg); z-index:30;'
                  : ''
              "
            />
            <div
              class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white text-center px-4 py-2 rounded-xl text-lg font-bold shadow-lg backdrop-blur-md"
            >
              {{ img.caption }}
            </div>
          </div>
        </div>
        <!-- Flecha derecha -->
        <button
          @click="next"
          class="absolute right-0 z-20 bg-white/80 hover:bg-white shadow-lg rounded-full p-3 -translate-y-1/2 top-1/2 transition-all duration-200 group"
        >
          <svg
            class="w-6 h-6 text-gray-700 group-hover:text-blue-600"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <!-- Indicadores debajo del carousel -->
      <div class="flex justify-center gap-3 mt-8">
        <button
          v-for="(img, i) in images"
          :key="i"
          @click="goTo(i)"
          class="w-4 h-4 rounded-full border-2 border-blue-400 transition-all duration-300"
          :class="
            currentIndex === i
              ? 'bg-blue-500 scale-125 shadow-lg'
              : 'bg-white/70 hover:bg-blue-200'
          "
        ></button>
      </div>
      <!-- Modal de código -->
      <CodeModal
        ref="codeModal"
        cardType="Carousel Card"
        cardVariant="Diseño minimalista"
        :codeContent="cardCode"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import CodeModal from "../../CodeModal.vue";
import Carousel1Code from "../../../data/codes/slidercarousel/carousel/Carousel1.js";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    caption: "Amanecer en la costa",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    caption: "Olas poderosas",
  },
  {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    caption: "Montañas lejanas",
  },
  {
    src: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1600&q=80",
    caption: "Arena suave",
  },
  {
    src: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1600&q=80",
    caption: "Bosque mágico",
  },
  {
    src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1600&q=80",
    caption: "Cielo infinito",
  },
];

const currentIndex = ref(0);
const hovered = ref(null);

const codeModal = ref(null);
const cardCode = Carousel1Code;

const prevIndex = computed(() =>
  currentIndex.value > 0 ? currentIndex.value - 1 : images.length - 1
);
const nextIndex = computed(() =>
  currentIndex.value < images.length - 1 ? currentIndex.value + 1 : 0
);

function prev() {
  currentIndex.value = prevIndex.value;
}
function next() {
  currentIndex.value = nextIndex.value;
}
function goTo(i) {
  currentIndex.value = i;
}

function getSlideClass(i) {
  if (i === currentIndex.value) {
    return "z-20 scale-100 opacity-100 left-1/2 -translate-x-1/2 shadow-2xl carousel-active";
  } else if (i === prevIndex.value) {
    return "z-10 scale-90 opacity-70 left-1/4 -translate-x-1/2 -rotate-y-12 blur-sm";
  } else if (i === nextIndex.value) {
    return "z-10 scale-90 opacity-70 left-3/4 -translate-x-1/2 rotate-y-12 blur-sm";
  } else {
    return "z-0 scale-75 opacity-0 pointer-events-none left-1/2 -translate-x-1/2";
  }
}

function showCode() {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
}
</script>

<style scoped>
.carousel-img {
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.25), 0 2px 4px 0 rgba(0, 0, 0, 0.18);
  transition: transform 0.5s cubic-bezier(0.4, 2, 0.3, 1), box-shadow 0.4s;
}
.carousel-active {
  filter: drop-shadow(0 0 32px #3b82f6cc) drop-shadow(0 0 8px #fff8);
}
.blur-sm {
  filter: blur(2px) brightness(0.9);
}
.rotate-y-12 {
  transform: rotateY(12deg) scale(0.9);
}
.-rotate-y-12 {
  transform: rotateY(-12deg) scale(0.9);
}
</style>
