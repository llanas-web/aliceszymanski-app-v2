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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="m23.446 18l.889-5.791h-5.557V8.451c0-1.584.776-3.129 3.265-3.129h2.526V.392S22.277.001 20.085.001c-4.576 0-7.567 2.774-7.567 7.795v4.414H7.431v5.791h5.087v14h6.26v-14z"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              class="text-yellow-400"
              href="https://soundcloud.com/alice-szymanski-flute"
              title="Alice Soundcloud"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M1.568 16.303c-.068 0-.125.057-.136.129l-.312 2.875l.312 2.808c.011.073.068.131.136.131s.12-.057.129-.131l.339-2.808l-.359-2.875c0-.072-.057-.129-.12-.129zM.36 17.407c-.079 0-.12.047-.141.124L0 19.307l.219 1.74c0 .079.063.131.12.131c.063 0 .12-.063.14-.141l.281-1.76l-.281-1.776c0-.084-.057-.12-.119-.12zm2.437-1.667c-.079 0-.157.063-.157.14l-.28 3.417l.296 3.276c0 .077.063.161.161.161c.084 0 .141-.084.161-.161l.339-3.297l-.339-3.401c-.02-.077-.083-.156-.161-.156zm1.282-.141c-.1 0-.183.079-.204.183l-.255 3.516l.281 3.396c.02.099.099.181.197.181s.183-.083.199-.197l.323-3.38l-.323-3.495a.18.18 0 0 0-.177-.183zm1.541.48a.212.212 0 0 0-.213-.199c-.12 0-.213.079-.219.199l-.292 3.239l.265 3.417c0 .12.104.213.213.213c.099 0 .199-.093.199-.213l.301-3.417l-.301-3.26zm1.077-2.276a.245.245 0 0 0-.239.239l-.281 5.276l.249 3.417c0 .12.104.219.24.219c.125 0 .229-.12.24-.24l.276-3.416l-.276-5.297c-.011-.14-.12-.24-.24-.24zm1.246-1.262c-.14 0-.26.12-.271.261l-.24 6.495l.219 3.396c0 .161.12.28.261.28c.14 0 .26-.119.281-.28l.26-3.396l-.26-6.475c-.021-.161-.141-.281-.276-.281zm1.292-.598c-.161 0-.281.12-.303.276l-.219 7.036l.219 3.36c.021.156.141.303.303.303a.308.308 0 0 0 .296-.303l.261-3.36l-.261-7.036a.307.307 0 0 0-.296-.297zm1.656.036a.316.316 0 0 0-.317-.317c-.161 0-.323.141-.323.317l-.199 7.256l.199 3.339a.35.35 0 0 0 .343.323a.318.318 0 0 0 .319-.323l.219-3.339l-.219-7.271zm1-.176a.348.348 0 0 0-.339.337l-.203 7.1l.203 3.296c0 .199.156.339.339.339s.339-.161.339-.359l.203-3.303l-.224-7.073a.357.357 0 0 0-.359-.359zm1.297.197a.379.379 0 0 0-.376.38l-.14 6.86l.183 3.296a.37.37 0 0 0 .38.371c.197 0 .359-.161.375-.38l.161-3.256l-.177-6.817c-.015-.219-.181-.38-.38-.38zm1.604-1.188a.451.451 0 0 0-.443 0a.407.407 0 0 0-.199.339v.084l-.135 8.063l.151 3.265v.011a.43.43 0 0 0 .099.239a.43.43 0 0 0 .313.141a.432.432 0 0 0 .276-.12a.428.428 0 0 0 .124-.303l.016-.317l.156-2.937l-.177-8.115a.382.382 0 0 0-.181-.317zm1.339-.729a.264.264 0 0 0-.199-.077a.499.499 0 0 0-.281.077a.43.43 0 0 0-.156.324v.036l-.183 8.812l.1 1.62l.083 1.579a.44.44 0 0 0 .437.421c.24 0 .437-.203.437-.443l.204-3.219l-.204-8.849a.456.456 0 0 0-.219-.369zm11.932 4.948c-.536 0-1.057.115-1.516.313a6.941 6.941 0 0 0-6.916-6.317c-.881 0-1.745.181-2.521.479c-.303.12-.36.24-.38.479v12.489c.02.24.197.444.443.464h10.911a3.881 3.881 0 0 0 3.917-3.896a3.927 3.927 0 0 0-3.917-3.937z"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              class="text-yellow-400"
              href="https://www.facebook.com/alice.szymanski.7"
              title="Alice facebook"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16 0c-4.349 0-4.891.021-6.593.093c-1.709.084-2.865.349-3.885.745a7.847 7.847 0 0 0-2.833 1.849A7.757 7.757 0 0 0 .84 5.52C.444 6.54.179 7.696.095 9.405c-.077 1.703-.093 2.244-.093 6.593s.021 4.891.093 6.593c.084 1.704.349 2.865.745 3.885a7.847 7.847 0 0 0 1.849 2.833a7.757 7.757 0 0 0 2.833 1.849c1.02.391 2.181.661 3.885.745c1.703.077 2.244.093 6.593.093s4.891-.021 6.593-.093c1.704-.084 2.865-.355 3.885-.745a7.847 7.847 0 0 0 2.833-1.849a7.716 7.716 0 0 0 1.849-2.833c.391-1.02.661-2.181.745-3.885c.077-1.703.093-2.244.093-6.593s-.021-4.891-.093-6.593c-.084-1.704-.355-2.871-.745-3.885a7.847 7.847 0 0 0-1.849-2.833A7.716 7.716 0 0 0 26.478.838c-1.02-.396-2.181-.661-3.885-.745C20.89.016 20.349 0 16 0zm0 2.88c4.271 0 4.781.021 6.469.093c1.557.073 2.405.333 2.968.553a4.989 4.989 0 0 1 1.844 1.197a4.931 4.931 0 0 1 1.192 1.839c.22.563.48 1.411.553 2.968c.072 1.688.093 2.199.093 6.469s-.021 4.781-.099 6.469c-.084 1.557-.344 2.405-.563 2.968c-.303.751-.641 1.276-1.199 1.844a5.048 5.048 0 0 1-1.844 1.192c-.556.22-1.416.48-2.979.553c-1.697.072-2.197.093-6.479.093s-4.781-.021-6.48-.099c-1.557-.084-2.416-.344-2.979-.563c-.76-.303-1.281-.641-1.839-1.199c-.563-.563-.921-1.099-1.197-1.844c-.224-.556-.48-1.416-.563-2.979c-.057-1.677-.084-2.197-.084-6.459c0-4.26.027-4.781.084-6.479c.083-1.563.339-2.421.563-2.979c.276-.761.635-1.281 1.197-1.844c.557-.557 1.079-.917 1.839-1.199c.563-.219 1.401-.479 2.964-.557c1.697-.061 2.197-.083 6.473-.083zm0 4.907A8.21 8.21 0 0 0 7.787 16A8.21 8.21 0 0 0 16 24.213A8.21 8.21 0 0 0 24.213 16A8.21 8.21 0 0 0 16 7.787zm0 13.546c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333S18.948 21.333 16 21.333zM26.464 7.459a1.923 1.923 0 0 1-1.923 1.921a1.919 1.919 0 1 1 0-3.838c1.057 0 1.923.86 1.923 1.917z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
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
  // {
  //   link: "/#medias",
  //   name: "Média",
  // },
  // {
  //   link: "/agenda",
  //   name: "Agenda",
  // },
  // {
  //   link: "/galerie",
  //   name: "Galerie",
  // },
]);

const isExpanded = ref(false);
</script>
