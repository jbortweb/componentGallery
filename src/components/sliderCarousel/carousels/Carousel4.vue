
<template>
  <div class="relative">
    <!-- Botón de código -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-50 w-10 h-10 bg-pink-500/90 hover:bg-pink-400 rounded-lg flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200 backdrop-blur-sm border border-pink-400/30 cursor-pointer"
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
      <!-- Carrusel principal -->
      <div class="flex flex-col items-center justify-center w-full max-w-4xl">
        <div class="relative flex items-center justify-center h-[420px] w-full">
          <div
            v-for="(img, i) in images"
            :key="img.src"
            class="absolute transition-all duration-1000 ease-[cubic-bezier(.4,1.2,.3,1)] w-[600px] h-[400px] rounded-3xl"
            :class="
              i === currentIndex ? 'z-20' : 'z-0 opacity-0 pointer-events-none'
            "
            :style="{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }"
          >
            <img
              :src="img.src"
              :alt="img.caption"
              class="w-full h-full object-cover rounded-3xl border-4 border-white"
              draggable="false"
            />
            <div
              class="absolute bottom-0 left-0 w-full py-4 bg-gradient-to-t from-[#fcb69f]/80 to-transparent text-center text-4xl font-bold text-gray-800 rounded-b-3xl drop-shadow-lg"
            >
              {{ img.caption }}
            </div>
          </div>
        </div>
        <!-- Miniaturas y flechas -->
        <div class="flex items-center justify-center gap-2 mt-10">
          <button
            @click="prev"
            class="w-10 h-10 flex items-center justify-center bg-[#d72660] hover:bg-[#ff6e7f] text-white rounded-lg transition-colors duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div class="flex items-center gap-2">
            <button
              v-for="(img, i) in images"
              :key="i"
              @click="goTo(i)"
              class="w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300"
              :class="
                i === currentIndex
                  ? 'border-[#d72660] scale-110 ring-2 ring-[#ff6e7f]'
                  : 'border-white opacity-60 hover:opacity-100'
              "
            >
              <img
                :src="img.src"
                :alt="img.caption"
                class="w-full h-full object-cover"
              />
            </button>
          </div>
          <button
            @click="next"
            class="w-10 h-10 flex items-center justify-center bg-[#d72660] hover:bg-[#ff6e7f] text-white rounded-lg transition-colors duration-300"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <!-- Modal de código -->
        <CodeModal
          ref="codeModal"
          cardType="Carousel Card"
          cardVariant="Glassmorphism transparente"
          :codeContent="cardCode"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import Carousel4Code from "../../../data/codes/slidercarousel/carousel/Carousel4.js";

const images = [
  {
    src: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80",
    caption: "Amigos peludos",
  },
  {
    src: "https://images.unsplash.com/photo-1514373941175-0a141072bbc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnJvfGVufDB8MHwwfHx8MA%3D%3D",
    caption: "Diversión en el parque",
  },
  {
    src: "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=800&q=80",
    caption: "Mirada tierna",
  },
  {
    src: "https://images.unsplash.com/photo-1452441271666-5d998aa2f6cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBlcnJvfGVufDB8MHwwfHx8MA%3D%3D",
    caption: "Siesta canina",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1671496450438-6a9c90ab87a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBlcnJvfGVufDB8MHwwfHx8MA%3D%3D",
    caption: "Paseo marítimo",
  },
  {
    src: "https://images.unsplash.com/photo-1510020553968-30f966e1ec9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxwZXJyb3xlbnwwfDB8MHx8fDA%3D",
    caption: "Cachorro curioso",
  },
];

const currentIndex = ref(2);
const codeModal = ref(null);
const cardCode = Carousel4Code;

function prev() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
}
function next() {
  currentIndex.value = (currentIndex.value + 1) % images.length;
}
function goTo(i) {
  currentIndex.value = i;
}

function showCode() {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
}
</script>