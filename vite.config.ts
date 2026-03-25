import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const figmaMockPlugin = () => ({
  name: 'figma-mock',
  resolveId(id: string) {
    if (id.startsWith('figma:')) {
      return '\0' + id;
    }
  },
  load(id: string) {
    if (id.startsWith('\0figma:')) {
      return `export default "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"`;
    }
  }
});

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaMockPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          if (id.includes('lottie-web')) {
            return 'lottie';
          }

            if (id.includes('lenis')) {
              return 'lenis-vendor';
            }

          if (
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.includes('scheduler')
          ) {
            return 'react-vendor';
          }

          if (id.includes('react-router')) {
            return 'router-vendor';
          }

          if (id.includes('i18next') || id.includes('react-i18next')) {
            return 'i18n-vendor';
          }

          if (id.includes('/motion/')) {
            return 'motion-vendor';
          }
        },
      },
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
