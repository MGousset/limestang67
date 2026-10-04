<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

import SectionTitle from '@/components/ui/SectionTitle.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useQuoteModal } from '@/composables/useQuoteModal'

const { openQuoteModal } = useQuoteModal()


import mustang1Url from '@/assets/images/m5.png'
import mustang2Url from '@/assets/images/m2.jpeg'
import mustang3Url from '@/assets/images/m7.png'
import mustang4Url from '@/assets/images/m1.jpeg'
import mustang5Url from '@/assets/images/m3.jpeg'
import mustang6Url from '@/assets/images/m4.jpeg'
import mustang7Url from '@/assets/images/m6.jpeg'
import mustang8Url from '@/assets/images/m8.png'
import mustang9Url from '@/assets/images/m9.jpeg'

const photos = [
  {
    src: mustang1Url,
    alt: 'Mustang Lime Gold de 1967 de Lime Stang 67',
    title: 'La Mustang Lime Gold',
    description: 'Une authentique Mustang de 1967 pour votre mariage.',
  },
  {
    src: mustang2Url,
    alt: 'Détail de la Mustang Lime Gold de Lime Stang 67',
    title: 'Un véhicule de caractère',
    description:
      'Des lignes emblématiques et une couleur unique pour une arrivée mémorable.',
  },
  {
    src: mustang3Url,
    alt: 'Mustang de mariage Lime Gold à Brest',
    title: 'Une arrivée inoubliable',
    description:
      'La Mustang vous accompagne à Brest et dans les communes alentour.',
  },
  {
    src: mustang5Url,
    alt: 'Détail de la Mustang Lime Gold de Lime Stang 67',
    title: 'Un moment d\'exeption',
  },
  {
    src: mustang4Url,
    alt: 'Détail de la Mustang Lime Gold de Lime Stang 67',
    title: 'Lime Stang 67',
  },
  {
    src: mustang6Url,
    alt: 'Détail de la Mustang Lime Gold de Lime Stang 67',
    title: 'Lime Stang 67',
  },
  {
    src: mustang7Url,
    alt: 'Détail de la Mustang Lime Gold de Lime Stang 67',
    title: 'Lime Stang 67',
  },
  {
    src: mustang8Url,
    alt: 'Détail de la Mustang Lime Gold de Lime Stang 67',
    title: 'Lime Stang 67',
  },{
    src: mustang9Url,
    alt: 'Détail de la Mustang Lime Gold de Lime Stang 67',
    title: 'Lime Stang 67',
  }
]

const selectedIndex = ref(null)

const selectedPhoto = computed(() => {
  if (selectedIndex.value === null) {
    return null
  }

  return photos[selectedIndex.value]
})

function openLightbox(index) {
  selectedIndex.value = index
}

function closeLightbox() {
  selectedIndex.value = null
}

function showPreviousPhoto() {
  if (selectedIndex.value === null) {
    return
  }

  selectedIndex.value =
    (selectedIndex.value - 1 + photos.length) % photos.length
}

function showNextPhoto() {
  if (selectedIndex.value === null) {
    return
  }

  selectedIndex.value = (selectedIndex.value + 1) % photos.length
}

function handleKeydown(event) {
  if (selectedIndex.value === null) {
    return
  }

  if (event.key === 'Escape') {
    closeLightbox()
  }

  if (event.key === 'ArrowLeft') {
    showPreviousPhoto()
  }

  if (event.key === 'ArrowRight') {
    showNextPhoto()
  }
}

