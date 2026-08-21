export default `<template>
  <div
    class="relative w-full max-w-xl mx-auto h-96 rounded-2xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center"
  >
    <!-- Texto con efecto máquina de escribir -->
    <h2 class="text-5xl font-bold text-white">
      <span>{{ typedText }}</span><span class="type-cursor">|</span>
    </h2>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

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
`
