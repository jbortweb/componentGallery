<template>
  <div
    class="relative w-full max-w-xl mx-auto h-96 perspective-tilt"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Botón de código -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 z-50 w-10 h-10 bg-gray-800/90 hover:bg-gray-700 rounded-lg flex items-center justify-center opacity-90 hover:opacity-100 transition-all duration-200 backdrop-blur-sm border-0 cursor-pointer"
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

    <!-- Tarjeta con inclinación 3D -->
    <div
      class="tilt-card relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 ease-out"
      :style="cardStyle"
    >
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&q=80"
        alt="Planeta Tierra visto desde el espacio"
        class="w-full h-full object-cover"
      />

      <!-- Degradado inferior para mejorar la legibilidad -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
      ></div>

      <!-- Brillo que sigue al cursor -->
      <div class="tilt-glare absolute inset-0" :style="glareStyle"></div>

      <!-- Contenido de la tarjeta -->
      <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
        <span
          class="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-3"
          >Explora</span
        >
        <h3 class="text-2xl font-bold">Mirada al Cosmos</h3>
        <p class="text-gray-200 text-sm mt-1">
          Mueve el cursor para inclinar la tarjeta en 3D.
        </p>
      </div>
    </div>

    <!-- Modal de código -->
    <CodeModal
      ref="codeModal"
      cardType="Image Effect"
      cardVariant="Efecto Tilt 3D con brillo"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import CodeModal from "../../CodeModal.vue";
import imageEffect6Code from "../../../data/codes/effects/imageEffect/imageEffect6.js";

// Configuración del modal
const codeModal = ref(null);
const cardCode = imageEffect6Code;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};

// Estado de inclinación 3D (en grados)
const rotation = reactive({ x: 0, y: 0 });

// Posición e intensidad del brillo
const glare = reactive({ x: 50, y: 50, opacity: 0 });

// Estilo de la tarjeta con perspectiva y rotación
const cardStyle = computed(() => ({
  transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1.02, 1.02, 1.02)`,
}));

// Estilo del brillo que sigue al cursor
const glareStyle = computed(() => ({
  background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.08) 40%, transparent 70%)`,
  opacity: glare.opacity,
}));

const handleMouseMove = (event) => {
  const rect = event.currentTarget.getBoundingClientRect();

  // Posición relativa del cursor (0-1)
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;

  // Rotación proporcional a la posición del cursor (-12 a 12 grados)
  rotation.y = (x - 0.5) * 24;
  rotation.x = (0.5 - y) * 24;

  // El brillo sigue al cursor
  glare.x = x * 100;
  glare.y = y * 100;
  glare.opacity = 1;
};

const handleMouseLeave = () => {
  rotation.x = 0;
  rotation.y = 0;
  glare.opacity = 0;
};
</script>

<style scoped>
/* Contenedor con perspectiva para el efecto de inclinación */
.perspective-tilt {
  perspective: 1000px;
}

/* Tarjeta con preserve-3d para una inclinación realista */
.tilt-card {
  transform-style: preserve-3d;
}

/* Brillo que sigue al cursor */
.tilt-glare {
  pointer-events: none;
  border-radius: inherit;
  transition: opacity 0.3s ease;
}
</style>
