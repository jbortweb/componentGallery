<template>
  <div
    class="product-card-4 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/80 via-blue-900/80 to-indigo-900/80 backdrop-blur-sm border border-purple-500/20 p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 hover:border-purple-400/40"
  >
    <!-- Animated background pattern -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="h-full w-full bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse"
      ></div>
    </div>

    <!-- Floating particles effect -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="particle absolute top-1/4 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce"
        style="animation-delay: 0s"
      ></div>
      <div
        class="particle absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce"
        style="animation-delay: 1s"
      ></div>
      <div
        class="particle absolute bottom-1/4 left-3/4 w-1 h-1 bg-indigo-400 rounded-full animate-bounce"
        style="animation-delay: 2s"
      ></div>
    </div>

    <!-- Code button -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 bg-purple-600/80 hover:bg-purple-500 text-white p-3 rounded-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-purple-400/30 z-50 cursor-pointer"
      aria-label="Ver código del componente ProductCard4"
      title="Ver código del componente"
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

    <!-- Product image with smooth hover effect -->
    <div class="relative mb-6">
      <img
        src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=300&fit=crop"
        alt="Samsung Galaxy S24 Ultra"
        class="relative z-20 w-full h-48 object-cover rounded-xl border border-purple-400/30 shadow-lg group-hover:shadow-purple-500/50 transition-shadow duration-500"
      />
    </div>

    <!-- Product content -->
    <div class="relative z-10 space-y-4">
      <div class="flex items-center justify-between">
        <span
          class="px-3 py-1 text-xs font-semibold bg-purple-500/30 text-purple-200 rounded-full border border-purple-400/50"
          >Technology</span
        >
        <div class="flex items-center space-x-1 text-yellow-400">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span class="text-sm font-medium text-white">4.6</span>
        </div>
      </div>

      <h3
        class="text-xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300"
      >
        Samsung Galaxy S24 Ultra
      </h3>

      <p class="text-gray-300 text-sm leading-relaxed">
        Smartphone Android premium con S Pen y cámara de 200MP
      </p>

      <div
        class="flex items-center justify-between pt-4 border-t border-purple-500/20"
      >
        <div class="space-y-1">
          <p class="text-2xl font-bold text-white">1,299€</p>
          <p class="text-xs text-gray-400">3421 reseñas</p>
        </div>

        <button
          class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-purple-500/25 border border-purple-400/30"
        >
          Comprar
        </button>
      </div>
    </div>

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Product Card"
      cardVariant="Holographic Purple Style"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import ProductCard4Code from "../../../data/codes/cards/products/ProductCard4.js";

// Datos integrados del Samsung Galaxy S24 Ultra

const codeModal = ref(null);
const cardCode = ProductCard4Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.particle {
  animation: float 3s ease-in-out infinite;
}
</style>