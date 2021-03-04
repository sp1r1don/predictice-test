export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PrediReflex',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css', 'verte/dist/verte.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/api', '@/plugins/verte'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  eslint: {
    cache: false,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],

  // styleResources: https://github.com/nuxt-community/style-resources-module#readme
  styleResources: {
    stylus: '~./assets/styles/vars/*.styl',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: 'https://jsonplaceholder.typicode.com',
  },

  // Server configuration: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-server
  server: {
    port: 8002,
    host: '0.0.0.0',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
