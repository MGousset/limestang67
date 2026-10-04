<script setup>
import {
  nextTick,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  watch,
} from 'vue'

import { useQuoteModal } from '@/composables/useQuoteModal'
import BaseButton from '@/components/ui/BaseButton.vue'

const { isQuoteModalOpen, closeQuoteModal } = useQuoteModal()

const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

const closeButton = ref(null)
const previousActiveElement = ref(null)

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref('')

const form = reactive({
  name: '',
  surname: '',
  email: '',
  phone: '',
  weddingDate: '',
  location: '',
  message: '',
  consent: false,
  website: '',
})

function resetForm() {
  form.name = ''
  form.email = ''
  form.phone = ''
  form.weddingDate = ''
  form.location = ''
  form.message = ''
  form.consent = false
  form.website = ''

  errorMessage.value = ''
  isSubmitted.value = false
}

function handleClose() {
  if (isSubmitting.value) {
    return
  }

  closeQuoteModal()
}

function handleKeydown(event) {
  if (!isQuoteModalOpen.value) {
    return
  }

  if (event.key === 'Escape') {
    handleClose()
  }
}

async function submitForm() {
  if (!formEndpoint) {
    errorMessage.value =
      'Le service d’envoi n’est pas encore configuré. Vérifiez la variable VITE_FORMSPREE_ENDPOINT.'

    return
  }

  errorMessage.value = ''
  isSubmitting.value = true

  try {
    const response = await fetch(formEndpoint, {
      method: 'POST',

      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        _subject: `Nouvelle demande de devis — ${form.name}`,
        name: form.name,
        email: form.email,
        phone: form.phone || 'Non renseigné',
        weddingDate: form.weddingDate || 'Non renseignée',
        location: form.location || 'Non renseigné',
        message: form.message,
        consent: form.consent ? 'Oui' : 'Non',

        // Champ anti-spam
        _gotcha: form.website,
      }),
    })

    if (!response.ok) {
      const result = await response.json().catch(() => null)

      const formspreeMessage = result?.errors
        ?.map((error) => error.message)
        .join(' ')

      throw new Error(
        formspreeMessage ||
          'Une erreur est survenue pendant l’envoi du formulaire.',
      )
    }

    isSubmitted.value = true
  } catch (error) {
    errorMessage.value =
      error instanceof Error
        ? error.message
        : 'Impossible d’envoyer la demande. Veuillez réessayer.'
  } finally {
    isSubmitting.value = false
  }
}

