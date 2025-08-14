
<template>
  <div class="relative">
    <!-- Botón de código -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-50 w-10 h-10 bg-indigo-600/90 hover:bg-indigo-500 rounded-lg flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200 backdrop-blur-sm border border-indigo-400/30 cursor-pointer"
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
      <!-- Carrusel Coverflow 3D -->
      <div
        class="relative flex flex-col items-center justify-center w-full min-h-[520px]"
      >
        <!-- Flecha izquierda -->
        <button
          @click="prev"
          class="absolute left-0 z-20 bg-white/80 hover:bg-white rounded-full p-3 -translate-y-1/2 top-1/2 transition-all duration-200 group"
        >
          <svg
            class="w-6 h-6 text-indigo-500 group-hover:text-blue-600"
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
          style="perspective: 1600px; min-height: 520px"
        >
          <div
            v-for="(img, i) in images"
            :key="img.src"
            class="absolute transition-transform duration-700 ease-[cubic-bezier(.4,2,.3,1)]"
            :style="getCoverflowStyle(i)"
          >
            <img
              :src="img.src"
              :alt="img.caption"
              class="rounded-2xl object-cover border-4 border-white select-none pointer-events-auto"
              :class="getImgSizeClass(i)"
              draggable="false"
            />
          </div>
        </div>
        <!-- Flecha derecha -->
        <button
          @click="next"
          class="absolute right-0 z-20 bg-white/80 hover:bg-white rounded-full p-3 -translate-y-1/2 top-1/2 transition-all duration-200 group"
        >
          <svg
            class="w-6 h-6 text-indigo-500 group-hover:text-blue-600"
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
      <!-- Caption -->
      <div class="mt-6 text-center min-h-[2.5rem]">
        <h3
          class="text-xl font-bold text-white/80 drop-shadow transition-all duration-500"
        >
          {{ images[currentIndex].caption }}
        </h3>
      </div>
      <!-- Puntos animados en onda -->
      <div class="flex justify-center gap-3 mt-8">
        <button
          v-for="(img, i) in images"
          :key="i"
          @click="goTo(i)"
          class="w-4 h-4 rounded-full border-2 border-indigo-400 transition-all duration-300 focus:outline-none bg-white/80 relative"
          :class="
            currentIndex === i
              ? 'bg-indigo-500 scale-125 z-10 animate-dot-wave'
              : 'opacity-70'
          "
          :style="currentIndex === i ? { animationDelay: i * 0.08 + 's' } : {}"
        ></button>
      </div>
      <!-- Modal de código -->
      <CodeModal
        ref="codeModal"
        cardType="Carousel Card"
        cardVariant="Coverflow 3D transparente"
        :codeContent="cardCode"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import Carousel2Code from "../../../data/codes/slidercarousel/carousel/Carousel2.js";

const images = [
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    caption: "Coworking",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    caption: "Vistas al mar",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
    caption: "El universo",
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    caption: "Jornada laboral",
  },
  {
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    caption: "Picando código",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    caption: "Oficina",
  },
];

const currentIndex = ref(0);
const codeModal = ref(null);
const cardCode = Carousel2Code;

function prev() {
  currentIndex.value =
    currentIndex.value === 0 ? images.length - 1 : currentIndex.value - 1;
}
function next() {
  currentIndex.value =
    currentIndex.value === images.length - 1 ? 0 : currentIndex.value + 1;
}
function goTo(i) {
  currentIndex.value = i;
}

function getCoverflowStyle(i) {
  const total = images.length;
  let pos = (i - currentIndex.value + total) % total;
  if (pos > total / 2) pos = pos - total;
  const baseZ = 20;
  if (pos === 0) {
    return {
      left: "50%",
      transform:
        "translateX(-50%) scale(1.1) rotateY(0deg) translateZ(" + baseZ + "px)",
      zIndex: 30,
      opacity: 1,
      filter: "none",
      pointerEvents: "auto",
    };
  } else if (pos === 1) {
    return {
      left: "64%",
      transform:
        "translateX(-50%) scale(0.87) rotateY(-40deg) translateZ(10px)",
      zIndex: 18,
      opacity: 0.7,
      filter: "blur(1.5px) brightness(0.95)",
      pointerEvents: "auto",
    };
  } else if (pos === 2) {
    return {
      left: "76%",
      transform: "translateX(-50%) scale(0.74) rotateY(-60deg) translateZ(0px)",
      zIndex: 10,
      opacity: 0.45,
      filter: "blur(3px) brightness(0.92)",
      pointerEvents: "none",
    };
  } else if (pos === -1) {
    return {
      left: "36%",
      transform: "translateX(-50%) scale(0.87) rotateY(40deg) translateZ(10px)",
      zIndex: 18,
      opacity: 0.7,
      filter: "blur(1.5px) brightness(0.95)",
      pointerEvents: "auto",
    };
  } else if (pos === -2) {
    return {
      left: "24%",
      transform: "translateX(-50%) scale(0.74) rotateY(60deg) translateZ(0px)",
      zIndex: 10,
      opacity: 0.45,
      filter: "blur(3px) brightness(0.92)",
      pointerEvents: "none",
    };
  } else {
    return {
      left: "50%",
      opacity: 0,
      zIndex: 0,
      pointerEvents: "none",
      transform: "translateX(-50%) scale(0.5) rotateY(0deg) translateZ(0)",
      filter: "blur(0px)",
    };
  }
}
function getImgSizeClass(i) {
  return "w-[260px] h-[320px] md:w-[320px] md:h-[400px]";
}

function showCode() {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
}
</script>

<style scoped>
@keyframes dot-wave {
  0%,
  100% {
    transform: scale(1.2) translateY(0);
  }
  30% {
    transform: scale(1.4) translateY(-8px);
  }
  60% {
    transform: scale(1.1) translateY(0);
  }
}
.animate-dot-wave {
  animation: dot-wave 0.7s;
}
</style>
