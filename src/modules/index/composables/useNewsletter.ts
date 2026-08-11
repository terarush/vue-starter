import { ref } from 'vue'
import { indexApi } from '../api'
import type { NewsletterForm } from '../types'

// Example composable linking UI to the API
export const useNewsletter = () => {
  const isLoading = ref(false)
  const error = ref<string | null>(null)
  const successMessage = ref<string | null>(null)

  const subscribe = async (data: NewsletterForm) => {
    isLoading.value = true
    error.value = null
    successMessage.value = null
    
    try {
      const response = await indexApi.subscribeToNewsletter(data)
      successMessage.value = response.message
      return response
    } catch (err: any) {
      error.value = err.message || 'An error occurred'
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    error,
    successMessage,
    subscribe
  }
}
