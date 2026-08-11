<script setup lang="ts">
import { Sun, Moon } from '@lucide/vue'
import { useColorMode } from '@vueuse/core'
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'
import IndexView from '../views/IndexView.vue'

const mode = useColorMode()
const router = useRouter()

const toggleTheme = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}

const handleGetStarted = () => {
  router.push('/get-started')
}
</script>

<template>
  <div
    class="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-6 transition-colors duration-200 relative">
    <button type="button" @click="toggleTheme" aria-label="Toggle theme" data-dev-source="src/modules/index/Index.vue"
      class="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900 transition-colors duration-200">
      <Sun v-if="mode === 'dark'" class="h-4 w-4" />
      <Moon v-else class="h-4 w-4" />
    </button>

    <div class="max-w-md w-full text-center space-y-6">
      <div class="space-y-2">
        <p class="text-sm font-bold tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
          Vue Starter
        </p>
        <h1 class="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Vue Starter
        </h1>
        <p class="text-sm text-zinc-500 dark:text-zinc-400 max-w-xs mx-auto leading-relaxed">
          Production-ready foundation for your next web app. Vite, Vue Router,
          Pinia, Tailwind, and more.
        </p>
      </div>
      <Button variant="default" @click="handleGetStarted">
        Get Started
      </Button>

      <IndexView />
    </div>
  </div>
</template>