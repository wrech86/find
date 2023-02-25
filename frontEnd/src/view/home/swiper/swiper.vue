<template>
  <van-swipe :autoplay="3000" lazy-render class=".my-swipe">
  <van-swipe-item v-for="(item) in props.swiperInfo" :key="item.id">
    <img :src = item.img />
  </van-swipe-item>
</van-swipe>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
   swiperInfo:Array
})
</script>

<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
}
img{
  width: 100%;
}
</style>