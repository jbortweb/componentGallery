<template>
  <div
    class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 max-w-sm"
  >
    <!-- Image Section -->
    <div class="relative overflow-hidden group">
      <img
        :src="article.image"
        :alt="article.title"
        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div class="absolute top-3 left-3">
        <span
          class="bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs font-medium"
        >
          {{ article.readTime }} lectura
        </span>
      </div>
      <div
        class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-16"
      ></div>
    </div>

    <!-- Content Section -->
    <div class="p-6">
      <!-- Title and Excerpt -->
      <div class="mb-4">
        <h3
          class="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 cursor-pointer transition-colors duration-200"
        >
          {{ article.title }}
        </h3>
        <p class="text-gray-600 text-sm line-clamp-3">
          {{ article.excerpt }}
        </p>
      </div>

      <!-- Tags -->
      <div class="mb-4">
        <div class="flex flex-wrap gap-1">
          <span
            v-for="tag in article.tags.slice(0, 2)"
            :key="tag"
            class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
          >
            {{ tag }}
          </span>
          <span
            v-if="article.tags.length > 2"
            class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
          >
            +{{ article.tags.length - 2 }}
          </span>
        </div>
      </div>

      <!-- Author and Date -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <div
            class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
          >
            <span class="text-white text-xs font-bold">
              {{ article.author.charAt(0) }}
            </span>
          </div>
          <div class="ml-2">
            <p class="text-sm font-medium text-gray-900">
              {{ article.author }}
            </p>
            <p class="text-xs text-gray-500">{{ formatDate(article.date) }}</p>
          </div>
        </div>
      </div>

      <!-- Engagement Stats -->
      <div
        class="flex items-center justify-between pt-4 border-t border-gray-100"
      >
        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <svg
              class="w-4 h-4 text-red-500 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
            <span class="text-sm text-gray-600">{{ article.likes }}</span>
          </div>
          <div class="flex items-center">
            <svg
              class="w-4 h-4 text-gray-400 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span class="text-sm text-gray-600">{{ article.comments }}</span>
          </div>
        </div>

        <button
          class="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
        >
          Leer más →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
</script>
