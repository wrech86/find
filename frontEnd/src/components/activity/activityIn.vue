<template>
<suspense>
  <activity></activity>
</suspense>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const activity = defineAsyncComponent(()=>import('./activity.vue'))
</script>

<style  scoped>

</style>