watch(selectedIndex, (index) => {
  document.body.style.overflow = index === null ? '' : 'hidden'
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <main class="min-h-screen bg-cream">
    <!-- En-tête de la galerie -->
    <header
      class="relative isolate overflow-hidden bg-charcoal px-5 pb-20 pt-36 text-center text-white sm:px-8 sm:pb-24 sm:pt-40"
    >
      <div
        class="absolute -left-20 top-10 -z-10 size-80 rounded-full bg-lime-gold/15 blur-3xl"
        aria-hidden="true"
      />

      <div
        class="absolute -right-20 bottom-0 -z-10 size-80 rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />

      <div
        class="absolute inset-0 -z-20 bg-linear-to-br from-charcoal via-[#252817] to-[#4a5124]"
        aria-hidden="true"
      />

      <div class="mx-auto max-w-4xl">
        <p
          class="font-sans text-xs font-bold uppercase tracking-[0.3em] text-lime-light sm:text-sm"
        >
          Lime Stang 67
        </p>

        <h1
          class="mt-4 text-4xl leading-tight font-bold text-white sm:text-6xl lg:text-7xl"
        >
          Galerie photos
        </h1>

        <div
          class="mx-auto mt-5 h-1.5 w-20 rounded-full bg-linear-to-r from-lime-gold to-gold"
          aria-hidden="true"
        />

        <p
          class="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl"
        >
          Découvrez le charme, les détails et la teinte unique de notre
          authentique Mustang Lime Gold de 1967.
        </p>
      </div>
    </header>

    <!-- Grille des photos -->
    <section
      class="px-5 py-16 sm:px-8 sm:py-24"
      aria-labelledby="gallery-title"
    >
      <div class="mx-auto max-w-6xl">
        <div id="gallery-title">
          <SectionTitle
            eyebrow="La Mustang en images"
            title="Découvrez chaque détail"
          />
        </div>

        <p
          class="mx-auto mt-7 max-w-3xl text-center text-lg leading-8 text-gray-text"
        >
          Cliquez sur une photo pour l’afficher en grand et parcourir la
          galerie.
        </p>

        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <figure
            v-for="(photo, index) in photos"
            :key="photo.src"
            :class="[
              'group overflow-hidden rounded-2xl border-4 border-white',
              'bg-white shadow-[0_10px_35px_rgba(70,65,20,0.15)]',
              'transition duration-300 hover:-translate-y-2',
              'hover:shadow-[0_18px_45px_rgba(70,65,20,0.24)]',
              index === 0 ? 'sm:col-span-2 lg:col-span-2' : '',
            ]"
          >
            <button
              type="button"
              class="relative block w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-lime-gold"
              :aria-label="`Agrandir la photo : ${photo.title}`"
              @click="openLightbox(index)"
            >
              <img
                :src="photo.src"
                :alt="photo.alt"
                width="1200"
                height="800"
                loading="lazy"
                :class="[
                  'w-full object-cover transition duration-700 ease-out',
                  'group-hover:scale-105',
                  index === 0
                    ? 'aspect-[16/9] lg:h-[500px]'
                    : 'aspect-[4/3] lg:h-[500px]',
                ]"
              >

              <span
                class="absolute inset-0 bg-linear-to-t from-black/75 via-black/5 to-transparent"
                aria-hidden="true"
              />

              <span
                class="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white opacity-100 shadow-lg backdrop-blur-sm transition duration-300 group-hover:scale-110 group-hover:bg-lime-light group-hover:text-charcoal sm:opacity-0 sm:group-hover:opacity-100"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="size-5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="7"
                  />
                  <path d="m20 20-4-4" />
                  <path d="M11 8v6" />
                  <path d="M8 11h6" />
                </svg>
              </span>

              <span class="absolute inset-x-0 bottom-0 block p-5 sm:p-6">
                <span class="block text-xl font-bold text-white sm:text-2xl">
                  {{ photo.title }}
                </span>

                <span
                  class="mt-1 block font-sans text-sm leading-6 text-white/80"
                >
                  {{ photo.description }}
                </span>
              </span>
            </button>
          </figure>
        </div>
      </div>
    </section>

    <!-- Appel à l'action -->
    <section class="px-5 pb-16 sm:px-8 sm:pb-24">
      <div
        class="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-linear-to-br from-[#778218] via-lime-gold to-gold px-6 py-12 text-center text-white shadow-[0_15px_50px_rgba(70,65,20,0.25)] sm:px-10 sm:py-16"
      >
        <div
          class="absolute -left-16 -top-16 size-48 rounded-full border-30 border-white/10"
          aria-hidden="true"
        />

        <div
          class="absolute -bottom-20 -right-20 size-60 rounded-full border-35 border-white/10"
          aria-hidden="true"
        />

        <div class="relative">
          <h2 class="text-3xl font-bold sm:text-4xl">
            Imaginez cette Mustang pour votre mariage
          </h2>

          <p
            class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/95"
          >
            Contactez Lime Stang 67 pour connaître les disponibilités et
            préparer une prestation adaptée à votre journée.
          </p>

          <div
            class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <!-- Téléphone : uniquement sur mobile -->
            <a
              href="tel:+33609897663"
              class="inline-flex min-h-13 w-full items-center justify-center rounded-full border-2 border-charcoal bg-charcoal px-7 py-3 font-sans font-bold text-white transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:hidden"
              aria-label="Appeler Lime Stang 67 au 06 09 89 76 63"
            >
              <svg
                viewBox="0 0 24 24"
                class="mr-2 size-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92Z"
                />
              </svg>

              Appeler maintenant
            </a>

            <!-- E-mail : tablette et ordinateur -->
            <BaseButton
              variant="dark"
              @click="openQuoteModal"
              >
              <svg
                viewBox="0 0 24 24"
                class="mr-2 size-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
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

              Demander un devis
            </BaseButton>

            <RouterLink
              :to="{ path: '/', hash: '#contact' }"
              >
            <BaseButton
            variant="secondary">
              Voir les coordonnées
              </BaseButton>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="selectedPhoto"
          class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          :aria-label="`Photo agrandie : ${selectedPhoto.title}`"
          @click.self="closeLightbox"
        >
          <!-- Fermeture -->
          <button
            type="button"
            class="absolute right-4 top-4 z-20 flex size-12 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white transition hover:rotate-90 hover:border-lime-light hover:bg-lime-light hover:text-charcoal focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-lime-light sm:right-7 sm:top-7"
            aria-label="Fermer la photo"
            @click="closeLightbox"
          >
            <svg
              viewBox="0 0 24 24"
              class="size-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6 6 18" />
            </svg>
          </button>

          <!-- Photo précédente -->
          <button
            v-if="photos.length > 1"
            type="button"
            class="absolute left-2 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white transition hover:border-lime-light hover:bg-lime-light hover:text-charcoal focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-lime-light sm:left-7 sm:size-14"
            aria-label="Afficher la photo précédente"
            @click="showPreviousPhoto"
          >
            <svg
              viewBox="0 0 24 24"
              class="size-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <!-- Contenu principal -->
          <figure class="flex max-h-full max-w-6xl flex-col items-center">
            <img
              :src="selectedPhoto.src"
              :alt="selectedPhoto.alt"
              class="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl"
            >

            <figcaption class="mt-5 max-w-2xl text-center text-white">
              <p class="text-xl font-bold text-lime-light sm:text-2xl">
                {{ selectedPhoto.title }}
              </p>

              <p class="mt-2 font-sans text-sm leading-6 text-white/70 sm:text-base">
                {{ selectedPhoto.description }}
              </p>

              <p class="mt-3 font-sans text-xs text-white/50">
                Photo {{ selectedIndex + 1 }} sur {{ photos.length }}
              </p>
            </figcaption>
          </figure>

          <!-- Photo suivante -->
          <button
            v-if="photos.length > 1"
            type="button"
            class="absolute right-2 top-1/2 z-20 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white transition hover:border-lime-light hover:bg-lime-light hover:text-charcoal focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-lime-light sm:right-7 sm:size-14"
            aria-label="Afficher la photo suivante"
            @click="showNextPhoto"
          >
            <svg
              viewBox="0 0 24 24"
              class="size-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>
