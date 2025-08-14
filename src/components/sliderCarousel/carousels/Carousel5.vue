<template>
  <div class="relative">
    <!-- Botón de código -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-50 w-10 h-10 bg-yellow-400/90 hover:bg-yellow-300 rounded-lg flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200 backdrop-blur-sm border border-yellow-400/30 cursor-pointer"
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
      <div
        class="flex flex-col items-center justify-start w-full max-w-5xl z-10 mt-12"
      >
        <div
          class="relative flex items-center justify-center h-[500px] w-full"
          style="perspective: 1200px; perspective-origin: 50% 30%"
        >
          <div
            v-for="(img, i) in images"
            :key="img.src"
            class="absolute transition-all duration-700 ease-[cubic-bezier(.4,1.2,.3,1)] cursor-pointer"
            :class="getCardClass(i)"
            style="overflow: hidden"
          >
            <div class="relative w-full h-full group">
              <img
                :src="img.src"
                :alt="img.caption"
                class="w-full h-full object-cover rounded-3xl"
                draggable="false"
              />
              <!-- Capa animada en hover, ajustada al borde redondeado -->
              <div
                class="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden"
              >
                <div class="w-full h-full">
                  <div
                    class="absolute left-0 bottom-0 w-0 h-0 group-hover:w-full group-hover:h-full transition-all duration-500 ease-in-out rounded-bl-3xl"
                    style="
                      clip-path: polygon(0% 100%, 100% 0%, 100% 100%);
                      background: linear-gradient(
                        135deg,
                        #d72660cc 60%,
                        #ff6e7fcc 100%
                      );
                    "
                  >
                    <span
                      class="absolute right-4 bottom-4 text-2xl font-bold text-white drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-right"
                      >{{ img.caption }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            @click="prev"
            class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-[#d72660cc] text-[#4caf50] hover:text-white rounded-full w-16 h-16 flex items-center justify-center z-20 transition-all duration-300 border-2 border-[#ffb347]"
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
          <button
            @click="next"
            class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-[#d72660cc] text-[#4caf50] hover:text-white rounded-full w-16 h-16 flex items-center justify-center z-20 transition-all duration-300 border-2 border-[#ffb347]"
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
      </div>
      <!-- Miniaturas abajo -->
      <div class="flex items-center justify-center gap-3 mt-12 mb-8 w-full">
        <button
          v-for="(img, i) in images"
          :key="i"
          @click="goTo(i)"
          class="w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 group relative"
          :class="
            i === currentIndex
              ? 'border-[#d72660cc] scale-110 ring-2 ring-[#ffb347]'
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
        cardVariant="Terminal transparente"
        :codeContent="cardCode"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import Carousel5Code from "../../../data/codes/slidercarousel/carousel/Carousel5.js";

const images = [
  {
    src: "https://plus.unsplash.com/premium_photo-1673448998919-d4b859e66e7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVycm9zfGVufDB8MHwwfHx8MA%3D%3D",
    caption: "Ojos blancos",
  },
  {
    src: "https://images.unsplash.com/photo-1599941520493-8158d3371e66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVycm9zfGVufDB8MHwwfHx8MA%3D%3D",
    caption: "Compañia",
  },
  {
    src: "https://images.unsplash.com/photo-1558680174-e8e572f854e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVycm9zfGVufDB8MHwwfHx8MA%3D%3D",
    caption: "Mirando a cámara",
  },
  {
    src: "https://images.unsplash.com/photo-1621814699494-4421e6703e28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1cnJvc3xlbnwwfDB8MHx8fDA%3D",
    caption: "La vida",
  },
  {
    src: "https://images.unsplash.com/photo-1628531008735-35d13c54a6bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGJ1cnJvc3xlbnwwfDB8MHx8fDA%3D",
    caption: "Descanso en el prado",
  },
  {
    src: "https://images.unsplash.com/photo-1676636936433-fd54c84f66ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJ1cnJvc3xlbnwwfDB8MHx8fDA%3D",
    caption: "De paseo",
  },
];

const currentIndex = ref(2);
const codeModal = ref(null);
const cardCode = Carousel5Code;

function prev() {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
}
function next() {
  currentIndex.value = (currentIndex.value + 1) % images.length;
}
function goTo(i) {
  currentIndex.value = i;
}
function getCardClass(i) {
  const total = images.length;
  let diff = (i - currentIndex.value + total) % total;
  if (diff > total / 2) diff -= total;
  if (diff === 0) {
    return "w-[420px] h-[420px] rounded-3xl z-20 scale-110";
  }
  if (diff === -1) {
    return "w-[340px] h-[340px] rounded-2xl z-10 scale-95 -translate-x-32";
  }
  if (diff === 1) {
    return "w-[340px] h-[340px] rounded-2xl z-10 scale-95 translate-x-32";
  }
  return "w-[220px] h-[220px] rounded-xl z-0 scale-90 opacity-0 pointer-events-none";
}

function showCode() {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
}
</script>