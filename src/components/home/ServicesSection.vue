<script setup>
import SectionTitle from '@/components/ui/SectionTitle.vue'
import ServiceCard from '@/components/home/ServiceCard.vue'

const services = [
  {
    icon: '💍',
    title: 'Transport des mariés',
    description:
      "Votre arrivée et vos déplacements dans une voiture d'exception.",
  },
  {
    icon: '🚗',
    title: 'Avec chauffeur',
    description:
      'Un service confortable, élégant et personnalisé.',
  },
  {
    icon: '📸',
    title: 'Séance photos',
    description:
      'Profitez de la Mustang pour immortaliser votre journée.',
  },
  {
    icon: '✨',
    title: 'Prestation sur mesure',
    description:
      'Une organisation adaptée à vos envies et à votre programme.',
  },
]
</script>

<template>
  <section
    id="prestations"
    class="scroll-mt-20 bg-linear-to-br from-[#778218] via-lime-gold to-gold px-5 py-16 sm:px-8 sm:py-24"
    aria-labelledby="services-title"
  >
    <div class="mx-auto max-w-6xl">
      <div id="services-title">
        <SectionTitle
          eyebrow="Votre journée, notre priorité"
          title="Nos prestations"
          light
        />
      </div>

      <p
        class="mx-auto mt-7 max-w-3xl text-center text-lg leading-8 text-white/95"
      >
        Nous vous accompagnons pour faire de votre arrivée un moment élégant,
        mémorable et parfaitement adapté au programme de votre mariage.
      </p>

      <div
        class="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        <ServiceCard
          v-for="service in services"
          :key="service.title"
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
        />
      </div>
    </div>
  </section>
</template>
