<template>
  <div class="flex flex-col items-center justify-center min-h-[80vh]">
    <div class="relative w-full max-w-4xl flex flex-col items-center">
      <div
        class="relative w-full flex items-center justify-center py-12"
        style="perspective: 1600px"
      >
        <!-- Coverflow 3D -->
        <div
          class="relative w-full flex items-center justify-center h-[340px] md:h-[420px]"
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
              class="rounded-2xl shadow-2xl object-cover border-4 border-white select-none pointer-events-auto"
              :class="getImgSizeClass(i)"
              draggable="false"
            />
          </div>
        </div>
        <!-- Flechas -->
        <button
          @click="prev"
          class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 z-10"
        >
          <svg
            class="w-6 h-6 text-indigo-500"
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
        <button
          @click="next"
          class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 z-10"
        >
          <svg
            class="w-6 h-6 text-indigo-500"
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
          class="text-xl font-bold text-indigo-900 drop-shadow transition-all duration-500"
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
              ? 'bg-indigo-500 scale-125 shadow-lg z-10 animate-dot-wave'
              : 'opacity-70'
          "
          :style="currentIndex === i ? { animationDelay: i * 0.08 + 's' } : {}"
        ></button>
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

const currentIndex = ref(0);

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

// Coverflow 3D: calcula el estilo transform para cada slide
function getCoverflowStyle(i) {
  const total = images.length;
  let pos = (i - currentIndex.value + total) % total;
  if (pos > total / 2) pos = pos - total; // Rango negativo para la izquierda
  const baseZ = 20;
  if (pos === 0) {
    // Central
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
    // Derecha inmediata
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
    // Derecha segunda (ajustar left para evitar hueco)
    return {
      left: "76%", // antes 78%
      transform: "translateX(-50%) scale(0.74) rotateY(-60deg) translateZ(0px)",
      zIndex: 10,
      opacity: 0.45,
      filter: "blur(3px) brightness(0.92)",
      pointerEvents: "none",
    };
  } else if (pos === -1) {
    // Izquierda inmediata
    return {
      left: "36%",
      transform: "translateX(-50%) scale(0.87) rotateY(40deg) translateZ(10px)",
      zIndex: 18,
      opacity: 0.7,
      filter: "blur(1.5px) brightness(0.95)",
      pointerEvents: "auto",
    };
  } else if (pos === -2) {
    // Izquierda segunda (ajustar left para evitar hueco)
    return {
      left: "24%", // antes 22%
      transform: "translateX(-50%) scale(0.74) rotateY(60deg) translateZ(0px)",
      zIndex: 10,
      opacity: 0.45,
      filter: "blur(3px) brightness(0.92)",
      pointerEvents: "none",
    };
  } else {
    // Ocultos
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
  // Todas igual, el tamaño lo da el scale del coverflow
  return "w-[260px] h-[320px] md:w-[320px] md:h-[400px]";
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
