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
      <div
        class="mt-12 backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 shadow-2xl"
      >
        <h2 class="text-2xl font-bold text-white mb-6 text-center">
          Casos de Uso Recomendados
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
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
            <h3 class="font-semibold text-white">Sitios Corporativos</h3>
            <p class="text-sm text-gray-300 mt-1">
              Empresas y organizaciones profesionales
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">E-commerce</h3>
            <p class="text-sm text-gray-300 mt-1">
              Tiendas online y marketplaces
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
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
            <h3 class="font-semibold text-white">Portfolios Creativos</h3>
            <p class="text-sm text-gray-300 mt-1">
              Artistas, diseñadores y creativos
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
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
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Blogs y Medios</h3>
            <p class="text-sm text-gray-300 mt-1">
              Sitios de contenido y publicaciones
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
import ComponentInstructions from "../components/ComponentInstructions.vue";
import Footer1 from "../components/headfoot/footers/Footer1.vue";
import Footer2 from "../components/headfoot/footers/Footer2.vue";
import Footer3 from "../components/headfoot/footers/Footer3.vue";
import Footer4 from "../components/headfoot/footers/Footer4.vue";
import Footer5 from "../components/headfoot/footers/Footer5.vue";
import Footer6 from "../components/headfoot/footers/Footer6.vue";

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