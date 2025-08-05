<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <Navigation
      :activeCategory="activeCategory"
      @category-change="handleCategoryChange"
    />

    <!-- Main Content -->
    <main class="w-full px-4 sm:px-6 lg:px-8 py-8">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Galería de Componentes
        </h2>
        <p class="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Explora diferentes tipos de tarjetas con diseños modernos y
          funcionalidad interactiva. Construido con Vue 3, Vite y Tailwind CSS.
        </p>
      </div>

      <!-- Desktop: Carousel View -->
      <div class="hidden lg:block">
        <CardCarousel
          :items="currentItems"
          :title="getCurrentTitle()"
          :description="getCurrentDescription()"
          :itemsPerView="3"
          :autoPlay="true"
          :autoPlayInterval="6000"
        >
          <template #default="{ item, index }">
            <component
              :is="getCardComponent(activeCategory, index)"
              v-bind="getCardProps(activeCategory, item)"
            />
          </template>
        </CardCarousel>
      </div>

      <!-- Tablet: Carousel View -->
      <div class="hidden md:block lg:hidden">
        <CardCarousel
          :items="currentItems"
          :title="getCurrentTitle()"
          :description="getCurrentDescription()"
          :itemsPerView="2"
          :autoPlay="true"
          :autoPlayInterval="6000"
        >
          <template #default="{ item, index }">
            <component
              :is="getCardComponent(activeCategory, index)"
              v-bind="getCardProps(activeCategory, item)"
            />
          </template>
        </CardCarousel>
      </div>

      <!-- Mobile: Grid View -->
      <div class="md:hidden">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">
            {{ getCurrentTitle() }}
          </h3>
          <p class="text-gray-600">{{ getCurrentDescription() }}</p>
        </div>

        <div class="space-y-6">
          <component
            v-for="(item, index) in currentItems"
            :key="item.id"
            :is="getCardComponent(activeCategory, index)"
            v-bind="getCardProps(activeCategory, item)"
          />
        </div>
      </div>

      <!-- Features Section -->
      <section class="mt-16 bg-white rounded-2xl shadow-lg p-8">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Características</h3>
          <p class="text-gray-600">
            Este proyecto demuestra las mejores prácticas en desarrollo frontend
            moderno
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center">
            <div
              class="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-3"
            >
              <svg
                class="w-6 h-6"
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
            <h4 class="font-semibold text-gray-900 mb-1">Vue 3</h4>
            <p class="text-sm text-gray-600">
              Composition API y reactividad moderna
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-1">Tailwind CSS</h4>
            <p class="text-sm text-gray-600">Diseño utilitario y responsivo</p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-1">Componentes</h4>
            <p class="text-sm text-gray-600">
              Arquitectura modular y reutilizable
            </p>
          </div>

          <div class="text-center">
            <div
              class="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-1">Responsivo</h4>
            <p class="text-sm text-gray-600">
              Adaptado para todos los dispositivos
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-gray-200 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center">
          <p class="text-gray-600">
            Desarrollado con ❤️ usando Vue 3, Vite y Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import Navigation from "./components/Navigation.vue";
import CardCarousel from "./components/carousel/CardCarousel.vue";
// Import all card variants
import ProductCard1 from "./components/cards/ProductCard1.vue";
import ProductCard2 from "./components/cards/ProductCard2.vue";
import ProductCard3 from "./components/cards/ProductCard3.vue";
import ProfileCard1 from "./components/cards/ProfileCard1.vue";
import ProfileCard2 from "./components/cards/ProfileCard2.vue";
import ProfileCard3 from "./components/cards/ProfileCard3.vue";
import ArticleCard1 from "./components/cards/ArticleCard1.vue";
import ArticleCard2 from "./components/cards/ArticleCard2.vue";
import ArticleCard3 from "./components/cards/ArticleCard3.vue";
import { cardData } from "./data/cardData.js";

// Reactive state
const activeCategory = ref("products");

// Computed properties
const currentItems = computed(() => {
  return cardData[activeCategory.value] || [];
});

// Function to get the appropriate card component based on category and index
const getCardComponent = (category, index) => {
  const cardComponents = {
    products: [ProductCard1, ProductCard2, ProductCard3],
    profiles: [ProfileCard1, ProfileCard2, ProfileCard3],
    articles: [ArticleCard1, ArticleCard2, ArticleCard3],
  };

  const components = cardComponents[category] || [];
  return components[index % components.length];
};

// Function to get the appropriate props for each card type
const getCardProps = (category, item) => {
  switch (category) {
    case "products":
      return { product: item };
    case "profiles":
      return { profile: item };
    case "articles":
      return { article: item };
    default:
      return {};
  }
};

// Methods
const handleCategoryChange = (category) => {
  activeCategory.value = category;
};

const getCurrentTitle = () => {
  const titles = {
    products: "Productos Destacados",
    profiles: "Perfiles Profesionales",
    articles: "Artículos Recientes",
  };
  return titles[activeCategory.value] || "Tarjetas";
};

const getCurrentDescription = () => {
  const descriptions = {
    products: "Descubre los productos más innovadores y populares",
    profiles: "Conoce a profesionales talentosos de diferentes industrias",
    articles: "Lee los artículos más recientes sobre tecnología y desarrollo",
  };
  return descriptions[activeCategory.value] || "Explora nuestra colección";
};
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
