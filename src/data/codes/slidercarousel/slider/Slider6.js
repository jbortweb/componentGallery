export default `
<template>
  <div
    class="relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
  >
    <!-- Slide principal de fondo -->
    <div class="absolute inset-0 w-full h-auto">
      <transition name="grow-fade" mode="out-in">
        <img
          :src="slides[current].img"
          :key="slides[current].img"
          alt="LEGO"
          class="w-full h-auto object-cover absolute"
        />
      </transition>
      <div
        class="absolute top-8 left-8 bg-black/60 p-6 rounded-xl shadow-lg text-white max-w-md"
      >
        <h2 class="title text-2xl font-bold mb-2">
          {{ slides[current].title }}
        </h2>
        <p class="description text-base mb-4">
          {{ slides[current].description }}
        </p>
        <button
          class="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
        >
          Ver más
        </button>
      </div>
    </div>
    <!-- Tarjetas miniatura abajo a la derecha -->
    <div class="absolute bottom-8 right-8 flex flex-row gap-6 z-10">
      <div
        v-for="(slide, idx) in nextSlides"
        :key="slide.title"
        class="w-32 h-48 rounded-2xl shadow-xl overflow-hidden relative"
        :style="miniatureStyle(idx)"
      >
        <img :src="slide.img" alt="LEGO" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const slides = [
  {
    title: "LEGO Star Wars: The Skywalker Saga",
    description:
      "Explora la galaxia y revive las nueve películas de Star Wars en versión LEGO. Juego digital lleno de humor y acción.",
    img: "https://www.lego.com/cdn/cs/set/assets/bltd5b40820d70c75cd/games-Standard-Block-starwars.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1",
  },
  {
    title: "LEGO Movie",
    description:
      "La película animada que revolucionó el universo LEGO. Aventuras, humor y personajes icónicos en un mundo de bloques.",
    img: "https://store-images.s-microsoft.com/image/apps.11681.71672158156149890.b5e4b1d3-b8ea-4b5a-a951-fb09d2738c1e.a4f23088-5dc3-48f7-bf14-54af2dbe325d?q=90&w=480&h=270",
  },
  {
    title: "LEGO Ninjago Movie",
    description:
      "Acción y artes marciales en la ciudad de Ninjago. Película y videojuego con los ninjas favoritos de LEGO.",
    img: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABatK4FhLVTPYNxURAm4VmHai4VaiAiRU2_82ofnENev0sfLpTo7-3uYFUgZfZ2kSt02xmLKNKDD0kuQZTs9BNA-3vtGp81BHt5Eh.jpg?r=771",
  },
  {
    title: "LEGO Dimensions",
    description:
      "Juego digital que mezcla universos: Batman, Doctor Who, y más, todos juntos en el multiverso LEGO.",
    img: "https://i0.wp.com/tomatazos.buscafs.com/2021/06/director-lego-batman-pelicula-revela-secuela-cancelada-iba-ser-liga-justicia.png?quality=75&strip=all",
  },
];

const current = ref(0);

const nextSlides = computed(() =>
  [1, 2, 3].map((i) => slides[(current.value + i) % slides.length])
);

let interval = null;
onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % slides.length;
  }, 4000);
});
onUnmounted(() => {
  clearInterval(interval);
});
function miniatureStyle(idx) {
  return {
    opacity: 1,
    transform: 'translateY(-' + (idx * 10) + 'px) scale(' + (1 - idx * 0.08) + ')',
    transition: 'transform 0.7s cubic-bezier(.77,0,.18,1), opacity 0.7s',
  };
}
</script>

<style scoped>
.nav .btn {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}
</style>`