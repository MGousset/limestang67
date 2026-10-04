<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
</script>

<template>
  <section
    id="presentation"
    class="scroll-mt-24 bg-cream px-5 py-16 sm:px-8 sm:py-24"
    aria-labelledby="presentation-title"
  >
    <div class="mx-auto max-w-4xl text-center">
      <div id="presentation-title">
        <SectionTitle
          eyebrow="Une voiture d’exception"
          title="Le charme d’une Mustang mythique de 1967"
        />
      </div>

      <p
        class="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-text sm:text-xl"
      >
        Élégante, authentique et pleine de caractère, notre Mustang Lime Gold
        apportera une touche unique à votre mariage. Nous vous accompagnons
        avec soin, ponctualité et professionnalisme pour rendre votre journée
        encore plus exceptionnelle.
      </p>

      <div
        class="mx-auto mt-10 grid max-w-3xl gap-5 text-left sm:grid-cols-3"
      >
        <article
          class="rounded-2xl border border-lime-gold/20 bg-white p-6 shadow-[0_8px_30px_rgba(70,65,20,0.08)]"
        >
          <p class="font-sans text-sm font-bold uppercase tracking-wider text-lime-gold">
            Millésime
          </p>

          <p class="mt-2 text-2xl font-bold text-charcoal">
            1967
          </p>
        </article>

        <article
          class="rounded-2xl border border-lime-gold/20 bg-white p-6 shadow-[0_8px_30px_rgba(70,65,20,0.08)]"
        >
          <p class="font-sans text-sm font-bold uppercase tracking-wider text-lime-gold">
            Couleur
          </p>

          <p class="mt-2 text-2xl font-bold text-charcoal">
            Lime Gold
          </p>
        </article>

        <article
          class="rounded-2xl border border-lime-gold/20 bg-white p-6 shadow-[0_8px_30px_rgba(70,65,20,0.08)]"
        >
          <p class="font-sans text-sm font-bold uppercase tracking-wider text-lime-gold">
            Service
          </p>

          <p class="mt-2 text-2xl font-bold text-charcoal">
            Avec chauffeur
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
