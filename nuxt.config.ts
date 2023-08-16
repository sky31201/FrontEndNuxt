// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/',
  },
  experimental: {
    payloadExtraction: true
  },
  // In server, you can now access config.apiSecret, in addition to config.public
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',
    // Config within public will be also exposed to the client
    public: {
      apiBase: `${process.env.ApiBase}`,
      env: process.env.ENV
    }
  },
  nitro: {
    devProxy: {
      "/api": {
        target: `https://mixtradetest.kgi.com.tw/ServiceWebApi`, // 這裡是介面地址
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
  // 該組態用於伺服器端請求轉發
  routeRules: {
    '/ServiceWebApi/api/**': {
      proxy: { to: process.env.NUXT_PUBLIC_API_RPOXY },
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // 新增Pinia
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', 'nuxt-security'],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      'storeToRefs'
    ],
  },
  plugins: [
    { src: '@/plugins/base64.ts' },
  ],
  build: {
    transpile: ['@vuepic/vue-datepicker']
  }
})
