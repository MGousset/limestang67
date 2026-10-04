<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
import BaseButton from '@/components/ui/BaseButton.vue'


import mustang1Url from '@/assets/images/m5.png'
import mustang2Url from '@/assets/images/m2.jpeg'
import mustang3Url from '@/assets/images/m7.png'

const photos = [
  {
    src: mustang1Url,
    alt: 'Mustang Lime Gold de 1967',
  },
  {
    src: mustang2Url,
    alt: 'Détail de la Mustang Lime Gold',
  },
  {
    src: mustang3Url,
    alt: 'Mustang de mariage Lime Gold à Brest',
  }
]
</script>

<template>
  <section
    id="galerie"
    class="scroll-mt-20 bg-cream px-5 py-16 sm:px-8 sm:py-24"
    aria-labelledby="gallery-title"
  >
    <div class="mx-auto max-w-6xl">
      <div id="gallery-title">
        <SectionTitle
          eyebrow="En images"
          title="Découvrez la Mustang"
        />
      </div>

      <p
        class="mx-auto mt-7 max-w-3xl text-center text-lg leading-8 text-gray-text"
      >
        Découvrez les lignes emblématiques, la teinte Lime Gold et le charme
        intemporel de cette authentique Mustang de 1967.
      </p>

      <div class="mt-12 grid gap-5 md:grid-cols-3">
        <figure
          v-for="(photo) in photos"
          :key="photo.src"
          :class="[
            'group relative overflow-hidden rounded-2xl bg-lime-light/20',
            'border-4 border-white shadow-[0_8px_30px_rgba(0,0,0,0.16)]',
            ':hover: border-lime-light'
          ]"
        >
        <RouterLink
          to="/galerie">
        <img
            :src="photo.src"
            :alt="photo.alt"
            width="800"
            height="600"
            loading="lazy"
            class="aspect-[4/3] size-full object-cover transition duration-500 ease-out group-hover:scale-105"
          >

          <div
            class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent opacity-60 transition group-hover:opacity-30"
            aria-hidden="true">
          </div>
        </RouterLink>
        </figure>
      </div>

      <div class="mt-12 text-center sm:mt-16">
        <RouterLink
          to="/galerie">
        <BaseButton
        variant="primary">
          Voir toutes les photos

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
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </BaseButton>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
