export default defineNuxtConfig({
  css: ['~/assets/css/main.css'], // Путь к вашему файлу
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      'autoprefixer': {},
    },
  },
})