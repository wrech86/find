<template>
  <suspense>
    <shop></shop>
  </suspense>
</template>

<script setup>
import {defineAsyncComponent} from 'vue'
const shop = defineAsyncComponent(()=>import('./shop.vue'))
</script>

<style  scoped>

</style>