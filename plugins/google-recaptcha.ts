import { VueReCaptcha } from 'vue-recaptcha-v3'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: useRuntimeConfig().public.GOOGLE_RECAPTCHA_SITE_KEY,
        loaderOptions: {
            autoHideBadge: true,
            explicitRenderParameters: {
                badge: 'inline',
            },

        },
    })
})
