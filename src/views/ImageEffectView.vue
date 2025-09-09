<template>
  <div class="transparent-image-effects">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Sección de Image Effects -->
      <div class="space-y-16">
        <div
          v-for="(effect, index) in imageEffectData"
          :key="effect.id"
          class="w-full"
        >
          <!-- Título centrado y elegante -->
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-white mb-2">
              {{ effect.name }}
            </h3>
            <div
              class="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
            ></div>
          </div>

          <!-- Componente image effect centrado -->
          <div class="flex justify-center items-center min-h-[400px] p-8">
            <component :is="getImageEffectComponent(index)" />
          </div>
        </div>
      </div>

      <!-- Instructions -->
      <ComponentInstructions theme="purple" />

      <!-- Casos de Uso Recomendados -->
      <div
        class="mt-12 backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 shadow-2xl"
      >
        <h2 class="text-2xl font-bold text-white mb-6 text-center">
          Casos de Uso Recomendados
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Portfolios Creativos</h3>
            <p class="text-sm text-gray-300 mt-1">
              Galerías de arte y diseño digital
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Landing Pages</h3>
            <p class="text-sm text-gray-300 mt-1">
              Páginas de aterrizaje impactantes
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
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
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Blogs y Revistas</h3>
            <p class="text-sm text-gray-300 mt-1">
              Contenido editorial moderno
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">E-commerce</h3>
            <p class="text-sm text-gray-300 mt-1">
              Tarjetas de producto elegantes
            </p>
          </div>
        </div>
      </div>

      <!-- Tecnologías Utilizadas -->
      <div
        class="mt-12 backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 shadow-2xl"
      >
        <h2 class="text-2xl font-bold text-white mb-6 text-center">
          Tecnologías y Efectos
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            class="flex flex-col items-center p-4 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 hover:scale-105 transition-transform duration-300"
          >
            <span class="text-2xl mb-2">🎨</span>
            <span class="text-white font-medium text-sm">CSS Transforms</span>
          </div>

          <div
            class="flex flex-col items-center p-4 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 hover:scale-105 transition-transform duration-300"
          >
            <span class="text-2xl mb-2">⚡</span>
            <span class="text-white font-medium text-sm">Transitions</span>
          </div>

          <div
            class="flex flex-col items-center p-4 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 hover:scale-105 transition-transform duration-300"
          >
            <span class="text-2xl mb-2">🌈</span>
            <span class="text-white font-medium text-sm">Gradients</span>
          </div>

          <div
            class="flex flex-col items-center p-4 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 hover:scale-105 transition-transform duration-300"
          >
            <span class="text-2xl mb-2">✨</span>
            <span class="text-white font-medium text-sm">Hover Effects</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ComponentInstructions from "../components/ComponentInstructions.vue";

// Importación de componentes de image effects
import ImageEffect1 from "../components/effects/imageEffect/imageEffect1.vue";

// Componentes de image effects (por ahora solo uno, se pueden agregar más)
const imageEffectComponents = [ImageEffect1];

// Datos de image effects
const imageEffectData = [
  { id: 1, name: "Efecto Hover Moderno", component: "ImageEffect1" },
  // Se pueden agregar más efectos aquí en el futuro:
  // { id: 2, name: "Efecto Parallax", component: "ImageEffect2" },
  // { id: 3, name: "Efecto Glassmorphism", component: "ImageEffect3" },
];

// Función para obtener el componente correcto
const getImageEffectComponent = (index) => {
  return imageEffectComponents[index] || ImageEffect1;
};
</script>

<style scoped>
.transparent-image-effects {
  background: transparent;
  min-height: 100vh;
  position: relative;
}

/* Animación de rotación lateral como moneda */
.coin-flip {
  transform-style: preserve-3d;
  transition: transform 0.5s linear;
}

.coin-flip:hover {
  transform: rotateY(360deg);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-image-section {
    margin: 0 1rem 3rem 1rem;
  }
}
</style>