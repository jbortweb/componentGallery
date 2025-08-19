<template>
  <!-- Modal de código -->
  <CodeModal
    ref="codeModal"
    cardType="Slider Card"
    cardVariant="Slider1"
    :codeContent="codeContent"
  />
  <!-- Botón de código arriba a la derecha (idéntico a carousel) -->
  <button
    @click="openCodeModal"
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
  <div
    class="slider-fade relative w-full h-[70vh] overflow-hidden rounded-xl shadow-xl"
  >
    <div
      v-for="(img, idx) in images"
      :key="idx"
      class="absolute inset-0 transition-opacity duration-2500"
      :style="{
        opacity: idx === current ? 1 : idx === prev ? 0.5 : 0,
        zIndex: idx === current ? 10 : idx === prev ? 5 : 0,
        transition: 'opacity 2.5s cubic-bezier(0.4,0,0.2,1)',
      }"
    >
      <img
        :src="img.src"
        :alt="img.alt"
        class="w-full h-full object-cover rounded-xl"
      />
    </div>
    <!-- Indicadores -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
      <span
        v-for="(img, idx) in images"
        :key="'dot-' + idx"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="
          idx === current
            ? 'bg-purple-500 scale-125 shadow-lg'
            : 'bg-purple-300/30'
        "
      >
      </span>
    </div>

    <div
      class="promo-box absolute top-1/2 left-6 z-30 bg-gradient-to-b from-purple-600 to-cyan-500/80 backdrop-blur-lg px-8 py-12 rounded-2xl shadow-2xl flex flex-col items-center text-white w-72 h-[26rem] max-w-full -translate-y-1/2"
    >
      <h2 class="text-2xl text-center font-bold mb-4">
        Viaje a la Costa Brava
      </h2>
      <p class="text-lg mb-6 text-center">
        Disfruta de 5 días inolvidables en la Costa Brava.
      </p>
      <div class="flex flex-col items-center gap-4 mb-6">
        <span class="text-4xl font-extrabold text-yellow-300">750€</span>
        <span
          class="bg-white/20 text-white px-4 py-2 rounded-lg text-base font-semibold"
          >Todo incluido</span
        >
      </div>
      <button
        class="mt-auto px-6 py-3 bg-yellow-400 text-purple-900 font-bold rounded-xl shadow-lg hover:bg-yellow-300 transition-all duration-300"
      >
        ¡Reserva ahora!
      </button>
    </div>
  </div>
</template>

<script setup>
import CodeModal from "../../CodeModal.vue";
import sliderCode from "../../../data/codes/slidercarousel/slider/Slider1.js";

const codeContent = sliderCode.default || sliderCode;
const codeModal = ref(null);
function openCodeModal() {
  if (codeModal.value && codeModal.value.openModal) {
    codeModal.value.openModal();
  }
}
import { ref, computed, onMounted, onUnmounted } from "vue";

const images = [
  {
    src: "https://images.unsplash.com/photo-1720688200060-4bfce673e70c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvc3RhJTIwYnJhdmF8ZW58MHwwfDB8fHww",
    alt: "Vistas al mar",
    caption: "Vistas al mar",
  },
  {
    src: "https://images.unsplash.com/photo-1619357305927-c160b6e19d2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNvc3RhJTIwYnJhdmF8ZW58MHx8MHx8fDA%3D",
    alt: "Barca",
    caption: "Barca",
  },
  {
    src: "https://images.unsplash.com/photo-1638380446377-5d21b4fd8b92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvc3RhJTIwYnJhdmF8ZW58MHx8MHx8fDA%3D",
    alt: "Pueblo",
    caption: "Pueblo pesquero",
  },
];

const current = ref(0);
const prev = computed(() => {
  return current.value === 0 ? images.length - 1 : current.value - 1;
});
let interval = null;

onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % images.length;
  }, 3500);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>