<template>
  <div
    class="
      fixed
      bottom-4
      right-4
      font-sans-serif
      bg-slate-50
      text-zinc-500
      rounded
      shadow-xl
      w-4/5
      max-h-16
      p-1
      group
      hover:max-h-32
      transition-[max-height]
      ease
      duration-500
      z-50
    "
  >
    <div
      class="flex flew-row space-x-2 h-full items-start justify-center relative"
    >
      <img
        src="https://i1.sndcdn.com/avatars-000626564361-s6f8na-t200x200.jpg"
        class="w-14 h-14 rounded-sm mx-auto"
      />
      <div class="h-full px-2">
        <h3 class="font-cursive text-sm">title</h3>
        <p class="text-xs line-clamp-2 group-hover:line-clamp-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          eius, distinctio porro illum adipisci architecto aeeza ezae zae
          zaeaeaeaze zaezae z
        </p>
      </div>
      <svg
        class="absolute top-0 right-0 h-3 w-3 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        @click="$emit('closeToaster')"
      >
        <path
          fill="currentColor"
          d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
        />
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineEmits(["closeToaster"]);
</script>