import { defineStore } from 'pinia'
import { ref } from 'vue'

// Example Pinia store for module-specific state
export const useIndexStore = defineStore('indexModule', () => {
  const hasVisitedBefore = ref(false)
  const activeFeatureId = ref<string | null>(null)

  const markAsVisited = () => {
    hasVisitedBefore.value = true
  }

  const setActiveFeature = (id: string) => {
    activeFeatureId.value = id
  }

  return {
    hasVisitedBefore,
    activeFeatureId,
    markAsVisited,
    setActiveFeature
  }
})
