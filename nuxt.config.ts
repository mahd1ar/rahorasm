// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {
          href: "https://cdn.jsdelivr.net/gh/rastikerdar/shabnam-font@v5.0.1/dist/font-face.css",
          rel: "stylesheet",
          type: "text/css"
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/@majidh1/jalalidatepicker/dist/jalalidatepicker.min.css"
        }
      ]
    }
  },
  devServer: {
    port: 3036
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@pinia/nuxt', '@vueuse/nuxt'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.scss'
  },
})