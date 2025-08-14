<template>
  <div
    class="w-screen h-screen min-h-screen max-w-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-radial from-[#ffecd2] via-[#fcb69f] to-[#ff6e7f]"
  >
    <div
      class="absolute left-1/2 top-1/2 w-screen max-w-screen h-[70vh] flex items-center justify-center"
      style="transform: translate(-50%, -50%)"
    >
      <button
        class="absolute left-40 top-1/2 -translate-y-1/2 bg-white/80 border-2 border-[#ff6e7f] shadow-xl w-14 h-14 flex items-center justify-center rounded-full z-30 hover:bg-[#ff6e7f] hover:text-white transition-colors duration-300"
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
              class="absolute w-full h-full backface-hidden rounded-3xl flex items-center justify-center shadow-lg bg-gradient-to-br from-[#fcb69f] via-[#ffecd2] to-[#ff6e7f] border-2 border-[#fcb69f]"
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
              class="absolute w-full h-full backface-hidden rounded-3xl flex items-center justify-center shadow-lg bg-gradient-to-br from-[#ff6e7f] via-[#fcb69f] to-[#ffecd2] border-2 border-[#ff6e7f] rotateY-180"
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
        class="absolute right-40 top-1/2 -translate-y-1/2 bg-white/80 border-2 border-[#ff6e7f] shadow-xl w-14 h-14 flex items-center justify-center rounded-full z-30 hover:bg-[#ff6e7f] hover:text-white transition-colors duration-300"
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
    <div
      class="fixed left-0 right-0 bottom-10 flex justify-center items-center z-20"
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

const currentIndex = ref(2);
const flipping = ref(false);
const animating = ref(false);

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
  if (diff > total / 2) diff -= total; // Para que los laterales sean circulares
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