<template>
<suspense>
  <say></say>
</suspense>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const say = defineAsyncComponent(()=>import('./say.vue'))
</script>

<style  scoped>

</style>