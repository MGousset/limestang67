<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article
    class="group h-full rounded-2xl border-t-[6px] border-lime-gold bg-white px-6 py-8 text-center shadow-[0_8px_30px_rgba(40,35,10,0.14)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(40,35,10,0.22)]"
  >
    <div
      class="mx-auto flex size-16 items-center justify-center rounded-full bg-lime-light/30 text-4xl transition duration-300 group-hover:scale-110 group-hover:bg-lime-light/50"
      aria-hidden="true"
    >
      {{ icon }}
    </div>

    <h3 class="mt-5 text-xl font-bold text-charcoal">
      {{ title }}
    </h3>

    <p class="mt-3 leading-7 text-gray-text">
      {{ description }}
    </p>
  </article>
</template>
