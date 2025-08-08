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

    <!-- Header con diseño de espacio/galaxia -->
    <header
      class="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden min-h-[400px]"
    >
      <!-- Estrellas animadas de fondo -->
      <div class="absolute inset-0">
        <div class="stars"></div>
        <div class="stars2"></div>
        <div class="stars3"></div>
      </div>

      <!-- Planetas decorativos -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- Planeta grande -->
        <div
          class="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-pulse"
        ></div>
        <!-- Planeta pequeño -->
        <div
          class="absolute bottom-10 left-20 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-30 animate-bounce"
          style="animation-duration: 3s"
        ></div>
        <!-- Anillo planetario -->
        <div
          class="absolute top-32 right-16 w-40 h-40 border-4 border-purple-300/20 rounded-full animate-spin"
          style="animation-duration: 20s"
        ></div>
      </div>

      <!-- Navegación espacial -->
      <nav class="relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-20">
            <!-- Logo espacial -->
            <div class="flex items-center group">
              <div class="relative">
                <!-- Efecto de órbita -->
                <div
                  class="absolute -inset-4 border border-purple-400/30 rounded-full animate-spin"
                  style="animation-duration: 8s"
                ></div>
                <div
                  class="w-12 h-12 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50 group-hover:shadow-purple-500/80 transition-all duration-300"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2L13.09 8.26L22 9L13.09 15.74L12 22L10.91 15.74L2 9L10.91 8.26L12 2Z"
                    />
                  </svg>
                </div>
              </div>
              <div class="ml-4">
                <span class="text-white font-bold text-xl tracking-wider"
                  >STELLAR</span
                >
                <div class="text-purple-300 text-xs">Space Explorer v3.0</div>
              </div>
            </div>

            <!-- Navegación estilo espacial -->
            <div class="hidden md:flex items-center space-x-6">
              <div
                v-for="item in navItems"
                :key="item.name"
                class="relative group"
              >
                <a
                  href="#"
                  class="px-4 py-2 text-white/80 hover:text-white transition-all duration-300 relative"
                  @mouseenter="createStarBurst($event)"
                >
                  {{ item.name }}
                  <!-- Efecto de órbita en hover -->
                  <div
                    class="absolute inset-0 border border-purple-400/0 group-hover:border-purple-400/50 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:opacity-0"
                  ></div>
                  <!-- Línea brillante inferior -->
                  <span
                    class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full"
                  ></span>
                </a>
              </div>
            </div>

            <!-- Controles de misión -->
            <div class="flex items-center space-x-4">
              <!-- Panel de control -->
              <div
                class="hidden md:flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2"
              >
                <div
                  class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                ></div>
                <span class="text-white text-sm font-mono">ONLINE</span>
              </div>

              <!-- Botón de lanzamiento -->
              <button class="hidden md:block relative group">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"
                ></div>
                <div
                  class="relative bg-gray-900/80 backdrop-blur-sm border border-purple-400/50 text-white font-bold py-3 px-6 rounded-full group-hover:bg-gray-900/60 transition duration-300"
                >
                  🚀 LAUNCH
                </div>
              </button>

              <!-- Menú móvil -->
              <button
                @click="toggleMobileMenu"
                class="md:hidden p-2 bg-white/5 backdrop-blur-sm border border-purple-400/30 rounded-full text-white hover:bg-white/10 transition-colors"
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

      <!-- Centro de comando espacial -->
      <div class="relative z-10 px-4 sm:px-6 lg:px-8 py-16">
        <div class="max-w-7xl mx-auto text-center">
          <!-- Título principal -->
          <div class="relative">
            <h1
              class="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-200 mb-6 tracking-tight"
            >
              EXPLORA
              <span
                class="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text"
              >
                EL COSMOS
              </span>
            </h1>

            <!-- Subtítulo -->
            <p
              class="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Embárcate en una odisea digital a través de las infinitas
              posibilidades del universo tecnológico
            </p>

            <!-- Panel de control de misión -->
            <div
              class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
            >
              <button class="group relative overflow-hidden">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"
                ></div>
                <div
                  class="relative bg-gray-900/80 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-2xl border border-purple-400/30 group-hover:bg-gray-900/60 transition duration-300"
                >
                  <div class="flex items-center space-x-2">
                    <span>🚀 INICIAR MISIÓN</span>
                    <div
                      class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
                    ></div>
                  </div>
                </div>
              </button>

              <button
                class="group bg-white/5 backdrop-blur-sm border border-purple-400/30 text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div class="flex items-center space-x-2">
                  <span>🌌 EXPLORAR GALAXIA</span>
                  <svg
                    class="w-5 h-5 group-hover:rotate-12 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </div>

            <!-- Estadísticas del viaje -->
            <div
              class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            >
              <div
                class="bg-white/5 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4"
              >
                <div
                  class="text-2xl font-bold text-purple-400"
                  ref="countPlanets"
                >
                  0
                </div>
                <div class="text-sm text-white/60">Planetas</div>
              </div>
              <div
                class="bg-white/5 backdrop-blur-sm border border-blue-400/20 rounded-xl p-4"
              >
                <div class="text-2xl font-bold text-blue-400" ref="countStars">
                  0
                </div>
                <div class="text-sm text-white/60">Estrellas</div>
              </div>
              <div
                class="bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4"
              >
                <div
                  class="text-2xl font-bold text-cyan-400"
                  ref="countGalaxies"
                >
                  0
                </div>
                <div class="text-sm text-white/60">Galaxias</div>
              </div>
              <div
                class="bg-white/5 backdrop-blur-sm border border-pink-400/20 rounded-xl p-4"
              >
                <div class="text-2xl font-bold text-pink-400" ref="countUsers">
                  0
                </div>
                <div class="text-sm text-white/60">Exploradores</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Menú móvil espacial -->
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 md:hidden">
        <div
          class="fixed inset-0 bg-black/80 backdrop-blur-sm"
          @click="toggleMobileMenu"
        ></div>
        <div
          class="relative bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-xl border-r border-purple-400/30 w-80 h-full"
        >
          <!-- Header del menú -->
          <div
            class="flex items-center justify-between p-6 border-b border-purple-400/30"
          >
            <div class="flex items-center space-x-3">
              <div
                class="w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full"
              ></div>
              <span class="text-white font-bold text-lg">STELLAR NAV</span>
            </div>
            <button
              @click="toggleMobileMenu"
              class="p-2 bg-white/5 border border-purple-400/30 rounded-full text-white"
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
          <nav class="p-6 space-y-4">
            <a
              v-for="item in navItems"
              :key="item.name"
              href="#"
              class="flex items-center space-x-3 px-4 py-3 text-white bg-white/5 border border-purple-400/20 rounded-xl hover:bg-white/10 hover:border-purple-400/40 transition-all duration-200"
              @click="toggleMobileMenu"
            >
              <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span class="font-medium">{{ item.name }}</span>
            </a>
          </nav>

          <!-- Footer del menú móvil -->
          <div
            class="absolute bottom-0 left-0 right-0 p-6 border-t border-purple-400/30"
          >
            <button
              class="w-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 border border-purple-400/30 text-white font-bold py-4 px-6 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/30 hover:via-blue-500/30 hover:to-cyan-500/30 transition duration-300"
            >
              🚀 INICIAR MISIÓN
            </button>
          </div>
        </div>
      </div>

      <!-- Botón para ver código -->
      <button
        @click="showCode"
        class="absolute top-4 right-4 z-50 p-3 bg-white/5 backdrop-blur-sm border border-purple-400/30 rounded-xl text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
        title="Ver código del componente"
        aria-label="Ver código del componente"
      >
        <svg
          class="w-5 h-5 pointer-events-none"
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
        cardType="Header Card"
        cardVariant="Diseño espacial/galaxia con animaciones"
        :codeContent="cardCode"
      />
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CodeModal from "../CodeModal.vue";
import Header6Code from "../../data/codes/headfoot/headers/Header6.js";

