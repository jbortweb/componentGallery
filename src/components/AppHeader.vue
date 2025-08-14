<template>
  <header class="relative min-h-screen transparent-header">
    <!-- Navegación mejorada -->
    <nav
      class="relative z-50 backdrop-blur-lg bg-white/10 border-b border-white/20"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo mejorado -->
          <router-link
            to="/"
            class="flex items-center space-x-4 group cursor-pointer"
          >
            <div class="relative">
              <div
                class="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-lg shadow-blue-500/50 flex items-center justify-center transform group-hover:scale-110 transition-all duration-300"
              >
                <svg
                  class="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
              <div
                class="absolute inset-0 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-60 group-hover:opacity-90 transition-opacity duration-300"
              ></div>
            </div>
            <div>
              <h1
                class="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-blue-300 transition-all duration-300"
              >
                GalleryComponent
              </h1>
              <p
                class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
              >
                30 Componentes Únicos
              </p>
            </div>
          </router-link>

          <!-- Navegación principal simplificada -->
          <div class="hidden md:flex items-center space-x-8">
            <!-- Cards Dropdown -->
            <div class="relative group">
              <button
                class="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-all duration-300"
              >
                <span>Cards</span>
                <svg
                  class="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <!-- Cards Dropdown -->
              <div
                class="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2"
              >
                <div class="p-2">
                  <router-link
                    to="/cards/productos"
                    class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    <div
                      class="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center"
                    >
                      <svg
                        class="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="text-white font-medium">Productos</div>
                      <div class="text-gray-400 text-sm">6 componentes</div>
                    </div>
                  </router-link>

                  <router-link
                    to="/cards/perfiles"
                    class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    <div
                      class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
                    >
                      <svg
                        class="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="text-white font-medium">Perfiles</div>
                      <div class="text-gray-400 text-sm">6 componentes</div>
                    </div>
                  </router-link>

                  <router-link
                    to="/cards/articulos"
                    class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    <div
                      class="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center"
                    >
                      <svg
                        class="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="text-white font-medium">Artículos</div>
                      <div class="text-gray-400 text-sm">6 componentes</div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
            <!-- Slider & Carousel Dropdown -->
            <div class="relative group">
              <button
                class="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-all duration-300"
              >
                <span>Slider & Carousel</span>
                <svg
                  class="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                class="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2"
              >
                <div class="p-2">
                  <router-link
                    to="/carousel"
                    class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    <div
                      class="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"
                    >
                      <svg
                        class="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 17v-6a1 1 0 011-1h14a1 1 0 011 1v6M4 17a2 2 0 002 2h12a2 2 0 002-2M4 17V7a2 2 0 012-2h12a2 2 0 012 2v10"
                        />
                      </svg>
                    </div>
                    <div>
                      <div class="text-white font-medium">Carousels</div>
                      <div class="text-gray-400 text-sm">6 componentes</div>
                    </div>
                  </router-link>
                  <router-link
                    to="/"
                    class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    <div
                      class="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center"
                    >
                      <svg
                        class="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 17v-6a1 1 0 011-1h6a1 1 0 011 1v6M8 17a2 2 0 002 2h4a2 2 0 002-2M8 17V7a2 2 0 012-2h4a2 2 0 012 2v10"
                        />
                      </svg>
                    </div>
                    <div>
                      <div class="text-white font-medium">Sliders</div>
                      <div class="text-gray-400 text-sm">Próximamente</div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Head & Foot Dropdown -->
            <div class="relative group">
              <button
                class="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-all duration-300"
              >
                <span>Head & Foot</span>
                <svg
                  class="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              <!-- Head & Foot Dropdown -->
              <div
                class="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2"
              >
                <div class="p-2">
                  <router-link
                    to="/headers"
                    class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    <div
                      class="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center"
                    >
                      <svg
                        class="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="text-white font-medium">Headers</div>
                      <div class="text-gray-400 text-sm">6 componentes</div>
                    </div>
                  </router-link>

                  <router-link
                    to="/footers"
                    class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    <div
                      class="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center"
                    >
                      <svg
                        class="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <div class="text-white font-medium">Footers</div>
                      <div class="text-gray-400 text-sm">6 componentes</div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <!-- Menú móvil -->
          <div class="md:hidden">
            <button
              @click="toggleMobileMenu"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <svg
                :class="{ hidden: isMobileMenuOpen, block: !isMobileMenuOpen }"
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                :class="{ block: isMobileMenuOpen, hidden: !isMobileMenuOpen }"
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <MobileMenu :isOpen="isMobileMenuOpen" @close="closeMobileMenu" />
          </div>
        </div>
      </div>
    </nav>

    <!-- Contenido principal del hero -->
    <div
      class="relative z-40 flex items-center justify-center min-h-[calc(100vh-5rem)] px-4 pt-16"
    >
      <div class="text-center max-w-5xl mx-auto">
        <!-- Título principal con efectos -->
        <div class="mb-12">
          <h1
            class="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight"
          >
            <span
              class="block bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent animate-gradient"
            >
              {{ galleryTitle }}
            </span>
            <span
              class="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient delay-300"
            >
              Gallery
            </span>
          </h1>

          <!-- Efecto de escritura -->
          <div class="relative h-16 mb-8">
            <p class="text-xl sm:text-2xl text-gray-300 font-light typewriter">
              {{ currentText }}
              <span class="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <!-- Descripción con glassmorphism - Solo en Home -->
        <div
          v-if="route.path === '/'"
          class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 mb-12 shadow-2xl"
        >
          <p
            class="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
          >
            Una colección espectacular de
            <span class="text-cyan-400 font-semibold"
              >30 componentes únicos</span
            >
            construidos con
            <span class="text-blue-400 font-semibold">Vue 3</span>,
            <span class="text-purple-400 font-semibold">Vite</span> y
            <span class="text-indigo-400 font-semibold">Tailwind CSS</span>.
            Diseños modernos, interactivos y listos para usar.
          </p>
        </div>

        <!-- Estadísticas con animación - Solo en Home -->
        <div v-if="route.path === '/'" class="grid grid-cols-3 gap-8 pb-20">
          <div class="text-center group cursor-pointer">
            <div
              class="text-4xl sm:text-5xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              {{ animatedStats.components }}
            </div>
            <div class="text-gray-300 text-sm sm:text-base">Componentes</div>
          </div>
          <div class="text-center group cursor-pointer">
            <div
              class="text-4xl sm:text-5xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              {{ animatedStats.categories }}
            </div>
            <div class="text-gray-300 text-sm sm:text-base">Categorías</div>
          </div>
          <div class="text-center group cursor-pointer">
            <div
              class="text-4xl sm:text-5xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300"
            >
              {{ animatedStats.styles }}
            </div>
            <div class="text-gray-300 text-sm sm:text-base">Estilos</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import MobileMenu from "./MobileMenu.vue";
