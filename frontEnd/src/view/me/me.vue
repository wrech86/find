<template>
 <suspense>
   <me-in></me-in>
 </suspense>
</template>

<script setup>import { defineAsyncComponent } from 'vue';


const meIn = defineAsyncComponent(()=>import('./meIn.vue'))
</script>

<style  scoped>

</style>