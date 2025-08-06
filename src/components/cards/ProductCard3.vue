<template>
  <div
    class="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 w-full max-w-sm mx-auto border border-gray-700 relative group"
  >
    <!-- Code button -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20 z-10"
      aria-label="Ver código del componente ProductCard3"
    >
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        ></path>
      </svg>
    </button>

    <div class="p-6">
      <div class="flex items-center justify-between mb-4">
        <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span class="text-green-400 text-xs font-mono uppercase tracking-wider"
          >Available</span
        >
      </div>

      <div class="relative mb-6">
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full h-40 object-cover rounded-xl"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent rounded-xl"
        ></div>
        <div class="absolute bottom-3 left-3">
          <span
            class="bg-gray-800/90 text-white px-3 py-1 rounded-lg text-xs font-medium backdrop-blur-sm"
          >
            {{ product.category }}
          </span>
        </div>
      </div>

      <h3 class="text-white text-xl font-bold mb-2 leading-tight">
        {{ product.title }}
      </h3>
      <p class="text-gray-400 text-sm mb-4 leading-relaxed">
        {{ product.description }}
      </p>

      <div class="flex items-center justify-between mb-6">
        <div class="text-left">
          <div class="text-2xl font-bold text-white">{{ product.price }}</div>
          <div class="text-gray-400 text-xs">Precio final</div>
        </div>
        <div class="text-right">
          <div class="flex items-center">
            <span class="text-yellow-400 text-lg mr-1">★</span>
            <span class="text-white font-semibold">{{ product.rating }}</span>
          </div>
          <div class="text-gray-400 text-xs">{{ product.reviews }} reviews</div>
        </div>
      </div>

      <div class="space-y-3">
        <button
          class="w-full bg-white text-gray-900 py-3 px-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-200 shadow-lg"
        >
          Comprar Ahora
        </button>
        <button
          class="w-full border border-gray-600 text-gray-300 py-3 px-4 rounded-xl font-medium hover:border-gray-500 hover:text-white transition-all duration-200"
        >
          Más Información
        </button>
      </div>
    </div>

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Product Card"
      cardVariant="Dark Modern Style"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../CodeModal.vue";
import { cardCodes } from "../../data/cardCodes.js";

defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const codeModal = ref(null);
const cardCode = cardCodes.ProductCard3;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>
