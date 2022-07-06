<template>
  <div>
    <div
      class="
        flex flex-col
        divide-y
        snap snap-y snap-mandatory
        scroll-smooth
        h-screen
        overflow-auto
      "
    >
      <section
        class="min-h-screen bg-no-repeat bg-cover bg-center bg-fixed snap-start"
        :style="{
          backgroundImage: loadImage(home.header.image, 'large'),
        }"
      ></section>
      <!-- <section>
        <News></News>
      </section> -->
      <section class="max-h-screen mx-auto snap-start">
        <Biographie :bio="home.shortBio"></Biographie>
      </section>
      <section class="bg-slate-100 mx-auto snap-start z-10">
        <MusiqueDeChambre
          :gallery="home.musiqueDeChambreGallery"
        ></MusiqueDeChambre>
      </section>
    </div>
    <transition>
      <Toaster
        v-show="displayToaster"
        @close-toaster="displayToaster = false"
      ></Toaster>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import type { Home } from "models/strapi-types";
import Biographie from "@/components/home/Biographie.vue";
import MusiqueDeChambre from "@/components/home/MusiqueDeChambre.vue";
import News from "@/components/home/News.vue";
import Toaster from "@/components/Toaster.vue";
import type { Strapi4Response } from "@nuxtjs/strapi";

const { find } = useStrapi3();
const displayToaster = ref(false);
const { loadImage } = useImage();

const { data, pending } = await useAsyncData("home", () => find<Home>("home"));
console.log(data.value);
const home = data.value;
setTimeout(() => {
  displayToaster.value = true;
}, 1000);
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
