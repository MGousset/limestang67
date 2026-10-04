<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>

<template>
  <section
    id="zone-intervention"
    class="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-24"
    aria-labelledby="coverage-title"
  >
    <div
      class="absolute -left-24 top-1/2 size-72 -translate-y-1/2 rounded-full bg-lime-light/15 blur-3xl"
      aria-hidden="true"
    />

    <div
      class="absolute -right-24 top-1/2 size-72 -translate-y-1/2 rounded-full bg-gold/15 blur-3xl"
      aria-hidden="true"
    />

    <div class="relative mx-auto max-w-5xl">
      <div id="coverage-title">
        <SectionTitle
          eyebrow="Brest et ses alentours"
          title="Notre zone d’intervention"
        />
      </div>

      <div
        class="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-8 rounded-3xl border border-lime-gold/25 bg-cream p-7 shadow-[0_12px_40px_rgba(70,65,20,0.1)] sm:p-10 md:flex-row md:text-left"
      >
        <div
          class="flex size-20 shrink-0 items-center justify-center rounded-full bg-lime-light text-charcoal shadow-lg"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            class="size-10"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
            />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>

        <div class="text-center md:text-left">
          <h3 class="text-2xl font-bold text-charcoal">
            Au départ de Brest
          </h3>

          <p class="mt-3 text-lg leading-8 text-gray-text">
            Lime Stang 67 intervient à
            <strong class="text-charcoal">Brest 29200</strong>
            et dans les communes alentour. Pour une prestation plus éloignée,
            contactez-nous afin que nous puissions étudier ensemble votre
            projet et les conditions de déplacement.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
