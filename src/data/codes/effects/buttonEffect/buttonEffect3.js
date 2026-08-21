export default `<template>
  <div
    class="relative w-full max-w-xl mx-auto h-96 rounded-2xl overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center"
  >
    <!-- Botón magnético -->
    <div
      ref="magnetWrap"
      :class="{ snapped: isSnapped }"
      @mousemove="onMove"
      @mouseleave="onLeave"
      @mousedown="snap"
      class="magnet-wrap flex items-center justify-center p-12"
    >
      <button
        ref="magnetBtn"
        class="magnetic-btn px-10 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-lg shadow-lg shadow-emerald-500/30 border-0 cursor-pointer"
      >
        Botón Magnético
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Efecto magnético que sigue al cursor
const magnetWrap = ref(null);
const magnetBtn = ref(null);

const onMove = (event) => {
  const wrap = magnetWrap.value;
  const btn = magnetBtn.value;
  if (!wrap || !btn) return;

  const rect = wrap.getBoundingClientRect();
  const x = event.clientX - rect.left - rect.width / 2;
  const y = event.clientY - rect.top - rect.height / 2;

  btn.style.transform =
    "translate(" + x * 0.3 + "px, " + y * 0.3 + "px)";
};

const onLeave = () => {
  if (magnetBtn.value) {
    magnetBtn.value.style.transform = "translate(0, 0)";
  }
};

// Rebote al hacer clic
const isSnapped = ref(false);

const snap = () => {
  if (isSnapped.value) return;
  isSnapped.value = true;
  setTimeout(() => {
    isSnapped.value = false;
  }, 400);
};
</script>

<style scoped>
/* Transición suave del movimiento magnético */
.magnetic-btn {
  transition: transform 0.1s ease-out;
  will-change: transform;
}

/* Rebote elástico al hacer clic */
.magnet-wrap.snapped {
  animation: magnet-snap 0.4s ease;
}

@keyframes magnet-snap {
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.85);
  }
  70% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1);
  }
}
</style>
`
