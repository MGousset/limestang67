<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import logoUrl from '../../assets/images/logo.png'

const route = useRoute()
const isMenuOpen = ref(false)

const navigationLinks = [
  {
    label: 'Accueil',
    to: '/',
  },
  {
    label: 'Prestations',
    to: {
      path: '/',
      hash: '#prestations',
    },
  },
  {
    label: 'Photos',
    to: '/galerie',
  },
  {
    label: 'Contact',
    to: {
      path: '/',
      hash: '#contact',
    },
  },
]

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function handleEscape(event) {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  },
)

watch(isMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>

<template>
  <nav
    class="absolute inset-x-0 top-0 z-50 border-b border-lime-light/30 bg-charcoal/90 backdrop-blur-md"
    aria-label="Navigation principale"
  >
    <div
      class="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
    >
      <RouterLink
        to="/"
        class="relative z-50 flex items-center gap-3 font-sans text-lg font-bold text-white no-underline"
        aria-label="Lime Stang 67 - Retour à l'accueil"
        @click="closeMenu"
      >
        <img
          :src="logoUrl"
          alt=""
          width="52"
          height="52"
          class="size-13 rounded-full bg-white object-contain p-0.5 shadow-lg"
        >

        <span class="hidden sm:inline">
          Lime Stang 67
        </span>
      </RouterLink>

      <!-- Navigation sur ordinateur -->
      <div class="hidden items-center gap-7 md:flex">
        <RouterLink
          v-for="link in navigationLinks"
          :key="link.label"
          :to="link.to"
          class="font-sans text-sm font-medium text-white transition-colors hover:text-lime-light focus-visible:text-lime-light focus-visible:outline-none"
        >
          {{ link.label }}
        </RouterLink>

        <a
          href="https://www.tiktok.com/@limestang67"
          target="_blank"
          rel="noopener noreferrer"
          class="font-sans text-sm font-medium text-white transition-colors hover:text-lime-light focus-visible:text-lime-light focus-visible:outline-none"
        >
          TikTok
        </a>
      </div>

      <!-- Bouton du menu mobile -->
      <button
        type="button"
        class="relative z-50 flex size-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-lime-light hover:text-lime-light md:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-navigation"
        :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
        @click="toggleMenu"
      >
        <span class="sr-only">
          {{ isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu' }}
        </span>

        <svg
          v-if="!isMenuOpen"
          aria-hidden="true"
          viewBox="0 0 24 24"
          class="size-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>

        <svg
          v-else
          aria-hidden="true"
          viewBox="0 0 24 24"
          class="size-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </svg>
      </button>
    </div>

    <!-- Navigation mobile -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="-translate-y-3 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-3 opacity-0"
    >
      <div
        v-if="isMenuOpen"
        id="mobile-navigation"
        class="absolute left-0 top-full w-full border-t border-white/10 bg-charcoal px-5 py-6 shadow-2xl md:hidden"
      >
        <div class="flex flex-col gap-2">
          <RouterLink
            v-for="link in navigationLinks"
            :key="link.label"
            :to="link.to"
            class="rounded-lg px-4 py-3 font-sans font-medium text-white transition hover:bg-white/10 hover:text-lime-light"
            @click="closeMenu"
          >
            {{ link.label }}
          </RouterLink>

          <a
            href="https://www.tiktok.com/@limestang67"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-lg px-4 py-3 font-sans font-medium text-white transition hover:bg-white/10 hover:text-lime-light"
            @click="closeMenu"
          >
            TikTok
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>
