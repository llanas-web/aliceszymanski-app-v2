<template>
  <img
    class="
      max-h-60
      m-5
      object-center object-contain
      drop-shadow-xl
      rounded-sm
      z-10
    "
    :src="page.header.image.formats['large'].url"
    :alt="page.header.image.alternativeText"
  />
  <div class="flex-grow h-full overflow-y-auto pb-20 px-6">
    <h3
      :id="page.title"
      class="font-sans text-zinc-500 text-2xl text-center uppercase my-5"
    >
      {{ page.title }}
    </h3>

    <SimpleText
      class="font-sans-serif text-zinc-500 prose text-sm mb-6"
      :text="page.header.description"
    ></SimpleText>
    <div
      v-for="content in page.content"
      :key="content._id"
      class="font-sans-serif text-zinc-500 prose text-sm divide-y mt-6"
    >
      <SimpleText
        v-for="text in content.listContents"
        :key="text._id"
        :text="text.text"
      ></SimpleText>
    </div>
  </div>
  <div
    v-if="page.musicItems.length"
    class="h-24 flex-none absolute w-full bottom-0 left-0 right-0 p-6"
  >
    <div
      class="
        bg-slate-50
        rounded
        h-full
        shadow-md
        flex flex-row
        space-x-2
        items-center
        justify-center
        p-3
      "
    >
      <div class="h-full flex flex-row space-x-2 justify-center items-center">
        <svg
          v-if="page.musicItems.length > 1"
          class="w-4 h-4 fill-zinc-600 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          @click="swapMusicItem(-1)"
        >
          <path
            fill="currentColor"
            d="M31.1 64.03c-17.67 0-31.1 14.33-31.1 32v319.9c0 17.67 14.33 32 32 32C49.67 447.1 64 433.6 64 415.1V96.03C64 78.36 49.67 64.03 31.1 64.03zM267.5 71.41l-192 159.1C67.82 237.8 64 246.9 64 256c0 9.094 3.82 18.18 11.44 24.62l192 159.1c20.63 17.12 52.51 2.75 52.51-24.62v-319.9C319.1 68.66 288.1 54.28 267.5 71.41z"
          />
        </svg>
        <svg
          class="w-6 h-6 fill-zinc-600 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          @click="onPlayClick"
        >
          <path
            v-if="!play"
            fill="currentColor"
            d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"
          />
          <path
            v-else
            fill="currentColor"
            d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"
          />
        </svg>
        <svg
          v-if="page.musicItems.length > 1"
          class="w-4 h-4 fill-zinc-600 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          @click="swapMusicItem(1)"
        >
          <path
            fill="currentColor"
            d="M287.1 447.1c17.67 0 31.1-14.33 31.1-32V96.03c0-17.67-14.33-32-32-32c-17.67 0-31.1 14.33-31.1 31.1v319.9C255.1 433.6 270.3 447.1 287.1 447.1zM52.51 440.6l192-159.1c7.625-6.436 11.43-15.53 11.43-24.62c0-9.094-3.809-18.18-11.43-24.62l-192-159.1C31.88 54.28 0 68.66 0 96.03v319.9C0 443.3 31.88 457.7 52.51 440.6z"
          />
        </svg>
      </div>
      <div
        class="
          flex-grow
          w-full
          h-full
          font-sans-serif
          text-zinc-600 text-sm
          flex flex-col
          justify-center
        "
      >
        <span>{{ runningMedia.title }}</span>
      </div>
    </div>
    <audio ref="audioPlayer" :src="runningMedia.music.url"></audio>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { Pages } from "models/strapi-types";
import SimpleText from "@/components/commons/markdown/SimpleText.vue";

const props = defineProps({
  page: {
    type: Object as PropType<Pages>,
    required: true,
  },
});

const runningIndex = ref(0);
const runningMedia = computed(() => {
  return props.page.musicItems[runningIndex.value];
});
const audioPlayer = ref<HTMLAudioElement>();
const play = ref(false);

const onPlayClick = () => {
  if (audioPlayer.value.paused) {
    audioPlayer.value.play();
    play.value = true;
  } else {
    audioPlayer.value.pause();
    play.value = false;
  }
};

const swapMusicItem = async (n: number) => {
  runningIndex.value = runningIndex.value + n;
  if (runningIndex.value < 0) {
    runningIndex.value = props.page.musicItems.length - 1;
  } else if (runningIndex.value > props.page.musicItems.length - 1) {
    runningIndex.value = 0;
  }
  if (play.value) {
    await nextTick();
    audioPlayer.value.play();
  }
};

const pause = () => {
  audioPlayer.value.pause();
  play.value = false;
};

defineExpose({ onPlayClick });
</script>

<style>
</style>