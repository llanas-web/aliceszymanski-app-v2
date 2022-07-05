<template>
  <div v-if="pending">pending...</div>
  <template v-else>
    <div class="flex flex-col divide-y">
      <section
        class="h-screen bg-no-repeat bg-cover bg-center"
        :style="{ backgroundImage: `url(${home.header.image.url})` }"
      ></section>
      <!-- <section>
        <News></News>
      </section> -->
      <section>
        <Biographie :bio="home.shortBio"></Biographie>
      </section>
      <section>
        <MusiqueDeChambre
          :gallery="home.musiqueDeChambreGallery"
        ></MusiqueDeChambre>
      </section>
    </div>
    <Toaster></Toaster>
  </template>
</template>

<script lang="ts" setup>
import type { Home } from "models/strapi-types";
import Biographie from "@/components/home/Biographie.vue";
import MusiqueDeChambre from "@/components/home/MusiqueDeChambre.vue";
import News from "@/components/home/News.vue";
import Toaster from "@/components/Toaster.vue";
import type { Strapi4Response } from "@nuxtjs/strapi";

const { find } = useStrapi3();
const { data, pending } = await useAsyncData("home", () => find<Home>("home"));
console.log(data.value);
const home = data.value;
</script>
