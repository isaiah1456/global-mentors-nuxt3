<template>
  <div class="info">
    <form @submit.prevent="submitForm">
      <div class="items mt-12">
        <div class="form-group">
          <input
            id="name"
            v-model="state.name"
            autocomplete="off"
            name="name"
            type="text"
            placeholder="Escribe aquí tu nombre"
            required
          >
          <label for="name">Nombre</label>
        </div>
      </div>

      <div class="count">
        <div class="buttons">
          <v-btn
            :loading="state.status === FormState.SENDING"
            variant="tonal"
            class="buttons btn-vue"
            type="submit"
          >
            Reservar
          </v-btn>
        </div>
      </div>
    </form>
  </div>
</template>

  <script setup lang="ts">
  import { useReCaptcha } from 'vue-recaptcha-v3'
import { recaptcha } from '~/composables/recaptcha'
  import { FormState } from '~/types/types'

  const recaptchaInstance = useReCaptcha()
  const state = ref({
    status: FormState.IDLE,
    name: ''
  })

  const submitForm = async () => {
    state.value.status = FormState.SENDING
    await recaptcha({
      recaptchaInstance,
      successCallback: sendForm,
      failCallback: failedCaptcha,
    })
  }
  async function sendForm () {
      try {
        const data = await $fetch('/api/send-contact-form-email', {
          method: 'POST',
          body: state.value
        })

        if (data === 202) {
          state.value.status = FormState.SENT
        }
      } catch (error) {
        state.value.status = FormState.ERROR
      }
    }
  function failedCaptcha () {
    state.value.status = FormState.ERROR
  }

  // async function reserveGafame () {
  //   state.status = FormState.SENDING
  //   const orderDetails = {
  //     orderamount: getPrice(),
  //     orderparticipants: shoppingCart.persons,
  //     ordergamename: shoppingCart.currentGame?.name,
  //     ordercustomernumber: shoppingCart.phone,
  //     formtype: shoppingCart.formtype
  //   }

  //   try {
  //     await $fetch('/api/booking-confirmation-email', {
  //     method: 'POST',
  //     body: { ...shoppingCart, ...orderDetails },
  //     })

  //   state.status = FormState.SENT
  //   } catch (error) {
  //     state.status = FormState.ERROR
  //   }
  // }
  </script>

  <style lang="scss" scoped>
  .info {
    @apply mx-auto w-[9] p-6 rounded-md;
    min-height: 100%;

    border: 1px solid $footer-color;
    color: white;
    .title {
      @apply w-full items-center  text-sm;
      h3 {
        @apply text-3xl uppercase;
        font-family: 'The Simbiod';
      }
      p {
        @apply text-xl p-0;
      }
      input {
        @apply outline-none border-0;
      }
    }

    .count {
      @apply flex justify-end  gap-8;
      span {
        @apply text-base;
        color: $button-color;
        font-weight: 'Lato-italic';
      }
      .buttons {
        @apply flex items-center gap-6 mb-12;
        button {
          @apply px-8 py-3 whitespace-nowrap;
          &.cancel {
            background: none;
            box-shadow: 0px 0px 0px 1px white inset; // Inline border
          }
        }
      }
    }
  }

  .info {
    @media (max-width: 550px) {
      padding: 0;
      border: none;
    }
    @media (max-width: 430px) {
      .buttons {
        @apply mx-auto w-full;
        flex-direction: column;
        button {
          @apply mx-auto;
          width: 100%;
        }
      }
    }
  }
  .items {
    @apply grid md:grid-cols-2 gap-12 pb-10;
    .form-group {
      @apply w-full relative mb-6 md:mb-4 mt-4;
      textarea,
      input {
        @apply h-10 w-full border-b-2 text-sm outline-none;
        color: white;
      }
      textarea {
        height: 100%;
      }
      label {
        @apply absolute left-0 text-sm -top-5;
        color: white;
      }
    }
  }

  </style>
