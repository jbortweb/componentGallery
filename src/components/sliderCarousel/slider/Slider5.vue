<template>
  <div
    class="relative w-full h-[80vh] bg-[#23272a] flex items-center justify-center overflow-hidden"
  >
    <div class="relative w-full h-full mx-auto">
      <div
        class="absolute top-8 left-8 z-20 text-left pointer-events-none select-none"
      >
        <div class="meta text-xs md:text-sm uppercase text-gray-400 mb-2">
          Modelos
        </div>
        <h2
          class="font-serif font-bold text-white text-3xl md:text-5xl leading-tight mb-6"
        >
          {{ slides[current].title }}
        </h2>
        <div
          class="meta text-xs md:text-sm uppercase tracking-widest text-gray-400 mt-4 mb-2"
        >
          Características
        </div>
        <div class="font-serif text-white text-lg md:text-2xl">
          {{ slides[current].status }}
        </div>
      </div>
      <transition name="fade-blur">
        <img
          :key="slides[current].img"
          :src="slides[current].img"
          class="absolute w-full h-auto object-cover"
        />
      </transition>
      <div
        class="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-30"
      >
        <button
          v-for="(slide, idx) in slides"
          :key="'pag-' + idx"
          :class="[
            'w-4 h-4 rounded-full bg-white transition-opacity duration-500',
            idx === current ? 'opacity-100' : 'opacity-30',
          ]"
          @click="goTo(idx)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const slides = [
  {
    title: "Xiaomi 14 Ultra",
    status: "Cámara Leica, Snapdragon 8 Gen 3, 16GB RAM, 512GB ROM",
    img: "https://images.unsplash.com/photo-1624434207310-94fc4a4394db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHhpYW9taXxlbnwwfDB8MHx8fDA%3D",
  },
  {
    title: "Xiaomi Redmi Note 13 Pro+",
    status: "Pantalla AMOLED 120Hz, 200MP, 12GB RAM, 512GB ROM",
    img: "https://images.unsplash.com/photo-1655356392708-c675781f1748?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHhpYW9taXxlbnwwfDB8MHx8fDA%3D",
  },
  {
    title: "Xiaomi 13T",
    status: "MediaTek Dimensity 8200, 8GB RAM, 256GB ROM",
    img: "https://images.unsplash.com/photo-1587131664239-885aa135f8a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHhpYW9taXxlbnwwfDB8MHx8fDA%3D",
  },
  {
    title: "Xiaomi POCO F5 Pro",
    status: "Snapdragon 8+ Gen 1, 12GB RAM, 256GB ROM",
    img: "https://images.unsplash.com/photo-1656834897732-944cdd4e6791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHhpYW9taXxlbnwwfDB8MHx8fDA%3D",
  },
];
const current = ref(0);
let interval = null;

function goTo(idx) {
  current.value = idx;
}

onMounted(() => {
  interval = setInterval(() => {
    let next = (current.value + 1) % slides.length;
    goTo(next);
  }, 5000);
});
onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.fade-blur-enter-active,
.fade-blur-leave-active {
  transition: opacity 2.5s cubic-bezier(0.77, 0, 0.18, 1),
    filter 2.5s cubic-bezier(0.77, 0, 0.18, 1);
  position: absolute;
  inset: 0;
}
.fade-blur-enter-from {
  opacity: 0;
  filter: blur(32px);
  z-index: 2;
}
.fade-blur-enter-to {
  opacity: 1;
  filter: blur(0);
  z-index: 2;
}
.fade-blur-leave-from {
  opacity: 1;
  filter: blur(0);
  z-index: 1;
}
.fade-blur-leave-to {
  opacity: 0;
  filter: blur(32px);
  z-index: 1;
}
</style>