watch(isQuoteModalOpen, async (isOpen) => {
  if (isOpen) {
    previousActiveElement.value = document.activeElement
    document.body.style.overflow = 'hidden'

    errorMessage.value = ''
    isSubmitted.value = false

    await nextTick()
    closeButton.value?.focus()
  } else {
    document.body.style.overflow = ''
    previousActiveElement.value?.focus?.()
  }
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
        v-if="isQuoteModalOpen"
        class="fixed inset-0 z-[200] overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
        @click.self="handleClose"
      >
        <div class="flex min-h-full items-center justify-center">
          <div
            class="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-cream shadow-2xl"
          >
            <!-- En-tête -->
            <div
              class="relative bg-linear-to-br from-charcoal via-[#292b1c] to-[#525b28] px-6 py-8 text-white sm:px-10"
            >
              <div
                class="absolute -right-10 -top-10 size-40 rounded-full bg-lime-light/10"
                aria-hidden="true"
              />

              <div class="relative pr-14">
                <p
                  class="font-sans text-xs font-bold uppercase tracking-[0.25em] text-lime-light"
                >
                  Lime Stang 67
                </p>

                <h2
                  id="quote-modal-title"
                  class="mt-2 text-3xl font-bold sm:text-4xl"
                >
                  Demander un devis
                </h2>

                <p class="mt-3 leading-7 text-white/80">
                  Présentez-nous votre mariage et nous vous répondrons dans les
                  meilleurs délais.
                </p>
              </div>

              <Button
                ref="closeButton"
                type="button"
                class="absolute right-5 top-5 flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-black/20 text-white transition hover:rotate-90 hover:border-lime-light hover:bg-lime-light hover:text-charcoal focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-lime-light"
                aria-label="Fermer le formulaire"
                @click="handleClose"
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
              </Button>
            </div>

            <!-- Confirmation -->
            <div
              v-if="isSubmitted"
              class="px-6 py-12 text-center sm:px-10 sm:py-16"
            >
              <div
                class="mx-auto flex size-20 items-center justify-center rounded-full bg-lime-light text-charcoal"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="size-10"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
              </div>

              <h3 class="mt-6 text-3xl font-bold text-charcoal">
                Demande envoyée
              </h3>

              <p class="mx-auto mt-4 max-w-lg text-lg leading-8 text-gray-text">
                Merci pour votre message. Lime Stang 67 vous répondra dans les
                meilleurs délais.
              </p>

              <BaseButton
                type="button"
                class="mt-8 inline-flex min-h-13 cursor-pointer items-center justify-center rounded-full bg-lime-light px-7 py-3 font-sans font-bold text-charcoal transition hover:-translate-y-1 hover:bg-lime-gold hover:shadow-xl"
                @click="
                  () => {
                    resetForm()
                    closeQuoteModal()
                  }
                "
              >
                Fermer
              </BaseButton>
            </div>

            <!-- Formulaire -->
            <form
              v-else
              class="space-y-6 px-6 py-8 sm:px-10 sm:py-10"
              @submit.prevent="submitForm"
            >
              <!-- Champ anti-spam invisible -->
              <div
                class="absolute -left-[9999px]"
                aria-hidden="true"
              >
                <label for="quote-website">
                  Ne pas remplir ce champ
                </label>

                <input
                  id="quote-website"
                  v-model="form.website"
                  type="text"
                  name="_gotcha"
                  tabindex="-1"
                  autocomplete="off"
                >
              </div>

              <div class="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    for="quote-name"
                    class="mb-2 block font-sans text-sm font-bold text-charcoal"
                  >
                    Nom
                    <span class="text-red-700">*</span>
                  </label>

                  <input
                    id="quote-name"
                    v-model.trim="form.name"
                    type="text"
                    name="name"
                    autocomplete="name"
                    required
                    class="min-h-12 w-full rounded-xl border border-lime-gold/35 bg-white px-4 py-3 text-charcoal outline-none transition placeholder:text-gray-400 focus:border-lime-gold focus:ring-3 focus:ring-lime-light/30"
                    placeholder="Votre nom"
                  >
                </div>

                <div>
                <label
                    for="quote-surname"
                    class="mb-2 block font-sans text-sm font-bold text-charcoal"
                  >
                    Prénom
                    <span class="text-red-700">*</span>
                  </label>

                  <input
                    id="quote-surname"
                    v-model.trim="form.surname"
                    type="text"
                    name="surname"
                    autocomplete="surname"
                    required
                    class="min-h-12 w-full rounded-xl border border-lime-gold/35 bg-white px-4 py-3 text-charcoal outline-none transition placeholder:text-gray-400 focus:border-lime-gold focus:ring-3 focus:ring-lime-light/30"
                    placeholder="Votre prénom"
                  >
                </div>

                <div>
                  <label
                    for="quote-email"
                    class="mb-2 block font-sans text-sm font-bold text-charcoal"
                  >
                    Adresse e-mail
                    <span class="text-red-700">*</span>
                  </label>

                  <input
                    id="quote-email"
                    v-model.trim="form.email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    required
                    class="min-h-12 w-full rounded-xl border border-lime-gold/35 bg-white px-4 py-3 text-charcoal outline-none transition placeholder:text-gray-400 focus:border-lime-gold focus:ring-3 focus:ring-lime-light/30"
                    placeholder="vous@exemple.fr"
                  >
                </div>

                <div>
                  <label
                    for="quote-phone"
                    class="mb-2 block font-sans text-sm font-bold text-charcoal"
                  >
                    Téléphone
                    <span class="text-red-700">*</span>
                  </label>

                  <input
                    id="quote-phone"
                    v-model.trim="form.phone"
                    type="tel"
                    name="phone"
                    autocomplete="tel"
                    class="min-h-12 w-full rounded-xl border border-lime-gold/35 bg-white px-4 py-3 text-charcoal outline-none transition placeholder:text-gray-400 focus:border-lime-gold focus:ring-3 focus:ring-lime-light/30"
                    placeholder="06 12 34 56 78"
                    required
                  >
                </div>

                <div>
                  <label
                    for="quote-date"
                    class="mb-2 block font-sans text-sm font-bold text-charcoal"
                  >
                    Date du mariage
                    <span class="text-red-700">*</span>
                  </label>

                  <input
                    id="quote-date"
                    v-model="form.weddingDate"
                    type="date"
                    name="weddingDate"
                    class="min-h-12 w-full rounded-xl border border-lime-gold/35 bg-white px-4 py-3 text-charcoal outline-none transition focus:border-lime-gold focus:ring-3 focus:ring-lime-light/30"
                    required
                    >
                </div>
              </div>

              <div>
                <label
                  for="quote-location"
                  class="mb-2 block font-sans text-sm font-bold text-charcoal"
                >
                  Lieu de la prestation
                  <span class="text-red-700">*</span>
                </label>

                <input
                  id="quote-location"
                  v-model.trim="form.location"
                  type="text"
                  name="location"
                  autocomplete="address-level2"
                  class="min-h-12 w-full rounded-xl border border-lime-gold/35 bg-white px-4 py-3 text-charcoal outline-none transition placeholder:text-gray-400 focus:border-lime-gold focus:ring-3 focus:ring-lime-light/30"
                  placeholder="Brest, Plouzané, Guipavas…"
                  required
                >
              </div>

              <div>
                <label
                  for="quote-message"
                  class="mb-2 block font-sans text-sm font-bold text-charcoal"
                >
                  Votre demande
                  <span class="text-red-700">*</span>
                </label>

                <textarea
                  id="quote-message"
                  v-model.trim="form.message"
                  name="message"
                  rows="6"
                  required
                  minlength="10"
                  class="w-full resize-y rounded-xl border border-lime-gold/35 bg-white px-4 py-3 text-charcoal outline-none transition placeholder:text-gray-400 focus:border-lime-gold focus:ring-3 focus:ring-lime-light/30"
                  placeholder="Présentez-nous votre mariage, vos horaires et le parcours envisagé…">
                </textarea>
              </div>

              <label class="flex cursor-pointer items-start gap-3">
                <input
                  v-model="form.consent"
                  type="checkbox"
                  name="consent"
                  required
                  class="mt-1 size-5 shrink-0 accent-lime-gold"
                >

                <span class="font-sans text-sm leading-6 text-gray-text">
                  J’accepte que mes informations soient utilisées pour répondre
                  à ma demande.
                  <span class="text-red-700">*</span>
                </span>
              </label>

              <div
                v-if="errorMessage"
                role="alert"
                class="rounded-xl border border-red-300 bg-red-50 px-4 py-3 font-sans text-sm text-red-800"
              >
                {{ errorMessage }}
              </div>

              <div
                class="flex flex-col-reverse gap-3 border-t border-lime-gold/20 pt-6 sm:flex-row sm:justify-end"
              >
                <BaseButton
                  type="button"
                  variant="dark"
                  :disabled="isSubmitting"
                  @click="handleClose"
                >
                  Annuler
                </BaseButton>

                <BaseButton
                variant="primary"
                  type="submit"
                  :disabled="isSubmitting"
                >
                  <svg
                    v-if="isSubmitting"
                    class="mr-2 size-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    />

                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z"
                    />
                  </svg>

                  {{
                    isSubmitting
                      ? 'Envoi en cours…'
                      : 'Envoyer ma demande'
                  }}
                </BaseButton>
              </div>

              <p class="text-center font-sans text-xs text-gray-text/80">
                Les champs marqués d’un astérisque sont obligatoires.
              </p>
            </form>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
