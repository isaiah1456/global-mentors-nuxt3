import axios from 'axios'

interface IResponse{
    success: boolean,
    challenge_ts: string,
    hostname: string,
    score: number,
    action: string
}

export default defineEventHandler(async (event: any) => {
  event.node.res.setHeader('Content-Type', 'application/json')
  const body = await readBody(event)
  const recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify'
  const recaptchaSecret = useRuntimeConfig().GOOGLE_RECAPTCHA_SECRET_KEY
  const token = body.token
  const finalUrl = `${recaptchaUrl}?secret=${recaptchaSecret}&response=${token}`

  try {
    const response = await axios.get(finalUrl)
    const responseFromGoogle: IResponse = response.data
    if (responseFromGoogle.success && responseFromGoogle.score >= 0.5 && responseFromGoogle.action === 'submitcontactform') {
      // It is a human

      return true
    } else {
      // It is a robot

      return false
    }
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: `${error}`,
    })
  }
})
