<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#fffde4] via-[#ffd6e4] to-[#fcb69f]"
  >
    <div class="flex flex-col items-center justify-center w-full max-w-4xl">
      <!-- Carrusel principal -->
      <div class="relative flex items-center justify-center h-[420px] w-full">
        <div
          v-for="(img, i) in images"
          :key="img.src"
          class="absolute transition-all duration-1000 ease-[cubic-bezier(.4,1.2,.3,1)] w-[600px] h-[400px] rounded-3xl shadow-2xl"
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
          class="w-10 h-10 flex items-center justify-center bg-[#d72660] hover:bg-[#ff6e7f] text-white rounded-lg shadow-lg transition-colors duration-300"
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
            class="w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-md"
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
          class="w-10 h-10 flex items-center justify-center bg-[#d72660] hover:bg-[#ff6e7f] text-white rounded-lg shadow-lg transition-colors duration-300"
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
</script>