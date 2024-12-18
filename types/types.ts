export enum FormState {
    IDLE = 'IDLE',
    SENDING = 'SENDING',
    SENT = 'SENT',
    ERROR = 'ERROR',
  }

  export interface ContactForm {
    name: string
    phone: string
    email: string
    subject: string
    body: string
    formtype: string
    status: FormState
  }