// Estado del menú móvil
const isMobileMenuOpen = ref(false);

// Referencias para contadores animados
const countPlanets = ref(null);
const countStars = ref(null);
const countGalaxies = ref(null);
const countUsers = ref(null);

// Elementos de navegación
const navItems = [
  { name: "Inicio", href: "#" },
  { name: "Misiones", href: "#" },
  { name: "Explorar", href: "#" },
  { name: "Flota", href: "#" },
  { name: "Base", href: "#" },
];

// Modal setup
const codeModal = ref(null);
const cardCode = Header6Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Efecto starburst en hover
const createStarBurst = (event) => {
  const rect = event.target.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  // Crear partículas brillantes (efecto simple)
  for (let i = 0; i < 5; i++) {
    const particle = document.createElement("div");
    particle.className =
      "fixed w-1 h-1 bg-purple-400 rounded-full pointer-events-none z-50";
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    particle.style.transform = `translate(-50%, -50%)`;

    document.body.appendChild(particle);

    // Animar partícula
    particle.animate(
      [
        { transform: "translate(-50%, -50%) scale(0)", opacity: 1 },
        {
          transform: `translate(${(Math.random() - 0.5) * 100}px, ${
            (Math.random() - 0.5) * 100
          }px) scale(1)`,
          opacity: 0,
        },
      ],
      {
        duration: 800,
        easing: "ease-out",
      }
    ).onfinish = () => particle.remove();
  }
};

// Animación de contadores
const animateCounters = () => {
  const counters = [
    { ref: countPlanets, target: 1247 },
    { ref: countStars, target: 89432 },
    { ref: countGalaxies, target: 156 },
    { ref: countUsers, target: 50823 },
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
    }, 20);
  });
};

// Lifecycle
onMounted(() => {
  setTimeout(animateCounters, 1000);
});
</script>

<style scoped>
/* Animación de estrellas */
.stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 70px 130px #fff, 180px 80px #fff, 250px 160px #fff,
    320px 50px #fff, 450px 90px #fff, 580px 140px #fff, 650px 200px #fff,
    720px 30px #fff, 890px 120px #fff, 950px 170px #fff, 1020px 60px #fff,
    1150px 100px #fff;
  animation: animStar 50s linear infinite;
}

.stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 120px 180px #fff, 280px 130px #fff, 350px 210px #fff,
    420px 100px #fff, 550px 190px #fff, 680px 240px #fff, 750px 80px #fff,
    820px 230px #fff, 990px 170px #fff, 1050px 220px #fff, 1120px 40px #fff,
    1250px 180px #fff;
  animation: animStar 100s linear infinite;
}

.stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 170px 230px #fff, 380px 180px #fff, 450px 260px #fff,
    520px 150px #fff, 650px 290px #fff, 780px 340px #fff, 850px 180px #fff,
    920px 330px #fff, 1090px 270px #fff, 1150px 320px #fff, 1220px 140px #fff,
    1350px 280px #fff;
  animation: animStar 150s linear infinite;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}

/* Responsive stars */
@media (max-width: 768px) {
  .stars,
  .stars2,
  .stars3 {
    box-shadow: 50px 100px #fff, 100px 60px #fff, 150px 120px #fff,
      200px 40px #fff, 250px 80px #fff, 300px 140px #fff;
  }
}
</style>