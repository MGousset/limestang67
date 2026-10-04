<script setup>
defineProps({
 title: {
 type: String,
 required: true,
 },

 eyebrow: {
 type: String,
 default: '',
 },

 light: {
 type: Boolean,
 default: false,
 },
})
</script>

<template>
  <div class="text-center">
    <p
      v-if="eyebrow"
      :class="[
        'mb-3 font-sans text-xs font-bold uppercase tracking-[0.25em] sm:text-sm',
        light ? 'text-lime-light' : 'text-lime-gold',
      ]"
    >
      {{ eyebrow }}
    </p>

    <h2
      :class="[
        'text-3xl leading-tight font-bold sm:text-4xl lg:text-[42px]',
        light ? 'text-white' : 'text-charcoal',
      ]"
    >
      {{ title }}
    </h2>

    <div
      class="mx-auto mt-4 h-1.5 w-20 rounded-full bg-linear-to-r from-lime-gold to-gold"
      aria-hidden="true"
    />
  </div>
</template>