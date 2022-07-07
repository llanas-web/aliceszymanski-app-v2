<template>
  <div
    class="
      flex flex-col
      snap snap-y snap-mandatory
      scroll-smooth
      h-screen
      overflow-auto
    "
  >
    <section>
      <div
        class="
          min-h-screen
          snap-start
          bg-no-repeat bg-cover bg-center bg-fixed
          relative
          top-0
          right-0
          bottom-0
          left-0
        "
        :style="{
          backgroundImage:
            'url(https://storage.googleapis.com/aliceszymanski-uploads/Alice_362_c12d73bf4c/Alice_362_c12d73bf4c.jpg)',
        }"
      >
        <ReadMore link="" anchor="#resume">
          <div class="flex flex-col justify-center items-center">
            <h2
              class="
                font-cursive
                text-slate-400 text-4xl
                uppercase
                my-12
                text-center
              "
            >
              Musique de chambre
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
    </section>
    <div class="h-screen mx-auto snap-start z-10">
      <div
        class="
          flex flex-row flex-nowrap
          snap snap-x snap-mandatory
          scroll-smooth
          w-screen
          overflow-auto
        "
      >
        <section
          v-for="page in musiqueDeChambre.pages"
          :key="page._id"
          class="h-screen min-w-full snap-start flex flex-col relative"
        >
          <Panel :page="page"></Panel>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ReadMore from "@/components/commons/ReadMore.vue";
import SimpleText from "@/components/commons/markdown/SimpleText.vue";
import Panel from "@/components/mdc/panel.vue";
import { MusiqueDeChambre } from "models/strapi-types";

const { find } = useStrapi3();
const { loadImage } = useImage();

const { data } = await useAsyncData("musique-de-chambre", () =>
  find<MusiqueDeChambre>("musique-de-chambre")
);
const musiqueDeChambre = data.value;
</script>

<style>
</style>