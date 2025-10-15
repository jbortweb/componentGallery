export default `<template>
  <div
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    class="relative w-full max-w-xl mx-auto h-96 overflow-hidden rounded-lg cursor-pointer"
  >
    <img
      src="/img/habita.webp"
      alt="Habitación moderna"
      class="w-full h-full object-cover"
    />

    <!-- Texto "frontend developer" visible solo sin hover -->
    <div
      :class="[
        'absolute bottom-6 left-6 text-white font-bold text-2xl transition-opacity duration-500',
        { 'opacity-0': isHovered, 'opacity-100': !isHovered }
      ]"
    >
      <span class="block text-sm font-light uppercase tracking-wider">Frontend</span>
      <span class="block text-3xl font-bold">Developer</span>
    </div>

    <div
      class="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible"
    >
      <svg
        :class="[
          'svg-overlay transition-all duration-[1000ms] ease-out',
          { 'svg-zoomed': isHovered },
        ]"
        viewBox="0 0 1024 1024"
        preserveAspectRatio="none"
      >
        <rect
          :class="[
            'svg-background transition-all duration-[1500ms]',
            { 'bg-visible': isHovered },
          ]"
          x="0"
          y="0"
          width="1024"
          height="1024"
          fill="transparent"
        />
        <g transform="translate(0,1024) scale(0.1,-0.1)">
          <path
            :class="['svg-text', { 'text-colored': isHovered }]"
            d="M0 5120 l0 -5120 5120 0 5120 0 0 5120 0 5120 -5120 0 -5120 0 0 -5120z m1145 1081 c45 -20 92 -70 101 -107 11 -43 -2 -120 -25 -153 -36 -50 -94 -75 -177 -76 -61 0 -77 4 -119 30 -58 36 -85 83 -85 148 0 72 34 124 105 161 42 22 149 20 200 -3z m625 -282 l0 -301 39 31 c128 101 312 118 471 43 69 -32 157 -120 192 -192 54 -109 71 -198 71 -380 1 -191 -14 -274 -67 -387 -60 -126 -164 -216 -290 -249 -102 -27 -252 -12 -325 34 -14 8 -45 33 -67 55 l-41 39 -8 -47 c-11 -80 1 -75 -181 -75 l-164 0 0 865 0 865 185 0 185 0 0 -301z m7120 1 l0 -300 49 35 c71 51 133 76 211 82 169 14 329 -61 413 -194 35 -55 73 -166 87 -255 16 -101 8 -352 -14 -433 -72 -261 -238 -394 -479 -383 -107 5 -166 27 -239 89 -26 21 -49 39 -51 39 -3 0 -8 -25 -12 -55 l-6 -55 -165 0 -164 0 0 865 0 865 185 0 185 0 0 -300z m-3580 -50 l0 -150 100 0 100 0 0 -125 0 -125 -101 0 -100 0 3 -331 3 -331 29 -25 c26 -22 36 -25 90 -21 34 3 69 8 79 13 16 7 17 -3 17 -134 l0 -140 -57 -17 c-43 -12 -84 -15 -177 -12 -106 4 -128 8 -178 32 -97 46 -149 124 -168 252 -5 38 -10 214 -10 392 l0 322 -80 0 -80 0 0 125 0 125 80 0 80 0 0 143 c0 79 3 147 7 150 3 4 87 7 185 7 l178 0 0 -150z m-1905 -145 c214 -46 371 -195 430 -411 9 -32 18 -111 22 -174 11 -218 -43 -378 -171 -506 -116 -116 -240 -164 -423 -164 -129 0 -188 12 -288 60 -178 86 -281 246 -304 472 -43 434 194 734 584 737 44 0 111 -6 150 -14z m1279 9 c14 -5 16 -31 16 -181 l0 -174 -37 8 c-53 11 -144 8 -188 -7 -21 -7 -58 -31 -82 -53 l-43 -40 0 -398 0 -399 -185 0 -185 0 0 615 0 615 175 0 175 0 0 -54 c0 -88 6 -93 51 -42 45 51 93 83 152 102 45 14 125 18 151 8z m3292 -5 c91 -16 200 -73 264 -138 110 -111 148 -227 151 -453 l1 -143 -377 -3 -377 -2 7 -33 c27 -122 125 -196 261 -197 94 0 185 29 253 80 29 23 54 40 55 38 1 -2 36 -44 79 -95 42 -50 77 -96 77 -101 0 -5 -26 -34 -57 -64 -105 -100 -245 -148 -429 -148 -130 0 -199 15 -310 70 -149 73 -251 208 -289 384 -26 116 -17 312 19 422 91 283 364 439 672 383z m-2037 -61 c6 -29 36 -183 66 -343 31 -159 59 -299 62 -310 5 -18 111 334 183 613 l25 92 137 0 c76 0 138 -2 138 -5 0 -4 154 -563 186 -675 l16 -55 64 315 c35 173 69 339 75 368 l10 52 176 0 c136 0 174 -3 170 -12 -2 -7 -71 -284 -153 -615 l-148 -603 -161 0 -162 0 -17 63 c-9 34 -56 197 -104 361 -83 289 -87 298 -99 268 -7 -18 -47 -150 -89 -295 -41 -144 -84 -292 -95 -329 l-20 -68 -157 0 -157 0 -149 598 c-82 328 -151 605 -154 615 -4 16 9 17 171 17 l176 0 10 -52z m-4702 -645 c-3 -738 -3 -727 -55 -830 -47 -90 -141 -152 -266 -174 -69 -12 -245 -8 -278 6 -16 6 -18 23 -18 140 l0 132 73 -4 c83 -5 123 13 154 69 17 31 18 80 21 691 l3 657 185 0 185 0 -4 -687z"
          />
          <path
            :class="['svg-text', { 'text-colored': isHovered }]"
            d="M1854 5431 c-22 -10 -50 -31 -62 -46 -21 -27 -22 -36 -22 -276 l0 -248 31 -36 c18 -20 44 -42 58 -49 66 -34 163 -27 224 16 67 48 103 184 94 357 -8 159 -47 244 -131 282 -53 24 -139 24 -192 0z"
          />
          <path
            :class="['svg-text', { 'text-colored': isHovered }]"
            d="M8974 5431 c-22 -10 -50 -31 -62 -46 -21 -27 -22 -36 -22 -273 0 -225 2 -247 20 -276 59 -97 225 -111 310 -26 60 60 75 119 75 290 0 160 -14 224 -63 282 -55 65 -173 88 -258 49z"
          />
          <path
            :class="['svg-text', { 'text-colored': isHovered }]"
            d="M3149 5422 c-85 -54 -127 -181 -116 -356 7 -123 29 -188 81 -243 105 -112 273 -78 335 66 30 70 43 202 31 307 -19 174 -89 254 -220 254 -55 0 -73 -5 -111 -28z"
          />
          <path
            :class="['svg-text', { 'text-colored': isHovered }]"
            d="M7765 5434 c-60 -31 -95 -82 -114 -163 l-9 -41 200 0 201 0 -6 55 c-11 108 -75 165 -184 165 -33 0 -71 -7 -88 -16z"
          />
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isHovered = ref(false);
</script>

<style scoped>
/* Estado inicial: SVG muy grande e invisible */
.svg-overlay {
  width: 50%;
  height: 50%;
  transform: scale(70);
  transform-origin: center;
}

/* Estado hover: SVG se reduce y se hace visible ocupando todo el contenedor */
.svg-overlay.svg-zoomed {
  width: 100%;
  height: 100%;
  transform: scale(1);
}

/* Color del texto SVG */
.svg-text {
  fill: #000000;
  transition: fill 0.7s ease 0.8s;
}

.svg-text.text-colored {
  fill: #1a1a2e;
}

/* Fondo del SVG - cambia de transparente a blanco */
.svg-background {
  fill: transparent;
  transition: fill 1.5s ease 0.8s;
}

.svg-background.bg-visible {
  fill: white;
}
</style>
`
