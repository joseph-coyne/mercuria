export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Mercuria',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'Mercuria', name: 'Mercuria', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/tailwind.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/vue-hammer.js', mode: 'client' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/svg',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa\
    '@nuxtjs/tailwindcss',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    // configPath: '~/config/tailwind.config.json',
    // jit: true,
    exposeConfig: true,
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },
  firebase: {
    config: {
      apiKey: 'AIzaSyBnnaSh0mr-jH-4V4BUkpU6Ta-Kh0i4rbA',
      authDomain: 'mercuria-b1fea.firebaseapp.com',
      databaseURL: 'https://mercuria-b1fea.firebaseio.com',
      projectId: 'mercuria-b1fea',
      storageBucket: 'mercuria-b1fea.appspot.com',
      messagingSenderId: '728967272416',
      appId: '1:728967272416:web:21dd4a4b2cb7fbb3043d85',
      measurementId: 'G-2SYDR2XPTD',
    },

    services: {
      auth: {
        persistence: 'local',
        initialize: {
          onAuthStateChangedAction: 'auth/onAuthStateChangedAction',
          subscribeManually: false,
        },
        ssr: false,
        // emulatorPort: 9099,
        // emulatorHost: 'http://localhost',
      },
      database: true,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
