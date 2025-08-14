<template>
  <div
    class="w-screen min-h-screen flex flex-col items-center justify-start overflow-hidden bg-gradient-to-br from-[#e9ffde] via-[#ffe7b2] to-[#ffb347]"
  >
    <div
      class="flex flex-col items-center justify-start w-full max-w-5xl z-10 mt-12"
    >
      <!-- Carrusel principal -->
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
              class="w-full h-full object-cover rounded-3xl shadow-2xl"
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
          class="absolute left-0 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-[#4caf50] text-[#4caf50] hover:text-white rounded-full shadow-2xl w-16 h-16 flex items-center justify-center z-20 transition-all duration-300 border-2 border-[#ffb347] backdrop-blur-md"
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
          class="absolute right-0 top-1/2 -translate-y-1/2 bg-white/60 hover:bg-[#4caf50] text-[#4caf50] hover:text-white rounded-full shadow-2xl w-16 h-16 flex items-center justify-center z-20 transition-all duration-300 border-2 border-[#ffb347] backdrop-blur-md"
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
        class="w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-md group relative"
        :class="
          i === currentIndex
            ? 'border-[#4caf50] scale-110 ring-2 ring-[#ffb347]'
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
    return "w-[420px] h-[420px] rounded-3xl z-20 scale-110 shadow-2xl";
  }
  if (diff === -1) {
    return "w-[340px] h-[340px] rounded-2xl z-10 scale-95 shadow-lg -translate-x-32";
  }
  if (diff === 1) {
    return "w-[340px] h-[340px] rounded-2xl z-10 scale-95 shadow-lg translate-x-32";
  }
  return "w-[220px] h-[220px] rounded-xl z-0 scale-90 opacity-0 pointer-events-none";
}
</script>