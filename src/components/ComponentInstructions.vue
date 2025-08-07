<template>
  <div :class="containerClasses">
    <div class="flex items-start">
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
      <div>
        <h3 :class="titleClasses">Cómo usar estos componentes</h3>
        <p :class="textClasses">
          Haz clic en el icono de código (&lt;/&gt;) en cualquier tarjeta para
          ver el código fuente completo del componente.
        </p>
        <div :class="detailsClasses">
          <p>
            <strong>Tecnologías:</strong> Vue 3 (Composition API), Tailwind CSS
            v4.1
          </p>
          <p>
            <strong>Características:</strong> Responsive design, efectos hover,
            modal de código integrado
          </p>
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
  const baseClasses = "mt-16 border rounded-xl p-8";
  const gradientMap = {
    blue: "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200",
    purple: "bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200",
    green: "bg-gradient-to-r from-green-50 to-emerald-50 border-green-200",
  };
  return `${baseClasses} ${gradientMap[props.theme]}`;
});

const iconClasses = computed(() => {
  const baseClasses = "w-6 h-6 mt-0.5 mr-3 flex-shrink-0";
  const colorMap = {
    blue: "text-blue-600",
    purple: "text-purple-600",
    green: "text-green-600",
  };
  return `${baseClasses} ${colorMap[props.theme]}`;
});

const titleClasses = computed(() => {
  const baseClasses = "text-lg font-semibold mb-2";
  const colorMap = {
    blue: "text-blue-900",
    purple: "text-purple-900",
    green: "text-green-900",
  };
  return `${baseClasses} ${colorMap[props.theme]}`;
});

const textClasses = computed(() => {
  const baseClasses = "mb-3";
  const colorMap = {
    blue: "text-blue-800",
    purple: "text-purple-800",
    green: "text-green-800",
  };
  return `${baseClasses} ${colorMap[props.theme]}`;
});

const detailsClasses = computed(() => {
  const baseClasses = "text-sm";
  const colorMap = {
    blue: "text-blue-700",
    purple: "text-purple-700",
    green: "text-green-700",
  };
  return `${baseClasses} ${colorMap[props.theme]}`;
});
</script>
