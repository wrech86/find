<template>
<div class="shopContentIn">
<suspense>
  <shop-content></shop-content>
</suspense>

</div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const shopContent= defineAsyncComponent(()=>import('./shopContent.vue'))
</script>

<style  scoped>
.shopContentIn{
   background-image: linear-gradient(120deg, #fdfbfb 0%, #f5f5f5 100%);
   font-family: PingFang;
}
</style>