import { useRoute } from "vue-router";

const route = useRoute();

// Estado del menú móvil
const isMobileMenuOpen = ref(false);

// Funciones para el menú móvil
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Título dinámico basado en la ruta
const galleryTitle = computed(() => {
  const path = route.path;

  if (path === "/") {
    return "Component";
  } else if (path.includes("/cards/productos")) {
    return "Productos";
  } else if (path.includes("/cards/perfiles")) {
    return "Perfiles";
  } else if (path.includes("/cards/articulos")) {
    return "Artículos";
  } else if (path.includes("/headers")) {
    return "Headers";
  } else if (path.includes("/footers")) {
    return "Footers";
  } else if (path.includes("/carousel")) {
    return "Carousel";
  } else {
    return "Component";
  }
});

// Textos rotativos para el efecto typewriter
const texts = [
  "Diseños modernos e interactivos",
  "Código limpio y reutilizable",
  "Totalmente responsivo",
  "Efectos visuales impresionantes",
  "Listo para producción",
];

const currentText = ref("");
const currentIndex = ref(0);
const isDeleting = ref(false);
const typeSpeed = ref(100);

// Estadísticas animadas
const animatedStats = ref({
  components: 0,
  categories: 0,
  styles: 0,
});

// Generar estilos para partículas
const getParticleStyle = (index) => {
  const size = Math.random() * 4 + 1;
  const duration = Math.random() * 20 + 10;
  const delay = Math.random() * 5;

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  };
};

// Efecto typewriter
const typeWriter = () => {
  const current = texts[currentIndex.value];

  if (isDeleting.value) {
    currentText.value = current.substring(0, currentText.value.length - 1);
    typeSpeed.value = 50;
  } else {
    currentText.value = current.substring(0, currentText.value.length + 1);
    typeSpeed.value = 100;
  }

  if (!isDeleting.value && currentText.value === current) {
    setTimeout(() => {
      isDeleting.value = true;
    }, 2000);
  } else if (isDeleting.value && currentText.value === "") {
    isDeleting.value = false;
    currentIndex.value = (currentIndex.value + 1) % texts.length;
  }
};

// Animar estadísticas
const animateStats = () => {
  const targets = { components: 30, categories: 5, styles: 100 };
  const duration = 2000;
  const steps = 60;
  const increment = {
    components: targets.components / steps,
    categories: targets.categories / steps,
    styles: targets.styles / steps,
  };

  let step = 0;
  const timer = setInterval(() => {
    step++;
    animatedStats.value.components = Math.min(
      Math.floor(increment.components * step),
      targets.components
    );
    animatedStats.value.categories = Math.min(
      Math.floor(increment.categories * step),
      targets.categories
    );
    animatedStats.value.styles = Math.min(
      Math.floor(increment.styles * step),
      targets.styles
    );

    if (step >= steps) {
      clearInterval(timer);
    }
  }, duration / steps);
};

let typeInterval;
let animationFrame;

onMounted(() => {
  // Iniciar typewriter
  typeInterval = setInterval(typeWriter, typeSpeed.value);

  // Iniciar animación de estadísticas
  setTimeout(animateStats, 500);
});

onUnmounted(() => {
  if (typeInterval) clearInterval(typeInterval);
  if (animationFrame) cancelAnimationFrame(animationFrame);
});
</script>

<style scoped>
/* Gradientes animados */
@keyframes gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease-in-out infinite;
}

/* Partículas flotantes */
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float infinite linear;
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

/* Grid pattern */
.bg-grid-pattern {
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Typewriter cursor */
.typewriter {
  min-height: 1.5em;
}

/* Efectos de hover mejorados */
.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .text-6xl {
    font-size: 3rem;
  }
  .text-7xl {
    font-size: 3.5rem;
  }
  .text-8xl {
    font-size: 4rem;
  }
}

/* Header transparente */
.transparent-header {
  background: transparent;
  backdrop-filter: none;
}
</style>
