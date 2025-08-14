<template>
  <div class="transparent-articles">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Desktop: Carousel View -->
      <div class="hidden lg:block">
        <CardCarousel
          :items="Array(6).fill({})"
          title="Artículos - Vista Carrusel"
          description="Descubre los diferentes estilos para presentar contenido editorial"
          :autoPlay="false"
        >
          <template #default="{ index }">
            <component :is="getArticleComponent(index)" />
          </template>
        </CardCarousel>
      </div>

      <!-- Tablet & Mobile: Grid View -->
      <div class="lg:hidden">
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-white mb-4">Todos los Diseños</h2>
          <p class="text-gray-300">
            Vista en cuadrícula de todos los componentes de artículo disponibles
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
                ArticleCard{{ index }}
              </h3>
            </div>

            <div class="transform scale-90 origin-top">
              <component :is="getArticleComponent(index - 1)" />
            </div>
          </div>
        </div>
      </div>

      <!-- Instructions -->
      <ComponentInstructions theme="green" />

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
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Artículos de Blog</h3>
            <p class="text-sm text-gray-300 mt-1">
              Posts, tutoriales y guías técnicas
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
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Noticias</h3>
            <p class="text-sm text-gray-300 mt-1">
              Artículos de actualidad e información
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Revistas</h3>
            <p class="text-sm text-gray-300 mt-1">
              Contenido editorial y publicaciones
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer coin-flip"
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 class="font-semibold text-white">Documentación</h3>
            <p class="text-sm text-gray-300 mt-1">
              Guías, manuales y recursos técnicos
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
import { useRoute } from "vue-router";
import CardCarousel from "../components/cardCarousel/CardCarousel.vue";
import ComponentInstructions from "../components/ComponentInstructions.vue";
import ArticleCard1 from "../components/cards/articles/ArticleCard1.vue";
import ArticleCard2 from "../components/cards/articles/ArticleCard2.vue";
import ArticleCard3 from "../components/cards/articles/ArticleCard3.vue";
import ArticleCard4 from "../components/cards/articles/ArticleCard4.vue";
import ArticleCard5 from "../components/cards/articles/ArticleCard5.vue";
import ArticleCard6 from "../components/cards/articles/ArticleCard6.vue";

const route = useRoute();

// Título dinámico basado en la ruta
const galleryTitle = computed(() => {
  const path = route.path;

  if (path.includes("/cards/productos")) {
    return "Product";
  } else if (path.includes("/cards/perfiles")) {
    return "Profile";
  } else if (path.includes("/cards/articulos")) {
    return "Article";
  } else if (path.includes("/headers")) {
    return "Header";
  } else if (path.includes("/footers")) {
    return "Footer";
  } else {
    return "Component";
  }
});

// Función para generar estilos de partículas sobre la imagen
const getImageParticleStyle = (index) => {
  const size = Math.random() * 6 + 4;
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const animationDelay = Math.random() * 5;

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    top: `${top}%`,
    animationDelay: `${animationDelay}s`,
  };
};

// Componentes de artículos
const articleComponents = [
  ArticleCard1,
  ArticleCard2,
  ArticleCard3,
  ArticleCard4,
  ArticleCard5,
  ArticleCard6,
];

// Función para obtener el componente correcto
const getArticleComponent = (index) => {
  return articleComponents[index] || ArticleCard1;
};
</script>

<style scoped>
/* Articles transparente */
.transparent-articles {
  background: transparent;
  min-height: auto;
}

/* Hero Image Section */
.hero-image-section {
  margin: 0 2rem 5rem 2rem;
}

.hero-image-container {
  position: relative;
  height: 400px;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transform: scale(1);
  transition: transform 0.3s ease;
}

.hero-image-container:hover {
  transform: scale(1.02);
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7) contrast(1.1);
  transition: filter 0.3s ease;
}

.hero-image-container:hover .hero-image {
  filter: brightness(0.8) contrast(1.2);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(6, 182, 212, 0.8) 0%,
    transparent 50%,
    rgba(139, 92, 246, 0.8) 100%
  );
  z-index: 2;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 3;
  max-width: 90%;
}

.hero-title {
  font-size: 3rem;
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.8);
  letter-spacing: -0.02em;
  line-height: 1.2;
}

.animate-shimmer {
  animation: shimmer 3s ease-in-out infinite alternate;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.8);
  font-weight: 500;
  letter-spacing: 0.01em;
}

@keyframes shimmer {
  0% {
    text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.8),
      0 0 20px rgba(6, 182, 212, 0.3);
  }
  100% {
    text-shadow: 2px 2px 12px rgba(0, 0, 0, 0.8),
      0 0 30px rgba(139, 92, 246, 0.4);
  }
}

/* Partículas sobre la imagen */
.image-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 4;
}

.image-particle {
  position: absolute;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.8),
    rgba(6, 182, 212, 0.6),
    rgba(139, 92, 246, 0.4)
  );
  border-radius: 50%;
  animation: float-gentle 4s ease-in-out infinite;
  opacity: 0.7;
}

@keyframes float-gentle {
  0%,
  100% {
    transform: translateY(0px) scale(1);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-10px) scale(1.1);
    opacity: 1;
  }
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
