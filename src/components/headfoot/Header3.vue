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

    <!-- Header artístico con elementos creativos -->
    <header
      class="relative bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 overflow-hidden"
    >
      <!-- Formas abstractas de fondo -->
      <div class="absolute inset-0 pointer-events-none">
        <!-- Círculos grandes -->
        <div
          class="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-pink-300/20 to-orange-300/20 rounded-full blur-3xl animate-float"
        ></div>
        <div
          class="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-300/20 to-yellow-300/20 rounded-full blur-3xl animate-float-delayed"
        ></div>

        <!-- Formas geométricas -->
        <div
          class="absolute top-1/4 right-20 w-20 h-20 bg-gradient-to-br from-pink-400/30 to-red-400/30 transform rotate-45 animate-pulse"
        ></div>
        <div
          class="absolute bottom-1/4 left-20 w-16 h-32 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full animate-bounce"
          style="animation-duration: 4s"
        ></div>

        <!-- Líneas curvas decorativas -->
        <svg
          class="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1000 400"
        >
          <path
            d="M0,100 Q250,50 500,100 T1000,100"
            stroke="url(#gradient1)"
            stroke-width="3"
            fill="none"
          />
          <path
            d="M0,200 Q250,150 500,200 T1000,200"
            stroke="url(#gradient2)"
            stroke-width="2"
            fill="none"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#f97316" />
              <stop offset="100%" stop-color="#ec4899" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#eab308" />
              <stop offset="100%" stop-color="#f97316" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <!-- Navegación artística -->
      <nav class="relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-24">
            <!-- Logo creativo -->
            <div class="flex items-center group">
              <div class="relative">
                <!-- Anillo exterior giratorio -->
                <div
                  class="absolute -inset-4 border-2 border-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-spin-slow opacity-30"
                ></div>
                <!-- Logo principal -->
                <div
                  class="w-16 h-16 bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 transform rotate-3 group-hover:rotate-6"
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 3c-1.27 0-2.4.58-2.85 1.28L6.92 7.5H3v13h18V7.5h-3.92L14.85 4.28C14.4 3.58 13.27 3 12 3zm0 2c.73 0 1.4.41 1.7.72L15.08 8.5H8.92L10.3 5.72C10.6 5.41 11.27 5 12 5zm5 5.5v8H7v-8h10zm-5 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1z"
                    />
                  </svg>
                </div>
                <!-- Partículas decorativas -->
                <div
                  class="absolute -top-2 -right-2 w-3 h-3 bg-pink-400 rounded-full animate-ping"
                ></div>
                <div
                  class="absolute -bottom-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
                ></div>
              </div>
              <div class="ml-4">
                <span
                  class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-orange-600 to-yellow-600"
                  >ArtStudio</span
                >
                <div class="text-sm text-gray-600 font-medium italic">
                  Creative Agency
                </div>
              </div>
            </div>

            <!-- Navegación artística -->
            <div class="hidden md:flex items-center space-x-2">
              <div
                v-for="item in navItems"
                :key="item.name"
                class="relative group"
              >
                <a
                  href="#"
                  class="px-5 py-3 text-gray-700 hover:text-gray-900 font-semibold transition-all duration-300 relative overflow-hidden rounded-full"
                  @mouseenter="createBrushStroke($event)"
                >
                  <!-- Efecto de pincelada -->
                  <span
                    class="absolute inset-0 bg-gradient-to-r from-pink-200 via-orange-200 to-yellow-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"
                  ></span>
                  <span class="relative">{{ item.name }}</span>
                  <!-- Salpicadura de pintura -->
                  <div
                    class="absolute -bottom-1 left-1/2 w-2 h-2 bg-orange-400 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 transform -translate-x-1/2"
                  ></div>
                </a>
              </div>
            </div>

            <!-- Paleta de colores y menú -->
            <div class="flex items-center space-x-4">
              <!-- Paleta de colores -->
              <div
                class="hidden md:flex items-center space-x-2 bg-white/70 backdrop-blur-sm rounded-full p-2 shadow-lg"
              >
                <div
                  class="w-6 h-6 bg-pink-400 rounded-full cursor-pointer hover:scale-110 transition-transform"
                  title="Rosa"
                ></div>
                <div
                  class="w-6 h-6 bg-orange-400 rounded-full cursor-pointer hover:scale-110 transition-transform"
                  title="Naranja"
                ></div>
                <div
                  class="w-6 h-6 bg-yellow-400 rounded-full cursor-pointer hover:scale-110 transition-transform"
                  title="Amarillo"
                ></div>
                <div
                  class="w-6 h-6 bg-red-400 rounded-full cursor-pointer hover:scale-110 transition-transform"
                  title="Rojo"
                ></div>
              </div>

              <!-- Botón creativo -->
              <button
                class="hidden md:flex items-center space-x-2 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
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
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
                <span>Crear</span>
              </button>

              <!-- Menú móvil -->
              <button
                @click="toggleMobileMenu"
                class="md:hidden p-3 bg-white/70 backdrop-blur-sm rounded-2xl text-gray-700 hover:text-gray-900 transition-colors shadow-lg"
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

      <!-- Galería creativa -->
      <div class="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <!-- Título artístico -->
            <h1 class="text-6xl md:text-8xl font-black mb-8 leading-tight">
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-orange-600 to-yellow-600"
              >
                CREAR
              </span>
              <span class="block text-gray-800 transform -skew-y-1">
                ES VIVIR
              </span>
            </h1>

            <!-- Subtítulo -->
            <p
              class="text-xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
            >
              Transformamos ideas en obras de arte digital que conectan,
              inspiran y trascienden
            </p>

            <!-- Botones creativos -->
            <div
              class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <button class="group relative overflow-hidden">
                <div
                  class="absolute -inset-1 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"
                ></div>
                <div
                  class="relative bg-white px-8 py-4 rounded-2xl text-gray-900 font-bold hover:bg-gray-50 transition duration-300 flex items-center space-x-2"
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
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <span>Ver Portfolio</span>
                </div>
              </button>

              <button
                class="px-8 py-4 text-gray-700 hover:text-gray-900 font-bold transition-colors flex items-center space-x-2 border-2 border-gray-300 hover:border-orange-400 rounded-2xl"
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <span>Hablemos</span>
              </button>
            </div>

            <!-- Exposición de trabajos -->
            <div
              class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              <div class="group cursor-pointer">
                <div
                  class="aspect-square bg-gradient-to-br from-pink-300 to-pink-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:-rotate-3"
                >
                  <div
                    class="w-full h-full bg-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm"
                  >
                    <div class="text-center">
                      <div class="text-3xl font-bold text-white mb-2">150+</div>
                      <div class="text-sm text-white/80">Proyectos</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="group cursor-pointer">
                <div
                  class="aspect-square bg-gradient-to-br from-orange-300 to-orange-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:rotate-3"
                >
                  <div
                    class="w-full h-full bg-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm"
                  >
                    <div class="text-center">
                      <div class="text-3xl font-bold text-white mb-2">5+</div>
                      <div class="text-sm text-white/80">Años</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="group cursor-pointer">
                <div
                  class="aspect-square bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:-rotate-2"
                >
                  <div
                    class="w-full h-full bg-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm"
                  >
                    <div class="text-center">
                      <div class="text-3xl font-bold text-white mb-2">99%</div>
                      <div class="text-sm text-white/80">Satisfacción</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="group cursor-pointer">
                <div
                  class="aspect-square bg-gradient-to-br from-red-300 to-red-500 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:rotate-2"
                >
                  <div
                    class="w-full h-full bg-white/30 rounded-xl flex items-center justify-center backdrop-blur-sm"
                  >
                    <div class="text-center">
                      <div class="text-3xl font-bold text-white mb-2">∞</div>
                      <div class="text-sm text-white/80">Creatividad</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Menú móvil artístico -->
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 md:hidden">
        <div
          class="fixed inset-0 bg-black/40 backdrop-blur-sm"
          @click="toggleMobileMenu"
        ></div>
        <div
          class="relative bg-gradient-to-br from-pink-50/95 via-orange-50/95 to-yellow-50/95 backdrop-blur-xl w-80 h-full shadow-2xl"
        >
          <!-- Header del menú -->
          <div
            class="flex items-center justify-between p-6 border-b border-orange-200"
          >
            <div class="flex items-center space-x-3">
              <div
                class="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl transform rotate-12"
              ></div>
              <span class="font-black text-gray-900 text-lg">ArtStudio</span>
            </div>
            <button
              @click="toggleMobileMenu"
              class="p-2 text-gray-700 bg-white/50 rounded-xl"
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
          <nav class="p-6 space-y-3">
            <a
              v-for="(item, index) in navItems"
              :key="item.name"
              href="#"
              class="flex items-center space-x-3 px-4 py-3 text-gray-700 bg-white/50 rounded-2xl hover:bg-white/70 transition-colors font-semibold"
              @click="toggleMobileMenu"
            >
              <div
                class="w-3 h-3 rounded-full"
                :class="{
                  'bg-pink-400': index === 0,
                  'bg-orange-400': index === 1,
                  'bg-yellow-400': index === 2,
                  'bg-red-400': index === 3,
                }"
              ></div>
              <span>{{ item.name }}</span>
            </a>
          </nav>

          <!-- Footer del menú móvil -->
          <div
            class="absolute bottom-0 left-0 right-0 p-6 border-t border-orange-200"
          >
            <button
              class="w-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 text-white font-bold py-4 px-6 rounded-2xl hover:scale-105 transition-transform shadow-lg"
            >
              Crear Proyecto
            </button>
          </div>
        </div>
      </div>

      <!-- Botón para ver código -->
      <button
        @click="showCode"
        class="absolute top-4 right-4 z-50 p-3 bg-white/70 backdrop-blur-sm rounded-2xl text-gray-700 hover:text-gray-900 transition-all duration-200 cursor-pointer shadow-lg"
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
        cardVariant="Diseño artístico/creativo colorido"
        :codeContent="cardCode"
      />
    </header>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../CodeModal.vue";
