import sgMail from '@sendgrid/mail'
import dayjs from 'dayjs'
import { ContactInformation } from '../../data_helpers/contact'

export const folderPath = './server'

const config = useRuntimeConfig().SENDGRID_API_KEY
sgMail.setApiKey(config)
interface EmailRecipient {
  email: string;
}

interface Personalization {
  to: EmailRecipient[];
  cc: EmailRecipient[];
  bcc: EmailRecipient[];
}

export interface EmailData {
  personalizations: Personalization[];
  from: string;
  subject: string;
  text: string;
  html: string;
}

export default defineEventHandler(async () => { })

export async function sendMailPreconfigured (emailRecipient: string, html: string) {
  return await sendMail({
    personalizations: [
      {
        to: [
          { email: emailRecipient }
        ],
        cc: [],
        bcc: [
          { email: 'developers.totemstudio@gmail.com' },
          { email: ContactInformation.email }
        ]
      }
    ],
    from: 'hello@thetotem.studio', // Must be a validated email in the SendGrid Dashboard
    subject: 'totem - Thanks for reaching us',
    text: 'This can\'t be empty', // Or Sentry will complain
    html,
  })
}
export async function sendMail (msg: EmailData) {
  let res
  try {
    const resp = await sgMail.send(msg)
    res = resp[0].statusCode
  } catch (error: any) {
    if (error.code) {
      res = error.code
    } else {
      res = null
    }
  }

  return res
}

export function currentTimeToHuman (): string {
  const humanReadableFormat = dayjs().format('ddd, MMM D, YYYY')
  return humanReadableFormat
}

export function timeToHuman (date: Date): string {
  const humanReadableFormat = dayjs(date).format('MMMM YYYY')
  return humanReadableFormat
}
