<template>
  <section>
    <h2>
      Made with
      <img src="/external/heart.svg" alt="Heart Icon" class="heart">
      by
      <a target="_blank" href="https://thetotem.studio" aria-label="Go to Totem Studio">
        <img src="/external/totem-studio-signature.svg" alt="Logo Totem Studio" class="totem-signature">
        Totem Studio
      </a>
    </h2>
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply w-full p-4 text-center;
  background-color: $example-color;
  color: $background-color;

  // This is to hide the extra space of the catpcha
  // margin-bottom: -60px !important;

  h2 {
    @apply tracking-wider text-xs;

    a {
      margin-left: 2px;
      color: $button-color;
    }

    .totem-signature {
      margin-right: 2px;
      max-height: 15px;
      display: inline;
    }

    .heart {
      margin-right: 2px;
      margin-left: 2px;
      margin-bottom: 3px;
      max-height: 15px;
      animation-name: pulse;
      animation-iteration-count: infinite;
      animation-duration: 2.5s;
      display: inline;
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }

      25% {
        transform: scale(.97);
      }

      35% {
        transform: scale(.9);
      }

      45% {
        transform: scale(1.1);
      }

      55% {
        transform: scale(.9);
      }

      65% {
        transform: scale(1.1);
      }

      75% {
        transform: scale(1.03);
      }

      100% {
        transform: scale(1);
      }
    }
  }
}</style>
