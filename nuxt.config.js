export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      dir: 'ltr',
      lang: 'ja'
    },
    title: 'Zarusoba DesignWorks',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: 'Zarusoba DesignWorks'},
      { property: 'og:image', content: 'https://media.graphcms.com/LpxzrJrRQSO6Bh6RnMFT'},
      { name: 'twitter:card', content: 'summary_large_image'},
      { name: 'twitter:site', content: '@Z_D_W_'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@500&family=Noto+Sans+JP:wght@500;700&display=swap' },
    ],
    script: [
      { src: 'https://unpkg.com/scrollbooster@2/dist/scrollbooster.min.js', defer: true },
      { src: '/js/luxy.js', defer: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/graphcms.js',
    '~plugins/vue-scrollto',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-device-detect',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
