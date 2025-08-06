export const cardCodes = {
  // Profile Cards
  ProfileCard1: `<template>
  <div class="relative group w-full">
    <!-- Code button -->
    <button
      @click="openCodeModal"
      class="absolute top-4 right-4 z-30 w-10 h-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300"
      title="Ver código del componente"
      aria-label="Ver código del componente"
    >
      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    </button>

    <!-- Glassmorphism Card -->
    <div class="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:bg-white/15 transition-all duration-500">
      <!-- Animated background blobs -->
      <div class="absolute inset-0 overflow-hidden rounded-3xl">
        <div class="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-xl animate-blob"></div>
        <div class="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-xl animate-blob animation-delay-2000"></div>
        <div class="absolute top-1/2 left-1/2 w-36 h-36 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10">
        <!-- Floating Avatar -->
        <div class="flex justify-center mb-8">
          <div class="relative group-avatar">
            <div class="w-28 h-28 rounded-full border-4 border-white/30 p-1 animate-float">
              <div class="w-full h-full rounded-full border-2 border-gradient-to-r from-pink-400 to-purple-400 animate-spin-slow">
                <img
                  :src="profile.avatar"
                  :alt="profile.name"
                  class="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            <!-- Status indicator -->
            <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg animate-pulse-soft">
              <div class="w-full h-full bg-green-300 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        </div>

        <!-- Name and role with fade-in animation -->
        <div class="text-center mb-6">
          <h3 class="text-3xl font-bold text-white mb-3 animate-fade-in">
            {{ profile.name }}
          </h3>
          <div class="inline-block bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-2 rounded-full mb-2 animate-fade-in-delay-1">
            <p class="text-white font-semibold">{{ profile.role }}</p>
          </div>
          <p class="text-white/80 animate-fade-in-delay-2">{{ profile.company }}</p>
        </div>

        <!-- Bio -->
        <div class="mb-6">
          <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 animate-fade-in-delay-3">
            <p class="text-white/90 text-sm leading-relaxed">{{ profile.bio }}</p>
          </div>
        </div>

        <!-- Floating Skills -->
        <div class="mb-6">
          <div class="flex flex-wrap gap-3 justify-center">
            <span
              v-for="(skill, index) in profile.skills.slice(0, 4)"
              :key="skill"
              :style="{ animationDelay: \`\${index * 200}ms\` }"
              class="bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-white/25 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Social Links -->
        <div class="flex justify-center space-x-6 mb-8">
          <a
            v-if="profile.social.linkedin"
            :href="profile.social.linkedin"
            class="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:rotate-12 animate-bounce-in"
          >
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            v-if="profile.social.github"
            :href="profile.social.github"
            class="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:rotate-12 animate-bounce-in animation-delay-200"
          >
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            v-if="profile.social.twitter"
            :href="profile.social.twitter"
            class="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110 hover:rotate-12 animate-bounce-in animation-delay-400"
          >
            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>

        <!-- Glowing Connect Button -->
        <button class="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:from-pink-400 hover:via-purple-400 hover:to-indigo-400 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl animate-glow">
          Conectar
        </button>
      </div>
    </div>

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Profile Card"
      cardVariant="Glassmorphism Style"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CodeModal from '../CodeModal.vue';
import { cardCodes } from '../../data/cardCodes.js';

defineProps({
  profile: {
    type: Object,
    required: true,
  },
});

const codeModal = ref(null);
const cardCode = cardCodes.ProfileCard1;

const openCodeModal = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>

<style scoped>
/* Blob animations */
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse-soft {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounce-in {
  0% { opacity: 0; transform: scale(0.3) translateY(20px); }
  50% { opacity: 1; transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
  50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
}

.animate-blob { animation: blob 7s infinite; }
.animate-float { animation: float 3s ease-in-out infinite; }
.animate-spin-slow { animation: spin-slow 8s linear infinite; }
.animate-pulse-soft { animation: pulse-soft 2s ease-in-out infinite; }
.animate-fade-in { animation: fade-in 0.6s ease-out; }
.animate-fade-in-delay-1 { animation: fade-in 0.6s ease-out 0.2s both; }
.animate-fade-in-delay-2 { animation: fade-in 0.6s ease-out 0.4s both; }
.animate-fade-in-delay-3 { animation: fade-in 0.6s ease-out 0.6s both; }
.animate-fade-in-up { animation: fade-in-up 0.6s ease-out both; }
.animate-bounce-in { animation: bounce-in 0.6s ease-out both; }
.animate-glow { animation: glow 2s ease-in-out infinite; }

.animation-delay-200 { animation-delay: 0.2s; }
.animation-delay-400 { animation-delay: 0.4s; }
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
</style>`,

  ProfileCard2: `<template>
  <div class="relative group w-full">
    <!-- Code button -->
    <button
      @click="openCodeModal"
      class="absolute top-4 right-4 z-30 w-10 h-10 bg-gray-300 hover:bg-gray-200 rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300 shadow-neumorphism-inset"
      title="Ver código del componente"
      aria-label="Ver código del componente"
    >
      <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    </button>

    <!-- Neumorphism Card -->
    <div
      class="bg-gray-300 rounded-3xl p-8 shadow-neumorphism hover:shadow-neumorphism-hover transition-all duration-500 transform hover:scale-102 relative overflow-hidden"
    >
      <!-- Subtle gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-gray-400/5 rounded-3xl"></div>
      
      <!-- Content -->
      <div class="relative z-10">
        <!-- Avatar with 3D effect -->
        <div class="flex justify-center mb-6">
          <div class="relative group/avatar">
            <div class="w-24 h-24 rounded-full shadow-neumorphism-inset bg-gray-300 p-2 transform transition-all duration-300 group-hover/avatar:shadow-neumorphism-inset-hover">
              <img
                :src="profile.avatar"
                :alt="profile.name"
                class="w-full h-full rounded-full object-cover shadow-inner"
              />
            </div>
            <!-- 3D floating status -->
            <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full shadow-neumorphism flex items-center justify-center transform hover:scale-110 transition-all duration-300">
              <div class="w-3 h-3 bg-green-500 rounded-full shadow-neumorphism-inset animate-pulse"></div>
            </div>
          </div>
        </div>

        <!-- Info with depth -->
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-gray-800 mb-2 tracking-wide">
            {{ profile.name }}
          </h3>
          <div class="bg-gray-300 rounded-2xl p-3 shadow-neumorphism-inset mb-2">
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
            <p class="text-gray-600 text-sm text-center leading-relaxed line-clamp-3">
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
              :style="{ animationDelay: \`\${index * 100}ms\` }"
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
            <svg class="w-5 h-5 text-blue-600 group-hover/social:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            v-if="profile.social.github"
            :href="profile.social.github"
            class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-neumorphism hover:shadow-neumorphism-inset active:shadow-neumorphism-pressed transition-all duration-200 transform hover:-translate-y-1 group/social"
          >
            <svg class="w-5 h-5 text-gray-800 group-hover/social:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            v-if="profile.social.twitter"
            :href="profile.social.twitter"
            class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-neumorphism hover:shadow-neumorphism-inset active:shadow-neumorphism-pressed transition-all duration-200 transform hover:-translate-y-1 group/social"
          >
            <svg class="w-5 h-5 text-blue-400 group-hover/social:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>

        <!-- 3D Connect Button -->
        <button class="w-full bg-gray-300 text-gray-700 py-4 px-6 rounded-2xl font-bold shadow-neumorphism hover:shadow-neumorphism-hover active:shadow-neumorphism-pressed transition-all duration-200 transform hover:-translate-y-1 relative overflow-hidden group/btn">
          <span class="relative z-10">Conectar</span>
          <div class="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
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
import { ref } from 'vue';
import CodeModal from '../CodeModal.vue';
import { cardCodes } from '../../data/cardCodes.js';

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
  box-shadow: 
    20px 20px 60px #bebebe,
    -20px -20px 60px #ffffff;
}

.shadow-neumorphism-hover {
  box-shadow: 
    25px 25px 75px #bebebe,
    -25px -25px 75px #ffffff;
}

.shadow-neumorphism-inset {
  box-shadow: 
    inset 10px 10px 20px #bebebe,
    inset -10px -10px 20px #ffffff;
}

.shadow-neumorphism-inset-hover {
  box-shadow: 
    inset 15px 15px 30px #bebebe,
    inset -15px -15px 30px #ffffff;
}

.shadow-neumorphism-pressed {
  box-shadow: 
    inset 8px 8px 16px #bebebe,
    inset -8px -8px 16px #ffffff;
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

.hover\\:scale-102:hover {
  transform: scale(1.02);
}
</style>`,

  ProfileCard3: `<!-- Similar structure for ProfileCard3 with cyberpunk styles -->`,
  ProfileCard4: `<!-- Similar structure for ProfileCard4 with geometric styles -->`,
  ProfileCard5: `<!-- Similar structure for ProfileCard5 with 3D flip styles -->`,
  ProfileCard6: `<!-- Similar structure for ProfileCard6 with particle effects -->`,

  // Article Cards
  ArticleCard1: `<template>
  <div
    class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm mx-auto border border-gray-100 relative group"
  >
    <!-- Code button -->
    <button
      @click="openCodeModal"
      class="absolute top-4 right-4 z-30 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300 shadow-lg border border-gray-200"
      title="Ver código del componente"
      aria-label="Ver código del componente"
    >
      <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    </button>

    <!-- Image with overlay -->
    <div class="relative h-48 overflow-hidden">
      <img
        :src="article.image"
        :alt="article.title"
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
      ></div>
      <div class="absolute top-4 left-4">
        <span
          class="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold"
        >
          {{ article.readTime }}
        </span>
      </div>
      <div class="absolute bottom-4 left-4 right-4">
        <h3 class="text-white text-xl font-bold leading-tight mb-2">
          {{ article.title }}
        </h3>
      </div>
    </div>

    <div class="p-6">
      <p class="text-gray-600 text-sm mb-4 leading-relaxed">
        {{ article.excerpt }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tag in article.tags.slice(0, 2)"
          :key="tag"
          class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
        >
          #{{ tag }}
        </span>
      </div>

      <!-- Author info -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <div
            class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center"
          >
            <span class="text-white text-sm font-bold">{{
              article.author.charAt(0)
            }}</span>
          </div>
          <div class="ml-3">
            <p class="text-sm font-semibold text-gray-900">
              {{ article.author }}
            </p>
            <p class="text-xs text-gray-500">{{ formatDate(article.date) }}</p>
          </div>
        </div>
        <div class="flex items-center space-x-4 text-gray-400">
          <div class="flex items-center">
            <svg
              class="w-4 h-4 text-red-500 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
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
          class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Leer más
        </button>
      </div>
    </div>

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Article Card"
      cardVariant="Modern Style"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CodeModal from '../CodeModal.vue';
import { cardCodes } from '../../data/cardCodes.js';

defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const codeModal = ref(null);
const cardCode = cardCodes.ArticleCard1;

const openCodeModal = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
</script>`,

  ArticleCard2: `<template>
  <div
    class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm mx-auto border border-orange-100 relative group"
  >
    <!-- Code button -->
    <button
      @click="openCodeModal"
      class="absolute top-4 right-4 z-30 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-300 shadow-lg border border-orange-200"
      title="Ver código del componente"
      aria-label="Ver código del componente"
    >
      <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    </button>

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
      <h3
        class="text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2"
      >
        {{ article.title }}
      </h3>

      <!-- Excerpt -->
      <p class="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
        {{ article.excerpt }}
      </p>

      <!-- Tags estilo minimal -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="tag in article.tags.slice(0, 3)"
          :key="tag"
          class="text-orange-600 text-xs font-medium"
        >
          #{{ tag }}
        </span>
      </div>

      <!-- Image estilo magazine -->
      <div class="relative mb-4 -mx-2">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-32 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"
        ></div>
      </div>

      <!-- Stats and action -->
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4 text-orange-400">
          <div class="flex items-center">
            <svg
              class="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
            <span class="text-sm text-gray-600">{{ article.likes }}</span>
          </div>
          <div class="flex items-center">
            <svg
              class="w-4 h-4 mr-1"
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
          class="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg"
        >
          Leer
        </button>
      </div>
    </div>

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Article Card"
      cardVariant="Magazine Style"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CodeModal from '../CodeModal.vue';
import { cardCodes } from '../../data/cardCodes.js';

defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const codeModal = ref(null);
const cardCode = cardCodes.ArticleCard2;

const openCodeModal = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
</script>`,
  ProductCard1: `<template>
  <div class="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 w-full border border-blue-500/20">
    <div class="p-6 relative">
      <!-- Decorative elements -->
      <div class="absolute top-2 right-2 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div class="absolute bottom-2 left-2 w-16 h-16 bg-purple-400/20 rounded-full blur-lg"></div>
      
      <!-- Product image -->
      <div class="relative mb-4 overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm">
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div class="absolute top-3 left-3">
          <span class="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
            ⭐ {{ product.rating }}
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="relative z-10">
        <div class="mb-3">
          <span class="text-blue-200 text-sm font-medium uppercase tracking-wide">
            {{ product.category }}
          </span>
          <h3 class="text-white text-xl font-bold mt-1 line-clamp-1">
            {{ product.title }}
          </h3>
        </div>

        <p class="text-blue-100 text-sm mb-4 line-clamp-2 leading-relaxed">
          {{ product.description }}
        </p>

        <!-- Price and reviews -->
        <div class="flex items-center justify-between mb-4">
          <div class="text-2xl font-bold text-white">{{ product.price }}</div>
          <div class="text-right">
            <div class="text-blue-200 text-sm">{{ product.reviews }} reviews</div>
          </div>
        </div>

        <!-- Action button -->
        <button class="w-full bg-white text-purple-700 py-3 px-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Comprar Ahora
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
</script>`,

  ProductCard2: `<template>
  <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 w-full border border-orange-200">
    <div class="relative">
      <!-- Decorative header -->
      <div class="h-2 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"></div>
      
      <!-- Product image -->
      <div class="relative p-4 pb-0">
        <div class="relative overflow-hidden rounded-xl bg-gray-50">
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
          />
          <div class="absolute top-3 right-3">
            <div class="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              HOT
            </div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="p-4">
        <div class="mb-3">
          <span class="text-orange-600 text-sm font-medium uppercase tracking-wide">
            {{ product.category }}
          </span>
          <h3 class="text-gray-900 text-lg font-bold mt-1 line-clamp-1">
            {{ product.title }}
          </h3>
        </div>

        <p class="text-gray-600 text-sm mb-4 line-clamp-2">
          {{ product.description }}
        </p>

        <!-- Rating -->
        <div class="flex items-center mb-3">
          <div class="flex items-center">
            <span class="text-yellow-400 text-sm">⭐</span>
            <span class="text-gray-700 text-sm ml-1">{{ product.rating }}</span>
          </div>
          <span class="text-gray-500 text-sm ml-2">({{ product.reviews }})</span>
        </div>

        <!-- Price and button -->
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold text-orange-600">{{ product.price }}</div>
          <button class="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Comprar
          </button>
        </div>
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
</script>`,

  ProductCard3: `<template>
  <div class="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 w-full border border-green-500/30">
    <div class="p-4">
      <!-- Terminal header -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
          <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span class="text-green-400 text-xs font-mono">~/products/{{ product.title.toLowerCase().replace(/\s+/g, '-') }}</span>
      </div>

      <!-- Product image with terminal styling -->
      <div class="relative mb-4 border border-gray-700 rounded-lg overflow-hidden bg-gray-800">
        <div class="bg-gray-800 px-3 py-1 border-b border-gray-700">
          <span class="text-green-400 text-xs font-mono">$ display image</span>
        </div>
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full h-40 object-cover"
        />
      </div>

      <!-- Terminal-style content -->
      <div class="space-y-3">
        <!-- Title command -->
        <div>
          <div class="text-green-400 text-xs font-mono mb-1">$ echo $PRODUCT_NAME</div>
          <h3 class="text-green-300 text-lg font-bold font-mono">{{ product.title }}</h3>
        </div>

        <!-- Description -->
        <div>
          <div class="text-green-400 text-xs font-mono mb-1">$ cat description.txt</div>
          <p class="text-gray-300 text-sm font-mono leading-relaxed line-clamp-2">
            {{ product.description }}
          </p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-3">
          <div>
            <div class="text-cyan-400 text-xs font-mono">$ get_price</div>
            <div class="text-yellow-400 text-lg font-bold font-mono">{{ product.price }}</div>
          </div>
          <div>
            <div class="text-cyan-400 text-xs font-mono">$ get_rating</div>
            <div class="text-purple-400 text-sm font-mono">{{ product.rating }}/5 ({{ product.reviews }})</div>
          </div>
        </div>

        <!-- Action button -->
        <div class="pt-2">
          <div class="text-green-400 text-xs font-mono mb-2">$ execute purchase.sh</div>
          <button class="w-full bg-green-600 hover:bg-green-700 text-black py-2 px-4 rounded font-mono font-bold transition-all duration-200 text-sm">
            [ENTER] PURCHASE
          </button>
        </div>
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
</script>`,

  ProfileCard1: `<template>
  <div class="bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-700 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 w-full border border-purple-500/30">
    <div class="p-6 relative">
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div class="absolute bottom-0 left-0 w-24 h-24 bg-pink-400/20 rounded-full translate-y-12 -translate-x-12"></div>
      
      <!-- Profile header -->
      <div class="relative z-10 text-center mb-6">
        <div class="relative inline-block">
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="w-20 h-20 rounded-full object-cover border-4 border-white/20 shadow-lg mx-auto"
          />
          <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
            <div class="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        <h3 class="text-white text-xl font-bold mt-4">{{ profile.name }}</h3>
        <p class="text-purple-200 text-sm font-medium">{{ profile.role }}</p>
        <p class="text-purple-300 text-xs mt-1">@ {{ profile.company }}</p>
      </div>

      <!-- Bio -->
      <div class="relative z-10 mb-6">
        <p class="text-purple-100 text-sm text-center leading-relaxed line-clamp-3">
          {{ profile.bio }}
        </p>
      </div>

      <!-- Skills -->
      <div class="relative z-10 mb-6">
        <h4 class="text-white text-sm font-semibold mb-3">Habilidades</h4>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in profile.skills.slice(0, 4)"
            :key="skill"
            class="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Social links -->
      <div class="relative z-10 flex justify-center space-x-4 mb-6">
        <a
          v-if="profile.social.linkedin"
          :href="profile.social.linkedin"
          class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
        >
          <span class="text-white text-sm">in</span>
        </a>
        <a
          v-if="profile.social.github"
          :href="profile.social.github"
          class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
        >
          <span class="text-white text-sm">gh</span>
        </a>
        <a
          v-if="profile.social.twitter"
          :href="profile.social.twitter"
          class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
        >
          <span class="text-white text-sm">tw</span>
        </a>
      </div>

      <!-- Action button -->
      <button class="relative z-10 w-full bg-white text-purple-700 py-3 px-4 rounded-xl font-bold hover:bg-purple-50 transition-all duration-200 shadow-lg">
        Conectar
      </button>
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
</script>`,

  ProfileCard2: `<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full border border-gray-200">
    <div class="p-6">
      <!-- Header with avatar and info -->
      <div class="flex items-start space-x-4 mb-6">
        <img
          :src="profile.avatar"
          :alt="profile.name"
          class="w-16 h-16 rounded-xl object-cover border-2 border-gray-100"
        />
        <div class="flex-1 min-w-0">
          <h3 class="text-gray-900 text-lg font-bold line-clamp-1">{{ profile.name }}</h3>
          <p class="text-blue-600 text-sm font-medium">{{ profile.role }}</p>
          <p class="text-gray-500 text-sm">{{ profile.company }}</p>
        </div>
        <div class="flex-shrink-0">
          <div class="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
      </div>

      <!-- Bio -->
      <div class="mb-6">
        <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {{ profile.bio }}
        </p>
      </div>

      <!-- Skills grid -->
      <div class="mb-6">
        <h4 class="text-gray-900 text-sm font-semibold mb-3">Tecnologías</h4>
        <div class="grid grid-cols-2 gap-2">
          <div
            v-for="skill in profile.skills.slice(0, 4)"
            :key="skill"
            class="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-center"
          >
            <span class="text-gray-700 text-xs font-medium">{{ skill }}</span>
          </div>
        </div>
      </div>

      <!-- Social stats -->
      <div class="flex justify-between mb-6 bg-gray-50 rounded-xl p-4">
        <div class="text-center">
          <div class="text-gray-900 text-lg font-bold">150+</div>
          <div class="text-gray-500 text-xs">Proyectos</div>
        </div>
        <div class="text-center">
          <div class="text-gray-900 text-lg font-bold">5.0</div>
          <div class="text-gray-500 text-xs">Rating</div>
        </div>
        <div class="text-center">
          <div class="text-gray-900 text-lg font-bold">98%</div>
          <div class="text-gray-500 text-xs">Success</div>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="flex space-x-3">
        <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm">
          Contactar
        </button>
        <button class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm">
          Ver Perfil
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
</script>`,

  ProfileCard3: `<template>
  <div class="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 w-full border border-gray-700">
    <div class="p-4">
      <!-- Header estilo terminal -->
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-red-500 rounded-full"></div>
          <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <span class="text-green-400 text-xs font-mono">~/profile/{{ profile.name.toLowerCase().replace(" ", "-") }}</span>
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
            <h3 class="text-green-400 text-base font-bold font-mono">{{ profile.name }}</h3>
            <p class="text-cyan-400 text-sm font-mono">{{ profile.role }}</p>
            <p class="text-gray-400 text-xs font-mono">{{ profile.company }}.dev</p>
          </div>
          <div class="text-right">
            <div class="text-yellow-400 text-xs font-mono">ONLINE</div>
            <div class="w-2 h-2 bg-green-500 rounded-full ml-auto mt-1 animate-pulse"></div>
          </div>
        </div>

        <!-- Terminal-style bio -->
        <div class="bg-gray-900 rounded-lg p-3 mb-3 border border-gray-700">
          <div class="text-green-400 text-xs font-mono mb-1">$ cat about.txt</div>
          <p class="text-gray-300 text-sm font-mono leading-relaxed">{{ profile.bio }}</p>
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
          <div class="text-cyan-400 text-xs font-mono mb-2">$ echo $SOCIAL_LINKS</div>
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
        <button class="w-full bg-green-600 hover:bg-green-700 text-black py-2 px-3 rounded-lg font-mono font-bold transition-all duration-200 shadow-lg text-sm">
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
</script>`,

  ArticleCard1: `<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full border border-gray-100">
    <!-- Article image -->
    <div class="relative overflow-hidden">
      <img
        :src="article.image"
        :alt="article.title"
        class="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div class="absolute top-4 left-4">
        <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
          {{ article.tags[0] }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Title and excerpt -->
      <div class="mb-4">
        <h3 class="text-gray-900 text-xl font-bold mb-2 line-clamp-2 leading-tight">
          {{ article.title }}
        </h3>
        <p class="text-gray-600 text-sm line-clamp-3 leading-relaxed">
          {{ article.excerpt }}
        </p>
      </div>

      <!-- Author and date -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">{{ article.author.charAt(0) }}</span>
          </div>
          <div class="ml-3">
            <p class="text-gray-900 text-sm font-medium">{{ article.author }}</p>
            <p class="text-gray-500 text-xs">{{ formatDate(article.date) }}</p>
          </div>
        </div>
        <div class="text-right">
          <span class="text-blue-600 text-sm font-medium">{{ article.readTime }}</span>
        </div>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tag in article.tags.slice(1, 4)"
          :key="tag"
          class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Stats and button -->
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4 text-gray-500">
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
            <span class="text-sm">{{ article.likes }}</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span class="text-sm">{{ article.comments }}</span>
          </div>
        </div>
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm">
          Leer más
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
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
</script>`,

  ArticleCard2: `<template>
  <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full border border-orange-200">
    <div class="p-6">
      <!-- Header -->
      <div class="flex items-start justify-between mb-4">
        <div class="flex-1">
          <div class="flex items-center mb-2">
            <div class="w-2 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mr-3"></div>
            <span class="text-orange-600 text-sm font-bold uppercase tracking-wide">
              {{ article.tags[0] }}
            </span>
          </div>
          <h3 class="text-gray-900 text-lg font-bold line-clamp-2 leading-tight">
            {{ article.title }}
          </h3>
        </div>
      </div>

      <!-- Article image -->
      <div class="relative overflow-hidden rounded-xl mb-4">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-36 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <!-- Excerpt -->
      <p class="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
        {{ article.excerpt }}
      </p>

      <!-- Author info -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <div class="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">{{ article.author.charAt(0) }}</span>
          </div>
          <div class="ml-2">
            <p class="text-gray-900 text-sm font-medium">{{ article.author }}</p>
            <p class="text-gray-500 text-xs">{{ formatDate(article.date) }}</p>
          </div>
        </div>
        <div class="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium">
          {{ article.readTime }}
        </div>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tag in article.tags.slice(1, 3)"
          :key="tag"
          class="bg-white/80 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3 text-gray-500">
          <div class="flex items-center">
            <span class="text-red-500 mr-1">❤️</span>
            <span class="text-sm">{{ article.likes }}</span>
          </div>
          <div class="flex items-center">
            <span class="text-blue-500 mr-1">💬</span>
            <span class="text-sm">{{ article.comments }}</span>
          </div>
        </div>
        <button class="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm shadow-lg">
          Leer artículo
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
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
</script>`,

  ArticleCard3: `<template>
  <div class="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 w-full border border-gray-700">
    <div class="p-5">
      <!-- Terminal header -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
          <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span class="text-green-400 text-xs font-mono">~/articles/{{ article.id }}.md</span>
      </div>

      <!-- Article content -->
      <div class="space-y-4">
        <!-- Title -->
        <div>
          <div class="text-green-400 text-xs font-mono mb-1">$ cat title.txt</div>
          <h3 class="text-green-300 text-lg font-bold font-mono line-clamp-2">
            {{ article.title }}
          </h3>
        </div>

        <!-- Image terminal style -->
        <div class="border border-gray-700 rounded-lg overflow-hidden bg-gray-800">
          <div class="bg-gray-800 px-3 py-1 border-b border-gray-700">
            <span class="text-cyan-400 text-xs font-mono">$ display preview.jpg</span>
          </div>
          <img
            :src="article.image"
            :alt="article.title"
            class="w-full h-32 object-cover"
          />
        </div>

        <!-- Excerpt -->
        <div>
          <div class="text-cyan-400 text-xs font-mono mb-1">$ head -n 3 content.md</div>
          <p class="text-gray-300 text-sm font-mono leading-relaxed line-clamp-2">
            {{ article.excerpt }}
          </p>
        </div>

        <!-- Metadata -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="text-purple-400 text-xs font-mono">$ whoami</div>
            <div class="text-yellow-400 text-sm font-mono">{{ article.author }}</div>
          </div>
          <div>
            <div class="text-purple-400 text-xs font-mono">$ date</div>
            <div class="text-yellow-400 text-sm font-mono">{{ formatDate(article.date) }}</div>
          </div>
        </div>

        <!-- Tags as file listing -->
        <div>
          <div class="text-cyan-400 text-xs font-mono mb-2">$ ls tags/</div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in article.tags.slice(0, 3)"
              :key="tag"
              class="bg-gray-800 text-green-400 text-xs px-2 py-1 rounded border border-gray-600 font-mono"
            >
              {{ tag.toLowerCase().replace(' ', '_') }}.tag
            </span>
          </div>
        </div>

        <!-- Stats -->
        <div class="flex justify-between text-xs font-mono">
          <div class="text-red-400">❤️ {{ article.likes }} likes</div>
          <div class="text-blue-400">💬 {{ article.comments }} comments</div>
          <div class="text-yellow-400">⏱️ {{ article.readTime }}</div>
        </div>

        <!-- Action -->
        <div>
          <div class="text-green-400 text-xs font-mono mb-2">$ ./read_article.sh</div>
          <button class="w-full bg-green-600 hover:bg-green-700 text-black py-2 px-4 rounded font-mono font-bold transition-all duration-200 text-sm">
            [ENTER] READ_FULL_ARTICLE
          </button>
        </div>
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
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
</script>`,

  // Nuevas Product Cards
  ProductCard4: `<template>
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

    <!-- Product image with smooth hover effect -->
    <div class="relative mb-6">
      <img
        :src="product.image"
        :alt="product.title"
        class="relative z-20 w-full h-48 object-cover rounded-xl border border-purple-400/30 shadow-lg group-hover:shadow-purple-500/50 transition-shadow duration-500"
      />
    </div>

    <!-- Product content -->
    <div class="relative z-10 space-y-4">
      <div class="flex items-center justify-between">
        <span
          class="px-3 py-1 text-xs font-semibold bg-purple-500/30 text-purple-200 rounded-full border border-purple-400/50"
          >{{ product.category }}</span
        >
        <div class="flex items-center space-x-1 text-yellow-400">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span class="text-sm font-medium text-white">{{
            product.rating
          }}</span>
        </div>
      </div>

      <h3
        class="text-xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300"
      >
        {{ product.title }}
      </h3>

      <p class="text-gray-300 text-sm leading-relaxed">
        {{ product.description }}
      </p>

      <div
        class="flex items-center justify-between pt-4 border-t border-purple-500/20"
      >
        <div class="space-y-1">
          <p class="text-2xl font-bold text-white">{{ product.price }}</p>
          <p class="text-xs text-gray-400">{{ product.reviews }} reseñas</p>
        </div>

        <button
          class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-purple-500/25 border border-purple-400/30"
        >
          Comprar
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
</style>`,

  ProductCard5: `<template>
  <div class="product-card-5 group relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
    <!-- Minimalist top accent -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900"></div>

    <!-- Clean product image -->
    <div class="p-6 pb-4">
      <div class="relative overflow-hidden rounded-2xl bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
        <img 
          :src="product.image" 
          :alt="product.title"
          class="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <!-- Minimal overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>

    <!-- Product content with clean typography -->
    <div class="px-6 pb-6 space-y-4">
      <!-- Category and rating -->
      <div class="flex items-center justify-between">
        <span class="text-xs font-medium text-gray-500 uppercase tracking-wider">{{ product.category }}</span>
        <div class="flex items-center space-x-1">
          <div class="flex space-x-1">
            <div v-for="star in 5" :key="star" class="w-3 h-3">
              <svg 
                :class="star <= Math.floor(product.rating) ? 'text-gray-900' : 'text-gray-200'" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
          </div>
          <span class="text-sm font-medium text-gray-600 ml-2">{{ product.rating }}</span>
        </div>
      </div>

      <!-- Title -->
      <h3 class="text-2xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300">
        {{ product.title }}
      </h3>

      <!-- Description -->
      <p class="text-gray-600 text-sm leading-relaxed line-clamp-2">
        {{ product.description }}
      </p>

      <!-- Reviews count -->
      <p class="text-xs text-gray-400">{{ product.reviews }} reseñas verificadas</p>

      <!-- Price and action -->
      <div class="flex items-end justify-between pt-4">
        <div>
          <p class="text-3xl font-bold text-gray-900">{{ product.price }}</p>
        </div>
        
        <button class="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          Añadir
        </button>
      </div>
    </div>

    <!-- Subtle hover line animation -->
    <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-500 ease-out"></div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>`,

  ProductCard6: `<template>
  <div class="product-card-6 group relative bg-black rounded-2xl overflow-hidden border border-cyan-500/30 transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20">
    <!-- Neon grid background -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid grid-cols-8 grid-rows-8 h-full w-full">
        <div v-for="i in 64" :key="i" class="border border-cyan-500/20 animate-pulse" :style="\`animation-delay: \${i * 0.1}s\`"></div>
      </div>
    </div>

    <!-- Scanning line effect -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="scan-line absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"></div>
    </div>

    <!-- Code button -->
    <button @click="showCode" class="absolute top-4 right-4 bg-cyan-600 hover:bg-cyan-500 text-white p-2 rounded-lg transition-all duration-300 hover:scale-110 border border-cyan-400/50 z-50 shadow-lg shadow-cyan-500/50" aria-label="Ver código del componente ProductCard6">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    </button>

    <div class="relative z-10 p-6">
      <!-- Neon product image -->
      <div class="relative mb-6">
        <div class="absolute inset-0 bg-cyan-500/20 blur-xl rounded-xl group-hover:bg-cyan-400/30 transition-colors duration-500"></div>
        <img :src="product.image" :alt="product.title" class="relative z-10 w-full h-48 object-cover rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/30 transition-all duration-500 filter contrast-125 saturate-110" />
        <!-- Holographic overlay -->
        <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-xl mix-blend-overlay"></div>
        
        <!-- Corner accents -->
        <div class="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
        <div class="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
        <div class="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
        <div class="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>
      </div>

      <!-- Cyberpunk content -->
      <div class="space-y-4">
        <!-- Category and status -->
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span class="text-cyan-400 text-xs font-mono uppercase tracking-wider">{{ product.category }}</span>
          </div>
          <div class="flex items-center space-x-2 text-cyan-300">
            <span class="text-xs font-mono">RATING:</span>
            <span class="text-sm font-bold text-cyan-400">{{ product.rating }}/5</span>
          </div>
        </div>

        <!-- Glitch title effect -->
        <div class="relative">
          <h3 class="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 font-mono">
            {{ product.title }}
          </h3>
          <!-- Glitch overlay -->
          <h3 class="absolute inset-0 text-xl font-bold text-cyan-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-0.5 translate-y-0.5 mix-blend-multiply">
            {{ product.title }}
          </h3>
        </div>

        <!-- Description with terminal styling -->
        <div class="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-3">
          <div class="flex items-center space-x-2 mb-2">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            <span class="text-cyan-400 text-xs font-mono ml-auto">product.info</span>
          </div>
          <p class="text-gray-300 text-sm font-mono leading-relaxed">
            > {{ product.description }}
          </p>
        </div>

        <!-- Price and action with neon effect -->
        <div class="flex items-center justify-between pt-4 border-t border-cyan-500/30">
          <div class="space-y-1">
            <p class="text-2xl font-bold text-cyan-400 font-mono glow-text">{{ product.price }}</p>
            <p class="text-xs text-gray-400 font-mono">{{ product.reviews }} reviews.log</p>
          </div>
          
          <button class="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-mono font-semibold transition-all duration-300 hover:scale-105 border border-cyan-400/50 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/50">
            BUY.exe
          </button>
        </div>
      </div>
    </div>

    <!-- Animated border glow -->
    <div class="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" style="mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite: xor;"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CodeModal from '../CodeModal.vue'
import { cardCodes } from '../../data/cardCodes.js'

defineProps({
  product: { type: Object, required: true }
})

const codeModal = ref(null)
const cardCode = cardCodes.ProductCard6

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal()
  }
}
</script>

<style scoped>
@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(400px); }
}

.animate-scan {
  animation: scan 3s ease-in-out infinite;
}

.glow-text {
  text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
}

/* Cyberpunk grid animation */
.grid div:nth-child(odd) {
  animation-duration: 2s;
}

.grid div:nth-child(even) {
  animation-duration: 3s;
}
</style>`,

  // Nuevas Profile Cards
  ProfileCard4: `<template>
  <div class="profile-card-4 group relative bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 border border-orange-200/50">
    <!-- Code button -->
    <button @click="showCode" class="absolute top-4 right-4 bg-orange-600 text-white p-2 rounded-full z-10">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    </button>

    <div class="text-center">
      <img :src="profile.avatar" :alt="profile.name" class="w-24 h-24 rounded-full mx-auto mb-4" />
      <h3 class="text-xl font-bold text-gray-800">{{ profile.name }}</h3>
      <p class="text-orange-600 font-semibold">{{ profile.role }}</p>
      <p class="text-gray-600 text-sm">{{ profile.company }}</p>
      <p class="text-gray-700 text-sm mt-4">{{ profile.bio }}</p>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

defineProps({
  profile: { type: Object, required: true }
})

const showCodeModal = inject('showCodeModal')
const showCode = () => showCodeModal('ProfileCard4')
</script>`,

  ProfileCard5: `<template>
  <div class="profile-card-5 group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
    
    <!-- Code button -->
    <button @click="showCode" class="absolute top-4 right-4 bg-indigo-600 text-white p-2 rounded-full z-10">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    </button>

    <div class="text-center">
      <img :src="profile.avatar" :alt="profile.name" class="w-28 h-28 rounded-full mx-auto mb-6" />
      <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ profile.name }}</h3>
      <p class="text-indigo-600 font-semibold">{{ profile.role }}</p>
      <p class="text-gray-500 text-sm">{{ profile.company }}</p>
      <p class="text-gray-600 mt-4">{{ profile.bio }}</p>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

defineProps({
  profile: { type: Object, required: true }
})

const showCodeModal = inject('showCodeModal')
const showCode = () => showCodeModal('ProfileCard5')
</script>`,

  ProfileCard6: `<template>
  <div class="profile-card-6 group relative bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-2xl p-6 border border-gray-700/50">
    <!-- Code button -->
    <button @click="showCode" class="absolute top-4 right-4 bg-cyan-600/80 text-white p-2 rounded-lg z-10">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    </button>

    <div class="space-y-4">
      <div class="flex items-center space-x-2 mb-4">
        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        <span class="text-cyan-400 text-xs font-mono">profile.exe</span>
      </div>
      
      <img :src="profile.avatar" :alt="profile.name" class="w-24 h-24 rounded-full mx-auto border-2 border-cyan-500/50" />
      <div class="text-center">
        <h3 class="text-xl font-bold text-white font-mono">{{ profile.name }}</h3>
        <p class="text-gray-300 font-mono text-sm">{{ profile.role }}</p>
        <p class="text-gray-500 font-mono text-xs">{{ profile.company }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

defineProps({
  profile: { type: Object, required: true }
})

const showCodeModal = inject('showCodeModal')
const showCode = () => showCodeModal('ProfileCard6')
</script>`,

  // Nuevas Article Cards
  ArticleCard4: `<template>
  <div class="article-card-4 group relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl shadow-lg border border-emerald-200/50">
    <!-- Code button -->
    <button @click="showCode" class="absolute top-4 right-4 bg-emerald-600 text-white p-2 rounded-full z-10">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    </button>

    <img :src="article.image" :alt="article.title" class="w-full h-48 object-cover rounded-t-2xl" />
    <div class="p-6">
      <div class="flex items-center justify-between mb-4">
        <span class="text-emerald-700 text-xs bg-emerald-100 px-3 py-1 rounded-full">{{ article.tags[0] }}</span>
        <span class="text-emerald-600 text-xs">{{ article.readTime }}</span>
      </div>
      <h3 class="text-xl font-bold text-gray-800 mb-3">{{ article.title }}</h3>
      <p class="text-gray-600 text-sm mb-4">{{ article.excerpt }}</p>
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center text-white text-xs">
            {{ article.author.charAt(0) }}
          </div>
          <div>
            <p class="text-sm font-medium">{{ article.author }}</p>
            <p class="text-xs text-gray-500">{{ article.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

defineProps({
  article: { type: Object, required: true }
})

const showCodeModal = inject('showCodeModal')
const showCode = () => showCodeModal('ArticleCard4')
</script>`,

  ArticleCard5: `<template>
  <div class="article-card-5 group relative bg-white rounded-none shadow-xl border-l-4 border-red-500">
    <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>
    
    <!-- Code button -->
    <button @click="showCode" class="absolute top-4 right-4 bg-red-600 text-white p-2 z-10">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    </button>

    <div class="p-6 pt-8">
      <div class="flex items-center space-x-2 mb-4">
        <div class="w-1 h-16 bg-red-500"></div>
        <div>
          <span class="bg-red-500 text-white text-xs font-bold uppercase px-2 py-1">{{ article.tags[0] }}</span>
          <p class="text-xs text-gray-500 uppercase mt-1">{{ article.readTime }} Read</p>
        </div>
      </div>
      
      <h3 class="text-2xl font-black text-gray-900 mb-4 uppercase">{{ article.title }}</h3>
      <img :src="article.image" :alt="article.title" class="w-full h-48 object-cover mb-6" />
      <p class="text-sm text-gray-600 mb-4">{{ article.excerpt }}</p>
      
      <div class="border-t-2 border-red-500 pt-4 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div class="w-12 h-12 bg-red-500 text-white font-black text-lg flex items-center justify-center">
            {{ article.author.split(' ').map(n => n[0]).join('') }}
          </div>
          <div>
            <p class="font-bold text-gray-900 uppercase text-sm">{{ article.author }}</p>
            <p class="text-xs text-gray-500 uppercase">{{ article.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

defineProps({
  article: { type: Object, required: true }
})

const showCodeModal = inject('showCodeModal')
const showCode = () => showCodeModal('ArticleCard5')
</script>`,

  ArticleCard6: `<template>
  <div class="article-card-6 group relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl border border-purple-500/30">
    <!-- Code button -->
    <button @click="showCode" class="absolute top-4 right-4 bg-purple-600/80 text-white p-2 rounded-lg z-10">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
      </svg>
    </button>

    <div class="p-6">
      <div class="flex items-center space-x-3 mb-4">
        <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <span class="text-purple-400 text-xs font-mono uppercase">Article.exe</span>
      </div>
      
      <img :src="article.image" :alt="article.title" class="w-full h-40 object-cover rounded-lg border border-purple-500/50 mb-6" />
      
      <div class="space-y-4">
        <div class="flex space-x-2">
          <span class="text-purple-300 text-xs font-mono bg-purple-900/50 px-2 py-1 border border-purple-500/30 rounded">
            #{{ article.tags[0].toLowerCase().replace(' ', '_') }}
          </span>
        </div>
        
        <h3 class="text-xl font-bold text-white font-mono">{{ article.title }}</h3>
        
        <div class="bg-black/30 border border-purple-500/30 rounded-lg p-4">
          <p class="text-gray-300 text-sm font-mono">{{ article.excerpt }}</p>
        </div>
        
        <div class="flex items-center justify-between pt-4 border-t border-purple-500/30">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded flex items-center justify-center text-white font-mono text-xs">
              {{ article.author.split(' ').map(n => n[0]).join('') }}
            </div>
            <div>
              <p class="text-purple-300 font-mono text-sm">{{ article.author }}</p>
              <p class="text-gray-400 text-xs font-mono">{{ article.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

defineProps({
  article: { type: Object, required: true }
})

const showCodeModal = inject('showCodeModal')
const showCode = () => showCodeModal('ArticleCard6')
</script>`
};
