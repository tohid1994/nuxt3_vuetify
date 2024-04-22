import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  modules: [
    '@pinia/nuxt',
    '@formkit/auto-animate/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },

  ],

  css: ['~/assets/css/main.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['vuetify', '@vuepic/vue-datepicker'],
  },


  runtimeConfig: {
    apiSecret: '123',
    public: {
      baseURL: process.env.BASE_URL,
      baseToken: process.env.TOKEN,
      bmsUrl: process.env.BMS_URL,
      appId: process.env.APP_ID,
    },
  },


  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },


})
