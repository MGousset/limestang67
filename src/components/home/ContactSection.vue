<script setup>
import BaseButton from '@/components/ui/BaseButton.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
import { useQuoteModal } from '@/composables/useQuoteModal'

const { openQuoteModal } = useQuoteModal()
</script>

<template>
  <section
    id="contact"
    class="scroll-mt-20 bg-charcoal px-5 py-16 text-white sm:px-8 sm:py-24"
    aria-labelledby="contact-title"
  >
    <div class="mx-auto max-w-5xl">
      <div id="contact-title">
        <SectionTitle
          eyebrow="Un projet de mariage ?"
          title="Parlons de votre mariage"
          light
        />
      </div>

      <p
        class="mx-auto mt-7 max-w-2xl text-center text-lg leading-8 text-white/80"
      >
        Contactez-nous pour vérifier la disponibilité de la Mustang et
        imaginer une prestation adaptée au programme de votre journée.
      </p>

      <div
        class="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2"
      >
        <a
          href="tel:+33609897663"
          class="group flex items-center gap-5 rounded-2xl border border-white/15 bg-white/5 p-6 text-white no-underline transition duration-300 hover:-translate-y-1 hover:border-lime-light/70 hover:bg-white/10"
          aria-label="Appeler Lime Stang 67 au 06 09 89 76 63"
        >
          <span
            class="flex size-14 shrink-0 items-center justify-center rounded-full bg-lime-light text-charcoal transition group-hover:scale-105"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              class="size-7"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92Z"
              />
            </svg>
          </span>

          <span>
            <span
              class="block font-sans text-xs font-bold uppercase tracking-widest text-white/60"
            >
              Téléphone
            </span>

            <span
              class="mt-1 block text-lg font-bold text-lime-light sm:text-xl"
            >
              06 09 89 76 63
            </span>
          </span>
        </a>

        <a
          class="cursor-pointer group flex items-center gap-5 rounded-2xl border border-white/15 bg-white/5 p-6 text-white no-underline transition duration-300 hover:-translate-y-1 hover:border-lime-light/70 hover:bg-white/10"
          aria-label="Envoyer un e-mail à Lime Stang 67"
          @click="openQuoteModal"
        >
          <span
            class="flex size-14 shrink-0 items-center justify-center rounded-full bg-lime-light text-charcoal transition group-hover:scale-105"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              class="size-7"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
              />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </span>

          <span class="min-w-0">
            <span
              class="block font-sans text-xs font-bold uppercase tracking-widest text-white/60"
            >
              E-mail
            </span>

            <span
              class="mt-1 block break-all text-base font-bold text-lime-light sm:text-lg"
            >
              arnaud_brisson@icloud.com
            </span>
          </span>
        </a>
      </div>

      <div class="mt-10 text-center">
        <BaseButton
          variant="primary"
          class="w-full sm:w-auto"
          @click="openQuoteModal"
        >
          Demander un devis
        </BaseButton>
      </div>
    </div>
  </section>
</template>
