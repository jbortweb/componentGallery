export default `<template>
  <div class="relative group w-96 perspective-1000">
    <!-- Tarjeta Glassmorphism -->
    <div
      class="relative bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 group-hover:shadow-purple-500/25"
    >
      <!-- Elementos de fondo animados -->
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

      <!-- Contenido -->
      <div class="relative z-10">
        <!-- Avatar flotante -->
        <div class="flex justify-center mb-6">
          <div class="relative">
            <div
              class="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 group-hover:scale-110 transition-transform duration-300"
            >
              <img
                src="../assets/logo.svg"
                alt="Ana García"
                class="w-full h-full rounded-full object-cover border-4 border-white/50"
              />
            </div>
          </div>
        </div>

        <!-- Sección de información -->
        <div class="text-center mb-6">
          <h3 class="text-2xl font-bold text-white mb-2 animate-fade-in-up">
            Ana García
          </h3>
          <p
            class="text-gray-100 text-lg mb-1 animate-fade-in-up animation-delay-200"
          >
            Frontend Developer
          </p>
          <p
            class="text-gray-300 text-sm animate-fade-in-up animation-delay-400"
          >
            @ Tech Solutions
          </p>
        </div>

        <!-- Biografía con efecto de escritura -->
        <div class="mb-6 animate-fade-in-up animation-delay-600">
          <p
            class="text-gray-200 text-sm text-center leading-relaxed line-clamp-3"
          >
            Apasionada del desarrollo web con 5 años de experiencia en React y
            Vue.js
          </p>
        </div>

        <!-- Habilidades flotantes -->
        <div class="mb-6 animate-fade-in-up animation-delay-800">
          <div class="flex flex-wrap justify-center gap-2">
            <span
              class="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 animate-float"
              style="animation-delay: 0ms"
            >
              Vue.js
            </span>
            <span
              class="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 animate-float"
              style="animation-delay: 200ms"
            >
              React
            </span>
            <span
              class="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 animate-float"
              style="animation-delay: 400ms"
            >
              TypeScript
            </span>
            <span
              class="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-full border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 animate-float"
              style="animation-delay: 600ms"
            >
              Tailwind CSS
            </span>
          </div>
        </div>

        <!-- Enlaces sociales con efectos hover -->
        <div
          class="flex justify-center space-x-4 mb-6 animate-fade-in-up animation-delay-1000"
        >
          <a
            href="https://www.linkedin.com/in/jordi-bort/"
            target="_blank"
            class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-500/50 hover:scale-110 transition-all duration-300 group/social"
          >
            <svg
              class="w-5 h-5 text-white group-hover/social:animate-bounce"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/jbortweb"
            target="_blank"
            class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gray-700/50 hover:scale-110 transition-all duration-300 group/social"
          >
            <svg
              class="w-5 h-5 text-white group-hover/social:animate-bounce"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-400/50 hover:scale-110 transition-all duration-300 group/social"
          >
            <svg
              class="w-5 h-5 text-white group-hover/social:animate-bounce"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
          </a>
        </div>

        <!-- Botón de conexión con brillo -->
        <div class="animate-fade-in-up animation-delay-1200">
          <button
            class="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 px-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group/btn"
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
// Lógica del componente aquí
</script>

<style scoped>
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
    transform: translateY(30px);
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
</style>`;