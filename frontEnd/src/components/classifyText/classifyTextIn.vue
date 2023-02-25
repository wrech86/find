<template>
<div>
  <suspense>
    <classify-text></classify-text>
  </suspense>
</div>
 
</template>

<script setup>
import { defineAsyncComponent } from "@vue/runtime-core";

const classifyText = defineAsyncComponent(()=>import('./classifyText.vue'))
</script>

<style  scoped>
div{
  font-family: PingFang;
}
</style>