import { readFileSync } from 'fs'
import { resolve } from 'path'
import colors from 'vuetify/es5/util/colors'

function resolveByConfig(...args) {
  return resolve(__dirname, './config', ...args)
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | power-utils',
    title: 'power-utils',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'baidu-site-verification', content: 'code-7pnylDNzlc' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=G-SQCWGRDMTG',
      },
      {
        hid: 'gtag',
        innerHTML: readFileSync(resolveByConfig('gtag.js'), {
          encoding: 'utf-8',
        }),
      },
      {
        hid: 'hmt',
        innerHTML: readFileSync(resolveByConfig('hmt.js'), {
          encoding: 'utf-8',
        }),
      },
    ],
    __dangerouslyDisableSanitizersByTagID: {
      gtag: ['innerHTML'],
      hmt: ['innerHTML'],
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/utilConfigPlugin.ts',
    '~/plugins/vuetifyDateTimePicker.ts',
    '~/plugins/colorSchemePlugin.ts',
    '~/plugins/utils/index.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vuetify-datetime-picker'],
  },
}
