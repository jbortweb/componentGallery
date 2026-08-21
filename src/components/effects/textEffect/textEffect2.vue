<template>
  <div
    class="relative w-full max-w-xl mx-auto h-96 rounded-2xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center"
  >
    <!-- Botón de código -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-50 w-10 h-10 bg-gray-800/90 hover:bg-gray-700 rounded-lg flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200 backdrop-blur-sm border-0 cursor-pointer"
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

    <!-- Texto con efecto máquina de escribir -->
    <h2 class="text-5xl font-bold text-white">
      <span>{{ typedText }}</span><span class="type-cursor">|</span>
    </h2>

    <!-- Modal de código -->
    <CodeModal
      ref="codeModal"
      cardType="Text Effect"
      cardVariant="Efecto Máquina de Escribir"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import CodeModal from "../../CodeModal.vue";
import textEffect2Code from "../../../data/codes/effects/textEffect/textEffect2.js";

// Configuración del modal
const codeModal = ref(null);
const cardCode = textEffect2Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};

// Palabras que se escriben y borran en bucle
const words = ["Frontend", "Backend", "Diseño", "Creatividad"];
const typedText = ref("");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let timer = null;

const type = () => {
  const current = words[wordIndex];

  if (!isDeleting) {
    charIndex++;
    typedText.value = current.slice(0, charIndex);

    if (charIndex === current.length) {
      isDeleting = true;
      timer = setTimeout(type, 1500);
      return;
    }
  } else {
    charIndex--;
    typedText.value = current.slice(0, charIndex);

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  timer = setTimeout(type, isDeleting ? 60 : 120);
};

onMounted(() => {
  timer = setTimeout(type, 500);
});

onBeforeUnmount(() => {
  clearTimeout(timer);
});
</script>

<style scoped>
/* Cursor parpadeante de la máquina de escribir */
.type-cursor {
  display: inline-block;
  margin-left: 2px;
  color: #22d3ee;
  animation: cursor-blink 0.8s step-end infinite;
}

@keyframes cursor-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
