<template>
  <div class="p-5 relative h-full">
    <h2
      v-if="bio.title"
      class="font-cursive text-zinc-500 text-4xl text-center uppercase p-4"
    >
      {{ bio.title }}
    </h2>
    <div v-for="content in bio.listContents" :key="content.id" class="mt-2">
      <SimpleText
        class="font-sans-serif text-zinc-500 text-center"
        :text="content.text"
      ></SimpleText>
    </div>
    <ReadMore link="/biographie">
      <span
        class="
          font-cursive
          text-zinc-100
          hover:text-yellow-400
          text-xl text-center
          uppercase
          p-4
          animate-pulse
        "
        >Read more</span
      >
    </ReadMore>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import type { ComponentPageTextZone } from "models/strapi-types";
import SimpleText from "@/components/commons/markdown/SimpleText.vue";
import ReadMore from "@/components/commons/ReadMore.vue";

defineProps({
  bio: {
    type: Object as PropType<ComponentPageTextZone>,
    required: true,
  },
});
</script>
