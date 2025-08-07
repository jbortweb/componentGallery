<template>
  <div class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
    <div class="w-full px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo/Title -->
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-gray-900">
            <span class="text-blue-600">Component</span>Gallery
          </h1>
        </div>

        <!-- Navigation Tabs -->
        <nav class="flex space-x-1">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="$emit('category-change', category.id)"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2"
            :class="
              activeCategory === category.id
                ? 'bg-blue-100 text-blue-700 border border-blue-200'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            "
          >
            <component :is="category.icon" class="w-4 h-4" />
            <span class="hidden sm:inline">{{ category.name }}</span>
            <span
              v-if="category.count"
              class="bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs"
              :class="
                activeCategory === category.id
                  ? 'bg-blue-200 text-blue-800'
                  : ''
              "
            >
              {{ category.count }}
            </span>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { h } from "vue";

defineProps({
  activeCategory: {
    type: String,
    required: true,
  },
});

defineEmits(["category-change"]);

const categories = [
  {
    id: "products",
    name: "Productos",
    count: 6,
    icon: () =>
      h(
        "svg",
        {
          class: "w-4 h-4",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
        },
        [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
          }),
        ]
      ),
  },
  {
    id: "profiles",
    name: "Perfiles",
    count: 6,
    icon: () =>
      h(
        "svg",
        {
          class: "w-4 h-4",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
        },
        [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z",
          }),
        ]
      ),
  },
  {
    id: "articles",
    name: "Artículos",
    count: 6,
    icon: () =>
      h(
        "svg",
        {
          class: "w-4 h-4",
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24",
        },
        [
          h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15",
          }),
        ]
      ),
  },
];
</script>
