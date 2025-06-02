import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/front-end', // or '/your-app/' or the appropriate base URL
  build: {
    // ... other build options
  },
})