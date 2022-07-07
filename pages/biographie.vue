<template>
  <div class="flex flex-col">
    <div class="h-screen relative">
      <div
        class="
          absolute
          bg-no-repeat bg-cover bg-center bg-fixed
          top-0
          right-0
          bottom-0
          left-0
        "
        :style="{ backgroundImage: loadImage(bio.photo, 'large') }"
      ></div>
      <ReadMore link="" anchor="#resume">
        <div class="flex flex-col justify-center items-center">
          <h2
            class="
              font-cursive
              text-slate-400 text-4xl
              uppercase
              my-24
              text-center
            "
          >
            Biographie
          </h2>
          <svg
            class="h-6 w-6 mb-4 animate-pulse fill-slate-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
            />
          </svg>
        </div>
      </ReadMore>
    </div>
    <div id="resume" class="m-5 divide-y">
      <h2
        class="font-cursive text-zinc-500 text-4xl text-center uppercase my-12"
      >
        Biographie
      </h2>
      <section
        v-for="text in bio.resume.listContents"
        :key="text._id"
        class="font-sans-serif text-zinc-500 py-6 prose"
      >
        <SimpleText :text="text.text"></SimpleText>
      </section>
      <section
        v-for="activite in bio.activities"
        :key="activite._id"
        class="py-6"
      >
        <h3
          :id="activite.title"
          class="font-sans text-zinc-500 text-2xl text-center uppercase my-6"
        >
          {{ activite.title }}
        </h3>
        <div
          v-for="text in activite.listContents"
          :key="text._id"
          class="font-sans-serif text-zinc-500 py-6 prose"
        >
          <SimpleText :text="text.text"></SimpleText>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Bio } from "models/strapi-types";
import ReadMore from "@/components/commons/ReadMore.vue";
import SimpleText from "@/components/commons/markdown/SimpleText.vue";

const { find } = useStrapi3();
const { loadImage } = useImage();

const { data } = await useAsyncData("bio", () => find<Bio>("bio"));
const bio = data.value;
</script>