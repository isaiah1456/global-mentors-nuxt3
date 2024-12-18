<template>
  <div id="hola">
    <div class="flex justify-center space-x-2">
      <div>
        <h1 class="mb-2.5 mt-0 text-5xl font-medium leading-tight text-gray-800">
          Example heading
          <span class="example">New</span>
        </h1>

        <h2 class="mb-2.5 text-4xl font-medium leading-tight text-gray-800">
          Example heading
          <span
            class="inline-block whitespace-nowrap rounded bg-blue-600 px-2.5 py-1.5 text-center align-baseline font-bold leading-none text-white"
          >New</span>
        </h2>
        <h3 class="mb-2.5 text-3xl font-medium leading-tight text-gray-800">
          Example heading
          <span
            class="inline-block whitespace-nowrap rounded bg-blue-600 px-2.5 py-1.5 text-center align-baseline font-bold leading-none text-white"
          >New</span>
        </h3>
        <h4 class="mb-2.5 text-2xl font-medium leading-tight text-gray-800">
          Example heading
          <span
            class="inline-block whitespace-nowrap rounded bg-blue-600 px-2.5 py-1.5 text-center align-baseline font-bold leading-none text-white"
          >New</span>
        </h4>

        <h5 class="mb-2.5 text-xl font-medium leading-tight text-gray-800">
          Example heading

          <span
            class="inline-block whitespace-nowrap rounded bg-blue-600 px-2.5 py-1.5 text-center align-baseline font-bold leading-none text-white"
          >New</span>
        </h5>

        <h6 class="text-base font-medium leading-tight text-gray-800">
          Example heading
          <span
            class="inline-block whitespace-nowrap rounded bg-blue-600 px-2.5 py-1.5 text-center align-baseline font-bold leading-none text-white"
          >New</span>
        </h6>
      </div>
    </div>
  </div>

  <input type="text">

  <label for="" />
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.example {
  @apply inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded;
}

#hola {
  font-family: 'Nanum Brush Script', cursive;
  background-color: $example-color;
}

input {
  background-color: red;
}
</style>
