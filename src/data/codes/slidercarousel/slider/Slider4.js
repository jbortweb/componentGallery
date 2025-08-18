export default `
<template>
  <div
    class="relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
  >
    <!-- 8 partes verticales con flip escalonado -->
    <div
      v-for="part in 8"
      :key="'part-' + part"
      class="absolute top-0 left-0 w-full h-full pointer-events-none"
    >
      <div
        v-for="(img, idx) in images"
        :key="'img-' + idx + '-' + part"
        class="absolute w-full h-auto"
        :style="{
          clipPath: 'inset(0 ' + ((8 - part) * 12.5) + '% 0 ' + ((part - 1) * 12.5) + '%)',
          zIndex: idx === current ? 2 : 1,
          perspective: '1200px',
        }"
      >
        <div
          class="w-full h-auto"
          :style="{
            transform:
              idx === current
                ? 'rotateY(0deg)'
                : idx < current
                ? 'rotateY(180deg)'
                : 'rotateY(-180deg)',
            transition: 'transform 1s cubic-bezier(0.77, 0, 0.175, 1) ' + ((part - 1) * 0.12) + 's',
            transformOrigin: 'center left',
          }"
        >
          <img :src="img" class="w-full h-auto object-cover backface-hidden" />
        </div>
      </div>
    </div>
    <!-- Info producto arriba a la izquierda -->
    <div
      class="absolute top-8 left-8 z-10 text-left pointer-events-none select-none"
    >
      <div
        class="text-3xl md:text-5xl font-extrabold text-white"
        style="text-shadow: 0 0 2px #000, 0 0 1px #000"
      >
        {{ products[current].name }}
      </div>
      <div
        class="text-lg md:text-2xl font-light text-white mt-2"
        style="text-shadow: 0 0 2px #000, 0 0 1px #000"
      >
        {{ products[current].desc }}
      </div>
      <div
        class="text-xl md:text-3xl font-bold text-white mt-2"
        style="text-shadow: 0 0 2px #000, 0 0 1px #000"
      >
        {{ products[current].price }}
      </div>
    </div>
    <!-- Dots -->
    <div
      class="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = [
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
  "https://images.unsplash.com/photo-1719927604476-dc404b85358f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGNvbXB1dGFkb3JhJTIwYXBhcmF0b3xlbnwwfDB8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXB1dGFkb3JhJTIwcG9ydCVDMyVBMXRpbHxlbnwwfDB8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNvbXB1dGFkb3JhJTIwcG9ydCVDMyVBMXRpbHxlbnwwfDB8MHx8fDA%3D",
];
const products = [
  {
    name: "Laptop Pro 15''",
    desc: "Intel i7 · 16GB RAM · 512GB SSD",
    price: "1.299 €",
  },
  {
    name: "Desktop PowerStation",
    desc: "AMD Ryzen 9 · 32GB RAM · RTX 4070",
    price: "2.199 €",
  },
  {
    name: "Gaming Beast RGB",
    desc: "Intel i9 · 64GB RAM · RTX 4090",
    price: "3.499 €",
  },
  {
    name: "Ultrabook Air 13''",
    desc: "Intel i5 · 8GB RAM · 256GB SSD",
    price: "899 €",
  },
];
const current = ref(0);
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

<style scoped>
.backface-hidden {
  backface-visibility: hidden;
}
</style>
`