<template>
  <section class="faq">
    <div class="content" :class="contact ? 'max-w-2xl' : 'md:flex md:text-left max-w-5xl'">
      <div :class="{ 'mx-auto text-center': contact }">
        <span>why choose us</span>
        <h2>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum
        </p>
      </div>
      <v-expansion-panels class="accordion">
        <hr>
        <v-expansion-panel v-for="(q, index) in questions3" :key="index" elevation="0" class="panel">
          <v-expansion-panel-title :expand-icon="mdiArrowRightThin" :collapse-icon="mdiArrowUpThin">
            {{ q.title }}
          </v-expansion-panel-title>
          <hr>
          <v-expansion-panel-text class="body">
            {{ q.answer }}
          </v-expansion-panel-text>
        </v-expansion-panel>
        <hr>
      </v-expansion-panels>
    </div>
  </section>
</template>

<script setup lang="ts">
import { mdiArrowRightThin, mdiArrowUpThin } from '@mdi/js'

const { default: questions } = await import('../assets/data/questions.json')

const props = defineProps({
  contact: {
    type: Boolean,
    default: false
  }
})

const questions3 = props.contact
  ? questions
  : [questions[0], questions[1], questions[2]]
</script>

<style lang="scss" scoped>
.faq {
  @apply bg-cover bg-no-repeat bg-gray-800 h-full relative py-8;

  .content {
    @apply max-w-5xl mx-auto items-center sm:flex px-4 w-full gap-8 py-24 justify-between;

    span {
      @include title-section;
    }

    h2 {
      @apply mt-8 text-3xl font-bold tracking-wider text-white;
      font-family: 'TT Norms bold';
    }

    p {
      @apply py-4 text-base pt-8 mb-3;
      color: $hr-color;
      font-family: 'TT Norms light';
    }

    .accordion {
      @apply md:w-full mt-8 md:mt-0;
      max-width: 100%;

      .panel {
        background-color: transparent;
      }

      hr {
        @apply w-full;
        color: $hr-color;
      }

      .body {
        @apply rounded-b-md;
        color: white;
        background-color: transparent;
      }

      button {
        @apply flex justify-between py-8 items-center w-full;
        color: white;
        background-color: transparent;
      }
    }
  }
}
</style>
