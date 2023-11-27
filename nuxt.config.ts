// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_BASE_API
    }

  },
  
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
}
)