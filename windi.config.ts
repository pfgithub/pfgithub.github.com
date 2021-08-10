import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{js,jsx,ts,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  plugins: [
    require('tailwindcss-image-rendering')(),
  ],
})