import Header3Code from "../../data/codes/headfoot/headers/Header3.js";

// Estado del menú móvil
const isMobileMenuOpen = ref(false);

// Elementos de navegación
const navItems = [
  { name: "Inicio", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Servicios", href: "#" },
  { name: "Contacto", href: "#" },
];

// Modal setup
const codeModal = ref(null);
const cardCode = Header3Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Efecto de pincelada en hover
const createBrushStroke = (event) => {
  const rect = event.target.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  // Crear salpicaduras de pintura
  for (let i = 0; i < 3; i++) {
    const splash = document.createElement("div");
    splash.className = "fixed w-2 h-2 rounded-full pointer-events-none z-50";
    splash.style.left = x + "px";
    splash.style.top = y + "px";
    splash.style.transform = "translate(-50%, -50%)";

    const colors = ["bg-pink-400", "bg-orange-400", "bg-yellow-400"];
    splash.className += " " + colors[Math.floor(Math.random() * colors.length)];

    document.body.appendChild(splash);

    // Animar salpicadura
    splash.animate(
      [
        { transform: "translate(-50%, -50%) scale(0)", opacity: 1 },
        {
          transform: `translate(${(Math.random() - 0.5) * 80}px, ${
            (Math.random() - 0.5) * 80
          }px) scale(1)`,
          opacity: 0,
        },
      ],
      {
        duration: 600,
        easing: "ease-out",
      }
    ).onfinish = () => splash.remove();
  }
};
</script>

<style scoped>
/* Animaciones personalizadas */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(3deg);
  }
  66% {
    transform: translateY(10px) rotate(-2deg);
  }
}

@keyframes float-delayed {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(15px) rotate(-3deg);
  }
  66% {
    transform: translateY(-10px) rotate(2deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin 8s linear infinite;
}

/* Blur personalizado */
.blur-3xl {
  filter: blur(64px);
}
</style>