<template>
  <div class="relative w-full">
    <!-- Header Section -->
    <div class="flex items-center justify-between px-4 sm:px-6 lg:px-8 mb-24">
      <div class="max-w-4xl">
        <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
          {{ title }}
        </h2>
        <p v-if="description" class="text-gray-600 text-sm sm:text-base">
          {{ description }}
        </p>
      </div>
    </div>

    <!-- 3D Carousel Container -->
    <div
      class="relative py-20 flex items-center justify-center overflow-visible"
      style="height: 420px"
    >
      <!-- Previous Card (Left) -->
      <div
        class="absolute left-36 z-10 transform transition-all duration-500 ease-in-out"
        :class="canGoPrev ? 'opacity-50 scale-75' : 'opacity-0 scale-50'"
      >
        <div
          v-if="canGoPrev"
          class="transform -rotate-8 transition-transform duration-300 cursor-pointer"
          @click="prevSlide"
        >
          <div class="w-96 scale-90">
            <slot :item="items[prevIndex]" :index="prevIndex" :isActive="false">
              <div class="w-full h-72 bg-gray-200 rounded-xl"></div>
            </slot>
          </div>
        </div>
      </div>

      <!-- Current Card (Center) -->
      <div class="z-20 transform transition-all duration-500 ease-in-out">
        <div class="transition-transform duration-300">
          <div class="w-96">
            <slot
              :item="items[currentIndex]"
              :index="currentIndex"
              :isActive="true"
            >
              <div class="w-full h-80 bg-gray-300 rounded-xl"></div>
            </slot>
          </div>
        </div>
      </div>

      <!-- Next Card (Right) -->
      <div
        class="absolute right-36 z-10 transform transition-all duration-500 ease-in-out"
        :class="canGoNext ? 'opacity-50 scale-75' : 'opacity-0 scale-50'"
      >
        <div
          v-if="canGoNext"
          class="transform rotate-8 transition-transform duration-300 cursor-pointer"
          @click="nextSlide"
        >
          <div class="w-96 scale-90">
            <slot :item="items[nextIndex]" :index="nextIndex" :isActive="false">
              <div class="w-full h-72 bg-gray-200 rounded-xl"></div>
            </slot>
          </div>
        </div>
      </div>

      <!-- Navigation Arrows -->
      <button
        @click="prevSlide"
        :disabled="!canGoPrev"
        class="absolute left-2 z-30 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
      >
        <svg
          class="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        @click="nextSlide"
        :disabled="!canGoNext"
        class="absolute right-2 z-30 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
      >
        <svg
          class="w-6 h-6 text-gray-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>

    <!-- Dots Indicator -->
    <div class="flex justify-center mt-8 space-x-2">
      <button
        v-for="(item, index) in items"
        :key="index"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full transition-all duration-200"
        :class="
          index === currentIndex
            ? 'bg-blue-600 scale-125'
            : 'bg-gray-300 hover:bg-gray-400'
        "
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  autoPlay: {
    type: Boolean,
    default: false,
  },
  autoPlayInterval: {
    type: Number,
    default: 3000,
  },
});

// Estado reactivo
const currentIndex = ref(0);
let autoPlayTimer = null;

// Computed properties
const prevIndex = computed(() => {
  return currentIndex.value > 0
    ? currentIndex.value - 1
    : props.items.length - 1;
});

const nextIndex = computed(() => {
  return currentIndex.value < props.items.length - 1
    ? currentIndex.value + 1
    : 0;
});

const canGoPrev = computed(() => props.items.length > 1);
const canGoNext = computed(() => props.items.length > 1);

// Métodos de navegación
const prevSlide = () => {
  if (canGoPrev.value) {
    currentIndex.value = prevIndex.value;
    resetAutoPlay();
  }
};

const nextSlide = () => {
  if (canGoNext.value) {
    currentIndex.value = nextIndex.value;
    resetAutoPlay();
  }
};

const goToSlide = (index) => {
  currentIndex.value = index;
  resetAutoPlay();
};

// Auto-play functionality
const startAutoPlay = () => {
  if (props.autoPlay && props.items.length > 1) {
    autoPlayTimer = setInterval(() => {
      nextSlide();
    }, props.autoPlayInterval);
  }
};

const stopAutoPlay = () => {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
};

const resetAutoPlay = () => {
  stopAutoPlay();
  startAutoPlay();
};

// Lifecycle hooks
onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<style scoped>
/* Custom animations for the 3D effect */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}

@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateX(-100px) scale(0.8);
  }
}

/* Adicional styling for card container */
.card-container {
  perspective: 1000px;
}

/* Hover effects for better interactivity */
.carousel-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-card:hover {
  transform: translateY(-5px);
}
</style>