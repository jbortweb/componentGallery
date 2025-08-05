<template>
  <div
    class="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 w-full border border-gray-700"
  >
    <div class="p-4">
      <!-- Header estilo terminal -->
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-red-500 rounded-full"></div>
          <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <span class="text-green-400 text-xs font-mono"
          >~/profile/{{ profile.name.toLowerCase().replace(" ", "-") }}</span
        >
      </div>

      <!-- Content con estilo hacker -->
      <div>
        <div class="flex items-center mb-3">
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="w-12 h-12 rounded-xl object-cover border border-gray-600"
          />
          <div class="ml-3 flex-1">
            <h3 class="text-green-400 text-base font-bold font-mono">
              {{ profile.name }}
            </h3>
            <p class="text-cyan-400 text-sm font-mono">{{ profile.role }}</p>
            <p class="text-gray-400 text-xs font-mono">
              {{ profile.company }}.dev
            </p>
          </div>
          <div class="text-right">
            <div class="text-yellow-400 text-xs font-mono">ONLINE</div>
            <div
              class="w-2 h-2 bg-green-500 rounded-full ml-auto mt-1 animate-pulse"
            ></div>
          </div>
        </div>

        <!-- Terminal-style bio -->
        <div class="bg-gray-900 rounded-lg p-3 mb-3 border border-gray-700">
          <div class="text-green-400 text-xs font-mono mb-1">
            $ cat about.txt
          </div>
          <p class="text-gray-300 text-sm font-mono leading-relaxed">
            {{ profile.bio }}
          </p>
        </div>

        <!-- Skills como comandos -->
        <div class="mb-3">
          <div class="text-cyan-400 text-xs font-mono mb-2">$ ls skills/</div>
          <div class="space-y-1">
            <div
              v-for="skill in profile.skills.slice(0, 3)"
              :key="skill"
              class="text-gray-300 text-xs font-mono flex items-center"
            >
              <span class="text-green-400 mr-2">></span>
              {{ skill.toLowerCase().replace(" ", "-") }}.exe
            </div>
          </div>
        </div>

        <!-- Social links estilo terminal -->
        <div class="mb-4">
          <div class="text-cyan-400 text-xs font-mono mb-2">
            $ echo $SOCIAL_LINKS
          </div>
          <div class="flex space-x-2">
            <a
              v-if="profile.social.github"
              :href="profile.social.github"
              class="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs font-mono transition-colors duration-200"
            >
              github
            </a>
            <a
              v-if="profile.social.linkedin"
              :href="profile.social.linkedin"
              class="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs font-mono transition-colors duration-200"
            >
              linkedin
            </a>
            <a
              v-if="profile.social.twitter"
              :href="profile.social.twitter"
              class="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs font-mono transition-colors duration-200"
            >
              twitter
            </a>
          </div>
        </div>

        <!-- Action button -->
        <button
          class="w-full bg-green-600 hover:bg-green-700 text-black py-2 px-3 rounded-lg font-mono font-bold transition-all duration-200 shadow-lg text-sm"
        >
          $ connect --user={{ profile.name.toLowerCase().replace(" ", "-") }}
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
