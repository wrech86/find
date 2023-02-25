<template>
  <div class="homein van-safe-area-bottom">
    <navbar></navbar>
    <swiper :swiper-info="swiperInfo"></swiper>
    <classify :classify-info="classifyInfo"></classify>
    <find></find>
    <find-content></find-content>
    
    
  </div>
</template>

<script setup>
import navbar from './navbar/navbar.vue';
import swiper from './swiper/swiper.vue';
import classify from './classify/classify.vue'
import find from './find/find.vue'
import findContent from './findContent/findContent.vue'
import { getHome } from '../../axios/method';
import { reactive,ref } from 'vue';
import { imgFormat } from '@/fun/fun.js'

let res = await getHome()
let data = res.data
imgFormat(data.swiper)
let swiperInfo = reactive(data.swiper)
imgFormat(data.classify)
let classifyInfo = reactive(data.classify)

</script>

<style scoped lang="scss">
.homein {
  font-family: "PingFang";
}


</style>