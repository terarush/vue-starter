<script setup lang="ts">
import NewsletterForm from '../components/NewsletterForm.vue'
import { useIndexStore } from '../stores/useIndexStore'

const store = useIndexStore()
</script>

<template>
  <section class="p-8 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/50 shadow-sm mt-8 w-full max-w-lg text-left">
    <h2 class="text-xl font-bold mb-2">Module View Example</h2>
    <p class="mb-4 text-zinc-600 dark:text-zinc-400 text-sm">
      This view brings together components, stores, and composables strictly from this module.
      <br />
      Has visited before: <strong>{{ store.hasVisitedBefore ? 'Yes' : 'No' }}</strong>
    </p>
    
    <button 
      @click="store.markAsVisited()" 
      class="mb-6 underline text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
    >
      Click to change state
    </button>

    <div class="pt-6 border-t border-zinc-200 dark:border-zinc-800">
      <NewsletterForm />
    </div>
  </section>
</template>
