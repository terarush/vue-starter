import { z } from 'zod'
import { newsletterSchema, contactSchema } from '../schemas'

// Infer TypeScript types directly from Zod schemas
export type NewsletterForm = z.infer<typeof newsletterSchema>
export type ContactForm = z.infer<typeof contactSchema>

// Example standard TypeScript interface
export interface ModuleFeature {
  id: string
  title: string
  description: string
  isActive: boolean
}
