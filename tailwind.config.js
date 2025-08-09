/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colores personalizados usando nuestras variables CSS
      colors: {
        'spectral': {
          'dark-start': 'var(--color-spectral-dark-start)',
          'dark-mid': 'var(--color-spectral-dark-mid)',
          'dark-accent': 'var(--color-spectral-dark-accent)',
          'blue': 'var(--color-spectral-blue)',
          'purple': 'var(--color-spectral-purple)',
        },
        'glass': {
          'light': 'var(--color-glass-light)',
          'medium': 'var(--color-glass-medium)',
          'strong': 'var(--color-glass-strong)',
          'dark': 'var(--color-glass-dark)',
          'border': 'var(--color-glass-border)',
        },
        'particle': {
          'cyan': 'var(--color-particle-cyan)',
          'blue': 'var(--color-particle-blue)',
          'purple': 'var(--color-particle-purple)',
          'pink': 'var(--color-particle-pink)',
          'green': 'var(--color-particle-green)',
        }
      },
      // Sombras personalizadas
      boxShadow: {
        'spectral-sm': 'var(--shadow-spectral-sm)',
        'spectral': 'var(--shadow-spectral-md)',
        'spectral-lg': 'var(--shadow-spectral-lg)',
        'spectral-xl': 'var(--shadow-spectral-xl)',
      },
      // Espaciado personalizado
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
      },
      // Radios de borde personalizados
      borderRadius: {
        'system-sm': 'var(--radius-sm)',
        'system': 'var(--radius-md)',
        'system-lg': 'var(--radius-lg)',
        'system-xl': 'var(--radius-xl)',
        'system-2xl': 'var(--radius-2xl)',
      },
      // Duraciones de transición
      transitionDuration: {
        'fast': 'var(--duration-fast)',
        'normal': 'var(--duration-normal)',
        'slow': 'var(--duration-slow)',
        'slower': 'var(--duration-slower)',
      },
      // Z-index personalizado
      zIndex: {
        'background': 'var(--z-background)',
        'base': 'var(--z-base)',
        'content': 'var(--z-content)',
        'overlay': 'var(--z-overlay)',
        'modal': 'var(--z-modal)',
        'tooltip': 'var(--z-tooltip)',
        'toast': 'var(--z-toast)',
      },
      // Gradientes de fondo
      backgroundImage: {
        'spectral-gradient': 'var(--gradient-spectral-main)',
        'hero-overlay': 'var(--gradient-hero-overlay)',
        'particle-gradient': 'var(--gradient-particle)',
        'text-gradient': 'var(--gradient-text-primary)',
        'card-border': 'var(--gradient-card-border)',
      },
      // Animaciones personalizadas
      animation: {
        'float-up': 'float-up infinite linear',
        'gradient-shift': 'gradient-shift 20s ease infinite',
        'pulse-glow': 'pulse-glow 8s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite alternate',
        'float-gentle': 'float-gentle 4s ease-in-out infinite',
      },
      // Keyframes personalizados
      keyframes: {
        'float-up': {
          '0%': {
            transform: 'translateY(100vh) rotate(0deg)',
            opacity: '0',
          },
          '10%': {
            opacity: '0.7',
          },
          '90%': {
            opacity: '0.7',
          },
          '100%': {
            transform: 'translateY(-100px) rotate(360deg)',
            opacity: '0',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.3',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.6',
            transform: 'scale(1.2)',
          },
        },
        'shimmer': {
          '0%': {
            'text-shadow': '2px 2px 12px rgba(0, 0, 0, 0.8), 0 0 20px var(--color-primary-400)',
          },
          '100%': {
            'text-shadow': '2px 2px 12px rgba(0, 0, 0, 0.8), 0 0 30px var(--color-secondary-500)',
          },
        },
        'float-gentle': {
          '0%, 100%': {
            transform: 'translateY(0px) scale(1)',
            opacity: '0.7',
          },
          '50%': {
            transform: 'translateY(-10px) scale(1.1)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [
    // Plugin personalizado para nuestras utilidades
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-glass-light': {
          background: 'var(--color-glass-light)',
          'backdrop-filter': 'blur(16px)',
          border: '1px solid var(--color-glass-border)',
        },
        '.bg-glass-medium': {
          background: 'var(--color-glass-medium)',
          'backdrop-filter': 'blur(20px)',
          border: '1px solid var(--color-glass-border)',
        },
        '.bg-glass-strong': {
          background: 'var(--color-glass-strong)',
          'backdrop-filter': 'blur(24px)',
          border: '1px solid var(--color-glass-border)',
        },
        '.bg-glass-dark': {
          background: 'var(--color-glass-dark)',
          'backdrop-filter': 'blur(16px)',
        },
        '.text-gradient-primary': {
          background: 'var(--gradient-text-primary)',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.border-gradient': {
          'border-image': 'var(--gradient-card-border) 1',
        },
        '.bg-grid-pattern': {
          'background-image': `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          'background-size': '60px 60px',
          opacity: '0.3',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
