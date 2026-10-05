<script setup>
import BaseLink from '@/components/ui/BaseLink.vue'
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>

<template>
  <section
    id="reseau"
    class="relative overflow-hidden bg-linear-to-br from-[#101010] via-[#242424] to-[#353535] px-5 py-16 text-white sm:px-8 sm:py-24"
    aria-labelledby="tiktok-title"
  >
    <div
      class="absolute -left-20 top-0 size-72 rounded-full bg-[#25f4ee]/10 blur-3xl"
      aria-hidden="true"></div>

    <div
      class="absolute -right-20 bottom-0 size-72 rounded-full bg-[#fe2c55]/10 blur-3xl"
      aria-hidden="true"></div>

    <div class="relative mx-auto max-w-4xl text-center">
      <div
        class="mx-auto mb-7 flex size-20 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-xl backdrop-blur"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          class="size-10 text-lime-light"
          fill="currentColor"
        >
          <path
            d="M16.6 5.82a4.55 4.55 0 0 1-1.06-3.01h-3.28v13.16a2.76 2.76 0 1 1-2.76-2.76c.29 0 .57.05.83.13V10a6.04 6.04 0 1 0 5.2 5.97V9.3a7.8 7.8 0 0 0 4.57 1.46V7.5a4.57 4.57 0 0 1-3.5-1.68Z"
          />
        </svg>
      </div>

      <div id="tiktok-title">
        <SectionTitle
          eyebrow="@limestang67"
          title="Suivez Lime Stang 67 sur TikTok"
          light
        />
      </div>

      <p
        class="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/80"
      >
        Découvrez la Mustang, les préparatifs et les événements de Lime Stang
        67 sur notre compte TikTok.
      </p>

      <div class="mt-9">
        <BaseLink
          href="https://www.tiktok.com/@limestang67"
          variant="dark"
          external
          aria-label="Voir le compte TikTok de Lime Stang 67, ouverture dans un nouvel onglet"
          class="w-full sm:w-auto"
        >
          Voir notre TikTok

          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            class="ml-2 size-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path
              d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            />
          </svg>
        </BaseLink>
      </div>
    </div>
  </section>
</template>
