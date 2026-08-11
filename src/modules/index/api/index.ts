import type { NewsletterForm, ContactForm } from '../types'

// Example API service functions for the index module
export const indexApi = {
  subscribeToNewsletter: async (data: NewsletterForm) => {
    // Simulate API network request delay
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.log('API call: Subscribed to newsletter', data)
    return { success: true, message: 'Successfully subscribed!' }
  },

  submitContactForm: async (data: ContactForm) => {
    // Simulate API network request delay
    await new Promise((resolve) => setTimeout(resolve, 800))
    console.log('API call: Submitted contact form', data)
    return { success: true, message: 'Message sent successfully!' }
  }
}
