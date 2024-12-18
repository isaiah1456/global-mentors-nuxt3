import type { IReCaptchaComposition } from 'vue-recaptcha-v3'

interface RecaptchaParams {
    successCallback: Function;
    failCallback: Function;
    recaptchaInstance: IReCaptchaComposition | undefined
}

export const recaptcha = async ({ successCallback, failCallback, recaptchaInstance }: RecaptchaParams) => {
  // Optional you can await for the reCaptcha load
  await recaptchaInstance?.recaptchaLoaded()
  // Get the token, a custom action could be added as argument to the method
  const token = await recaptchaInstance?.executeRecaptcha('submitcontactform')
  if (token) {
    const verifyTokenInServer = await $fetch('/api/verify-captcha', { method: 'POST', body: { token } })
    if (verifyTokenInServer) {
      successCallback()
      return
    }
  }
  failCallback()
}
