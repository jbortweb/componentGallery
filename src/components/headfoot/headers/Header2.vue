<template>
  <div class="relative">
    <!-- Botón de código -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-50 w-10 h-10 bg-blue-600/90 hover:bg-blue-500 rounded-lg flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200 backdrop-blur-sm shadow-lg border border-blue-400/30 cursor-pointer"
      title="Ver código del componente"
      aria-label="Ver código del componente"
    >
      <svg
        class="w-5 h-5 text-white pointer-events-none"
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

    <!-- Header gaming con efectos neon -->
    <header class="relative bg-black overflow-hidden">
      <!-- Efecto de scanlines -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="scanlines"></div>
      </div>

      <!-- Cuadrícula de fondo -->
      <div class="absolute inset-0 opacity-20 pointer-events-none">
        <div class="grid-pattern"></div>
      </div>

      <!-- Líneas de energía animadas -->
      <div class="absolute inset-0 pointer-events-none overflow-hidden">
        <div class="energy-line energy-line-1"></div>
        <div class="energy-line energy-line-2"></div>
        <div class="energy-line energy-line-3"></div>
      </div>

      <!-- Navegación gaming -->
      <nav class="relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <!-- Logo gaming -->
            <div class="flex items-center group">
              <div class="relative">
                <!-- Efecto de glow -->
                <div
                  class="absolute -inset-2 bg-cyan-500/20 blur-md rounded-lg group-hover:bg-cyan-500/30 transition-all duration-300"
                ></div>
                <div
                  class="relative w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center border border-cyan-400/50 shadow-lg shadow-cyan-500/25"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9L16 14.74L17.18 21.02L12 18.26L6.82 21.02L8 14.74L2 9L8.91 8.26L12 2Z"
                    />
                  </svg>
                </div>
                <!-- Parpadeo de estado -->
                <div
                  class="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"
                ></div>
              </div>
              <div class="ml-4">
                <span
                  class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-wider"
                  >ONOFF</span
                >
                <div
                  class="text-cyan-300 text-xs font-mono uppercase tracking-widest"
                >
                  Gaming Platform
                </div>
              </div>
            </div>

            <!-- Navegación estilo gaming -->
            <div class="hidden md:flex items-center space-x-1">
              <div
                v-for="(item, index) in navItems"
                :key="item.name"
                class="relative group"
              >
                <a
                  href="#"
                  class="px-4 py-2 text-cyan-300 hover:text-white font-mono text-sm uppercase tracking-wide border border-cyan-500/0 hover:border-cyan-500/50 rounded transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/25 relative overflow-hidden"
                >
                  <!-- Efecto de barrido -->
                  <span
                    class="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  ></span>
                  <span class="relative">{{ item.name }}</span>
                  <!-- Número de índice -->
                  <span
                    class="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 text-white text-xs rounded-full flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {{ index + 1 }}
                  </span>
                </a>
              </div>
            </div>

            <!-- Panel de control gaming -->
            <div class="flex items-center space-x-4">
              <!-- Indicadores de sistema -->
              <div
                class="hidden md:flex items-center space-x-3 bg-gray-900/80 border border-cyan-500/30 rounded-lg px-4 py-2"
              >
                <div class="flex items-center space-x-1">
                  <div
                    class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                  ></div>
                  <span class="text-green-400 text-xs font-mono">ONLINE</span>
                </div>
                <div class="w-px h-4 bg-cyan-500/30"></div>
                <div class="text-cyan-300 text-xs font-mono">FPS: 60</div>
              </div>

              <!-- Botón principal -->
              <button class="hidden md:block relative group">
                <div
                  class="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"
                ></div>
                <div
                  class="relative bg-black border border-cyan-500 text-cyan-400 font-mono font-bold py-3 px-6 rounded-lg group-hover:bg-cyan-500/10 transition duration-300 uppercase tracking-wide"
                >
                  [ PLAY ]
                </div>
              </button>

              <!-- Menú móvil -->
              <button
                @click="toggleMobileMenu"
                class="md:hidden p-2 bg-gray-900/80 border border-cyan-500/30 rounded text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              >
                <svg
                  class="w-6 h-6"
                  :class="{
                    hidden: isMobileMenuOpen,
                    block: !isMobileMenuOpen,
                  }"
                  fill="none"
                  stroke="currentColor"
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
                  class="w-6 h-6"
                  :class="{
                    block: isMobileMenuOpen,
                    hidden: !isMobileMenuOpen,
                  }"
                  fill="none"
                  stroke="currentColor"
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
            </div>
          </div>
        </div>
      </nav>

      <!-- HUD Principal -->
      <div class="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
        <div class="max-w-7xl mx-auto">
          <!-- Terminal de comando -->
          <div
            class="bg-gray-900/90 border border-cyan-500/30 rounded-lg p-6 mb-8 shadow-2xl shadow-cyan-500/10"
          >
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
              <div class="text-cyan-400 text-sm font-mono ml-4">
                NEXUS_TERMINAL v3.1.4
              </div>
            </div>

            <div class="font-mono text-cyan-300 text-sm space-y-1">
              <div class="flex items-center">
                <span class="text-purple-400">user@nexus:~$</span>
                <span class="ml-2 text-green-400"
                  >initialize_gaming_mode.exe</span
                >
              </div>
              <div class="text-yellow-400">► Loading game assets...</div>
              <div class="text-blue-400">► Connecting to servers...</div>
              <div class="text-green-400">✓ System ready for gaming</div>
            </div>
          </div>

          <!-- Título principal -->
          <div class="text-center mb-12">
            <h1 class="text-6xl md:text-8xl font-black mb-6">
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse"
              >
                GAME
              </span>
              <span class="block text-white font-mono tracking-widest">
                ON
              </span>
            </h1>

            <p
              class="text-xl text-cyan-300/80 mb-8 max-w-3xl mx-auto font-mono"
            >
              &gt; Entra al futuro del gaming con tecnología de próxima
              generación
            </p>

            <!-- Controles de juego -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="group relative">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"
                ></div>
                <div
                  class="relative bg-black border border-cyan-500 text-cyan-400 font-mono font-bold py-4 px-8 rounded-xl group-hover:bg-cyan-500/10 transition duration-300"
                >
                  [ START_GAME ]
                </div>
              </button>

              <button
                class="border border-cyan-500/50 text-cyan-400 font-mono py-4 px-8 rounded-xl hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300"
              >
                [ VIEW_LEADERBOARD ]
              </button>
            </div>
          </div>

          <!-- Estadísticas de gaming -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div
              class="bg-gray-900/80 border border-cyan-500/30 rounded-lg p-4 text-center"
            >
              <div
                class="text-2xl font-bold text-cyan-400 font-mono"
                ref="playersCount"
              >
                0
              </div>
              <div class="text-xs text-cyan-300/60 font-mono uppercase">
                Players
              </div>
            </div>
            <div
              class="bg-gray-900/80 border border-purple-500/30 rounded-lg p-4 text-center"
            >
              <div
                class="text-2xl font-bold text-purple-400 font-mono"
                ref="gamesCount"
              >
                0
              </div>
              <div class="text-xs text-purple-300/60 font-mono uppercase">
                Games
              </div>
            </div>
            <div
              class="bg-gray-900/80 border border-blue-500/30 rounded-lg p-4 text-center"
            >
              <div
                class="text-2xl font-bold text-blue-400 font-mono"
                ref="serversCount"
              >
                0
              </div>
              <div class="text-xs text-blue-300/60 font-mono uppercase">
                Servers
              </div>
            </div>
            <div
              class="bg-gray-900/80 border border-green-500/30 rounded-lg p-4 text-center"
            >
              <div class="text-2xl font-bold text-green-400 font-mono">
                24/7
              </div>
              <div class="text-xs text-green-300/60 font-mono uppercase">
                Uptime
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Menú móvil gaming -->
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 md:hidden">
        <div class="fixed inset-0 bg-black/90" @click="toggleMobileMenu"></div>
        <div
          class="relative bg-gray-900/95 border-r border-cyan-500/30 w-80 h-full"
        >
          <!-- Header del menú -->
          <div
            class="flex items-center justify-between p-6 border-b border-cyan-500/30"
          >
            <span class="text-cyan-400 font-mono text-lg font-bold uppercase"
              >NEXUS_MENU</span
            >
            <button
              @click="toggleMobileMenu"
              class="p-2 border border-cyan-500/30 rounded text-cyan-400"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
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
          </div>

          <!-- Navegación móvil -->
          <nav class="p-6 space-y-2 font-mono">
            <a
              v-for="(item, index) in navItems"
              :key="item.name"
              href="#"
              class="flex items-center justify-between px-4 py-3 text-cyan-400 border border-cyan-500/0 hover:border-cyan-500/30 rounded hover:bg-cyan-500/5 transition-all duration-200 uppercase tracking-wide text-sm"
              @click="toggleMobileMenu"
            >
              <span>{{ item.name }}</span>
              <span class="text-xs text-purple-400">[{{ index + 1 }}]</span>
            </a>
          </nav>

          <!-- Footer del menú móvil -->
          <div
            class="absolute bottom-0 left-0 right-0 p-6 border-t border-cyan-500/30"
          >
            <button
              class="w-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500 text-cyan-400 font-mono font-bold py-4 px-6 rounded hover:bg-cyan-500/30 transition duration-300 uppercase"
            >
              [ START_GAME ]
            </button>
          </div>
        </div>
      </div>

      <!-- Code Modal -->
      <CodeModal
        ref="codeModal"
        cardType="Header Card"
        cardVariant="Diseño gaming/neon con efectos"
        :codeContent="cardCode"
      />
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CodeModal from "../../CodeModal.vue";
import Header2Code from "../../../data/codes/headfoot/headers/Header2.js";

