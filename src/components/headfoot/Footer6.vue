<template>
  <footer
    class="relative min-h-[600px] overflow-hidden"
    style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  >
    <!-- Animated Background -->
    <div class="absolute inset-0">
      <!-- Floating Particles -->
      <div
        v-for="(particle, index) in particles"
        :key="index"
        class="absolute rounded-full opacity-20"
        :class="[particle.color, particle.animation]"
        :style="{
          width: particle.size + 'px',
          height: particle.size + 'px',
          left: particle.x + '%',
          top: particle.y + '%',
          animationDelay: particle.delay + 's',
          animationDuration: particle.duration + 's',
        }"
      ></div>

      <!-- Mesh Gradient Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-pink-900/20"
      ></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Top Section - Company Info with Glass Effect -->
      <div class="text-center mb-16">
        <div
          class="inline-block p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl"
        >
          <div class="flex justify-center items-center space-x-4 mb-6">
            <div
              class="w-16 h-16 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h2 class="text-5xl font-bold text-white drop-shadow-lg">
              Company
            </h2>
          </div>
          <p class="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Pioneros en el desarrollo de experiencias digitales inmersivas que
            conectan el presente con el futuro de la tecnología.
          </p>
        </div>
      </div>

      <!-- Glass Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Services Card -->
        <div
          class="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
        >
          <div class="flex items-center space-x-3 mb-4">
            <div
              class="w-10 h-10 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white">Servicios</h3>
          </div>
          <ul class="space-y-2 text-white/80">
            <li class="flex items-center space-x-2">
              <div class="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
              <span>Desarrollo Web Full-Stack</span>
            </li>
            <li class="flex items-center space-x-2">
              <div class="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
              <span>Aplicaciones Móviles</span>
            </li>
            <li class="flex items-center space-x-2">
              <div class="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
              <span>UI/UX Design</span>
            </li>
            <li class="flex items-center space-x-2">
              <div class="w-1.5 h-1.5 bg-white/60 rounded-full"></div>
              <span>Consultoría Tecnológica</span>
            </li>
          </ul>
        </div>

        <!-- Contact Card -->
        <div
          class="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
        >
          <div class="flex items-center space-x-3 mb-4">
            <div
              class="w-10 h-10 bg-gradient-to-r from-green-400/30 to-emerald-400/30 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20"
            >
              <svg
                class="w-6 h-6 text-white"
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
            <h3 class="text-xl font-semibold text-white">Contacto</h3>
          </div>
          <div class="space-y-3 text-white/80">
            <div class="flex items-center space-x-3">
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
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span class="text-sm">hola@company.com</span>
            </div>
            <div class="flex items-center space-x-3">
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span class="text-sm">+34 123 456 789</span>
            </div>
            <div class="flex items-center space-x-3">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-sm">Madrid, España</span>
            </div>
          </div>
        </div>

        <!-- Newsletter Card -->
        <div
          class="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
        >
          <div class="flex items-center space-x-3 mb-4">
            <div
              class="w-10 h-10 bg-gradient-to-r from-purple-400/30 to-pink-400/30 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-5 5v-5zM4 19h1a3 3 0 003-3V8a3 3 0 00-3-3H4a1 1 0 00-1 1v12a1 1 0 001 1z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-white">Newsletter</h3>
          </div>
          <p class="text-white/80 text-sm mb-4">
            Mantente al día con las últimas tendencias tecnológicas.
          </p>
          <div class="space-y-3">
            <input
              type="email"
              placeholder="tu@email.com"
              class="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />
            <button
              class="w-full px-4 py-2 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/30 rounded-lg text-white hover:from-white/30 hover:to-white/20 transition-all duration-300"
            >
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      <!-- Social Media with Glass Effect -->
      <div class="text-center mb-8">
        <div
          class="inline-flex space-x-4 p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl"
        >
          <a
            v-for="(social, index) in socialLinks"
            :key="index"
            href="#"
            class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 border border-white/30"
            :class="social.hover"
          >
            <svg
              class="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path :d="social.path" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="text-center">
        <div
          class="inline-block p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl"
        >
          <p class="text-white/90 mb-4">
            © 2024 Company. Diseñando el futuro digital con tecnología de
            vanguardia.
          </p>
          <div
            class="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-white/70"
          >
            <a href="#" class="hover:text-white transition-colors"
              >Política de Privacidad</a
            >
            <span class="hidden sm:block">•</span>
            <a href="#" class="hover:text-white transition-colors"
              >Términos de Servicio</a
            >
            <span class="hidden sm:block">•</span>
            <a href="#" class="hover:text-white transition-colors">Cookies</a>
            <span class="hidden sm:block">•</span>
            <a href="#" class="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Code button -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-20 w-8 h-8 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center cursor-pointer transition-all border border-white/30"
      title="Ver código del componente"
      aria-label="Ver código del componente"
    >
      <svg
        class="w-4 h-4 text-white pointer-events-none"
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

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Footer"
      cardVariant="Glassmorphism con efectos especiales"
      :codeContent="cardCode"
    />
  </footer>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CodeModal from "../CodeModal.vue";
import { headCodes } from "../../data/headCodes.js";

// Modal setup
const codeModal = ref(null);
const cardCode = headCodes.Footer6;

// Floating particles data
const particles = ref([]);

// Social media links data
const socialLinks = ref([
  {
    name: "Twitter",
    path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
    hover: "hover:shadow-blue-500/25",
  },
  {
    name: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    hover: "hover:shadow-blue-700/25",
  },
  {
    name: "GitHub",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
    hover: "hover:shadow-gray-500/25",
  },
  {
    name: "Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    hover: "hover:shadow-pink-500/25",
  },
  {
    name: "Discord",
    path: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z",
    hover: "hover:shadow-indigo-500/25",
  },
]);

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};

// Generate random floating particles
const generateParticles = () => {
  const colors = [
    "bg-white",
    "bg-blue-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-cyan-300",
  ];
  const animations = [
    "animate-float-slow",
    "animate-float-medium",
    "animate-float-fast",
  ];

  for (let i = 0; i < 15; i++) {
    particles.value.push({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      animation: animations[Math.floor(Math.random() * animations.length)],
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
    });
  }
};

onMounted(() => {
  generateParticles();
});
</script>

<style scoped>
@keyframes float-slow {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

@keyframes float-medium {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-30px) rotate(120deg);
  }
}

@keyframes float-fast {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-40px) rotate(240deg);
  }
}

.animate-float-slow {
  animation: float-slow infinite ease-in-out;
}

.animate-float-medium {
  animation: float-medium infinite ease-in-out;
}

.animate-float-fast {
  animation: float-fast infinite ease-in-out;
}
</style>
