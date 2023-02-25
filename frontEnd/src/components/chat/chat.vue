<template>
<div class="chat">
  <suspense>
    <chat-user></chat-user>
  </suspense>
</div>
  
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const chatUser = defineAsyncComponent(()=>import('./chatUser.vue'))




</script>

<style  scoped>
.chat{
  font-family: PingFang;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #f5f5f5 100%);
}
</style>