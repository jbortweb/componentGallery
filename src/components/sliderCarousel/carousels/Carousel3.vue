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
      <!-- Carrusel artístico -->
      <div
        class="absolute left-1/2 top-1/2 w-screen max-w-screen h-[70vh] flex items-center justify-center"
        style="transform: translate(-50%, -50%)"
      >
        <button
          class="absolute left-40 top-1/2 -translate-y-1/2 bg-white/80 border-2 border-[#ff6e7f] w-14 h-14 flex items-center justify-center rounded-full z-30 hover:bg-[#ff6e7f] hover:text-white transition-colors duration-300"
          @click="prev"
          :disabled="animating"
        >
          <svg width="40" height="40" viewBox="0 0 24 24">
            <polyline
              points="15 18 9 12 15 6"
              stroke="currentColor"
              stroke-width="3"
              fill="none"
            />
          </svg>
        </button>
        <div class="relative flex items-center justify-center w-full h-full">
          <div
            v-for="(img, i) in images"
            :key="img.src"
            class="absolute"
            :class="[
              'transition-all duration-[1100ms] ease-[cubic-bezier(.4,1.2,.3,1)]',
              i === currentIndex
                ? 'w-[700px] aspect-[16/9] rounded-3xl z-10'
                : 'w-[320px] h-[400px] rounded-2xl z-0',
              Math.abs(i - currentIndex) === 1
                ? 'opacity-50 blur-sm grayscale'
                : '',
            ]"
            :style="getCardStyle(i)"
          >
            <div
              class="relative w-full h-full [transform-style:preserve-3d]"
              :class="{
                'rotateY-180': i === currentIndex && flipping,
              }"
              style="transition: transform 0.4s cubic-bezier(0.4, 1.2, 0.3, 1)"
            >
              <div
                class="absolute w-full h-full backface-hidden rounded-3xl flex items-center justify-center bg-gradient-to-br from-[#fcb69f] via-[#ffecd2] to-[#ff6e7f] border-2 border-[#fcb69f]"
                :style="{
                  opacity: !(i === currentIndex && flipping) ? 1 : 0,
                  transition: 'opacity 0.1s linear 0.4s',
                }"
              >
                <img
                  :src="img.src"
                  :alt="img.caption"
                  class="w-full h-full object-cover rounded-3xl"
                  :class="i === currentIndex ? 'aspect-[16/9]' : ''"
                />
              </div>
              <div
                class="absolute w-full h-full backface-hidden rounded-3xl flex items-center justify-center bg-gradient-to-br from-[#ff6e7f] via-[#fcb69f] to-[#ffecd2] border-2 border-[#ff6e7f] rotateY-180"
                :style="{
                  opacity: i === currentIndex && flipping ? 1 : 0,
                  transition: 'opacity 0.1s linear',
                }"
              >
                <span
                  class="block w-full text-2xl font-bold text-white text-center tracking-wide font-orbitron drop-shadow-lg"
                  >{{ img.caption }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <button
          class="absolute right-40 top-1/2 -translate-y-1/2 bg-white/80 border-2 border-[#ff6e7f] w-14 h-14 flex items-center justify-center rounded-full z-30 hover:bg-[#ff6e7f] hover:text-white transition-colors duration-300"
          @click="next"
          :disabled="animating"
        >
          <svg width="40" height="40" viewBox="0 0 24 24">
            <polyline
              points="9 18 15 12 9 6"
              stroke="currentColor"
              stroke-width="3"
              fill="none"
            />
          </svg>
        </button>
      </div>
      <!-- Indicadores -->
      <div
        class="absolute left-0 right-0 bottom-10 flex justify-center items-center z-20"
      >
        <div
          v-for="(img, i) in images"
          :key="i"
          @click="goTo(i)"
          :class="[
            'w-4 h-4 rounded-full mx-1 transition-all duration-400 cursor-pointer',
            i === currentIndex
              ? 'bg-gradient-to-br from-[#ff6e7f] to-[#fcb69f] opacity-100 scale-125 shadow-lg'
              : 'bg-gradient-to-br from-[#fcb69f] to-[#ffecd2] opacity-30 scale-90',
          ]"
        />
      </div>
      <!-- Modal de código -->
      <CodeModal
        ref="codeModal"
        cardType="Carousel Card"
        cardVariant="Artístico transparente"
        :codeContent="cardCode"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import Carousel3Code from "../../../data/codes/slidercarousel/carousel/Carousel3.js";

