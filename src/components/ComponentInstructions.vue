<template>
  <div :class="containerClasses">
    <!-- Efecto de brillo animado para destacar -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse opacity-30 rounded-xl"
    ></div>

    <div class="relative z-10 flex items-start">
      <!-- Icono con efecto especial -->
      <div class="relative mr-4">
        <div :class="iconBackgroundClasses">
          <svg
            :class="iconClasses"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <!-- Anillo pulsante alrededor del icono -->
        <div :class="ringClasses"></div>
      </div>

      <div class="flex-1">
        <h3 :class="titleClasses">📖 Cómo usar estos componentes</h3>
        <p :class="textClasses">
          Haz clic en el icono de código (&lt;/&gt;) en cualquier tarjeta para
          ver el código fuente completo del componente.
        </p>
        <div :class="detailsClasses">
          <div class="flex items-center mb-2">
            <span
              class="inline-block w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"
            ></span>
            <strong class="text-white">Tecnologías:</strong>
            <span class="ml-1">Vue 3 (Composition API), Tailwind CSS v4.1</span>
          </div>
          <div class="flex items-center">
            <span
              class="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"
            ></span>
            <strong class="text-white">Características:</strong>
            <span class="ml-1"
              >Responsive design, efectos hover, modal de código integrado</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  theme: {
    type: String,
    default: "blue",
    validator: (value) => ["blue", "purple", "green"].includes(value),
  },
});

const containerClasses = computed(() => {
  const baseClasses =
    "relative mt-16 backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden";
  // Gradientes sutiles para cada tema manteniendo el glassmorphism
  const gradientMap = {
    blue: "hover:bg-blue-500/20",
    purple: "hover:bg-purple-500/20",
    green: "hover:bg-emerald-500/20",
  };
  return `${baseClasses} ${gradientMap[props.theme]}`;
});

const iconBackgroundClasses = computed(() => {
  const baseClasses =
    "relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg";
  const backgroundMap = {
    blue: "bg-gradient-to-r from-blue-500 to-cyan-400",
    purple: "bg-gradient-to-r from-purple-500 to-pink-400",
    green: "bg-gradient-to-r from-emerald-500 to-green-400",
  };
  return `${baseClasses} ${backgroundMap[props.theme]}`;
});

const ringClasses = computed(() => {
  const baseClasses = "absolute inset-0 rounded-full animate-ping opacity-30";
  const colorMap = {
    blue: "bg-blue-400",
    purple: "bg-purple-400",
    green: "bg-emerald-400",
  };
  return `${baseClasses} ${colorMap[props.theme]}`;
});

const iconClasses = computed(() => {
  return "w-6 h-6 text-white relative z-10";
});

const titleClasses = computed(() => {
  return "text-xl font-bold mb-3 text-white bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent";
});

const textClasses = computed(() => {
  return "mb-4 text-gray-200 leading-relaxed";
});

const detailsClasses = computed(() => {
  return "text-sm text-gray-300 space-y-1";
});
</script>
