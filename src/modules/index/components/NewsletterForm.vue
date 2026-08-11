<script setup lang="ts">
import { ref } from 'vue'
import { useNewsletter } from '../composables/useNewsletter'

const { subscribe, isLoading, successMessage } = useNewsletter()
const email = ref('')

const handleSubmit = async () => {
  await subscribe({ email: email.value, subscribeToUpdates: true })
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-4 max-w-sm">
    <label class="text-sm font-medium">Subscribe to Newsletter</label>
    <div class="flex gap-2">
      <input
        v-model="email"
        type="email"
        placeholder="Enter your email"
        class="border border-zinc-300 dark:border-zinc-700 bg-transparent rounded px-3 py-2 text-sm flex-1"
        required
      />
      <button
        type="submit"
        :disabled="isLoading"
        class="bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 px-4 py-2 rounded text-sm font-medium disabled:opacity-50"
      >
        {{ isLoading ? 'Submitting...' : 'Subscribe' }}
      </button>
    </div>
    <p v-if="successMessage" class="text-green-600 dark:text-green-400 text-sm">{{ successMessage }}</p>
  </form>
</template>
