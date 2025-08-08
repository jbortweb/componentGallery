export const ProfileCard5 = `<template>
  <div
    class="profile-card-5 group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 w-96"
  >
    <!-- Minimalist top accent -->
    <div
      class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    ></div>
    <div class="p-8">
      <!-- Professional header -->
      <div class="text-center mb-8">
        <div class="relative inline-block mb-6">
          <!-- Professional avatar -->
          <img
            src="../assets/logo.svg"
            alt="Laura Chen"
            class="w-28 h-28 rounded-full object-cover shadow-lg border-4 border-white group-hover:scale-105 transition-transform duration-300"
          />
          <!-- Professional status -->
          <div
            class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full flex items-center justify-center shadow-lg"
          >
            <div class="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>

        <!-- Nombre y título -->
        <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">
          Laura Chen
        </h2>
        <div class="text-center">
          <p class="text-indigo-600 font-semibold">Product Manager</p>
          <p class="text-gray-500 text-sm">StartupXYZ</p>
        </div>
      </div>

      <!-- Biografía profesional -->
      <div class="mb-8">
        <p class="text-gray-600 text-center leading-relaxed">
          Product Manager con experiencia en productos digitales y
          metodologías ágiles
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
            class="px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 text-xs font-medium rounded-lg transition-colors duration-300 border border-transparent hover:border-indigo-200"
          >
            Product Strategy
          </span>
          <span
            class="px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 text-xs font-medium rounded-lg transition-colors duration-300 border border-transparent hover:border-indigo-200"
          >
            Agile
          </span>
          <span
            class="px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 text-xs font-medium rounded-lg transition-colors duration-300 border border-transparent hover:border-indigo-200"
          >
            User Research
          </span>
          <span
            class="px-3 py-1 bg-gray-100 hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 text-xs font-medium rounded-lg transition-colors duration-300 border border-transparent hover:border-indigo-200"
          >
            Analytics
          </span>
        </div>
      </div>

      <!-- Professional contact -->
      <div class="flex justify-center space-x-4 relative z-10">
        <a
          href="https://www.linkedin.com/in/jordi-bort/"
          target="_blank"
          rel="noopener noreferrer"
          class="w-12 h-12 rounded-full bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 group/social cursor-pointer"
          aria-label="Conectar en linkedin"
          @click.stop
        >
          <!-- LinkedIn Icon -->
          <svg
            class="w-5 h-5 pointer-events-none"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            />
          </svg>
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="w-12 h-12 rounded-full bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 group/social cursor-pointer"
          aria-label="Conectar en twitter"
          @click.stop
        >
          <!-- Twitter Icon -->
          <svg
            class="w-5 h-5 pointer-events-none"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 001.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 00-7 3.74 11.65 11.65 0 01-8.45-4.3 4.1 4.1 0 001.27 5.49A4.07 4.07 0 01.8 7.7v.05a4.1 4.1 0 003.3 4.03 4.1 4.1 0 01-1.86.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 010 16.4a11.62 11.62 0 006.29 1.84"
            />
          </svg>
        </a>
        <a
          href="https://portafoliojbortweb.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="w-12 h-12 rounded-full bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-all duration-300 hover:scale-110 group/social cursor-pointer"
          aria-label="Conectar en medium"
          @click.stop
        >
          <!-- Medium Icon -->
          <svg
            class="w-5 h-5 pointer-events-none"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"
            />
          </svg>
        </a>
      </div>
    </div>

    <!-- Subtle hover effect -->
    <div
      class="absolute inset-0 border border-transparent group-hover:border-indigo-200 rounded-2xl transition-colors duration-500"
    ></div>

  </div>
</template>

<script>
export default {
  name: 'ProfileCard5'
}
</script>`;