// Estado del menú móvil
const isMobileMenuOpen = ref(false);

// Referencias para contadores
const playersCount = ref(null);
const gamesCount = ref(null);
const serversCount = ref(null);

// Elementos de navegación
const navItems = [
  { name: "Home", href: "#" },
  { name: "Games", href: "#" },
  { name: "Leaderboard", href: "#" },
  { name: "Profile", href: "#" },
  { name: "Store", href: "#" },
];

// Modal setup
const codeModal = ref(null);
const cardCode = Header2Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Animación de contadores
const animateCounters = () => {
  const counters = [
    { ref: playersCount, target: 12847 },
    { ref: gamesCount, target: 543 },
    { ref: serversCount, target: 28 },
  ];

  counters.forEach(({ ref: counterRef, target }) => {
    if (!counterRef.value) return;

    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      if (counterRef.value) {
        counterRef.value.textContent = Math.floor(current).toLocaleString();
      }
    }, 30);
  });
};

// Lifecycle
onMounted(() => {
  setTimeout(animateCounters, 1000);
});
</script>

<style scoped>
/* Efectos de scanlines */
.scanlines {
  background: linear-gradient(transparent 50%, rgba(0, 255, 255, 0.03) 50%);
  background-size: 100% 4px;
  height: 100%;
  animation: scanlines 0.1s linear infinite;
}

@keyframes scanlines {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 4px;
  }
}

/* Patrón de cuadrícula */
.grid-pattern {
  background-image: linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  height: 100%;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* Líneas de energía */
.energy-line {
  position: absolute;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00ffff, transparent);
  animation: energy-flow 3s ease-in-out infinite;
}

.energy-line-1 {
  top: 20%;
  width: 200px;
  animation-delay: 0s;
}

.energy-line-2 {
  top: 50%;
  width: 150px;
  animation-delay: 1s;
}

.energy-line-3 {
  top: 80%;
  width: 300px;
  animation-delay: 2s;
}

@keyframes energy-flow {
  0%,
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    transform: translateX(100vw);
    opacity: 1;
  }
}

/* Glow effects */
.glow-cyan {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}
</style>