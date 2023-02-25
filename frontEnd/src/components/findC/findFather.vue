<template>
 
 <suspense>
   <find-content></find-content>
 </suspense>
 
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
const findContent = defineAsyncComponent(()=>import('./findC.vue'))
</script>

<style  scoped>

</style>