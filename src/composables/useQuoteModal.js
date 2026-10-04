import { ref } from 'vue'

const isQuoteModalOpen = ref(false)

export function useQuoteModal() {
  function openQuoteModal() {
    isQuoteModalOpen.value = true
  }

  function closeQuoteModal() {
    isQuoteModalOpen.value = false
  }

  return {
    isQuoteModalOpen,
    openQuoteModal,
    closeQuoteModal,
  }
}
