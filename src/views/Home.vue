<template>
  <div class="relative transparent-home">
    <!-- Hero Section -->
    <section class="relative py-20 sm:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-16">
          <h1
            class="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-tight"
          >
            <span class="block text-gradient-primary animate-gradient">
              ¿Qué encontrarás
            </span>
            <span
              class="block text-gradient-primary animate-gradient delay-300"
            >
              aquí?
            </span>
          </h1>

          <!-- Descripción con glassmorphism -->
          <div
            class="bg-glass-light rounded-system-2xl p-8 mb-2 shadow-spectral-lg max-w-4xl mx-auto"
          >
            <p class="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Explora nuestra colección de
              <span class="text-cyan-400 font-semibold"
                >30 componentes únicos</span
              >
              organizados por categorías, cada uno con su
              <span class="text-blue-400 font-semibold"
                >código fuente visible</span
              >
              y <span class="text-purple-400 font-semibold">copiable</span>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section con efecto parallax -->
    <section class="relative py-5 max-w-7xl m-auto">
      <!-- Hero Image con efectos espectaculares -->
      <div class="hero-image-section">
        <div class="hero-image-container">
          <img
            src="/img/carousel.webp"
            alt="Component Gallery Preview"
            class="hero-image"
          />
          <div class="hero-overlay"></div>
          <div class="hero-content">
            <h2 class="hero-title animate-shimmer">Componentes Modernos</h2>
            <p class="hero-subtitle">
              Diseños espectaculares listos para implementar
            </p>
          </div>
          <!-- Efectos de partículas flotantes sobre la imagen -->
          <div class="image-particles">
            <div
              v-for="i in 15"
              :key="i"
              class="image-particle"
              :style="getImageParticleStyle(i)"
            ></div>
          </div>
        </div>
      </div>

      <!-- Cards de características -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Característica de Cards -->
          <div
            class="feature-card group cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500"
            @click="navigateToCards"
          >
            <div
              class="feature-icon bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl group-hover:shadow-cyan-500/50 transition-all duration-500"
            >
              <svg
                class="w-8 h-8 text-white group-hover:rotate-6 transition-all duration-500"
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
            <h3
              class="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors"
            >
              18 Cards Únicas
            </h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Componentes de tarjetas para productos, perfiles y artículos con
              diseños espectaculares y efectos modernos.
            </p>
            <div class="space-y-2">
              <div
                class="flex items-center justify-between text-sm cursor-pointer hover:text-cyan-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 rounded-lg p-3 border border-transparent hover:border-cyan-500/40"
                @click.stop="navigateToProductCards"
              >
                <span class="text-cyan-400 font-medium">Productos</span>
                <span class="text-gray-400 group-hover:text-gray-300"
                  >6 componentes</span
                >
              </div>
              <div
                class="flex items-center justify-between text-sm cursor-pointer hover:text-purple-300 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 rounded-lg p-3 border border-transparent hover:border-purple-500/40"
                @click.stop="navigateToProfileCards"
              >
                <span class="text-purple-400 font-medium">Perfiles</span>
                <span class="text-gray-400 group-hover:text-gray-300"
                  >6 componentes</span
                >
              </div>
              <div
                class="flex items-center justify-between text-sm cursor-pointer hover:text-green-300 hover:bg-green-500/10 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 rounded-lg p-3 border border-transparent hover:border-green-500/40"
                @click.stop="navigateToArticleCards"
              >
                <span class="text-green-400 font-medium">Artículos</span>
                <span class="text-gray-400 group-hover:text-gray-300"
                  >6 componentes</span
                >
              </div>
            </div>
          </div>

          <!-- Headers & Footers -->
          <div
            class="feature-card group cursor-pointer hover:shadow-2xl hover:shadow-purple-500/20 hover:border-purple-500/40 transition-all duration-500"
            @click="navigateToHeaders"
          >
            <div
              class="feature-icon bg-gradient-to-r from-purple-500 to-pink-600 group-hover:from-purple-400 group-hover:to-pink-500 group-hover:scale-110 group-hover:-rotate-12 group-hover:shadow-xl group-hover:shadow-purple-500/50 transition-all duration-500"
            >
              <svg
                class="w-8 h-8 text-white group-hover:-rotate-12 transition-all duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                ></path>
              </svg>
            </div>
            <h3
              class="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors"
            >
              12 Headers & Footers
            </h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Componentes de navegación y pie de página con temas únicos:
              minimalista, gaming, glassmorphism y más.
            </p>
            <div class="space-y-2">
              <div
                class="flex items-center justify-between text-sm cursor-pointer hover:text-orange-300 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 rounded-lg p-3 border border-transparent hover:border-orange-500/40"
                @click.stop="navigateToHeaders"
              >
                <span class="text-orange-400 font-medium">Headers</span>
                <span class="text-gray-400 group-hover:text-gray-300"
                  >6 componentes</span
                >
              </div>
              <div
                class="flex items-center justify-between text-sm cursor-pointer hover:text-indigo-300 hover:bg-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 rounded-lg p-3 border border-transparent hover:border-indigo-500/40"
                @click.stop="navigateToFooters"
              >
                <span class="text-indigo-400 font-medium">Footers</span>
                <span class="text-gray-400 group-hover:text-gray-300"
                  >6 componentes</span
                >
              </div>
            </div>
          </div>

          <!-- Código Visible -->
          <div
            class="feature-card group hover:shadow-2xl hover:shadow-green-500/20 hover:border-green-500/40 transition-all duration-500"
          >
            <div
              class="feature-icon bg-gradient-to-r from-green-500 to-emerald-600 group-hover:from-green-400 group-hover:to-emerald-500 group-hover:scale-110 group-hover:rotate-18 group-hover:shadow-xl group-hover:shadow-green-500/50 transition-all duration-500"
            >
              <svg
                class="w-8 h-8 text-white group-hover:rotate-18 transition-all duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
            </div>
            <h3
              class="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors"
            >
              Código Visible
            </h3>
            <p class="text-gray-300 mb-6 leading-relaxed">
              Cada componente incluye un botón para ver y copiar su código
              fuente completo. Listo para usar en tus proyectos.
            </p>
            <div class="flex items-center text-green-400 font-medium">
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Listo para usar
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Instructions Section -->
    <section class="relative py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-4xl sm:text-5xl font-bold mb-8">
            <span
              class="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent"
            >
              Cómo usar los componentes
            </span>
          </h2>
          <div
            class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <p class="text-lg text-gray-200">
              Sigue estos simples pasos para integrar cualquier componente en tu
              proyecto
            </p>
          </div>
        </div>

        <div class="space-y-8">
          <!-- Step 1 -->
          <div
            class="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6"
          >
            <div
              class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
            >
              1
            </div>
            <div
              class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 flex-1"
            >
              <h3 class="text-xl font-semibold text-white mb-2">
                Explora los componentes
              </h3>
              <p class="text-gray-300">
                Navega por las diferentes categorías (Productos, Perfiles,
                Artículos) y encuentra el diseño que más te guste.
              </p>
            </div>
          </div>

          <!-- Step 2 -->
          <div
            class="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6"
          >
            <div
              class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
            >
              2
            </div>
            <div
              class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 flex-1"
            >
              <h3 class="text-xl font-semibold text-white mb-2">
                Haz clic en el botón de código
              </h3>
              <p class="text-gray-300">
                Cada componente tiene un botón en la esquina superior derecha
                que muestra el código fuente completo.
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div
            class="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6"
          >
            <div
              class="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg"
            >
              3
            </div>
            <div
              class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 flex-1"
            >
              <h3 class="text-xl font-semibold text-white mb-2">
                Copia e integra
              </h3>
              <p class="text-gray-300">
                Copia el código y pégalo en tu proyecto. Todos los componentes
                están listos para usar con Vue 3 y Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="relative py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold mb-8">
            <span
              class="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent"
            >
              Stack Tecnológico
            </span>
          </h2>
          <div
            class="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto"
          >
            <p class="text-lg text-gray-200">
              Construido con las últimas tecnologías web para máximo rendimiento
              y experiencia de desarrollador.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <!-- Vue 3 -->
          <div class="tech-card group">
            <div
              class="tech-icon group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
            >
              <svg
                class="w-12 h-12 text-green-500 group-hover:text-green-400 transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2 3h3.5L12 15 18.5 3H22L12 21 2 3z" />
              </svg>
            </div>
            <h3
              class="font-bold text-white text-lg mb-2 group-hover:text-green-400 transition-colors"
            >
              Vue 3
            </h3>
            <p class="text-gray-400 text-sm">Framework progresivo</p>
          </div>

          <!-- Vite -->
          <div class="tech-card group">
            <div
              class="tech-icon group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300"
            >
              <svg
                class="w-12 h-12 text-purple-500 group-hover:text-purple-400 transition-colors duration-300"
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
            <h3
              class="font-bold text-white text-lg mb-2 group-hover:text-purple-400 transition-colors"
            >
              Vite
            </h3>
            <p class="text-gray-400 text-sm">Build tool ultrarrápido</p>
          </div>

          <!-- Tailwind -->
          <div class="tech-card group">
            <div
              class="tech-icon group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
            >
              <svg
                class="w-12 h-12 text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.5 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.5 12 7 12z"
                />
              </svg>
            </div>
            <h3
              class="font-bold text-white text-lg mb-2 group-hover:text-blue-400 transition-colors"
            >
              Tailwind CSS
            </h3>
            <p class="text-gray-400 text-sm">CSS utility-first</p>
          </div>

          <!-- Vue Router -->
          <div class="tech-card group">
            <div
              class="tech-icon group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300"
            >
              <svg
                class="w-12 h-12 text-indigo-500 group-hover:text-indigo-400 transition-colors duration-300"
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
            <h3
              class="font-bold text-white text-lg mb-2 group-hover:text-indigo-400 transition-colors"
            >
              Vue Router
            </h3>
            <p class="text-gray-400 text-sm">Enrutamiento SPA</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

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

// Navegación a páginas usando Vue Router
const navigateToCards = () => {
  router.push("/cards/productos");
};

const navigateToProductCards = () => {
  router.push("/cards/productos");
};

const navigateToProfileCards = () => {
  router.push("/cards/perfiles");
};

const navigateToArticleCards = () => {
  router.push("/cards/articulos");
};

const navigateToHeaders = () => {
  router.push("/headers");
};

const navigateToFooters = () => {
  router.push("/footers");
};
</script>

<style scoped>
/* Feature cards */
.feature-card {
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;
  transform: scale(1);
}

.feature-card:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.08) translateY(-8px);
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.7);
}

.feature-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
}

/* Tech cards */
.tech-card {
  text-align: center;
  backdrop-filter: blur(16px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.tech-card:hover {
  background: rgba(255, 255, 255, 0.1);
}

.tech-icon {
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
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

/* Home transparente */
.transparent-home {
  background: transparent;
  min-height: auto;
}
</style>