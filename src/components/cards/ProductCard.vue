<template>
  <div
    class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 max-w-sm"
  >
    <!-- Image Section -->
    <div class="relative overflow-hidden group">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div class="absolute top-3 right-3">
        <span
          class="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium"
        >
          {{ product.category }}
        </span>
      </div>
      <div
        class="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <button
          class="bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-md hover:bg-gray-50"
        >
          Vista rápida
        </button>
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-6">
      <div class="flex items-start justify-between mb-2">
        <h3 class="text-xl font-bold text-gray-900 line-clamp-1">
          {{ product.title }}
        </h3>
        <span class="text-2xl font-bold text-blue-600 ml-2">
          {{ product.price }}
        </span>
      </div>

      <p class="text-gray-600 text-sm mb-4 line-clamp-2">
        {{ product.description }}
      </p>

      <!-- Rating Section -->
      <div class="flex items-center mb-4">
        <div class="flex items-center">
          <div class="flex">
            <svg
              v-for="star in 5"
              :key="star"
              class="w-4 h-4"
              :class="
                star <= Math.floor(product.rating)
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              "
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
          <span class="text-sm text-gray-600 ml-1">
            {{ product.rating }} ({{ product.reviews }} reseñas)
          </span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-2">
        <button
          class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Añadir al carrito
        </button>
        <button
          class="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          <svg
            class="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
