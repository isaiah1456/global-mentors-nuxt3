import * as path from 'node:path'
import type { H3Event } from 'h3'
import { google } from 'googleapis'

export default defineEventHandler(async (_: H3Event) => {
  const filePath = path.join(process.cwd(), 'server/authkey', 'googleapi.json')
  const auth = new google.auth.GoogleAuth({
    keyFile: filePath,
    scopes: ['https://www.googleapis.com/auth/calendar.events.readonly'],
  })
  const client = await auth.getClient()
  google.options({
    auth: client as unknown as string
  })

  const calendar = google.calendar({
    version: 'v3',
  })

  const events = await calendar.events.list({
    calendarId: '926e709e3cc56e90fb838dd70bd4effeb12e7cc23d86edf3cae18beee788e486@group.calendar.google.com'
  })

  const e = events.data.items
  return { e }
})
