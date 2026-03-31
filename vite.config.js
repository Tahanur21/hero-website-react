import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) return 'react';
          if (id.includes('node_modules/react-router')) return 'router';
          if (id.includes('node_modules/recharts')) return 'charts';
          if (id.includes('node_modules/react-loader-spinner')) return 'spinner';
          if (id.includes('node_modules/react-icons') || id.includes('node_modules/lucide-react')) return 'icons';
          if (id.includes('node_modules/react-toastify')) return 'toast';
        },
      },
    },
  },
})