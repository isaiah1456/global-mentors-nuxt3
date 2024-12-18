import type { H3Event } from 'h3'
import { defineEventHandler, readBody } from 'h3'
import { currentTimeToHuman, sendMailPreconfigured } from './email'

import { ContactInformation } from '~/data_helpers/contact'

import type { ContactForm } from '~/types/types'
// import { ContactInformation } from '~/data_helper/contact'

// Maintain this outside of the function so it's only read once
// const contactFormFile = fs.readFileSync(`${folderPath}/templates/contact-form-email.html`, 'utf-8')

export default defineEventHandler(async (event: H3Event) => {
  const body: ContactForm = await readBody(event)
  const contactFormFile = await useStorage('assets:templates').getItem('contact-form-email.html') as string
  const html = replaceTemplate(contactFormFile, body)
  const responseStatus = await sendMailPreconfigured(body.email, html)
  if (responseStatus === 202) {
    return responseStatus
  } else {
    event.node.res.end()
  }
})

const replaceTemplate = (temp: string, data: ContactForm): string => {
  return temp.replace(/{% user_name %}/g, `${data.name}`)
    .replace(/{% company_name %}/g, `${ContactInformation.title}`)
    .replace(/{% user_contact_subject %}/g, `${data.name}`)
    .replace(/{% user_contact_date %}/g, currentTimeToHuman())

    .replace(/{% user_contact_message %}/g, `${data.body}`)
    .replace(/{% company_url %}/g, ContactInformation.URL)
    .replace(/{% company_contact_page %}/g, `${ContactInformation.URL}/contact`)
    .replace(/{% phone %}/g, ContactInformation.phoneNumber)
    .replace(/{% email %}/g, ContactInformation.email)
    .replace(/{% city %}/g, ContactInformation.city)
}
