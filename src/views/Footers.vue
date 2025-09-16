<template>
  <div class="transparent-footers">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Sección de Footers -->
      <div class="space-y-16">
        <div
          v-for="(footer, index) in footerData"
          :key="footer.id"
          class="w-full"
        >
          <!-- Título centrado y elegante -->
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-white mb-2">
              {{ footer.name }}
            </h3>
            <div
              class="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"
            ></div>
          </div>

          <!-- Componente footer -->
          <div
            class="w-[95%] mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-2xl overflow-hidden"
          >
            <component :is="getFooterComponent(index)" />
          </div>
        </div>
      </div>

      <!-- Instructions -->
      <ComponentInstructions theme="blue" />

      <!-- Casos de Uso Recomendados -->
      <RecommendedUseCases type="footers" />

      <!-- Tecnologías Utilizadas -->
      <TechnologiesUsed type="css" title="Tecnologías de Footer" />

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
import { useSEO, seoConfigs } from "../data/useSEO.js";
import RecommendedUseCases from "../components/RecommendedUseCases.vue";
import TechnologiesUsed from "../components/TechnologiesUsed.vue";
import Footer1 from "../components/headfoot/footers/Footer1.vue";
import Footer2 from "../components/headfoot/footers/Footer2.vue";
import Footer3 from "../components/headfoot/footers/Footer3.vue";
import Footer4 from "../components/headfoot/footers/Footer4.vue";
import Footer5 from "../components/headfoot/footers/Footer5.vue";
import Footer6 from "../components/headfoot/footers/Footer6.vue";

// SEO para la página de footers
useSEO(seoConfigs.footers);

// Componentes de footers
const footerComponents = [Footer1, Footer2, Footer3, Footer4, Footer5, Footer6];

// Datos de footers
const footerData = [
  { id: 1, name: "Footer Corporativo", component: "Footer1" },
  { id: 2, name: "Footer Minimalista", component: "Footer2" },
  { id: 3, name: "Footer Social", component: "Footer3" },
  { id: 4, name: "Footer Newsletter", component: "Footer4" },
  { id: 5, name: "Footer Completo", component: "Footer5" },
  { id: 6, name: "Footer Creativo", component: "Footer6" },
];

// Función para obtener el componente correcto
const getFooterComponent = (index) => {
  return footerComponents[index] || Footer1;
};
</script>

<style scoped>
.transparent-footers {
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