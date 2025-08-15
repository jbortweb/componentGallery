
<template>
  <div
    class="relative w-full h-[70vh] flex items-center justify-center overflow-hidden"
  >
    <!-- Split vertical -->
    <!-- Mitad izquierda -->
    <div class="absolute left-0 top-0 w-full h-full overflow-hidden">
      <div class="relative w-full h-full">
        <img
          v-for="(img, idx) in images"
          :key="'left-' + idx"
          :src="img"
          class="absolute w-full h-full object-cover transition-transform duration-1000"
          :style="{
            transform:
              idx === current
                ? 'translateY(0)'
                : idx < current
                ? 'translateY(-100%)'
                : 'translateY(100%)',
            clipPath: 'inset(0 50% 0 0)',
            zIndex: idx === current ? 2 : 1,
          }"
        />
      </div>
    </div>
    <!-- Mitad derecha -->
    <div class="absolute right-0 top-0 w-full h-full overflow-hidden">
      <div class="relative w-full h-full">
        <img
          v-for="(img, idx) in images"
          :key="'right-' + idx"
          :src="img"
          class="absolute w-full h-full object-cover transition-transform duration-1000"
          :style="{
            transform:
              idx === current
                ? 'translateY(0)'
                : idx < current
                ? 'translateY(100%)'
                : 'translateY(-100%)',
            clipPath: 'inset(0 0 0 50%)',
            zIndex: idx === current ? 2 : 1,
          }"
        />
      </div>
    </div>
    <!-- Texto central -->
    <div
      class="slideshow-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-5xl md:text-7xl font-extrabold text-white text-center tracking-widest uppercase pointer-events-none select-none"
    >
      {{ texts[current] }}
    </div>
    <!-- Dots -->
    <div
      class="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20"
    >
      <button
        v-for="(img, idx) in images"
        :key="'dot-' + idx"
        @click="goTo(idx)"
        class="w-8 h-2 rounded-full transition-all duration-300"
        :class="
          idx === current ? 'bg-white opacity-100' : 'bg-white/60 opacity-60'
        "
      ></button>
    </div>
  </div>
</template>
        

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = [
  "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpc2FqZXN8ZW58MHwwfDB8fHww",
  "https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhaXNhamVzfGVufDB8MHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1614586125858-e695dd97d1b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBhaXNhamVzfGVufDB8MHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBhaXNhamVzfGVufDB8MHwwfHx8MA%3D%3D",
];
const texts = ["Lago", "Puente", "Nieve", "Prado"];
const current = ref(0);
let interval = null;

const goTo = (idx) => {
  current.value = idx;
};

onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % images.length;
  }, 3500);
});
onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
/* Mantén los estilos originales, adapta solo lo necesario para Tailwind */
.slideshow {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 50vw;
  height: 100%;
  overflow: hidden;
}
.slideshow-right {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100%;
  overflow: hidden;
}
.slideshow-text {
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 100;
  letter-spacing: 0.2em;
  line-height: 0.8;
}
.slider {
  will-change: transform;
}
.item img {
  min-width: 101%;
  min-height: 101%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (max-width: 767px) {
  .slideshow-text {
    font-size: 2rem;
  }
}
</style>
  