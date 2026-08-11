import { z } from 'zod'

// Example Zod schema for a newsletter subscription form
export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  subscribeToUpdates: z.boolean().default(true)
})

// Example Zod schema for a basic contact form
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})
