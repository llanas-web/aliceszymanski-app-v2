<template>
  <nav class="p-2.5 fixed w-full z-50">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <nuxt-link to="/" class="flex items-center">
        <span
          class="
            self-center
            text-2xl
            whitespace-nowrap
            text-zinc-300
            hover:text-yellow-400
          "
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
          text-sm text-gray-300
          md:hidden
          hover:text-yellow-400
        "
        :class="{ 'focus:text-yellow-400': isExpanded }"
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
      <div id="mobile-menu" class="w-full" :class="{ hidden: !isExpanded }">
        <ul class="flex flex-col mt-4">
          <li v-for="menuItem in navigationMenuMap" :key="menuItem.link">
            <nuxt-link
              :to="menuItem.link"
              class="
                block
                py-2
                px-3
                text-base
                font-normal
                leading-6
                uppercase
                font-cursive
                text-zinc-300
                border-b border-gray-100
                hover:text-yellow-400
              "
              >{{ menuItem.name }}</nuxt-link
            >
          </li>
        </ul>
        <ul class="flex flex-row items-center justify-around px-5 py-3">
          <li>
            <a
              class="text-yellow-400"
              href="https://www.facebook.com/alice.szymanski.7"
              title="Alice facebook"
              target="_blank"
            >
              <Facebook></Facebook>
            </a>
          </li>
          <li>
            <a
              class="text-yellow-400"
              href="https://soundcloud.com/alice-szymanski-flute"
              title="Alice Soundcloud"
              target="_blank"
            >
              <Soundcloud></Soundcloud>
            </a>
          </li>
          <li>
            <a
              class="text-yellow-400"
              href="https://www.facebook.com/alice.szymanski.7"
              title="Alice facebook"
              target="_blank"
            >
              <Instagram></Instagram>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import Facebook from "./commons/icons/Facebook.vue";
import Soundcloud from "./commons/icons/Soundcloud.vue";
import Instagram from "./commons/icons/Instagram.vue";

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
  // {
  //   link: "/#medias",
  //   name: "Média",
  // },
  {
    link: "/agenda",
    name: "Agenda",
  },
  // {
  //   link: "/galerie",
  //   name: "Galerie",
  // },
]);

const isExpanded = ref(false);

useRouter().afterEach(() => {
  isExpanded.value = false;
});
</script>
