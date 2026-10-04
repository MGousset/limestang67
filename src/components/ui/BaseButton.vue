<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    required: true,
  },

  variant: {
    type: String,
    default: 'primary',
    validator: (value) =>
      ['primary', 'secondary', 'dark'].includes(value),
  },

  external: {
    type: Boolean,
    default: false,
  },

  ariaLabel: {
    type: String,
    default: '',
  },
})

const variantClasses = computed(() => {
  const variants = {
    primary: [
      'border-lime-light',
      'bg-lime-light',
      'text-charcoal',
      'hover:border-lime-gold',
      'hover:bg-lime-gold',
    ],

    secondary: [
      'border-white',
      'bg-transparent',
      'text-white',
      'hover:bg-white',
      'hover:text-charcoal',
    ],

    dark: [
      'border-lime-light',
      'bg-charcoal',
      'text-white',
      'hover:bg-lime-light',
      'hover:text-charcoal',
    ],
  }

  return variants[props.variant]
})
</script>

<template>
  <a
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :aria-label="ariaLabel || undefined"
    :class="[
      'cursor-pointer',
      'inline-flex min-h-13 items-center justify-center',
      'rounded-full border-2 px-7 py-3',
      'font-sans text-base font-bold no-underline',
      'transition duration-300 ease-out',
      'hover:-translate-y-1 hover:shadow-xl',
      'focus-visible:outline-3 focus-visible:outline-offset-4',
      'focus-visible:outline-lime-light',
      variantClasses,
    ]"
  >
    <slot />
  </a>
</template>
