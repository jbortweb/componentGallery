<template>
  <div
    class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm mx-auto border border-orange-100"
  >
    <div class="p-6">
      <!-- Header con diseño magazine -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-2">
          <div
            class="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center"
          >
            <span class="text-white text-xs font-bold">{{
              article.author.charAt(0)
            }}</span>
          </div>
          <div>
            <p class="text-sm font-bold text-gray-900">{{ article.author }}</p>
            <p class="text-xs text-orange-600">
              {{ formatDate(article.date) }}
            </p>
          </div>
        </div>
        <div
          class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold"
        >
          {{ article.readTime }}
        </div>
      </div>

      <!-- Title con estilo magazine -->
      <h3 class="text-2xl font-black text-gray-900 mb-3 leading-tight">
        {{ article.title }}
      </h3>

      <!-- Excerpt -->
      <p class="text-gray-700 mb-4 leading-relaxed font-medium">
        {{ article.excerpt }}
      </p>

      <!-- Image -->
      <div class="relative mb-4 rounded-2xl overflow-hidden">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-40 object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
        ></div>
      </div>

      <!-- Tags con estilo magazine -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="tag in article.tags.slice(0, 3)"
          :key="tag"
          class="bg-white border border-orange-200 text-orange-800 px-3 py-1 rounded-lg text-xs font-semibold shadow-sm"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Stats y action -->
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <div
              class="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2"
            >
              <svg
                class="w-3 h-3 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </div>
            <span class="text-sm font-semibold text-gray-700">{{
              article.likes
            }}</span>
          </div>
          <div class="flex items-center">
            <div
              class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2"
            >
              <svg
                class="w-3 h-3 text-blue-500"
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
            </div>
            <span class="text-sm font-semibold text-gray-700">{{
              article.comments
            }}</span>
          </div>
        </div>

        <button
          class="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg"
        >
          Leer
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
