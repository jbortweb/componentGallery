<template>
  <div class="relative w-screen h-[80vh] overflow-hidden">
    <!-- SVG defs con máscara: debe estar antes de usarla -->
    <svg
      style="
        position: absolute;
        width: 0;
        height: 0;
        pointer-events: none;
        opacity: 0;
      "
      aria-hidden="true"
    >
      <defs>
        <mask id="donutmask">
          <!-- fondo negro oculta todo -->
          <rect x="0" y="0" width="100%" height="100%" fill="black" />
          <!-- círculo blanco (revela) -->
          <circle :cx="cx" :cy="cy" :r="outerR" fill="white" />
          <!-- hueco negro en el centro (oculta) -->
          <circle :cx="cx" :cy="cy" :r="innerR" fill="black" />
        </mask>
      </defs>
    </svg>

    <!-- Slider con máscara (usa CSS mask referenciando el id) -->
    <div
      class="absolute inset-0"
      :style="{ mask: 'url(#donutmask)', WebkitMask: 'url(#donutmask)' }"
    >
      <div
        v-for="(item, idx) in items"
        :key="'mask-' + idx"
        class="absolute inset-0 transition-transform duration-700 ease-in-out"
        :style="{
          transform:
            idx === current
              ? 'translateX(0)'
              : idx < current
              ? 'translateX(-100%)'
              : 'translateX(100%)',
        }"
      >
        <img
          :src="item.src"
          alt=""
          class="masked-img"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>

    <!-- Slider normal detrás -->
    <div class="absolute inset-0">
      <div
        v-for="(item, idx) in items"
        :key="'normal-' + idx"
        class="absolute inset-0 transition-transform duration-700 ease-in-out"
        :style="{
          transform:
            idx === current
              ? 'translateX(0)'
              : idx < current
              ? 'translateX(-100%)'
              : 'translateX(100%)',
        }"
      >
        <img
          :src="item.src"
          alt=""
          class="img-slider"
          loading="lazy"
          decoding="async"
        />
        <div class="absolute top-8 left-8 flex flex-col items-start z-20">
          <span
            class="text-4xl font-bold text-white px-2 py-1 rounded"
            style="text-shadow: 0 0 8px #000"
          >
            {{ item.title }}
          </span>
          <span
            class="text-2xl font-semibold text-white px-2 py-1 rounded mt-2"
            style="text-shadow: 0 0 8px #000"
          >
            {{ item.price }} €
          </span>
        </div>
      </div>
    </div>

    <svg
      class="absolute inset-0 w-full h-full pointer-events-none z-30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <image
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        :href="items[current].src"
        mask="url(#donutmask)"
      />
      <circle
        :cx="cx"
        :cy="cy"
        :r="innerR"
        fill="rgba(255,255,255,0.12)"
        stroke="white"
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const items = [
  // URLs aumentadas a w=2000 para buena resolución en pantallas grandes
  {
    src: "https://plus.unsplash.com/premium_photo-1739831741835-39e5d6c49daf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZyYXNjbyUyMGRlJTIwcGVyZnVtZXxlbnwwfDB8MHx8fDA%3D",
    title: "DAISY D'OR",
    price: "29.99",
  },
  {
    src: "https://images.unsplash.com/photo-1716978499366-d5a84bf1fe70?w=2000&auto=format&fit=crop&q=80",
    title: "AQUA BASADE",
    price: "24.99",
  },
  {
    src: "https://images.unsplash.com/photo-1558710347-d8257f52e427?w=2000&auto=format&fit=crop&q=80",
    title: "MARILIGHT",
    price: "19.99",
  },
  {
    src: "https://images.unsplash.com/photo-1700382080516-730193076f37?w=2000&auto=format&fit=crop&q=80",
    title: "BLOS PARÍS",
    price: "22.99",
  },
];

const current = ref(0);
let interval = null;

// Máscara (centro + radios)
const cx = ref(window.innerWidth / 2);
const cy = ref(window.innerHeight / 2);
const outerR = ref(0);
const innerR = ref(0);
let animating = false;

function updateMask() {
  // ajusta el centro si quieres desplazarlo
  cx.value = window.innerWidth / 2 - window.innerWidth / 8;
  cy.value = window.innerHeight / 2 - window.innerHeight / 8;
}

function startAnimation() {
  if (animating) return;
  animating = true;
  let progress = 0;
  const frames = 60;
  const maxOuter = window.innerHeight / 3.2;
  const maxInner = window.innerHeight / 7;

  const easeOutQuad = (t) => t * (2 - t);

  function open() {
    progress++;
    const e = easeOutQuad(progress / frames);
    outerR.value = e * maxOuter;
    innerR.value = e * maxInner;
    if (progress < frames) requestAnimationFrame(open);
    else {
      // cambiar slide y cerrar
      current.value = (current.value + 1) % items.length;
      close();
    }
  }

  function close() {
    progress--;
    const e = easeOutQuad(Math.max(0, progress / frames));
    outerR.value = e * maxOuter;
    innerR.value = e * maxInner;
    if (progress > 0) requestAnimationFrame(close);
    else animating = false;
  }

  open();
}

onMounted(() => {
  updateMask();
  window.addEventListener("resize", updateMask);
  interval = setInterval(startAnimation, 6000);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateMask);
  clearInterval(interval);
});
</script>

<style scoped>
.masked-img,
.img-slider {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

[style*="mask"] {
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: cover;
}
</style>
