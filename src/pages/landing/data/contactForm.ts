import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  email: z.string().trim().email('Please enter a valid email'),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number')
    .regex(/^[+\d][\d\s().-]{6,}$/, 'Please enter a valid phone number'),
  service: z.enum(['saas', 'desktop', 'mobile', 'website', 'other'], {
    message: 'Please select a service',
  }),
  message: z.string().trim().min(10, 'Tell us a bit more (at least 10 characters)'),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>

export const contactServiceOptions = [
  { value: 'saas', label: 'SaaS platform' },
  { value: 'desktop', label: 'Desktop application' },
  { value: 'mobile', label: 'Mobile application' },
  { value: 'website', label: 'Website enhancement' },
  { value: 'other', label: 'Something else' },
] as const
