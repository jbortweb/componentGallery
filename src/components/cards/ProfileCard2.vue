<template>
  <div
    class="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm mx-auto border border-indigo-100"
  >
    <div class="p-6">
      <!-- Header minimalista -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          <span class="text-xs text-gray-500 font-medium">DISPONIBLE</span>
        </div>
        <div class="text-xs text-gray-400">
          ID: {{ profile.id.toString().padStart(3, "0") }}
        </div>
      </div>

      <!-- Avatar con diseño minimalista -->
      <div class="flex items-center mb-6">
        <div class="relative">
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="w-16 h-16 rounded-2xl object-cover"
          />
          <div
            class="absolute -top-1 -right-1 w-6 h-6 bg-indigo-500 text-white rounded-lg flex items-center justify-center text-xs font-bold"
          >
            ✓
          </div>
        </div>
        <div class="ml-4 flex-1">
          <h3 class="text-lg font-bold text-gray-900">{{ profile.name }}</h3>
          <p class="text-indigo-600 font-medium text-sm">{{ profile.role }}</p>
          <p class="text-gray-500 text-xs">@ {{ profile.company }}</p>
        </div>
      </div>

      <p class="text-gray-600 text-sm mb-6 leading-relaxed">
        {{ profile.bio }}
      </p>

      <!-- Skills con estilo tech -->
      <div class="mb-6">
        <h4
          class="text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wider"
        >
          Tech Stack
        </h4>
        <div class="grid grid-cols-2 gap-2">
          <div
            v-for="skill in profile.skills.slice(0, 4)"
            :key="skill"
            class="bg-white border border-gray-200 rounded-lg px-3 py-2 text-center"
          >
            <span class="text-xs font-medium text-gray-700">{{ skill }}</span>
          </div>
        </div>
      </div>

      <!-- Actions con diseño clean -->
      <div class="flex space-x-3">
        <button
          class="flex-1 bg-indigo-600 text-white py-2.5 px-4 rounded-xl font-medium hover:bg-indigo-700 transition-all duration-200 text-sm"
        >
          Conectar
        </button>
        <button
          class="px-4 py-2.5 border border-gray-300 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
        >
          <svg
            class="w-4 h-4 text-gray-600"
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
        </button>
        <button
          class="px-4 py-2.5 border border-gray-300 rounded-xl hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
        >
          <svg
            class="w-4 h-4 text-gray-600"
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
  </div>
</template>

<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
});
</script>
