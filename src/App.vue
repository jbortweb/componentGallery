<template>
  <div id="app" class="min-h-screen flex flex-col relative overflow-hidden">
    <!-- Fondo global espectacular -->
    <div class="global-background">
      <!-- Gradiente de fondo -->
      <div class="global-gradient"></div>

      <!-- Partículas globales -->
      <div class="global-particles">
        <div
          v-for="i in 60"
          :key="i"
          class="global-particle"
          :style="getGlobalParticleStyle(i)"
        ></div>
      </div>

      <!-- Efectos de luz globales -->
      <div class="global-lights">
        <div class="light-orb light-orb-1"></div>
        <div class="light-orb light-orb-2"></div>
        <div class="light-orb light-orb-3"></div>
        <div class="light-orb light-orb-4"></div>
      </div>

      <!-- Grid de fondo -->
      <div class="global-grid"></div>
    </div>

    <!-- Header transparente -->
    <AppHeader />

    <!-- Main Content -->
    <main class="flex-1 relative pt-20" style="z-index: var(--z-content)">
      <router-view />
    </main>

    <!-- Footer transparente -->
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import { usePerformance } from "./data/usePerformance.js";

// Aplicar optimizaciones de rendimiento globalmente
usePerformance();

// Función para generar estilos de partículas globales
const getGlobalParticleStyle = (index) => {
  const size = Math.random() * 6 + 2;
  const left = Math.random() * 100;
  const animationDelay = Math.random() * 25;
  const animationDuration = Math.random() * 15 + 15;

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${animationDelay}s`,
    animationDuration: `${animationDuration}s`,
  };
};
</script>

<style scoped>
/* Fondo global espectacular */
.global-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.global-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    #0f172a 0%,
    #1e293b 25%,
    #334155 50%,
    #1e40af 75%,
    #3730a3 100%
  );
}

/* Partículas globales */
.global-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.global-particle {
  position: absolute;
  background: var(--gradient-particle);
  border-radius: 50%;
  opacity: 0.7;
  animation: float-up infinite linear;
}

@keyframes float-up {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.7;
  }
  90% {
    opacity: 0.7;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

/* Efectos de luz */
.global-lights {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.light-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  animation: pulse-glow 8s ease-in-out infinite;
}

.light-orb-1 {
  top: 10%;
  right: 10%;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(var(--color-particle-cyan), 0.4),
    transparent
  );
  animation-delay: 0s;
}

.light-orb-2 {
  bottom: 20%;
  left: 5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent);
  animation-delay: 2s;
}

.light-orb-3 {
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent);
  animation-delay: 4s;
  transform: translate(-50%, -50%);
}

.light-orb-4 {
  top: 30%;
  left: 20%;
  width: 250px;
  height: 250px;
  background: radial-gradient(circle, rgba(34, 197, 94, 0.3), transparent);
  animation-delay: 6s;
}

@keyframes pulse-glow {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

/* Grid de fondo */
.global-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.05) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.3;
}

/* Contenido sobre el fondo */
#app {
  position: relative;
}
</style>