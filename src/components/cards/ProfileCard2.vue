<template>
  <div class="relative group w-full">
    <!-- Code button -->
    <button
      @click="openCodeModal"
      class="absolute top-4 right-4 z-30 w-10 h-10 bg-gray-300 hover:bg-gray-200 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300 shadow-neumorphism-inset cursor-pointer"
      title="Ver código del componente"
      aria-label="Ver código del componente"
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
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    </button>

    <!-- Neumorphism Card -->
    <div
      class="bg-gray-300 rounded-3xl p-8 shadow-neumorphism hover:shadow-neumorphism-hover transition-all duration-500 transform hover:scale-102 relative overflow-hidden"
    >
      <!-- Subtle gradient overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-400/5 rounded-3xl"
      ></div>

      <!-- Content -->
      <div class="relative z-10">
        <!-- Avatar with 3D effect -->
        <div class="flex justify-center mb-6">
          <div class="relative group/avatar">
            <div
              class="w-24 h-24 rounded-full shadow-neumorphism-inset bg-gray-300 p-2 transform transition-all duration-300 group-hover/avatar:shadow-neumorphism-inset-hover"
            >
              <img
                :src="profile.avatar"
                :alt="profile.name"
                class="w-full h-full rounded-full object-cover shadow-inner"
              />
            </div>
            <!-- 3D floating status -->
            <div
              class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full shadow-neumorphism flex items-center justify-center transform hover:scale-110 transition-all duration-300"
            >
              <div
                class="w-3 h-3 bg-green-500 rounded-full shadow-neumorphism-inset animate-pulse"
              ></div>
            </div>
          </div>
        </div>

        <!-- Info with depth -->
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-gray-800 mb-2 tracking-wide">
            {{ profile.name }}
          </h3>
          <div
            class="bg-gray-300 rounded-2xl p-3 shadow-neumorphism-inset mb-2"
          >
            <p class="text-gray-600 font-medium">
              {{ profile.role }}
            </p>
          </div>
          <p class="text-gray-500 text-sm font-medium">
            @ {{ profile.company }}
          </p>
        </div>

        <!-- Bio in recessed area -->
        <div class="mb-6">
          <div class="bg-gray-300 rounded-2xl p-4 shadow-neumorphism-inset">
            <p
              class="text-gray-600 text-sm text-center leading-relaxed line-clamp-3"
            >
              {{ profile.bio }}
            </p>
          </div>
        </div>

        <!-- 3D Skills -->
        <div class="mb-6">
          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="(skill, index) in profile.skills.slice(0, 4)"
              :key="skill"
              :style="{ animationDelay: `${index * 100}ms` }"
              class="bg-gray-300 text-gray-700 text-xs font-medium px-3 py-2 rounded-xl shadow-neumorphism hover:shadow-neumorphism-hover transition-all duration-300 text-center transform hover:-translate-y-1 animate-fade-in-scale"
            >
              {{ skill }}
            </div>
          </div>
        </div>

        <!-- 3D Social buttons -->
        <div class="flex justify-center space-x-4 mb-6">
          <a
            v-if="profile.social.linkedin"
            :href="profile.social.linkedin"
            class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-neumorphism hover:shadow-neumorphism-inset active:shadow-neumorphism-pressed transition-all duration-200 transform hover:-translate-y-1 group/social"
          >
            <svg
              class="w-5 h-5 text-blue-600 group-hover/social:scale-110 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a
            v-if="profile.social.github"
            :href="profile.social.github"
            class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-neumorphism hover:shadow-neumorphism-inset active:shadow-neumorphism-pressed transition-all duration-200 transform hover:-translate-y-1 group/social"
          >
            <svg
              class="w-5 h-5 text-gray-800 group-hover/social:scale-110 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a
            v-if="profile.social.twitter"
            :href="profile.social.twitter"
            class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-neumorphism hover:shadow-neumorphism-inset active:shadow-neumorphism-pressed transition-all duration-200 transform hover:-translate-y-1 group/social"
          >
            <svg
              class="w-5 h-5 text-blue-400 group-hover/social:scale-110 transition-transform duration-200"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
          </a>
        </div>

        <!-- 3D Connect Button -->
        <button
          class="w-full bg-gray-300 text-gray-700 py-4 px-6 rounded-2xl font-bold shadow-neumorphism hover:shadow-neumorphism-hover active:shadow-neumorphism-pressed transition-all duration-200 transform hover:-translate-y-1 relative overflow-hidden group/btn"
        >
          <span class="relative z-10">Conectar</span>
          <div
            class="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-2xl"
          ></div>
        </button>
      </div>
    </div>

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Profile Card"
      cardVariant="Neumorphism Style"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../CodeModal.vue";
import { cardCodes } from "../../data/cardCodes.js";

defineProps({
  profile: {
    type: Object,
    required: true,
  },
});

const codeModal = ref(null);
const cardCode = cardCodes.ProfileCard2;

const openCodeModal = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>

<style scoped>
/* Neumorphism shadows */
.shadow-neumorphism {
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}

.shadow-neumorphism-hover {
  box-shadow: 25px 25px 75px #bebebe, -25px -25px 75px #ffffff;
}

.shadow-neumorphism-inset {
  box-shadow: inset 10px 10px 20px #bebebe, inset -10px -10px 20px #ffffff;
}

.shadow-neumorphism-inset-hover {
  box-shadow: inset 15px 15px 30px #bebebe, inset -15px -15px 30px #ffffff;
}

.shadow-neumorphism-pressed {
  box-shadow: inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff;
}

/* Custom animations */
@keyframes fade-in-scale {
  from {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-fade-in-scale {
  animation: fade-in-scale 0.6s ease-out forwards;
  opacity: 0;
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}
</style>