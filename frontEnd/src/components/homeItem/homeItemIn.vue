<template>
  <suspense>
    <home-item></home-item>
  </suspense>
</template>

<script setup>
import { defineAsyncComponent } from "@vue/runtime-core";

const homeItem = defineAsyncComponent(()=>import('./homeItem.vue'))
</script>

<style  scoped>

</style>