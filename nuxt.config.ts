// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
   devServer: {
    port: 3036
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@vueform/nuxt', '@pinia/nuxt',  '@vueuse/nuxt'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.scss'
  },
})