export const ProfileCard3 = `<template>
  <div class="relative group w-96">

    <!-- Cyberpunk Card -->
    <div
      class="bg-gray-900 rounded-lg p-6 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 relative overflow-hidden group/card neon-glow"
    >
      <!-- Animated background grid -->
      <div class="absolute inset-0 opacity-10">
        <div class="grid-pattern w-full h-full"></div>
      </div>

      <!-- Neon border glow -->
      <div
        class="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 animate-border-glow"
      ></div>
      <div class="absolute inset-0.5 bg-gray-900 rounded-lg"></div>

      <!-- Glitch overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-scan opacity-0 group-hover/card:opacity-100"
      ></div>

      <!-- Content -->
      <div class="relative z-10">
        <!-- Holographic Avatar -->
        <div class="flex justify-center mb-6">
          <div class="relative">
            <div
              class="w-24 h-24 rounded-full border-2 border-cyan-400 p-1 animate-pulse-neon"
            >
              <img
                src="../assets/logo.svg"
                alt="María López"
                class="w-full h-full rounded-full object-cover filter brightness-110 contrast-110"
              />
              <!-- Holographic effect -->
              <div
                class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-transparent to-purple-500/20 animate-rotate"
              ></div>
            </div>
            <!-- Status indicator -->
            <div
              class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-900 flex items-center justify-center neon-glow-green"
            >
              <div class="w-2 h-2 bg-green-300 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        <!-- Glitch Text -->
        <div class="text-center mb-6">
          <h3
            class="text-2xl font-mono font-bold text-white mb-2 glitch-text"
            data-text="María López"
          >
            María López
          </h3>
          <div
            class="inline-block bg-gradient-to-r from-cyan-400 to-purple-400 text-gray-900 px-4 py-2 rounded font-mono text-sm font-bold mb-2 shadow-neon"
          >
            Data Scientist
          </div>
          <p class="text-cyan-300 text-sm font-mono opacity-80">
            &gt; AI Innovations_
          </p>
        </div>

        <!-- Terminal Bio -->
        <div class="mb-6">
          <div
            class="bg-black/50 border border-green-500/30 rounded p-4 font-mono text-sm min-h-32"
          >
            <div class="text-green-400 mb-2">&gt; cat bio.txt</div>
            <p class="text-green-300 leading-relaxed terminal-bio">
              Experta en machine learning y análisis de datos con enfoque en IA
            </p>
            <div class="text-green-400 mt-2 animate-blink">█</div>
          </div>
        </div>

        <!-- Neon Skills -->
        <div class="mb-6">
          <div class="text-cyan-400 text-sm font-mono mb-3">
            &gt; ./skills --list
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              class="bg-transparent border border-cyan-500/50 text-cyan-300 text-xs font-mono px-3 py-1 rounded hover:border-cyan-400 hover:text-cyan-200 hover:shadow-neon-sm transition-all duration-300 animate-fade-in-cyber"
              style="animation-delay: 0ms"
            >
              Python
            </span>
            <span
              class="bg-transparent border border-cyan-500/50 text-cyan-300 text-xs font-mono px-3 py-1 rounded hover:border-cyan-400 hover:text-cyan-200 hover:shadow-neon-sm transition-all duration-300 animate-fade-in-cyber"
              style="animation-delay: 150ms"
            >
              TensorFlow
            </span>
            <span
              class="bg-transparent border border-cyan-500/50 text-cyan-300 text-xs font-mono px-3 py-1 rounded hover:border-cyan-400 hover:text-cyan-200 hover:shadow-neon-sm transition-all duration-300 animate-fade-in-cyber"
              style="animation-delay: 300ms"
            >
              SQL
            </span>
            <span
              class="bg-transparent border border-cyan-500/50 text-cyan-300 text-xs font-mono px-3 py-1 rounded hover:border-cyan-400 hover:text-cyan-200 hover:shadow-neon-sm transition-all duration-300 animate-fade-in-cyber"
              style="animation-delay: 450ms"
            >
              Data Visualization
            </span>
          </div>
        </div>

        <!-- Holographic Social -->
        <div class="flex justify-center space-x-4 mb-6">
          <a
            href="https://www.linkedin.com/in/jordi-bort/"
            target="_blank"
            class="w-10 h-10 border border-blue-500/50 rounded flex items-center justify-center hover:border-blue-400 hover:shadow-neon-blue transition-all duration-300 transform hover:scale-110 group/social"
          >
            <svg
              class="w-5 h-5 text-blue-400 group-hover/social:text-blue-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/jbortweb"
            target="_blank"
            class="w-10 h-10 border border-purple-500/50 rounded flex items-center justify-center hover:border-purple-400 hover:shadow-neon-purple transition-all duration-300 transform hover:scale-110 group/social"
          >
            <svg
              class="w-5 h-5 text-purple-400 group-hover/social:text-purple-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a
            href="https://portafoliojbortweb.netlify.app/"
            target="_blank"
            class="w-10 h-10 border border-cyan-500/50 rounded flex items-center justify-center hover:border-cyan-400 hover:shadow-neon-cyan transition-all duration-300 transform hover:scale-110 group/social"
          >
            <svg
              class="w-5 h-5 text-cyan-400 group-hover/social:text-cyan-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </svg>
          </a>
        </div>

        <!-- Matrix Button -->
        <button
          class="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded font-mono font-bold hover:from-cyan-400 hover:to-purple-400 transform hover:scale-105 transition-all duration-300 shadow-neon relative overflow-hidden group/btn"
        >
          <span class="relative z-10">[ CONNECT ]</span>
          <div
            class="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-500"
          ></div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileCard3',
}
</script>

<style scoped>
/* Neon effects */
.neon-glow {
  box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
}

.neon-glow-green {
  box-shadow: 0 0 15px rgba(74, 222, 128, 0.5);
}

.shadow-neon {
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
}

.shadow-neon-sm {
  box-shadow: 0 0 5px rgba(34, 211, 238, 0.3);
}

.shadow-neon-blue {
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
}

.shadow-neon-purple {
  box-shadow: 0 0 10px rgba(147, 51, 234, 0.5);
}

.shadow-neon-cyan {
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
}

/* Grid pattern */
.grid-pattern {
  background-image: linear-gradient(
      rgba(34, 211, 238, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Animations */
@keyframes pulse-neon {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(34, 211, 238, 0.8);
  }
  50% {
    box-shadow: 0 0 30px rgba(34, 211, 238, 1);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes border-glow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes scan {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes fade-in-cyber {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

.animate-pulse-neon {
  animation: pulse-neon 2s ease-in-out infinite;
}

.animate-rotate {
  animation: rotate 3s linear infinite;
}

.animate-border-glow {
  background-size: 200% 200%;
  animation: border-glow 3s ease infinite;
}

.animate-scan {
  animation: scan 2s ease-in-out infinite;
}

.animate-fade-in-cyber {
  animation: fade-in-cyber 0.6s ease-out forwards;
  opacity: 0;
}

.animate-blink {
  animation: blink 1s infinite;
}

/* Glitch effect */
.glitch-text {
  position: relative;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.group:hover .glitch-text::before {
  opacity: 0.8;
  color: #ff00ff;
  animation: glitch-1 0.3s infinite;
}

.group:hover .glitch-text::after {
  opacity: 0.8;
  color: #00ffff;
  animation: glitch-2 0.3s infinite;
}

@keyframes glitch-1 {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes glitch-2 {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(2px, -2px);
  }
  40% {
    transform: translate(2px, 2px);
  }
  60% {
    transform: translate(-2px, -2px);
  }
  80% {
    transform: translate(-2px, 2px);
  }
  100% {
    transform: translate(0);
  }
}

/* Typewriter effect */
.typewriter {
  overflow: hidden;
  border-right: 2px solid #00ff00;
  white-space: nowrap;
  animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
}

/* Terminal bio text with proper word wrapping */
.terminal-bio {
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  hyphens: auto;
  max-width: 100%;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #00ff00;
  }
}
</style>`;