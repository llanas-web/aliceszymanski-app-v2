<template>
  <div>
    <component :is="iconeName"></component>
  </div>
</template>

<script setup lang="ts">
import { IconComponentEnum } from "./IconComponentEnum";
import facebook from "./facebook.vue";

defineProps<{ iconeName: IconComponentEnum }>();
</script>