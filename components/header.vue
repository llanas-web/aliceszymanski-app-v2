<template>
  <nav class="bg-white border-gray-200 p-2.5 rounded">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <nuxt-link to="/" class="flex items-center">
        <span class="self-center text-2xl whitespace-nowrap"
          >Alice Szymanski</span
        >
      </nuxt-link>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        class="
          inline-flex
          items-center
          p-2
          ml-3
          text-sm text-gray-500
          rounded-lg
          md:hidden
          hover:bg-gray-100
        "
        :class="{ 'focus:bg-gray-100': isExpanded }"
        :aria-expanded="isExpanded"
        aria-controls="mobile-menu"
        @click="isExpanded = !isExpanded"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          class="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        id="mobile-menu"
        class="w-full md:block md:w-auto"
        :class="{ hidden: !isExpanded }"
      >
        <ul
          class="
            flex flex-col
            mt-4
            md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium
          "
        >
          <li v-for="menuItem in navigationMenuMap" :key="menuItem.link">
            <nuxt-link
              :to="menuItem.link"
              class="
                block
                py-2
                pr-4
                pl-3
                text-gray-700
                border-b border-gray-100
                hover:bg-gray-50
                md:hover:bg-transparent
                md:border-0
                md:hover:text-blue-700
                md:p-0
                dark:text-gray-400
                md:dark:hover:text-white
                dark:hover:bg-gray-700 dark:hover:text-white
                md:dark:hover:bg-transparent
                dark:border-gray-700
              "
              >{{ menuItem.name }}</nuxt-link
            >
          </li>
        </ul>
        <div>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/alice.szymanski.7"
                title="Alice facebook"
                target="_blank"
              >
                <Facebook></Facebook>
              </a>
            </li>
            <li>
              <a
                href="https://soundcloud.com/alice-szymanski-flute"
                title="Alice Soundcloud"
                target="_blank"
              >
                <Soundcloud></Soundcloud>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/alice.szymanski.7"
                title="Alice facebook"
                target="_blank"
              >
                <Instagram ></Facebook>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import type { Footer } from "../models/strapi-types";
import { IconComponentEnum } from "./commons/icons/IconComponentEnum";
import Facebook from "./commons/icons/facebook.vue";
import Soundcloud from "./commons/icons/soundcloud.vue";
import Instagram from "./commons/icons/instagram.vue";

const navigationMenuMap = reactive([
  {
    link: "/",
    name: "Accueil",
  },
  {
    link: "/biographie",
    name: "Biographie",
  },
  {
    link: "/musique-de-chambre",
    name: "Musique de chambre",
  },
  {
    link: "/#medias",
    name: "Média",
  },
  {
    link: "/agenda",
    name: "Agenda",
  },
  {
    link: "/galerie",
    name: "Galerie",
  },
]);
const socialLinkMap = reactive<
  {
    title: string;
    link: string;
    iconName: IconComponentEnum;
  }[]
>([
  {
    title: "Alice facebook",
    link: "https://www.facebook.com/alice.szymanski.7",
    iconName: IconComponentEnum.ICON_FACEBOOK,
  },
  {
    title: "Alice soundcloud",
    link: "https://soundcloud.com/alice-szymanski-flute",
    iconName: IconComponentEnum.ICON_INSTAGRAM,
  },
  {
    title: "Alice Instagram",
    link: "https://www.instagram.com/alice.szymanski/",
    iconName: IconComponentEnum.ICON_INSTAGRAM,
  },
]);

const isExpanded = ref(false);
</script>
