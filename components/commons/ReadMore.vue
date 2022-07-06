<template>
  <div
    class="
      absolute
      h-1/6
      bottom-0
      left-0
      w-full
      bg-gradient-to-t
      from-slate-400
      flex
      justify-center
      items-end
    "
  >
    <router-link :to="computedLink">
      <slot></slot>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  anchor: {
    type: String,
    default: "",
  },
});

const computedLink = computed(() => {
  if (props.anchor) {
    return { path: props.link, hash: props.anchor };
  }
  return props.link;
});
</script>