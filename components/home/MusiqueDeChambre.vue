<template>
  <div>
    <h2 class="font-cursive text-zinc-500 text-4xl text-center uppercase p-6">
      Musique de chambre
    </h2>
  </div>
  <div class="flex flex-col h-screen">
    <div
      v-for="(item, index) in gallery"
      :key="item._id"
      class="
        flex flex-col-reverse flex-grow
        bg-no-repeat bg-cover bg-center
        relative
      "
      :style="{
        backgroundImage: loadImage(item.backgroundImage, 'large'),
      }"
    >
      <video
        v-if="
          item.backgroundMedia != null &&
          item.backgroundMedia.mime.indexOf('video') != -1
        "
        :ref="
          (el) => {
            mediaPlayer[index] = el;
          }
        "
        :class="{ hidden: index !== readingIndex }"
        class="absolute object-cover right-0 bottom-0 w-full h-full"
      >
        <source :src="item.backgroundMedia.url" />
      </video>
      <audio
        v-else-if="
          item.backgroundMedia != null &&
          item.backgroundMedia.mime.indexOf('audio') != -1
        "
        :ref="
          (el) => {
            mediaPlayer[index] = el;
          }
        "
        :src="item.backgroundMedia.url"
      ></audio>
      <div
        class="
          flex flex-col
          space-y-4
          w-full
          justify-end
          items-center
          h-2/3
          bg-gradient-to-t
          from-zinc-500
          pb-6
        "
      >
        <button
          class="
            w-5
            h-5
            text-yellow-400
            cursor-pointer
            flex
            justify-center
            items-center
          "
          @click="playBackground(index)"
        >
          <svg
            v-if="index !== readingIndex"
            class="drop-shadow-lg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"
            />
          </svg>
          <svg
            v-else
            class="drop-shadow-lg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M272 63.1l-32 0c-26.51 0-48 21.49-48 47.1v288c0 26.51 21.49 48 48 48L272 448c26.51 0 48-21.49 48-48v-288C320 85.49 298.5 63.1 272 63.1zM80 63.1l-32 0c-26.51 0-48 21.49-48 48v288C0 426.5 21.49 448 48 448l32 0c26.51 0 48-21.49 48-48v-288C128 85.49 106.5 63.1 80 63.1z"
            />
          </svg>
        </button>
        <nuxt-link
          :to="{
            path: '/musique-de-chambre',
            hash: '#' + item.page.url,
          }"
          class="
            text-zinc-300
            hover:text-yellow-400
            font-cursive
            text-2xl
            drop-shadow-lg
          "
        >
          {{ item.page.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ComponentPageMediaItem } from "models/strapi-types";
import { PropType } from "vue";

defineProps({
  gallery: {
    type: Object as PropType<ComponentPageMediaItem[]>,
    required: true,
  },
});

const { loadImage } = useImage();

const readingIndex = ref(null);
const mediaPlayer = ref([]);

const playBackground = (sourceIndex) => {
  console.log(mediaPlayer.value);
  for (let i = 0; i < mediaPlayer.value.length; i++) {
    if (sourceIndex === i) {
      if (sourceIndex === readingIndex.value) {
        mediaPlayer.value[i].pause();
        readingIndex.value = null;
      } else {
        mediaPlayer.value[i].play();
        readingIndex.value = sourceIndex;
      }
    } else if (mediaPlayer.value[i]) {
      mediaPlayer.value[i].pause();
    }
  }
};
</script>