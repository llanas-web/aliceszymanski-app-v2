<template>
  <div
    class="flex flex-col items-center justify-center h-full space-y-4 text-xl"
  >
    <p>Here's a counter:</p>
    <div class="flex items-center justify-center">
      <button
        class="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
        @click="() => counter++"
      >
        +
      </button>
      <span class="mx-2">{{ counter }}</span>
      <button
        class="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
        @click="() => counter--"
      >
        -
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const counter = 0;
</script>
