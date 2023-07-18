export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt', 'nuxt-icon'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
