<template>
  <div class="transparent-headers">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Sección de Headers -->
      <div class="space-y-16">
        <div
          v-for="(header, index) in headerData"
          :key="header.id"
          class="w-full"
        >
          <!-- Título centrado y elegante -->
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-white mb-2">
              {{ header.name }}
            </h3>
            <div
              class="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"
            ></div>
          </div>

          <!-- Componente header -->
          <div
            class="w-[95%] mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-2xl overflow-hidden"
          >
            <component :is="getHeaderComponent(index)" />
          </div>
        </div>
      </div>

      <!-- Instructions -->
      <ComponentInstructions theme="purple" />

      <!-- Casos de Uso Recomendados -->
      <RecommendedUseCases type="headers" />

      <!-- Tecnologías Utilizadas -->
      <TechnologiesUsed type="css" title="Tecnologías de Layout" />

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
import ComponentInstructions from "../components/ComponentInstructions.vue";
import RecommendedUseCases from "../components/RecommendedUseCases.vue";
import TechnologiesUsed from "../components/TechnologiesUsed.vue";
import Header1 from "../components/headfoot/headers/Header1.vue";
import Header2 from "../components/headfoot/headers/Header2.vue";
import Header3 from "../components/headfoot/headers/Header3.vue";
import Header4 from "../components/headfoot/headers/Header4.vue";
import Header5 from "../components/headfoot/headers/Header5.vue";
import Header6 from "../components/headfoot/headers/Header6.vue";

// Componentes de headers
const headerComponents = [Header1, Header2, Header3, Header4, Header5, Header6];

// Datos de headers
const headerData = [
  { id: 1, name: "Header Minimalista", component: "Header1" },
  { id: 2, name: "Header Gaming Cyberpunk", component: "Header2" },
  { id: 3, name: "Header Artístico", component: "Header3" },
  { id: 4, name: "Header Glassmorphism", component: "Header4" },
  { id: 5, name: "Header Terminal", component: "Header5" },
  { id: 6, name: "Header Espacial", component: "Header6" },
];

// Función para obtener el componente correcto
const getHeaderComponent = (index) => {
  return headerComponents[index] || Header1;
};
</script>

<style scoped>
.transparent-headers {
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