<template>

 <suspense>
 <home-in></home-in>
 </suspense>
   
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const homeIn =  defineAsyncComponent(()=>import('./homeIn.vue'))
</script>

<style>

</style>