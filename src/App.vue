<script setup>
import QuoteModal from '@/components/contact/QuoteModal.vue'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppNavbar />

    <div class="grow">
      <RouterView />
    </div>

    <AppFooter />

    <QuoteModal />
  </div>
</template>
