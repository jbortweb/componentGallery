export const cardCodes = {
  // Profile Cards
  ProfileCard1: `<template>
  <div class="relative group w-96 perspective-1000">
    <!-- Glassmorphism Card -->
    <div
      class="relative bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 group-hover:shadow-purple-500/25"
    >
      <!-- Animated background blobs -->
      <div class="absolute inset-0 overflow-hidden rounded-3xl">
        <div
          class="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-blob"
        ></div>
        <div
          class="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 animate-blob animation-delay-2000"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-10 animate-blob animation-delay-4000"
        ></div>
      </div>

      <!-- Content -->
      <div class="relative z-10">
        <!-- Floating Avatar -->
        <div class="flex justify-center mb-6">
          <div class="relative">
            <div
              class="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 group-hover:scale-110 transition-transform duration-300"
            >
              <img
                :src="profile.avatar"
                :alt="profile.name"
                class="w-full h-full rounded-full object-cover border-4 border-white/50"
              />
            </div>
            <!-- Status indicator -->
            <div
              class="absolute -bottom-1 -right-1 w-8 h-8 bg-green-400 rounded-full border-4 border-white/50 flex items-center justify-center animate-pulse"
            >
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        <!-- Info Section -->
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-pink-500 mb-2 animate-fade-in-up">
            {{ profile.name }}
          </h3>
          <p
            class="text-pink-500 text-lg mb-1 animate-fade-in-up animation-delay-200"
          >
            {{ profile.role }}
          </p>
          <p
            class="text-pink-500/60 text-sm animate-fade-in-up animation-delay-400"
          >
            @ {{ profile.company }}
          </p>
        </div>

        <!-- Bio with typing effect -->
        <div class="mb-6 animate-fade-in-up animation-delay-600">
          <p
            class="text-pink-500/80 text-sm text-center leading-relaxed line-clamp-3"
          >
            {{ profile.bio }}
          </p>
        </div>

        <!-- Floating Skills -->
        <div class="mb-6 animate-fade-in-up animation-delay-800">
          <div class="flex flex-wrap justify-center gap-2">
            <span
              v-for="(skill, index) in profile.skills.slice(0, 4)"
              :key="skill"
              :style="{ animationDelay: (index * 200) + 'ms' }"
              class="bg-white/20 backdrop-blur-sm text-pink-500 text-xs px-3 py-2 rounded-full border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 animate-float"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Social Links with hover effects -->
        <div
          class="flex justify-center space-x-4 mb-6 animate-fade-in-up animation-delay-1000"
        >
          <a
            v-if="profile.social.linkedin"
            :href="profile.social.linkedin"
            target="_blank"
            class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500/50 hover:scale-110 transition-all duration-300 group/social"
          >
            <svg
              class="w-5 h-5 text-pink-500 group-hover/social:animate-bounce"
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
            target="_blank"
            class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700/50 hover:scale-110 transition-all duration-300 group/social"
          >
            <svg
              class="w-5 h-5 text-pink-500 group-hover/social:animate-bounce"
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
            target="_blank"
            class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-400/50 hover:scale-110 transition-all duration-300 group/social"
          >
            <svg
              class="w-5 h-5 text-pink-500 group-hover/social:animate-bounce"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
          </a>
        </div>

        <!-- Glowing Connect Button -->
        <div class="animate-fade-in-up animation-delay-1200">
          <button
            class="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-pink-500 py-3 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group/btn"
          >
            <span class="relative z-10 text-white">Conectar</span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
            ></div>
          </button>
        </div>
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

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

/* Custom animations */
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-spin-slow {
  animation: spin-slow 8s linear infinite;
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-800 {
  animation-delay: 800ms;
}

.animation-delay-1000 {
  animation-delay: 1000ms;
}

.animation-delay-1200 {
  animation-delay: 1200ms;
}

.animation-delay-2000 {
  animation-delay: 2000ms;
}

.animation-delay-4000 {
  animation-delay: 4000ms;
}
</style>`,

  ProfileCard2: `<template>
  <div class="relative group w-96">
    
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
              :style="{ animationDelay: (index * 200) + 'ms' }"
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
            target="_blank"
            class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-neumorphism hover:shadow-neumorphism-inset active:shadow-neumorphism-pressed transition-all duration-200 transform hover:-translate-y-1 group/social"
          >
            <svg class="w-5 h-5 text-blue-600 group-hover/social:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            v-if="profile.social.github"
            :href="profile.social.github"
            target="_blank"
            class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center shadow-neumorphism hover:shadow-neumorphism-inset active:shadow-neumorphism-pressed transition-all duration-200 transform hover:-translate-y-1 group/social"
          >
            <svg class="w-5 h-5 text-gray-800 group-hover/social:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            v-if="profile.social.twitter"
            :href="profile.social.twitter"
            target="_blank"
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

.hover\:scale-102:hover {
  transform: scale(1.02);
}
</style>`,

  ProfileCard3: `<template>
  <div class="relative group w-96">

    <!-- Cyberpunk Card -->
    <div
      class="bg-gray-900 rounded-lg p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden group/card neon-glow"
    >
      <!-- Animated background grid -->
      <div class="absolute inset-0 opacity-10">
        <div class="grid-pattern w-full h-full"></div>
      </div>

      <!-- Neon border glow -->
      <div
        class="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 animate-border-glow"
      ></div>
      <div class="absolute inset-0.5 bg-gray-900 rounded-lg"></div>

      <!-- Glitch overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-scan opacity-0 group-hover/card:opacity-100"
      ></div>

      <!-- Content -->
      <div class="relative z-10">
        <!-- Holographic Avatar -->
        <div class="flex justify-center mb-6">
          <div class="relative">
            <div
              class="w-24 h-24 rounded-full border-2 border-cyan-400 p-1 animate-pulse-neon"
            >
              <img
                :src="profile.avatar"
                :alt="profile.name"
                class="w-full h-full rounded-full object-cover filter brightness-110 contrast-110"
              />
              <!-- Holographic effect -->
              <div
                class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-500/20 animate-rotate"
              ></div>
            </div>
            <!-- Status indicator -->
            <div
              class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900 flex items-center justify-center neon-glow-green"
            >
              <div class="w-2 h-2 bg-green-300 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        <!-- Glitch Text -->
        <div class="text-center mb-6">
          <h3
            class="text-2xl font-mono font-bold text-white mb-2 glitch-text"
            data-text="{{ profile.name }}"
          >
            {{ profile.name }}
          </h3>
          <div
            class="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 text-gray-900 px-4 py-2 rounded font-mono text-sm font-bold mb-2 shadow-neon"
          >
            {{ profile.role }}
          </div>
          <p class="text-cyan-300 text-sm font-mono opacity-80">
            &gt; {{ profile.company }}_
          </p>
        </div>

        <!-- Terminal Bio -->
        <div class="mb-6">
          <div
            class="bg-black/50 border border-green-500/30 rounded p-4 font-mono text-sm min-h-32"
          >
            <div class="text-green-400 mb-2">&gt; cat bio.txt</div>
            <p class="text-green-300 leading-relaxed terminal-bio">
              {{ profile.bio }}
            </p>
            <div class="text-green-400 mt-2 animate-blink">█</div>
          </div>
        </div>

        <!-- Neon Skills -->
        <div class="mb-6">
          <div class="text-cyan-400 text-sm font-mono mb-3">
            &gt; ./skills --list
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, index) in profile.skills.slice(0, 4)"
              :key="skill"
              :style="{ animationDelay: (index * 150) + 'ms' }"
              class="bg-transparent border border-cyan-500/50 text-cyan-300 text-xs font-mono px-3 py-1 rounded hover:border-cyan-400 hover:text-cyan-200 hover:shadow-neon-sm transition-all duration-300 animate-fade-in-cyber"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- Holographic Social -->
        <div class="flex justify-center space-x-4 mb-6">
          <a
            v-if="profile.social.linkedin"
            :href="profile.social.linkedin"
            target="_blank"
            class="w-10 h-10 border border-blue-500/50 rounded flex items-center justify-center hover:border-blue-400 hover:shadow-neon-blue transition-all duration-300 transform hover:scale-110 group/social"
          >
            <svg
              class="w-5 h-5 text-blue-400 group-hover/social:text-blue-300"
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
            target="_blank"
            class="w-10 h-10 border border-purple-500/50 rounded flex items-center justify-center hover:border-purple-400 hover:shadow-neon-purple transition-all duration-300 transform hover:scale-110 group/social"
          >
            <svg
              class="w-5 h-5 text-purple-400 group-hover/social:text-purple-300"
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
            target="_blank"
            class="w-10 h-10 border border-cyan-500/50 rounded flex items-center justify-center hover:border-cyan-400 hover:shadow-neon-cyan transition-all duration-300 transform hover:scale-110 group/social"
          >
            <svg
              class="w-5 h-5 text-cyan-400 group-hover/social:text-cyan-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
          </a>
        </div>

        <!-- Matrix Button -->
        <button
          class="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded font-mono font-bold hover:from-cyan-400 hover:to-purple-400 transform hover:scale-105 transition-all duration-300 shadow-neon relative overflow-hidden group/btn"
        >
          <span class="relative z-10">[ CONNECT ]</span>
          <div
            class="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"
          ></div>
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

<style scoped>
/* Neon effects */
.neon-glow {
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
}

.neon-glow-green {
  box-shadow: 0 0 15px rgba(74, 222, 128, 0.5);
}

.shadow-neon {
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
}

.shadow-neon-sm {
  box-shadow: 0 0 5px rgba(34, 211, 238, 0.3);
}

.shadow-neon-blue {
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

.shadow-neon-purple {
  box-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
}

.shadow-neon-cyan {
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
}

/* Grid pattern */
.grid-pattern {
  background-image: linear-gradient(
      rgba(34, 211, 238, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Animations */
@keyframes pulse-neon {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(34, 211, 238, 0.8);
  }
  50% {
    box-shadow: 0 0 30px rgba(34, 211, 238, 1);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes border-glow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes scan {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes fade-in-cyber {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

.animate-pulse-neon {
  animation: pulse-neon 2s ease-in-out infinite;
}

.animate-rotate {
  animation: rotate 3s linear infinite;
}

.animate-border-glow {
  background-size: 200% 200%;
  animation: border-glow 3s ease infinite;
}

.animate-scan {
  animation: scan 2s ease-in-out infinite;
}

.animate-fade-in-cyber {
  animation: fade-in-cyber 0.6s ease-out forwards;
  opacity: 0;
}

.animate-blink {
  animation: blink 1s infinite;
}

/* Glitch effect */
.glitch-text {
  position: relative;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.group:hover .glitch-text::before {
  opacity: 0.8;
  color: #ff00ff;
  animation: glitch-1 0.3s infinite;
}

.group:hover .glitch-text::after {
  opacity: 0.8;
  color: #00ffff;
  animation: glitch-2 0.3s infinite;
}

@keyframes glitch-1 {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes glitch-2 {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(2px, -2px);
  }
  40% {
    transform: translate(2px, 2px);
  }
  60% {
    transform: translate(-2px, -2px);
  }
  80% {
    transform: translate(-2px, 2px);
  }
  100% {
    transform: translate(0);
  }
}

/* Typewriter effect */
.typewriter {
  overflow: hidden;
  border-right: 2px solid #00ff00;
  white-space: nowrap;
  animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
}

/* Terminal bio text with proper word wrapping */
.terminal-bio {
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  hyphens: auto;
  max-width: 100%;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #00ff00;
  }
}
</style>`,
  ProfileCard4: `<template>
  <div
    class="profile-card-4 group relative bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-6 border border-orange-200/50 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden w-96"
  >
    <!-- Warm background elements -->
    <div
      class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"
    ></div>
    <div
      class="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-tr from-yellow-400/20 to-orange-400/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500 delay-100"
    ></div>
    <!-- Profile section with warm colors -->
    <div class="relative z-10 text-center mb-6">
      <div class="relative inline-block">
        <!-- Avatar with subtle glow effect -->
        <div class="relative w-24 h-24 mx-auto mb-4">
          <div
            class="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-50 blur-lg group-hover:opacity-70 transition-opacity duration-300"
          ></div>
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <!-- Status indicator -->
        <div
          class="absolute -top-1 -right-1 w-6 h-6 bg-green-400 border-2 border-white rounded-full flex items-center justify-center"
        >
          <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      <h3
        class="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300"
      >
        {{ profile.name }}
      </h3>

      <p class="text-orange-600 font-semibold text-sm mb-1">
        {{ profile.role }}
      </p>
      <p class="text-gray-600 text-sm">{{ profile.company }}</p>
    </div>

    <!-- Bio section -->
    <div class="relative z-10 mb-6">
      <p class="text-gray-700 text-sm leading-relaxed text-center px-2">
        {{ profile.bio }}
      </p>
    </div>

    <!-- Skills with warm badges -->
    <div class="relative z-10 mb-6">
      <div class="flex flex-wrap gap-2 justify-center">
        <span
          v-for="skill in profile.skills.slice(0, 3)"
          :key="skill"
          class="px-3 py-1 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 text-xs font-medium rounded-full border border-orange-200 group-hover:from-orange-200 group-hover:to-red-200 transition-colors duration-300"
        >
          {{ skill }}
        </span>
        <span
          v-if="profile.skills.length > 3"
          class="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full border border-gray-200"
        >
          +{{ profile.skills.length - 3 }}
        </span>
      </div>
    </div>

    <!-- Social links with warm theme -->
    <div class="relative z-10 flex justify-center space-x-3">
      <a
        v-for="(url, platform) in profile.social"
        :key="platform"
        :href="url"
        target="_blank"
        class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-100 to-red-100 border border-orange-200 flex items-center justify-center text-orange-600 hover:from-orange-200 hover:to-red-200 hover:text-orange-700 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-md group/social"
        :aria-label="'Perfil de ' + platform"
      >
        <!-- Icons for different platforms -->
        <svg
          v-if="platform === 'linkedin'"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
          />
        </svg>
        <svg
          v-else-if="platform === 'github'"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 0a10 10 0 00-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0110 4.84c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0010 0z"
          />
        </svg>
        <svg
          v-else-if="platform === 'twitter'"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 001.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 00-7 3.74 11.65 11.65 0 01-8.45-4.3 4.1 4.1 0 001.27 5.49A4.07 4.07 0 01.8 7.7v.05a4.1 4.1 0 003.3 4.03 4.1 4.1 0 01-1.86.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 010 16.4a11.62 11.62 0 006.29 1.84"
          />
        </svg>
        <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
          <path
            fill-rule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>

    <!-- Floating decorative elements -->
    <div
      class="absolute top-16 right-6 w-3 h-3 bg-orange-300 rounded-full opacity-50 group-hover:opacity-80 group-hover:scale-125 transition-all duration-500 delay-200"
    ></div>
    <div
      class="absolute bottom-20 left-8 w-2 h-2 bg-red-300 rounded-full opacity-60 group-hover:opacity-90 group-hover:scale-150 transition-all duration-500 delay-300"
    ></div>
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
  ProfileCard5: `<template>
  <div
    class="profile-card-5 group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
  >
    <!-- Minimalist top accent -->
    <div
      class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    ></div>
    <div class="p-8">
      <!-- Professional header -->
      <div class="text-center mb-8">
        <div class="relative inline-block mb-6">
          <!-- Professional avatar -->
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
          />
          <!-- Professional status -->
          <div
            class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full flex items-center justify-center shadow-lg"
          >
            <div class="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>

        <!-- Name and title -->
        <h3
          class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300"
        >
          {{ profile.name }}
        </h3>

        <div class="space-y-1">
          <p class="text-indigo-600 font-semibold">{{ profile.role }}</p>
          <p class="text-gray-500 text-sm">{{ profile.company }}</p>
        </div>
      </div>

      <!-- Professional bio -->
      <div class="mb-8">
        <p class="text-gray-600 text-center leading-relaxed">
          {{ profile.bio }}
        </p>
      </div>

      <!-- Skills with modern design -->
      <div class="mb-8">
        <h4
          class="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide"
        >
          Especialidades
        </h4>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in profile.skills"
            :key="skill"
            class="px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 text-xs font-medium rounded-lg transition-colors duration-300 border border-transparent hover:border-indigo-200"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Professional contact -->
      <div class="flex justify-center space-x-4">
        <a
          v-for="(url, platform) in profile.social"
          :key="platform"
          :href="url"
          target="_blank"
          class="w-12 h-12 rounded-full bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 group/social"
          :aria-label="'Conectar en ' + platform"
        >
          <!-- Professional platform icons -->
          <svg
            v-if="platform === 'linkedin'"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            />
          </svg>
          <svg
            v-else-if="platform === 'github'"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 0a10 10 0 00-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0110 4.84c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0010 0z"
            />
          </svg>
          <svg
            v-else-if="platform === 'twitter'"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 001.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 00-7 3.74 11.65 11.65 0 01-8.45-4.3 4.1 4.1 0 001.27 5.49A4.07 4.07 0 01.8 7.7v.05a4.1 4.1 0 003.3 4.03 4.1 4.1 0 01-1.86.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 010 16.4a11.62 11.62 0 006.29 1.84"
            />
          </svg>
          <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fill-rule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Subtle hover effect -->
    <div
      class="absolute inset-0 border border-transparent group-hover:border-indigo-200 rounded-2xl transition-colors duration-500"
    ></div>

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
  ProfileCard6: `<template>
  <div
    class="profile-card-6 group relative bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-2xl p-6 border border-gray-700/50 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-cyan-500/20 hover:border-cyan-500/30 w-96"
  >
    <!-- Tech grid background -->
    <div class="absolute inset-0 opacity-5">
      <div class="grid grid-cols-12 grid-rows-12 h-full w-full">
        <div v-for="i in 144" :key="i" class="border border-cyan-500/10"></div>
      </div>
    </div>    <!-- Tech-style profile -->
    <div class="relative z-10">
      <!-- Header with terminal styling -->
      <div class="mb-6">
        <div class="flex items-center space-x-2 mb-4">
          <div class="flex space-x-1">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span class="text-cyan-400 text-xs font-mono">profile.exe</span>
        </div>

        <!-- Avatar with tech frame -->
        <div class="relative w-24 h-24 mx-auto mb-4">
          <div
            class="absolute inset-0 border-2 border-cyan-500/50 rounded-full"
          ></div>
          <div
            class="absolute -inset-1 border border-cyan-400/30 rounded-full"
          ></div>
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="w-full h-full rounded-full object-cover border-2 border-gray-700 group-hover:border-cyan-500/50 transition-colors duration-300"
          />

          <!-- Status indicator -->
          <div
            class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-gray-900 rounded-full flex items-center justify-center"
          >
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <!-- User info in terminal style -->
      <div class="space-y-3 mb-6">
        <div class="text-center">
          <p class="text-cyan-400 font-mono text-xs mb-1">$ whoami</p>
          <h3
            class="text-xl font-bold text-white font-mono group-hover:text-cyan-300 transition-colors duration-300"
          >
            {{ profile.name }}
          </h3>
        </div>

        <div class="text-center">
          <p class="text-cyan-400 font-mono text-xs mb-1">$ cat role.txt</p>
          <p class="text-gray-300 font-mono text-sm">{{ profile.role }}</p>
          <p class="text-gray-500 font-mono text-xs">{{ profile.company }}</p>
        </div>

        <div class="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-3">
          <p class="text-cyan-400 font-mono text-xs mb-2">$ cat bio.md</p>
          <p class="text-gray-300 text-sm font-mono leading-relaxed">
            {{ profile.bio }}
          </p>
        </div>
      </div>

      <!-- Skills as command output -->
      <div class="mb-6">
        <p class="text-cyan-400 font-mono text-xs mb-2">$ ls skills/</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in profile.skills"
            :key="skill"
            class="px-3 py-1 bg-gray-800/80 text-cyan-300 text-xs font-mono rounded border border-cyan-500/30 hover:border-cyan-400/50 hover:bg-gray-700/80 transition-all duration-300"
          >
            {{ skill.toLowerCase().replace(" ", "_") }}.js
          </span>
        </div>
      </div>

      <!-- Social connections -->
      <div>
        <p class="text-cyan-400 font-mono text-xs mb-3">$ ls connections/</p>
        <div class="flex justify-center space-x-3">
          <a
            v-for="(url, platform) in profile.social"
            :key="platform"
            :href="url"
            target="_blank"
            class="w-10 h-10 bg-gray-800/80 hover:bg-cyan-900/50 border border-cyan-500/30 hover:border-cyan-400/50 rounded-lg flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 group/social"
            :aria-label="platform + '.link'"
          >
            <!-- Tech-style icons -->
            <svg
              v-if="platform === 'linkedin'"
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
              />
            </svg>
            <svg
              v-else-if="platform === 'github'"
              class="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 0a10 10 0 00-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0110 4.84c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0010 0z"
              />
            </svg>
            <svg v-else class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path
                fill-rule="evenodd"
                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Subtle tech border glow -->
    <div
      class="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style="
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: xor;
      "
    ></div>
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

  // Article Cards
  ArticleCard1: `<template>
  <div
    class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm mx-auto border border-gray-100 relative group"
  >
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
        <button
          class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <svg
            class="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>
      </div>

      <!-- Stats -->
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

        <a
          :href="article.url"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 inline-block cursor-pointer"
        >
          Leer más
        </a>
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
`,

  ArticleCard2: `<template>
  <div
    class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full max-w-sm mx-auto border border-orange-100 relative group"
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

        <a
          :href="article.url"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-bold text-sm hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg inline-block cursor-pointer"
        >
          Leer más
        </a>
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
`,
  ArticleCard3: `<template>
  <div
    class="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 w-full max-w-sm mx-auto border border-gray-800"
  >
    <div class="p-6">
      <!-- Header dark mode -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center space-x-3">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span
            class="text-green-400 text-xs font-mono uppercase tracking-wider"
            >Published</span
          >
        </div>
        <div class="text-gray-400 text-xs font-mono">
          {{ formatDate(article.date) }}
        </div>
      </div>
      <!-- Image con overlay dark -->
      <div class="relative mb-6 rounded-xl overflow-hidden">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-32 object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"
        ></div>
        <div class="absolute top-3 right-3">
          <span
            class="bg-cyan-500 text-gray-900 px-2 py-1 rounded text-xs font-bold"
          >
            {{ article.readTime }}
          </span>
        </div>
      </div>

      <!-- Content -->
      <h3 class="text-white text-xl font-bold mb-3 leading-tight">
        {{ article.title }}
      </h3>
      <p class="text-gray-300 text-sm mb-4 leading-relaxed">
        {{ article.excerpt }}
      </p>

      <!-- Tags dark mode -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="tag in article.tags.slice(0, 2)"
          :key="tag"
          class="bg-gray-800 border border-gray-700 text-cyan-400 px-3 py-1 rounded-lg text-xs font-medium"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Author info dark -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center">
          <div
            class="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center"
          >
            <span class="text-white text-sm font-bold">{{
              article.author.charAt(0)
            }}</span>
          </div>
          <div class="ml-3">
            <p class="text-white font-semibold text-sm">{{ article.author }}</p>
            <p class="text-gray-400 text-xs">Tech Writer</p>
          </div>
        </div>
      </div>

      <!-- Stats dark mode -->
      <div
        class="flex items-center justify-between pt-4 border-t border-gray-800"
      >
        <div class="flex items-center space-x-4">
          <div class="flex items-center">
            <svg
              class="w-4 h-4 text-red-400 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
            <span class="text-gray-300 text-sm">{{ article.likes }}</span>
          </div>
          <div class="flex items-center">
            <svg
              class="w-4 h-4 text-cyan-400 mr-2"
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
            <span class="text-gray-300 text-sm">{{ article.comments }}</span>
          </div>
        </div>

        <button
          class="bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm transition-all duration-200 shadow-lg"
        >
          Read →
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
`,
  ArticleCard4: `<template>
  <div
    class="article-card-4 group relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl shadow-lg border border-emerald-200/50 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
  >
    <!-- Nature-inspired background elements -->
    <div
      class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"
    ></div>
    <div
      class="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-cyan-200/20 to-emerald-200/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500 delay-100"
    ></div>

    <!-- Article image with nature effect -->
    <div class="relative mb-6">
      <div class="overflow-hidden rounded-t-2xl">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-emerald-900/20 via-transparent to-transparent"
        ></div>
      </div>

      <!-- Floating leaves decoration -->
      <div
        class="absolute top-4 left-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
      >
        <div
          class="leaf w-6 h-6 bg-emerald-400/40 rounded-full transform rotate-12 group-hover:rotate-45 transition-transform duration-500"
        ></div>
      </div>
      <div
        class="absolute bottom-4 right-4 opacity-40 group-hover:opacity-80 transition-opacity duration-500 delay-100"
      >
        <div
          class="leaf w-4 h-4 bg-teal-400/50 rounded-full transform -rotate-12 group-hover:-rotate-45 transition-transform duration-500"
        ></div>
      </div>
    </div>

    <div class="p-6 pt-0">
      <!-- Header with organic style -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-2">
          <div class="flex -space-x-1">
            <span
              v-for="tag in article.tags.slice(0, 2)"
              :key="tag"
              class="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full border border-emerald-200 group-hover:bg-emerald-200 transition-colors duration-300"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="text-xs text-emerald-600 font-medium">
          {{ article.readTime }}
        </div>
      </div>

      <!-- Title with organic typography -->
      <h3
        class="text-xl font-bold text-gray-800 mb-3 leading-tight group-hover:text-emerald-700 transition-colors duration-300"
      >
        {{ article.title }}
      </h3>

      <!-- Excerpt -->
      <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
        {{ article.excerpt }}
      </p>

      <!-- Author info with nature theme -->
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <div
            class="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm"
          >
            {{ article.author.charAt(0) }}
          </div>
          <div>
            <p class="text-sm font-medium text-gray-800">
              {{ article.author }}
            </p>
            <p class="text-xs text-gray-500">{{ article.date }}</p>
          </div>
        </div>

        <!-- Engagement stats -->
        <div class="flex items-center space-x-4 text-xs text-gray-500">
          <div
            class="flex items-center space-x-1 hover:text-emerald-600 transition-colors duration-300"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
            <span>{{ article.likes }}</span>
          </div>
          <div
            class="flex items-center space-x-1 hover:text-emerald-600 transition-colors duration-300"
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
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span>{{ article.comments }}</span>
          </div>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="mt-6 flex justify-between items-center">
        <a
          :href="article.url"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
        >
          Leer más
        </a>
        <a
          :href="article.secondaryUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors duration-300 cursor-pointer"
        >
          Ver más artículos
        </a>
      </div>
    </div>

    <!-- Organic border effect -->
    <div
      class="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:w-full transition-all duration-700 ease-out rounded-full"
    ></div>

  </div>
</template>

<script setup>


defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.leaf {
  border-radius: 50% 0 50% 50%;
}
</style>`,
  ArticleCard5: `<template>
  <div
    class="article-card-5 group relative bg-white rounded-none shadow-xl border-l-4 border-red-500 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-red-600"
  >
    <!-- Magazine-style header stripe -->
    <div
      class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"
    ></div>

    <div class="p-6 pt-8">
      <!-- Magazine-style header -->
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center space-x-2">
          <div class="w-1 h-16 bg-red-500"></div>
          <div class="space-y-1">
            <div class="flex space-x-2">
              <span
                v-for="tag in article.tags.slice(0, 1)"
                :key="tag"
                class="px-2 py-1 bg-red-500 text-white text-xs font-bold uppercase tracking-wide"
              >
                {{ tag }}
              </span>
            </div>
            <p
              class="text-xs text-gray-500 uppercase tracking-wide font-semibold"
            >
              {{ article.readTime }} Read
            </p>
          </div>
        </div>
        <div class="text-right">
          <p class="text-xs text-gray-400 uppercase">{{ article.date }}</p>
        </div>
      </div>

      <!-- Bold magazine title -->
      <h3
        class="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-red-700 transition-colors duration-300 uppercase tracking-tight"
      >
        {{ article.title }}
      </h3>

      <!-- Magazine-style image -->
      <div class="relative mb-6 -mx-6">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <!-- Bold overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        ></div>
        <div class="absolute bottom-4 left-6 right-6">
          <p class="text-white text-sm leading-relaxed font-medium">
            {{ article.excerpt }}
          </p>
        </div>
      </div>

      <!-- Magazine-style author section -->
      <div class="border-t-2 border-red-500 pt-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div
              class="w-12 h-12 bg-red-500 text-white font-black text-lg flex items-center justify-center"
            >
              {{
                article.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
              }}
            </div>
            <div>
              <p
                class="font-bold text-gray-900 uppercase text-sm tracking-wide"
              >
                {{ article.author }}
              </p>
              <p class="text-xs text-gray-500 uppercase font-semibold">
                Contributing Writer
              </p>
            </div>
          </div>

          <!-- Bold engagement stats -->
          <div class="flex items-center space-x-4">
            <div class="text-center">
              <p class="text-xl font-black text-red-500">{{ article.likes }}</p>
              <p class="text-xs text-gray-500 uppercase font-bold">Likes</p>
            </div>
            <div class="text-center">
              <p class="text-xl font-black text-red-500">
                {{ article.comments }}
              </p>
              <p class="text-xs text-gray-500 uppercase font-bold">Comments</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Magazine action buttons -->
      <div class="mt-6 pt-4 border-t-2 border-red-500 flex justify-between items-center">
        <a
          :href="article.url"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-black text-sm uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
        >
          LEER MÁS
        </a>
        <a
          :href="article.secondaryUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-red-500 hover:text-red-600 font-bold text-sm uppercase tracking-wide transition-colors duration-300 cursor-pointer"
        >
          + ARTÍCULOS
        </a>
      </div>

      <!-- Magazine corner fold effect -->
      <div
        class="absolute top-0 right-0 w-8 h-8 bg-gray-200 transform rotate-45 translate-x-4 -translate-y-4 group-hover:bg-red-100 transition-colors duration-300"
      ></div>
    </div>

    <!-- Magazine spine effect -->
    <div
      class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 via-red-500 to-red-400 group-hover:w-2 transition-all duration-300"
    ></div>
  </div>
</template>

<script setup>


defineProps({
  article: {
    type: Object,
    required: true,
  },
});

</script>`,
  ArticleCard6: `<template>
  <div
    class="article-card-6 group relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl border border-purple-500/30 shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-purple-500/25 hover:border-purple-400/50"
  >
    <!-- Futuristic grid overlay -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid grid-cols-6 grid-rows-6 h-full w-full">
        <div
          v-for="i in 36"
          :key="i"
          class="border border-purple-400/20 animate-pulse"
          :style="{ 'animation-delay': (i * 0.1) + 's' }"
        ></div>
      </div>
    </div>

    <!-- Digital scan lines -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-pulse"
    ></div>


    <div class="relative z-10 p-6">
      <!-- Futuristic header -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-3">
          <div class="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div class="text-white text-xs font-mono uppercase tracking-wider">
            Article.exe
          </div>
        </div>
        <div
          class="flex items-center space-x-2 text-xs text-purple-300 font-mono"
        >
          <span>Runtime:</span>
          <span class="text-purple-400">{{ article.readTime }}</span>
        </div>
      </div>

      <!-- Holographic image -->
      <div class="relative mb-6">
        <div
          class="absolute inset-0 bg-purple-500/20 blur-xl rounded-lg group-hover:bg-purple-400/30 transition-colors duration-500"
        ></div>
        <img
          :src="article.image"
          :alt="article.title"
          class="relative z-10 w-full h-40 object-cover rounded-lg border border-purple-500/50 shadow-lg filter contrast-125 saturate-110 group-hover:shadow-purple-500/50 transition-all duration-500"
        />
        <!-- Holographic overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-cyan-500/10 to-pink-500/10 rounded-lg mix-blend-overlay"
        ></div>

        <!-- Corner brackets -->
        <div
          class="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-purple-400 opacity-70"
        ></div>
        <div
          class="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400 opacity-70"
        ></div>
        <div
          class="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400 opacity-70"
        ></div>
        <div
          class="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-purple-400 opacity-70"
        ></div>
      </div>

      <!-- Digital content -->
      <div class="space-y-4">
        <!-- Tags as system labels -->
        <div class="flex items-center space-x-2">
          <span class="text-purple-400 text-xs font-mono">Tags:</span>
          <div class="flex space-x-2">
            <span
              v-for="tag in article.tags.slice(0, 2)"
              :key="tag"
              class="px-2 py-1 bg-purple-900/50 text-purple-300 group-hover:text-white text-xs font-mono border border-purple-500/30 rounded hover:border-purple-400/50 transition-colors duration-300"
            >
              #{{ tag.toLowerCase().replace(" ", "_") }}
            </span>
          </div>
        </div>

        <!-- Simple title without glitch effect -->
        <div class="relative">
          <h3
            class="text-xl font-bold text-white group-hover:text-white transition-colors duration-300 font-mono leading-tight"
          >
            {{ article.title }}
          </h3>
        </div>

        <!-- Terminal-style description -->
        <div class="bg-black/30 border border-purple-500/30 rounded-lg p-4">
          <div class="flex items-center space-x-2 mb-2">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            <span class="text-purple-400 text-xs font-mono ml-auto"
              >content.txt</span
            >
          </div>
          <p
            class="text-gray-300 group-hover:text-white text-sm font-mono leading-relaxed"
          >
            > {{ article.excerpt }}
          </p>
        </div>

        <!-- Author and stats in terminal style -->
        <div
          class="flex items-center justify-between pt-4 border-t border-purple-500/30"
        >
          <div class="flex items-center space-x-3">
            <div
              class="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded border border-purple-400/50 flex items-center justify-center text-white font-mono font-bold text-xs shadow-lg"
            >
              {{
                article.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
              }}
            </div>
            <div>
              <p
                class="text-purple-300 group-hover:text-white font-mono text-sm"
              >
                {{ article.author }}
              </p>
              <p class="text-gray-400 group-hover:text-white text-xs font-mono">
                {{ article.date }}
              </p>
            </div>
          </div>

          <!-- Digital metrics -->
          <div class="flex items-center space-x-4 text-xs font-mono">
            <div
              class="flex items-center space-x-1 text-purple-400 group-hover:text-white transition-colors duration-300"
            >
              <span class="glow-text">♥</span>
              <span>{{ article.likes }}</span>
            </div>
            <div
              class="flex items-center space-x-1 text-purple-400 group-hover:text-white transition-colors duration-300"
            >
              <span class="glow-text">◊</span>
              <span>{{ article.comments }}</span>
            </div>
          </div>
        </div>

        <!-- Holographic action interface -->
        <div class="mt-6 flex justify-between items-center border-t border-purple-800/50 pt-4">
          <a
            :href="article.url"
            target="_blank"
            rel="noopener noreferrer"
            class="relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white px-6 py-2 rounded-lg font-mono text-sm transition-all duration-300 shadow-lg hover:shadow-purple-500/25 glow-text cursor-pointer"
          >
            [LEER_MÁS]
          </a>
          <a
            :href="article.secondaryUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-purple-400 hover:text-white font-mono text-xs transition-colors duration-300 glow-text cursor-pointer"
          >
            >_ EXPLORAR
          </a>
        </div>
      </div>
    </div>

    <!-- Animated border effect -->
    <div
      class="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style="
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: xor;
      "
    ></div>
  </div>
</template>

<script setup>

defineProps({
  article: {
    type: Object,
    required: true,
  },
});

</script>

<style scoped>
.glow-text {
  text-shadow: 0 0 5px currentColor;
}
</style>`,
  ProductCard1: `<template>
  <div
    class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-sm mx-auto relative group"
  >

    <!-- Premium Badge -->
    <div class="relative">
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full h-52 object-cover"
      />
      <div class="absolute top-4 left-4">
        <span
          class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
        >
          PREMIUM
        </span>
      </div>
      <div class="absolute top-4 right-14">
        <button
          class="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
        >
          <svg
            class="w-5 h-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="p-6">
      <div class="flex items-center justify-between mb-3">
        <span
          class="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          {{ product.price }}
        </span>
        <div class="flex items-center bg-yellow-100 px-2 py-1 rounded-lg">
          <svg
            class="w-4 h-4 text-yellow-500 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <span class="text-yellow-700 font-semibold text-sm">{{
            product.rating
          }}</span>
        </div>
      </div>

      <h3 class="text-xl font-bold text-gray-900 mb-2">{{ product.title }}</h3>
      <p class="text-gray-600 text-sm mb-4 line-height-relaxed">
        {{ product.description }}
      </p>

      <div class="flex items-center justify-between mb-4">
        <span class="text-xs text-gray-500">{{ product.reviews }} reseñas</span>
        <div class="flex items-center space-x-1">
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
          <span class="text-xs text-green-600 font-medium">En stock</span>
        </div>
      </div>

      <button
        class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Comprar Ahora
      </button>
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
`,

  ProductCard2: `<template>
  <div
    class="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105 w-full max-w-sm mx-auto border border-gray-100 relative group"
  >
    <div class="relative">
      <div
        class="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-500/20 z-10"
      ></div>
      <img
        :src="product.image"
        :alt="product.title"
        class="w-full h-48 object-cover"
      />
      <div class="absolute bottom-4 left-4 z-20">
        <div
          class="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg"
        >
          <span class="text-2xl font-black text-gray-900">{{
            product.price
          }}</span>
        </div>
      </div>
      <div class="absolute top-4 right-4 z-20">
        <div
          class="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold"
        >
          {{ product.category }}
        </div>
      </div>
    </div>

    <div class="p-6 relative">
      <!-- Decorative element -->
      <div
        class="absolute top-0 left-6 w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full -mt-0.5"
      ></div>

      <h3 class="text-2xl font-black text-gray-900 mb-3 leading-tight">
        {{ product.title }}
      </h3>

      <div class="flex items-center mb-4">
        <div class="flex mr-3">
          <svg
            v-for="star in 5"
            :key="star"
            class="w-5 h-5"
            :class="
              star <= Math.floor(product.rating)
                ? 'text-orange-400'
                : 'text-gray-200'
            "
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>
        <span class="text-sm font-semibold text-gray-700"
          >4.8 ({{ product.reviews }})</span
        >
      </div>

      <p class="text-gray-600 mb-6 leading-relaxed">
        {{ product.description }}
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
`,

  ProductCard3: `<template>
  <div
    class="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 w-full max-w-sm mx-auto border border-gray-700 relative group"
  >
   

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
`,
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
  <div
    class="product-card-5 group relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
  >
    <!-- Minimalist top accent -->
    <div
      class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900"
    ></div>

    <!-- Clean product image -->
    <div class="p-6 pb-4">
      <div
        class="relative overflow-hidden rounded-2xl bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300"
      >
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <!-- Minimal overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      </div>
    </div>

    <!-- Product content with clean typography -->
    <div class="px-6 pb-6 space-y-4">
      <!-- Category and rating -->
      <div class="flex items-center justify-between">
        <span
          class="text-xs font-medium text-gray-500 uppercase tracking-wider"
          >{{ product.category }}</span
        >
        <div class="flex items-center space-x-1">
          <div class="flex space-x-1">
            <div v-for="star in 5" :key="star" class="w-3 h-3">
              <svg
                :class="
                  star <= Math.floor(product.rating)
                    ? 'text-gray-900'
                    : 'text-gray-200'
                "
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
          </div>
          <span class="text-sm font-medium text-gray-600 ml-2">{{
            product.rating
          }}</span>
        </div>
      </div>

      <!-- Title -->
      <h3
        class="text-2xl font-bold text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300"
      >
        {{ product.title }}
      </h3>

      <!-- Description -->
      <p class="text-gray-600 text-sm leading-relaxed line-clamp-2">
        {{ product.description }}
      </p>

      <!-- Reviews count -->
      <p class="text-xs text-gray-400">
        {{ product.reviews }} reseñas verificadas
      </p>

      <!-- Price and action -->
      <div class="flex items-end justify-between pt-4">
        <div>
          <p class="text-3xl font-bold text-gray-900">{{ product.price }}</p>
        </div>

        <button
          class="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Añadir
        </button>
      </div>
    </div>

    <!-- Subtle hover line animation -->
    <div
      class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-500 ease-out"
    ></div>
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
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>`,
  ProductCard6: `<template>
  <div
    class="product-card-6 group relative bg-black rounded-2xl overflow-hidden border border-cyan-500/30 transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20"
  >
    <!-- Neon grid background -->
    <div class="absolute inset-0 opacity-10">
      <div class="grid grid-cols-8 grid-rows-8 h-full w-full">
        <div
          v-for="i in 64"
          :key="i"
          class="border border-cyan-500/20 animate-pulse"
          :style="{ animationDelay: (i * 0.1) + 's' }"
        ></div>
      </div>
    </div>

    <!-- Scanning line effect -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="scan-line absolute w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan"
      ></div>
    </div>

    <div class="relative z-10 p-6">
      <!-- Neon product image -->
      <div class="relative mb-6">
        <div
          class="absolute inset-0 bg-cyan-500/20 blur-xl rounded-xl group-hover:bg-cyan-400/30 transition-colors duration-500"
        ></div>
        <img
          :src="product.image"
          :alt="product.title"
          class="relative z-10 w-full h-48 object-cover rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/30 transition-all duration-500 filter contrast-125 saturate-110"
        />
        <!-- Holographic overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-xl mix-blend-overlay"
        ></div>

        <!-- Corner accents -->
        <div
          class="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400"
        ></div>
        <div
          class="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400"
        ></div>
        <div
          class="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400"
        ></div>
        <div
          class="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400"
        ></div>
      </div>

      <!-- Cyberpunk content -->
      <div class="space-y-4">
        <!-- Category and status -->
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span
              class="text-cyan-400 text-xs font-mono uppercase tracking-wider"
              >{{ product.category }}</span
            >
          </div>
          <div class="flex items-center space-x-2 text-cyan-300">
            <span class="text-xs font-mono">RATING:</span>
            <span class="text-sm font-bold text-cyan-400"
              >{{ product.rating }}/5</span
            >
          </div>
        </div>

        <!-- Glitch title effect -->
        <div class="relative">
          <h3 class="text-xl font-bold text-white font-mono">
            {{ product.title }}
          </h3>
          <!-- Glitch overlay -->
          <h3 class="absolute inset-0 text-xl font-bold text-white font-mono">
            {{ product.title }}
          </h3>
        </div>

        <!-- Description with terminal styling -->
        <div class="bg-gray-900/50 border border-cyan-500/30 rounded-lg p-3">
          <div class="flex items-center space-x-2 mb-2">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            <span class="text-cyan-400 text-xs font-mono ml-auto"
              >product.info</span
            >
          </div>
          <p class="text-gray-300 text-sm font-mono leading-relaxed">
            > {{ product.description }}
          </p>
        </div>

        <!-- Price and action with neon effect -->
        <div
          class="flex items-center justify-between pt-4 border-t border-cyan-500/30"
        >
          <div class="space-y-1">
            <p class="text-2xl font-bold text-white font-mono">
              {{ product.price }}
            </p>
            <p class="text-xs text-gray-400 font-mono">
              {{ product.reviews }} reviews.log
            </p>
          </div>

          <button
            class="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-mono font-semibold transition-all duration-300 hover:scale-105 border border-cyan-400/50 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/50"
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>

    <!-- Animated border glow -->
    <div
      class="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"
      style="
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: xor;
      "
    ></div>
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
@keyframes scan {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(400px);
  }
}

.animate-scan {
  animation: scan 3s ease-in-out infinite;
}

.glow-text {
  text-shadow: 0 0 5px currentColor, 0 0 10px currentColor,
    0 0 15px currentColor;
}

/* Cyberpunk grid animation */
.grid div:nth-child(odd) {
  animation-duration: 2s;
}

.grid div:nth-child(even) {
  animation-duration: 3s;
}
</style>`,

};