const images = [
  {
    src: "https://images.unsplash.com/photo-1545989253-02cc26577f88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGFydGV8ZW58MHwwfDB8fHww",
    caption: "Autorretrato",
  },
  {
    src: "https://images.unsplash.com/photo-1456086272160-b28b0645b729?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFydGV8ZW58MHwwfDB8fHww",
    caption: "Colores mezclados",
  },
  {
    src: "https://images.unsplash.com/photo-1493210977798-4f655ac200a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGFydGV8ZW58MHwwfDB8fHww",
    caption: "Colores en puertas",
  },
  {
    src: "https://images.unsplash.com/photo-1559102877-4a2cc0e37fce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fGFydGV8ZW58MHwwfDB8fHww",
    caption: "Inspiración visual",
  },
  {
    src: "https://images.unsplash.com/photo-1626243048879-51f8d9818566?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxhcnRlfGVufDB8MHwwfHx8MA%3D%3D",
    caption: "Diseño moderno",
  },
  {
    src: "https://images.unsplash.com/photo-1599723332446-bdb4726eded6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAwfHxhcnRlfGVufDB8MHwwfHx8MA%3D%3D",
    caption: "Imaginación sin límites",
  },
];
const currentIndex = ref(2);
const flipping = ref(false);
const animating = ref(false);
const codeModal = ref(null);
const cardCode = Carousel3Code;

function goTo(i) {
  if (!animating.value && i !== currentIndex.value) {
    flipping.value = true;
    animating.value = true;
    setTimeout(() => {
      currentIndex.value = i;
      flipping.value = false;
      setTimeout(() => {
        animating.value = false;
      }, 900);
    }, 900);
  }
}
function prev() {
  if (!animating.value) {
    flipping.value = true;
    animating.value = true;
    setTimeout(() => {
      currentIndex.value =
        (currentIndex.value - 1 + images.length) % images.length;
      flipping.value = false;
      setTimeout(() => {
        animating.value = false;
      }, 900);
    }, 900);
  }
}
function next() {
  if (!animating.value) {
    flipping.value = true;
    animating.value = true;
    setTimeout(() => {
      currentIndex.value = (currentIndex.value + 1) % images.length;
      flipping.value = false;
      setTimeout(() => {
        animating.value = false;
      }, 900);
    }, 900);
  }
}
function getCardStyle(i) {
  const total = images.length;
  let diff = (i - currentIndex.value + total) % total;
  if (diff > total / 2) diff -= total;
  if (diff === 0) {
    return {
      zIndex: 10,
      transform: "perspective(900px) rotateY(0deg) scale(1)",
      opacity: 1,
      boxShadow: "0 12px 40px 0 rgba(0,0,0,0.25)",
      transition: "all 1.1s cubic-bezier(.4,1.2,.3,1)",
      width: "600px",
      height: "340px",
      aspectRatio: "16/9",
    };
  } else if (diff === -1) {
    return {
      zIndex: 5,
      transform: "perspective(900px) scale(0.8) translateX(-180px)",
      opacity: 0.5,
      boxShadow: "0 2px 8px 0 rgba(0,0,0,0.12)",
      transition: "all 1.1s cubic-bezier(.4,1.2,.3,1)",
    };
  } else if (diff === 1) {
    return {
      zIndex: 5,
      transform: "perspective(900px) scale(0.8) translateX(180px)",
      opacity: 0.5,
      boxShadow: "0 2px 8px 0 rgba(0,0,0,0.12)",
      transition: "all 1.1s cubic-bezier(.4,1.2,.3,1)",
    };
  } else {
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transform: "scale(0.7)",
      transition: "all 1.1s cubic-bezier(.4,1.2,.3,1)",
    };
  }
}

function showCode() {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
}
</script>

<style scoped>
.backface-hidden {
  backface-visibility: hidden;
}
.rotateY-180 {
  transform: rotateY(180deg) !important;
}
.font-orbitron {
  font-family: "Orbitron", "Inter", "Segoe UI", Arial, sans-serif;
}
</style>