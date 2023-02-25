<template>
<suspense>
  <story></story>
</suspense>
</template>

<script setup>
import { defineAsyncComponent } from "@vue/runtime-core";

const story = defineAsyncComponent(()=>import('./story.vue'))
</script>

<style  scoped>

</style>