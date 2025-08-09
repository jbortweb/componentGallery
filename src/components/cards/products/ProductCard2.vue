<template>
  <div
    class="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105 w-full max-w-sm mx-auto border border-gray-100 relative group"
  >
    <!-- Code button -->
    <button
      @click="showCode"
      class="absolute top-3 right-3 z-30 w-10 h-10 bg-orange-600/90 hover:bg-orange-500 rounded-lg flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200 backdrop-blur-sm shadow-lg border border-orange-400/30 cursor-pointer"
      title="Ver código del componente"
      aria-label="Ver código del componente"
    >
      <svg
        class="w-5 h-5 text-white"
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

    <div class="relative">
      <div
        class="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-500/20 z-10"
      ></div>
      <img
        src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop"
        alt="MacBook Air M2"
        class="w-full h-48 object-cover"
      />
      <div class="absolute bottom-4 left-4 z-20">
        <div
          class="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg"
        >
          <span class="text-2xl font-black text-gray-900">1,199€</span>
        </div>
      </div>
      <div class="absolute top-4 right-4 z-20">
        <div
          class="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold"
        >
          Technology
        </div>
      </div>
    </div>

    <div class="p-6 relative">
      <!-- Decorative element -->
      <div
        class="absolute top-0 left-6 w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full -mt-0.5"
      ></div>

      <h3 class="text-2xl font-black text-gray-900 mb-3 leading-tight">
        MacBook Air M2
      </h3>

      <div class="flex items-center mb-4">
        <div class="flex mr-3">
          <svg
            v-for="star in 5"
            :key="star"
            class="w-5 h-5"
            :class="
              star <= Math.floor(4.9) ? 'text-orange-400' : 'text-gray-200'
            "
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>
        <span class="text-sm font-semibold text-gray-700">4.9 (892)</span>
      </div>

      <p class="text-gray-600 mb-6 leading-relaxed">
        Potencia y portabilidad en el laptop más fino de Apple
      </p>

      <div class="flex space-x-3">
        <button
          class="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-4 rounded-2xl font-bold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg"
        >
          Añadir al Carrito
        </button>
        <button
          class="w-12 h-12 border-2 border-gray-200 rounded-2xl flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-all duration-200"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Product Card"
      cardVariant="Orange Style"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../../CodeModal.vue";
import ProductCard2Code from "../../../data/codes/cards/products/ProductCard2.js";

// Datos integrados del MacBook Air M2

const codeModal = ref(null);
const cardCode = ProductCard2Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>
