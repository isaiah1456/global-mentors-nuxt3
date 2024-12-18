import { ContactInformation } from './data_helpers/contact'

export default defineNuxtConfig({
  typescript: {
    strict: true,
    typeCheck: true,
    shim: false
  },
  // Cookie control with consent
  cookieControl: {
    barPosition: 'bottom-left',
    cookies: {
      necessary: [],
      optional: [
        {
          description: {
            // eslint-disable-next-line max-len
            en: 'These cookies gather information about how many people visit and use our website. Switching these off means we can\'t gather information to improve the experience.'
          },
          id: 'ga',
          name: {
            en: 'Analytics'
          },
          targetCookieIds: ['cookie_control_consent', 'cookie_control_enabled_cookies'],
        }
      ],
    },
    localeTexts: {
      en: {
        accept: 'Accept all',
        bannerDescription: 'This website uses cookies to improve your experience.',
        manageCookies: 'Manage cookies',
        save: 'Save preferences',
      },
    },
    isAcceptNecessaryButtonEnabled: false,
    // typed module options
  },
  gtag: {
    id: process.env.GOOGLE_ANALYTICS_MEASUREMENTID
  },
  // End of Cookie control with consent
  runtimeConfig: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    GOOGLE_RECAPTCHA_SECRET_KEY: process.env.GOOGLE_RECAPTCHA_SECRET_KEY,
    public: {
      GOOGLE_ANALYTICS_MEASUREMENTID: process.env.GOOGLE_ANALYTICS_MEASUREMENTID,
      SENTRY_DATA_SOURCE_NAME: process.env.SENTRY_DATA_SOURCE_NAME,
      GOOGLE_RECAPTCHA_SITE_KEY: process.env.GOOGLE_RECAPTCHA_SITE_KEY,
      indexable: process.env.NUXT_INDEXABLE,
      siteUrl: ContactInformation.fullURL,
      siteName: 'Games mystery',
      siteDescription: 'Estás listo para resolver el misterio',
      language: 'es-ES', // prefer more explicit language codes like `en-AU` over `en`
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@dargmuesli/nuxt-cookie-control', 'nuxt-gtag'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/main.scss";'
        }
      }
    }
  },
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify']
  },
  nitro: {
    serverAssets: [{
      baseName: 'authkey',
      dir: './authkey'
    }],
  },

  app: {
    head: {
      title: 'PROYECT NAME',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      style: [
        // { children: 'html, body { overflow-x: hidden; }' },
      ]
    },
  },
})
