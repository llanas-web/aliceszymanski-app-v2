<template>
  <div class="relative max-h-screen w-screen">
    <div class="flex flex-col pb-28">
      <div v-for="listEvent in listEventsByYear" :key="listEvent[0]">
        <h2
          class="font-sans-serif text-zinc-500 text-4xl text-center uppercase"
        >
          {{ listEvent[0] }}
        </h2>
        <div v-for="event in listEvent[1]" :key="event.id">
          <h3
            class="font-sans-serif text-zinc-500 text-xl text-center uppercase"
          >
            {{ event.title }}
          </h3>
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 right-0 h-28 z-10 flex flex-col">
      <div class="block bg-gradient-to-t from-slate-100 h-2/5 w-full"></div>
      <div
        class="
          flex flex-row-reverse
          space-x-8 space-x-reverse
          bg-slate-100
          h-full
          items-center
          justify-center
        "
      >
        <h2
          v-for="listEvent in listEventsByYear"
          :key="listEvent[0]"
          class="font-sans-serif text-zinc-500 text-2xl text-center uppercase"
        >
          {{ listEvent[0] }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Evenement } from "models/strapi-types";
import ReadMore from "@/components/commons/ReadMore.vue";
import SimpleText from "@/components/commons/markdown/SimpleText.vue";

const { find } = useStrapi3();
let evenementsByYears = new Map();
const listEventsByYear = ref([]);

const { data } = await useAsyncData("evenements", () =>
  find<Evenement[]>("evenements")
);
data.value
  .sort(
    (a, b) => new Date(b.starting).getTime() - new Date(a.starting).getTime()
  )
  .forEach((event) => {
    const eventYear = new Date(event.starting).getFullYear();
    if (!evenementsByYears.has(eventYear)) {
      evenementsByYears.set(eventYear, [event]);
    } else {
      evenementsByYears.get(eventYear).push(event);
    }
  });
listEventsByYear.value = Array.from(evenementsByYears).sort(
  (a, b) => b[0] - a[0]
);
</script>

<style>
</style>