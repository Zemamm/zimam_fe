import { z } from 'zod'
import type { ContactFormMessages } from '../i18n/copyTypes'

export function createContactFormSchema(messages: ContactFormMessages) {
  return z.object({
    name: z.string().trim().min(2, messages.name),
    email: z.string().trim().email(messages.email),
    phone: z
      .string()
      .trim()
      .min(7, messages.phone)
      .regex(/^[+\d][\d\s().-]{6,}$/, messages.phone),
    service: z.enum(['saas', 'desktop', 'mobile', 'website', 'other'], {
      message: messages.service,
    }),
    message: z.string().trim().min(10, messages.message),
  })
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactFormSchema>>
