import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/app.scss',
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],


  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  // pwa: {
  //     manifest: {
  //       name: "tohid",
  //       icons: [
  //         {
  //           "src": "icon.png",
  //           "sizes": "64x64",
  //           type: "image/png",
  //         },
  //         {
  //           "src": "icon.png",
  //           "sizes": "120x120",
  //           type: "image/png",
  //         },
  //         {
  //           "src": "icon.png",
  //           "sizes": "144x144",
  //           type: "image/png",
  //         },
  //         {
  //           "src": "icon.png",
  //           "sizes": "152x152",
  //           type: "image/png"
  //         },
  //         {
  //           "src": "icon.png",
  //           "sizes": "192x192",
  //           type: "image/png"
  //         },
  //         {
  //           "src": "icon.png",
  //           "sizes": "384x384",
  //           type: "image/png"
  //         },
  //         {
  //           "src": "icon.png",
  //           "sizes": "512x512",
  //           type: "image/png"
  //         },
  //       ],

  //     },
  //     devOptions: {
  //       enabled: false,
  //       type: "module",
  //     },
  //   }

})
