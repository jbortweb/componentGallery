<template>
  <div
    v-if="isOpen"
    class="md:hidden absolute top-full left-0 w-full backdrop-blur-lg bg-slate-900/95 border-t border-white/20 z-40"
  >
    <div class="px-4 py-6 space-y-4">
      <!-- Cards Section -->
      <div>
        <button
          @click="toggleSubmenu('cards')"
          class="w-full flex items-center justify-between py-2 text-white font-semibold text-lg mb-3"
        >
          <span>Cards</span>
          <svg
            :class="{ 'rotate-180': openSubmenu === 'cards' }"
            class="w-5 h-5 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div v-if="openSubmenu === 'cards'" class="space-y-2 pl-4">
          <router-link
            to="/cards/productos"
            class="flex items-center space-x-3 py-2 text-gray-300 hover:text-white transition-colors"
            @click="closeMenu"
          >
            <div
              class="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center"
            >
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <span>Productos</span>
          </router-link>
          <router-link
            to="/cards/perfiles"
            class="flex items-center space-x-3 py-2 text-gray-300 hover:text-white transition-colors"
            @click="closeMenu"
          >
            <div
              class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
            >
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <span>Perfiles</span>
          </router-link>
          <router-link
            to="/cards/articulos"
            class="flex items-center space-x-3 py-2 text-gray-300 hover:text-white transition-colors"
            @click="closeMenu"
          >
            <div
              class="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center"
            >
              <svg
                class="w-4 h-4 text-white"
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
            <span>Artículos</span>
          </router-link>
        </div>
      </div>
      <!-- Head & Foot Section -->
      <div>
        <button
          @click="toggleSubmenu('headfoot')"
          class="w-full flex items-center justify-between py-2 text-white font-semibold text-lg mb-3"
        >
          <span>Head & Foot</span>
          <svg
            :class="{ 'rotate-180': openSubmenu === 'headfoot' }"
            class="w-5 h-5 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div v-if="openSubmenu === 'headfoot'" class="space-y-2 pl-4">
          <router-link
            to="/headers"
            class="flex items-center space-x-3 py-2 text-gray-300 hover:text-white transition-colors"
            @click="closeMenu"
          >
            <div
              class="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center"
            >
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <span>Headers</span>
          </router-link>
          <router-link
            to="/footers"
            class="flex items-center space-x-3 py-2 text-gray-300 hover:text-white transition-colors"
            @click="closeMenu"
          >
            <div
              class="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center"
            >
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <span>Footers</span>
          </router-link>
        </div>
      </div>
      <!-- Slider & Carousel Section -->
      <div>
        <button
          @click="toggleSubmenu('slider')"
          class="w-full flex items-center justify-between py-2 text-white font-semibold text-lg mb-3"
        >
          <span>Slider & Carousel</span>
          <svg
            :class="{ 'rotate-180': openSubmenu === 'slider' }"
            class="w-5 h-5 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div v-if="openSubmenu === 'slider'" class="space-y-2 pl-4">
          <router-link
            to="/carousel"
            class="flex items-center space-x-3 py-2 text-gray-300 hover:text-white transition-colors"
            @click="closeMenu"
          >
            <div
              class="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center"
            >
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 17v-6a1 1 0 011-1h14a1 1 0 011 1v6M4 17a2 2 0 002 2h12a2 2 0 002-2M4 17V7a2 2 0 012-2h12a2 2 0 012 2v10"
                />
              </svg>
            </div>
            <span>Carouseles</span>
          </router-link>
          <router-link
            to="/slider"
            class="flex items-center space-x-3 py-2 text-gray-300 hover:text-white transition-colors"
            @click="closeMenu"
          >
            <div
              class="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center"
            >
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 17v-6a1 1 0 011-1h6a1 1 0 011 1v6M8 17a2 2 0 002 2h4a2 2 0 002-2M8 17V7a2 2 0 012-2h4a2 2 0 012 2v10"
                />
              </svg>
            </div>
            <span>Sliders</span>
          </router-link>
        </div>
      </div>

      <!-- Effects Section -->
      <div>
        <button
          @click="toggleSubmenu('effects')"
          class="w-full flex items-center justify-between py-2 text-white font-semibold text-lg mb-3"
        >
          <span>Effects</span>
          <svg
            :class="{ 'rotate-180': openSubmenu === 'effects' }"
            class="w-5 h-5 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div v-if="openSubmenu === 'effects'" class="space-y-2 pl-4">
          <router-link
            to="/effects/image-effects"
            class="flex items-center space-x-3 py-2 text-gray-300 hover:text-white transition-colors"
            @click="closeMenu"
          >
            <div
              class="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center"
            >
              <svg
                class="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span>Image Effects</span>
          </router-link>
          <div
            class="flex items-center space-x-3 py-2 text-gray-500 opacity-50 cursor-not-allowed"
          >
            <div
              class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center"
            >
              <svg
                class="w-4 h-4 text-white"
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
            <span>Text Effects</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps({ isOpen: Boolean });
const emit = defineEmits(["close"]);
const openSubmenu = ref(null);

watch(
  () => props.isOpen,
  (val) => {
    if (!val) openSubmenu.value = null;
  }
);

function toggleSubmenu(menu) {
  openSubmenu.value = openSubmenu.value === menu ? null : menu;
}
function closeMenu() {
  emit("close");
  openSubmenu.value = null;
}
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}
</style>