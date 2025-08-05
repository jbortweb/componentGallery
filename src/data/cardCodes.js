export const cardCodes = {
  ProductCard1: `<template>
  <div class="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 w-full border border-blue-500/20">
    <div class="p-6 relative">
      <!-- Decorative elements -->
      <div class="absolute top-2 right-2 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div class="absolute bottom-2 left-2 w-16 h-16 bg-purple-400/20 rounded-full blur-lg"></div>
      
      <!-- Product image -->
      <div class="relative mb-4 overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm">
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div class="absolute top-3 left-3">
          <span class="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
            ⭐ {{ product.rating }}
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="relative z-10">
        <div class="mb-3">
          <span class="text-blue-200 text-sm font-medium uppercase tracking-wide">
            {{ product.category }}
          </span>
          <h3 class="text-white text-xl font-bold mt-1 line-clamp-1">
            {{ product.title }}
          </h3>
        </div>

        <p class="text-blue-100 text-sm mb-4 line-clamp-2 leading-relaxed">
          {{ product.description }}
        </p>

        <!-- Price and reviews -->
        <div class="flex items-center justify-between mb-4">
          <div class="text-2xl font-bold text-white">{{ product.price }}</div>
          <div class="text-right">
            <div class="text-blue-200 text-sm">{{ product.reviews }} reviews</div>
          </div>
        </div>

        <!-- Action button -->
        <button class="w-full bg-white text-purple-700 py-3 px-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
          Comprar Ahora
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>`,

  ProductCard2: `<template>
  <div class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 w-full border border-orange-200">
    <div class="relative">
      <!-- Decorative header -->
      <div class="h-2 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"></div>
      
      <!-- Product image -->
      <div class="relative p-4 pb-0">
        <div class="relative overflow-hidden rounded-xl bg-gray-50">
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
          />
          <div class="absolute top-3 right-3">
            <div class="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              HOT
            </div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="p-4">
        <div class="mb-3">
          <span class="text-orange-600 text-sm font-medium uppercase tracking-wide">
            {{ product.category }}
          </span>
          <h3 class="text-gray-900 text-lg font-bold mt-1 line-clamp-1">
            {{ product.title }}
          </h3>
        </div>

        <p class="text-gray-600 text-sm mb-4 line-clamp-2">
          {{ product.description }}
        </p>

        <!-- Rating -->
        <div class="flex items-center mb-3">
          <div class="flex items-center">
            <span class="text-yellow-400 text-sm">⭐</span>
            <span class="text-gray-700 text-sm ml-1">{{ product.rating }}</span>
          </div>
          <span class="text-gray-500 text-sm ml-2">({{ product.reviews }})</span>
        </div>

        <!-- Price and button -->
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold text-orange-600">{{ product.price }}</div>
          <button class="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Comprar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>`,

  ProductCard3: `<template>
  <div class="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 w-full border border-green-500/30">
    <div class="p-4">
      <!-- Terminal header -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
          <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span class="text-green-400 text-xs font-mono">~/products/{{ product.title.toLowerCase().replace(/\s+/g, '-') }}</span>
      </div>

      <!-- Product image with terminal styling -->
      <div class="relative mb-4 border border-gray-700 rounded-lg overflow-hidden bg-gray-800">
        <div class="bg-gray-800 px-3 py-1 border-b border-gray-700">
          <span class="text-green-400 text-xs font-mono">$ display image</span>
        </div>
        <img
          :src="product.image"
          :alt="product.title"
          class="w-full h-40 object-cover"
        />
      </div>

      <!-- Terminal-style content -->
      <div class="space-y-3">
        <!-- Title command -->
        <div>
          <div class="text-green-400 text-xs font-mono mb-1">$ echo $PRODUCT_NAME</div>
          <h3 class="text-green-300 text-lg font-bold font-mono">{{ product.title }}</h3>
        </div>

        <!-- Description -->
        <div>
          <div class="text-green-400 text-xs font-mono mb-1">$ cat description.txt</div>
          <p class="text-gray-300 text-sm font-mono leading-relaxed line-clamp-2">
            {{ product.description }}
          </p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-3">
          <div>
            <div class="text-cyan-400 text-xs font-mono">$ get_price</div>
            <div class="text-yellow-400 text-lg font-bold font-mono">{{ product.price }}</div>
          </div>
          <div>
            <div class="text-cyan-400 text-xs font-mono">$ get_rating</div>
            <div class="text-purple-400 text-sm font-mono">{{ product.rating }}/5 ({{ product.reviews }})</div>
          </div>
        </div>

        <!-- Action button -->
        <div class="pt-2">
          <div class="text-green-400 text-xs font-mono mb-2">$ execute purchase.sh</div>
          <button class="w-full bg-green-600 hover:bg-green-700 text-black py-2 px-4 rounded font-mono font-bold transition-all duration-200 text-sm">
            [ENTER] PURCHASE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>`,

  ProfileCard1: `<template>
  <div class="bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-700 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 w-full border border-purple-500/30">
    <div class="p-6 relative">
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
      <div class="absolute bottom-0 left-0 w-24 h-24 bg-pink-400/20 rounded-full translate-y-12 -translate-x-12"></div>
      
      <!-- Profile header -->
      <div class="relative z-10 text-center mb-6">
        <div class="relative inline-block">
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="w-20 h-20 rounded-full object-cover border-4 border-white/20 shadow-lg mx-auto"
          />
          <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
            <div class="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        <h3 class="text-white text-xl font-bold mt-4">{{ profile.name }}</h3>
        <p class="text-purple-200 text-sm font-medium">{{ profile.role }}</p>
        <p class="text-purple-300 text-xs mt-1">@ {{ profile.company }}</p>
      </div>

      <!-- Bio -->
      <div class="relative z-10 mb-6">
        <p class="text-purple-100 text-sm text-center leading-relaxed line-clamp-3">
          {{ profile.bio }}
        </p>
      </div>

      <!-- Skills -->
      <div class="relative z-10 mb-6">
        <h4 class="text-white text-sm font-semibold mb-3">Habilidades</h4>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in profile.skills.slice(0, 4)"
            :key="skill"
            class="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Social links -->
      <div class="relative z-10 flex justify-center space-x-4 mb-6">
        <a
          v-if="profile.social.linkedin"
          :href="profile.social.linkedin"
          class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
        >
          <span class="text-white text-sm">in</span>
        </a>
        <a
          v-if="profile.social.github"
          :href="profile.social.github"
          class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
        >
          <span class="text-white text-sm">gh</span>
        </a>
        <a
          v-if="profile.social.twitter"
          :href="profile.social.twitter"
          class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
        >
          <span class="text-white text-sm">tw</span>
        </a>
      </div>

      <!-- Action button -->
      <button class="relative z-10 w-full bg-white text-purple-700 py-3 px-4 rounded-xl font-bold hover:bg-purple-50 transition-all duration-200 shadow-lg">
        Conectar
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
});
</script>`,

  ProfileCard2: `<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full border border-gray-200">
    <div class="p-6">
      <!-- Header with avatar and info -->
      <div class="flex items-start space-x-4 mb-6">
        <img
          :src="profile.avatar"
          :alt="profile.name"
          class="w-16 h-16 rounded-xl object-cover border-2 border-gray-100"
        />
        <div class="flex-1 min-w-0">
          <h3 class="text-gray-900 text-lg font-bold line-clamp-1">{{ profile.name }}</h3>
          <p class="text-blue-600 text-sm font-medium">{{ profile.role }}</p>
          <p class="text-gray-500 text-sm">{{ profile.company }}</p>
        </div>
        <div class="flex-shrink-0">
          <div class="w-3 h-3 bg-green-400 rounded-full"></div>
        </div>
      </div>

      <!-- Bio -->
      <div class="mb-6">
        <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {{ profile.bio }}
        </p>
      </div>

      <!-- Skills grid -->
      <div class="mb-6">
        <h4 class="text-gray-900 text-sm font-semibold mb-3">Tecnologías</h4>
        <div class="grid grid-cols-2 gap-2">
          <div
            v-for="skill in profile.skills.slice(0, 4)"
            :key="skill"
            class="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-center"
          >
            <span class="text-gray-700 text-xs font-medium">{{ skill }}</span>
          </div>
        </div>
      </div>

      <!-- Social stats -->
      <div class="flex justify-between mb-6 bg-gray-50 rounded-xl p-4">
        <div class="text-center">
          <div class="text-gray-900 text-lg font-bold">150+</div>
          <div class="text-gray-500 text-xs">Proyectos</div>
        </div>
        <div class="text-center">
          <div class="text-gray-900 text-lg font-bold">5.0</div>
          <div class="text-gray-500 text-xs">Rating</div>
        </div>
        <div class="text-center">
          <div class="text-gray-900 text-lg font-bold">98%</div>
          <div class="text-gray-500 text-xs">Success</div>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="flex space-x-3">
        <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm">
          Contactar
        </button>
        <button class="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm">
          Ver Perfil
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
});
</script>`,

  ProfileCard3: `<template>
  <div class="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 w-full border border-gray-700">
    <div class="p-4">
      <!-- Header estilo terminal -->
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-red-500 rounded-full"></div>
          <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div class="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <span class="text-green-400 text-xs font-mono">~/profile/{{ profile.name.toLowerCase().replace(" ", "-") }}</span>
      </div>

      <!-- Content con estilo hacker -->
      <div>
        <div class="flex items-center mb-3">
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="w-12 h-12 rounded-xl object-cover border border-gray-600"
          />
          <div class="ml-3 flex-1">
            <h3 class="text-green-400 text-base font-bold font-mono">{{ profile.name }}</h3>
            <p class="text-cyan-400 text-sm font-mono">{{ profile.role }}</p>
            <p class="text-gray-400 text-xs font-mono">{{ profile.company }}.dev</p>
          </div>
          <div class="text-right">
            <div class="text-yellow-400 text-xs font-mono">ONLINE</div>
            <div class="w-2 h-2 bg-green-500 rounded-full ml-auto mt-1 animate-pulse"></div>
          </div>
        </div>

        <!-- Terminal-style bio -->
        <div class="bg-gray-900 rounded-lg p-3 mb-3 border border-gray-700">
          <div class="text-green-400 text-xs font-mono mb-1">$ cat about.txt</div>
          <p class="text-gray-300 text-sm font-mono leading-relaxed">{{ profile.bio }}</p>
        </div>

        <!-- Skills como comandos -->
        <div class="mb-3">
          <div class="text-cyan-400 text-xs font-mono mb-2">$ ls skills/</div>
          <div class="space-y-1">
            <div
              v-for="skill in profile.skills.slice(0, 3)"
              :key="skill"
              class="text-gray-300 text-xs font-mono flex items-center"
            >
              <span class="text-green-400 mr-2">></span>
              {{ skill.toLowerCase().replace(" ", "-") }}.exe
            </div>
          </div>
        </div>

        <!-- Social links estilo terminal -->
        <div class="mb-4">
          <div class="text-cyan-400 text-xs font-mono mb-2">$ echo $SOCIAL_LINKS</div>
          <div class="flex space-x-2">
            <a
              v-if="profile.social.github"
              :href="profile.social.github"
              class="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs font-mono transition-colors duration-200"
            >
              github
            </a>
            <a
              v-if="profile.social.linkedin"
              :href="profile.social.linkedin"
              class="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs font-mono transition-colors duration-200"
            >
              linkedin
            </a>
            <a
              v-if="profile.social.twitter"
              :href="profile.social.twitter"
              class="bg-gray-700 hover:bg-gray-600 text-white px-2 py-1 rounded text-xs font-mono transition-colors duration-200"
            >
              twitter
            </a>
          </div>
        </div>

        <!-- Action button -->
        <button class="w-full bg-green-600 hover:bg-green-700 text-black py-2 px-3 rounded-lg font-mono font-bold transition-all duration-200 shadow-lg text-sm">
          $ connect --user={{ profile.name.toLowerCase().replace(" ", "-") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
});
</script>`,

  ArticleCard1: `<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full border border-gray-100">
    <!-- Article image -->
    <div class="relative overflow-hidden">
      <img
        :src="article.image"
        :alt="article.title"
        class="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div class="absolute top-4 left-4">
        <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
          {{ article.tags[0] }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Title and excerpt -->
      <div class="mb-4">
        <h3 class="text-gray-900 text-xl font-bold mb-2 line-clamp-2 leading-tight">
          {{ article.title }}
        </h3>
        <p class="text-gray-600 text-sm line-clamp-3 leading-relaxed">
          {{ article.excerpt }}
        </p>
      </div>

      <!-- Author and date -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">{{ article.author.charAt(0) }}</span>
          </div>
          <div class="ml-3">
            <p class="text-gray-900 text-sm font-medium">{{ article.author }}</p>
            <p class="text-gray-500 text-xs">{{ formatDate(article.date) }}</p>
          </div>
        </div>
        <div class="text-right">
          <span class="text-blue-600 text-sm font-medium">{{ article.readTime }}</span>
        </div>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tag in article.tags.slice(1, 4)"
          :key="tag"
          class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Stats and button -->
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4 text-gray-500">
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
            <span class="text-sm">{{ article.likes }}</span>
          </div>
          <div class="flex items-center">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span class="text-sm">{{ article.comments }}</span>
          </div>
        </div>
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm">
          Leer más
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
</script>`,

  ArticleCard2: `<template>
  <div class="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full border border-orange-200">
    <div class="p-6">
      <!-- Header -->
      <div class="flex items-start justify-between mb-4">
        <div class="flex-1">
          <div class="flex items-center mb-2">
            <div class="w-2 h-6 bg-gradient-to-b from-orange-500 to-red-500 rounded-full mr-3"></div>
            <span class="text-orange-600 text-sm font-bold uppercase tracking-wide">
              {{ article.tags[0] }}
            </span>
          </div>
          <h3 class="text-gray-900 text-lg font-bold line-clamp-2 leading-tight">
            {{ article.title }}
          </h3>
        </div>
      </div>

      <!-- Article image -->
      <div class="relative overflow-hidden rounded-xl mb-4">
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-36 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      <!-- Excerpt -->
      <p class="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
        {{ article.excerpt }}
      </p>

      <!-- Author info -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center">
          <div class="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
            <span class="text-white text-xs font-bold">{{ article.author.charAt(0) }}</span>
          </div>
          <div class="ml-2">
            <p class="text-gray-900 text-sm font-medium">{{ article.author }}</p>
            <p class="text-gray-500 text-xs">{{ formatDate(article.date) }}</p>
          </div>
        </div>
        <div class="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium">
          {{ article.readTime }}
        </div>
      </div>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tag in article.tags.slice(1, 3)"
          :key="tag"
          class="bg-white/80 text-orange-700 text-xs px-2 py-1 rounded-full border border-orange-200"
        >
          {{ tag }}
        </span>
      </div>

      <!-- Footer -->
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-3 text-gray-500">
          <div class="flex items-center">
            <span class="text-red-500 mr-1">❤️</span>
            <span class="text-sm">{{ article.likes }}</span>
          </div>
          <div class="flex items-center">
            <span class="text-blue-500 mr-1">💬</span>
            <span class="text-sm">{{ article.comments }}</span>
          </div>
        </div>
        <button class="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm shadow-lg">
          Leer artículo
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
</script>`,

  ArticleCard3: `<template>
  <div class="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 w-full border border-gray-700">
    <div class="p-5">
      <!-- Terminal header -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-2">
          <div class="w-3 h-3 bg-red-500 rounded-full"></div>
          <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span class="text-green-400 text-xs font-mono">~/articles/{{ article.id }}.md</span>
      </div>

      <!-- Article content -->
      <div class="space-y-4">
        <!-- Title -->
        <div>
          <div class="text-green-400 text-xs font-mono mb-1">$ cat title.txt</div>
          <h3 class="text-green-300 text-lg font-bold font-mono line-clamp-2">
            {{ article.title }}
          </h3>
        </div>

        <!-- Image terminal style -->
        <div class="border border-gray-700 rounded-lg overflow-hidden bg-gray-800">
          <div class="bg-gray-800 px-3 py-1 border-b border-gray-700">
            <span class="text-cyan-400 text-xs font-mono">$ display preview.jpg</span>
          </div>
          <img
            :src="article.image"
            :alt="article.title"
            class="w-full h-32 object-cover"
          />
        </div>

        <!-- Excerpt -->
        <div>
          <div class="text-cyan-400 text-xs font-mono mb-1">$ head -n 3 content.md</div>
          <p class="text-gray-300 text-sm font-mono leading-relaxed line-clamp-2">
            {{ article.excerpt }}
          </p>
        </div>

        <!-- Metadata -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <div class="text-purple-400 text-xs font-mono">$ whoami</div>
            <div class="text-yellow-400 text-sm font-mono">{{ article.author }}</div>
          </div>
          <div>
            <div class="text-purple-400 text-xs font-mono">$ date</div>
            <div class="text-yellow-400 text-sm font-mono">{{ formatDate(article.date) }}</div>
          </div>
        </div>

        <!-- Tags as file listing -->
        <div>
          <div class="text-cyan-400 text-xs font-mono mb-2">$ ls tags/</div>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in article.tags.slice(0, 3)"
              :key="tag"
              class="bg-gray-800 text-green-400 text-xs px-2 py-1 rounded border border-gray-600 font-mono"
            >
              {{ tag.toLowerCase().replace(' ', '_') }}.tag
            </span>
          </div>
        </div>

        <!-- Stats -->
        <div class="flex justify-between text-xs font-mono">
          <div class="text-red-400">❤️ {{ article.likes }} likes</div>
          <div class="text-blue-400">💬 {{ article.comments }} comments</div>
          <div class="text-yellow-400">⏱️ {{ article.readTime }}</div>
        </div>

        <!-- Action -->
        <div>
          <div class="text-green-400 text-xs font-mono mb-2">$ ./read_article.sh</div>
          <button class="w-full bg-green-600 hover:bg-green-700 text-black py-2 px-4 rounded font-mono font-bold transition-all duration-200 text-sm">
            [ENTER] READ_FULL_ARTICLE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};
</script>`
};
