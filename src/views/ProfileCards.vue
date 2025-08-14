<template>
  <div class="transparent-profiles">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Desktop: Carousel View -->
      <div class="hidden lg:block">
        <CardCarousel
          :items="Array(6).fill({})"
          title="Perfiles - Vista Carrusel"
          description="Explora los diferentes estilos de tarjetas de perfil profesional"
          :autoPlay="false"
        >
          <template #default="{ index }">
            <component :is="getProfileComponent(index)" />
          </template>
        </CardCarousel>
      </div>

      <!-- Tablet & Mobile: Grid View -->
      <div class="lg:hidden">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">Todos los Diseños</h2>
          <p class="text-gray-300">
            Vista en cuadrícula de todos los componentes de perfil disponibles
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="index in 6"
            :key="index"
            class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl shadow-lg p-6"
          >
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-white mb-2">
                ProfileCard{{ index }}
              </h3>
            </div>

            <div class="transform scale-90 origin-top">
              <component :is="getProfileComponent(index - 1)" />
            </div>
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Equipos</h3>
            <p class="text-sm text-gray-300 mt-1">
              Páginas de equipo y colaboradores
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 8v2H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-2V8"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Portfolios</h3>
            <p class="text-sm text-gray-300 mt-1">
              Perfiles profesionales y creativos
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
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Redes Sociales</h3>
            <p class="text-sm text-gray-300 mt-1">
              Tarjetas de usuario y conexiones
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
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
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Directorios</h3>
            <p class="text-sm text-gray-300 mt-1">
              Listados profesionales y contactos
            </p>
          </div>
        </div>
      </div>

      <!-- Back to Categories -->
      <div class="mt-12 text-center">
        <router-link
          to="/"
          class="inline-flex items-center px-6 py-3 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl text-base font-medium text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <svg
            class="mr-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver al Inicio
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import CardCarousel from "../components/cardCarousel/CardCarousel.vue";
import ComponentInstructions from "../components/ComponentInstructions.vue";
import ProfileCard1 from "../components/cards/profiles/ProfileCard1.vue";
import ProfileCard2 from "../components/cards/profiles/ProfileCard2.vue";
import ProfileCard3 from "../components/cards/profiles/ProfileCard3.vue";
import ProfileCard4 from "../components/cards/profiles/ProfileCard4.vue";
import ProfileCard5 from "../components/cards/profiles/ProfileCard5.vue";
import ProfileCard6 from "../components/cards/profiles/ProfileCard6.vue";

// Componentes de perfiles
const profileComponents = [
  ProfileCard1,
  ProfileCard2,
  ProfileCard3,
  ProfileCard4,
  ProfileCard5,
  ProfileCard6,
];

// Función para obtener el componente correcto
const getProfileComponent = (index) => {
  return profileComponents[index] || ProfileCard1;
};
</script>

<style scoped>
.transparent-profiles {
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