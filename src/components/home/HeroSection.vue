<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import heroImageUrl from '@/assets/images/banner.jpeg'
import { useQuoteModal } from '@/composables/useQuoteModal'

const { openQuoteModal } = useQuoteModal()
</script>

<template>
  <header
    class="relative isolate flex min-h-170 items-center justify-center overflow-hidden px-5 pb-18 pt-36 text-center text-white sm:px-8"
  >
    <!-- Photo de fond -->
    <img
      :src="heroImageUrl"
      alt=""
      class="absolute inset-0 -z-30 size-full object-cover"
    >

    <!-- Voile sombre -->
    <div
      class="absolute inset-0 -z-20 bg-linear-to-b from-black/60 via-black/45 to-[#414b0a]/65"
      aria-hidden="true"></div>

    <!-- Texture lumineuse -->
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,0.35)_100%)]"
      aria-hidden="true"></div>

    <div class="mx-auto max-w-4xl">
      <p
        class="mx-auto mb-7 inline-flex border-2 border-lime-light px-5 py-2 font-sans text-xs font-bold uppercase tracking-[0.3em] text-lime-light sm:text-sm"
      >
        Mustang de mariage
      </p>

      <h1
        class="m-0 text-5xl leading-none font-bold text-white drop-shadow-[2px_3px_8px_rgba(0,0,0,0.9)] sm:text-6xl lg:text-8xl"
      >
        Lime Stang 67
      </h1>

      <h2
        class="mt-4 text-2xl leading-tight font-bold text-lime-light sm:text-3xl lg:text-4xl color-lime-gold"
      >
        Une arrivée inoubliable en Mustang Lime Gold
      </h2>

      <p
        class="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/95 sm:text-xl lg:text-[21px]"
      >
        Sublimez votre mariage à bord d’une authentique Mustang de 1967,
        avec chauffeur, à Brest et dans ses alentours.
      </p>

      <div
        class="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row mb-5 sm:hidden"
      >
        <!-- Visible uniquement sur mobile -->
        <BaseButton
          href="tel:+33609897663"
          variant="primary"
          aria-label="Appeler Lime Stang 67 au 06 09 89 76 63"
          class="w-full"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            class="mr-2 size-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2
         19.8 19.8 0 0 1-8.63-3.07
         19.5 19.5 0 0 1-6-6
         19.8 19.8 0 0 1-3.07-8.67
         A2 2 0 0 1 4.11 2h3
         a2 2 0 0 1 2 1.72
         c.12.9.33 1.78.62 2.62
         a2 2 0 0 1-.45 2.11L8 9.73
         a16 16 0 0 0 6 6l1.28-1.28
         a2 2 0 0 1 2.11-.45
         c.84.29 1.72.5 2.62.62
         A2 2 0 0 1 22 16.92Z"
            />
          </svg>

          Appeler maintenant
        </BaseButton>

        <!-- Formulaire sur tablette et ordinateur -->
        <BaseButton
          variant="secondary"
          class="w-full"
          @click="openQuoteModal"
        >
          Demander un devis
        </BaseButton>

        
      </div>

      <div class="mt-9 flex-col items-center justify-center gap-4 sm:flex-row mb-5 hidden sm:flex">
        <!-- Formulaire disponible sur tous les écrans -->
        <BaseButton
          variant="primary"
          class="w-full sm:w-auto"
          @click="openQuoteModal"
        >
          Demander un devis
        </BaseButton>
      </div>
    </div>

    <!-- Indicateur de défilement -->
    <a
      href="#presentation"
      aria-label="Découvrir Lime Stang 67"
      class="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full p-2 text-white/75 transition hover:text-lime-light"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        class="size-7 animate-bounce"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </a>
  </header>
</template>
