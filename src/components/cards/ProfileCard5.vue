<template>
  <div
    class="profile-card-5 group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
  >
    <!-- Minimalist top accent -->
    <div
      class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    ></div>

    <!-- Code button -->
    <button
      @click="showCode"
      class="absolute top-4 right-4 bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg z-20 cursor-pointer"
      aria-label="Ver código del componente ProfileCard5"
      title="Ver código del componente"
    >
      <svg
        class="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        ></path>
      </svg>
    </button>

    <div class="p-8">
      <!-- Professional header -->
      <div class="text-center mb-8">
        <div class="relative inline-block mb-6">
          <!-- Professional avatar -->
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
          />
          <!-- Professional status -->
          <div
            class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full flex items-center justify-center shadow-lg"
          >
            <div class="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>

        <!-- Name and title -->
        <h3
          class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300"
        >
          {{ profile.name }}
        </h3>

        <div class="space-y-1">
          <p class="text-indigo-600 font-semibold">{{ profile.role }}</p>
          <p class="text-gray-500 text-sm">{{ profile.company }}</p>
        </div>
      </div>

      <!-- Professional bio -->
      <div class="mb-8">
        <p class="text-gray-600 text-center leading-relaxed">
          {{ profile.bio }}
        </p>
      </div>

      <!-- Skills with modern design -->
      <div class="mb-8">
        <h4
          class="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide"
        >
          Especialidades
        </h4>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in profile.skills"
            :key="skill"
            class="px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 text-xs font-medium rounded-lg transition-colors duration-300 border border-transparent hover:border-indigo-200"
          >
            {{ skill }}
          </span>
        </div>
      </div>

      <!-- Professional contact -->
      <div class="flex justify-center space-x-4 relative z-10">
        <a
          v-for="(url, platform) in profile.social"
          :key="platform"
          :href="url"
          target="_blank"
          rel="noopener noreferrer"
          class="w-12 h-12 rounded-full bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 group/social cursor-pointer"
          :aria-label="`Conectar en ${platform}`"
          @click.stop
        >
          <!-- Professional platform icons -->
          <svg
            v-if="platform === 'linkedin'"
            class="w-5 h-5 pointer-events-none"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            />
          </svg>
          <svg
            v-else-if="platform === 'github'"
            class="w-5 h-5 pointer-events-none"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 0a10 10 0 00-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0110 4.84c.85.004 1.71.115 2.51.337 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0010 0z"
            />
          </svg>
          <svg
            v-else-if="platform === 'twitter'"
            class="w-5 h-5 pointer-events-none"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 001.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 00-7 3.74 11.65 11.65 0 01-8.45-4.3 4.1 4.1 0 001.27 5.49A4.07 4.07 0 01.8 7.7v.05a4.1 4.1 0 003.3 4.03 4.1 4.1 0 01-1.86.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 010 16.4a11.62 11.62 0 006.29 1.84"
            />
          </svg>
          <svg
            v-else
            class="w-5 h-5 pointer-events-none"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path
              fill-rule="evenodd"
              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Subtle hover effect -->
    <div
      class="absolute inset-0 border border-transparent group-hover:border-indigo-200 rounded-2xl transition-colors duration-500"
    ></div>

    <!-- Code Modal -->
    <CodeModal
      ref="codeModal"
      cardType="Profile Card"
      cardVariant="Professional Clean Style"
      :codeContent="cardCode"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import CodeModal from "../CodeModal.vue";
import { cardCodes } from "../../data/cardCodes.js";

defineProps({
  profile: {
    type: Object,
    required: true,
  },
});

const codeModal = ref(null);
const cardCode = cardCodes.ProfileCard5;

const showCode = () => {
  if (codeModal.value) {
    codeModal.value.openModal();
  }
};
</script>