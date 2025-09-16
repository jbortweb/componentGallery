<template>
  <div
    class="mt-12 backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 shadow-2xl"
  >
    <h2 class="text-2xl font-bold text-white mb-6 text-center">
      {{ title }}
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        v-for="tech in technologies"
        :key="tech.id"
        class="flex flex-col items-center p-4 rounded-lg border hover:scale-105 transition-transform duration-300"
        :class="tech.bgClass"
      >
        <span class="text-2xl mb-2">{{ tech.emoji }}</span>
        <span class="text-white font-medium text-sm text-center">{{
          tech.name
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "vue", // vue, css, effects, interactions, frameworks
    validator: (value) =>
      ["vue", "css", "effects", "interactions", "frameworks", "tools"].includes(
        value
      ),
  },
  title: {
    type: String,
    default: "Tecnologías Utilizadas",
  },
});

// Configuración de tecnologías por tipo
const techConfigs = {
  vue: [
    {
      id: 1,
      name: "Vue 3",
      emoji: "💚",
      bgClass:
        "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30",
    },
    {
      id: 2,
      name: "Composition API",
      emoji: "🔧",
      bgClass:
        "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    },
    {
      id: 3,
      name: "Tailwind CSS",
      emoji: "🎨",
      bgClass:
        "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
    },
    {
      id: 4,
      name: "Responsive",
      emoji: "📱",
      bgClass:
        "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30",
    },
  ],
  css: [
    {
      id: 1,
      name: "Flexbox & Grid",
      emoji: "📐",
      bgClass:
        "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    },
    {
      id: 2,
      name: "CSS Variables",
      emoji: "🎛️",
      bgClass:
        "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30",
    },
    {
      id: 3,
      name: "Animations",
      emoji: "✨",
      bgClass:
        "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30",
    },
    {
      id: 4,
      name: "Media Queries",
      emoji: "📺",
      bgClass:
        "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30",
    },
  ],
  effects: [
    {
      id: 1,
      name: "CSS Transforms",
      emoji: "🎨",
      bgClass:
        "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30",
    },
    {
      id: 2,
      name: "Transitions",
      emoji: "⚡",
      bgClass:
        "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    },
    {
      id: 3,
      name: "Gradients",
      emoji: "🌈",
      bgClass:
        "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
    },
    {
      id: 4,
      name: "Hover Effects",
      emoji: "✨",
      bgClass:
        "bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-500/30",
    },
  ],
  interactions: [
    {
      id: 1,
      name: "Mouse Events",
      emoji: "🖱️",
      bgClass:
        "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    },
    {
      id: 2,
      name: "Touch Support",
      emoji: "👆",
      bgClass:
        "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30",
    },
    {
      id: 3,
      name: "Keyboard Nav",
      emoji: "⌨️",
      bgClass:
        "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30",
    },
    {
      id: 4,
      name: "Accessibility",
      emoji: "♿",
      bgClass:
        "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30",
    },
  ],
  frameworks: [
    {
      id: 1,
      name: "Vue 3",
      emoji: "💚",
      bgClass:
        "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30",
    },
    {
      id: 2,
      name: "Vite",
      emoji: "⚡",
      bgClass:
        "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30",
    },
    {
      id: 3,
      name: "Vue Router",
      emoji: "🛣️",
      bgClass:
        "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    },
    {
      id: 4,
      name: "Tailwind CSS",
      emoji: "🎨",
      bgClass:
        "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/30",
    },
  ],
  tools: [
    {
      id: 1,
      name: "VS Code",
      emoji: "💻",
      bgClass:
        "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    },
    {
      id: 2,
      name: "Git",
      emoji: "🌿",
      bgClass:
        "bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-500/30",
    },
    {
      id: 3,
      name: "npm",
      emoji: "📦",
      bgClass:
        "bg-gradient-to-r from-red-500/20 to-pink-500/20 border-red-500/30",
    },
    {
      id: 4,
      name: "DevTools",
      emoji: "🔧",
      bgClass:
        "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30",
    },
  ],
};

const technologies = computed(() => {
  return techConfigs[props.type] || techConfigs.vue;
});
</script>

<style scoped>
/* Efecto hover suave */
.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>