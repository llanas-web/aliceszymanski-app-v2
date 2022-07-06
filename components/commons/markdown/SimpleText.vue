<template>
  <div v-html="renderedMd"></div>
</template>

<script lang="ts" setup>
const { $markdown } = useNuxtApp();

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const renderedMd = computed(() => {
  return $markdown.render(props.text);
});
</script>
