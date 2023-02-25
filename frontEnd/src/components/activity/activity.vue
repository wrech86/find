<template>
  <van-config-provider :theme-vars="themeVars">
    <navbar></navbar>
  </van-config-provider>
  <div class="list">
    <div v-for="item in data">
      <div class="box">
      <div>
        <i>###</i>
        <span>{{item.text}}</span>
      </div>
      <div class="img">
        <van-image
          width="367px"
          height="100%"
          fit="cover"
          position="center"
          :src="item.img"
          class="vimg"
        />
      </div>
    </div>
    </div>
    
  </div>
</template>

<script setup>
import navbar from '@/view/navbar/navbar.vue'
import { activityInfo } from '../../axios/method';
import { reactive } from 'vue';
import {imgFormat} from '@/fun/fun'

let res = await activityInfo()
imgFormat(res.data)
let data = reactive(res.data)
const themeVars = {
  navBarIconColor: '#707070'
}

</script>

<style  scoped>
.list {
  margin-top: 108px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box {
  width: 98%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  
}
.box > div:nth-child(1) {
  margin-left: 70px;
  font-size: 30px;
  font-family: PingFang;
  color: rgb(110, 207, 110);
  align-self: start;
}
.img {
  width: 98%;
  height: 150px;
  background-color: aqua;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px 0px rgba(67, 66, 66, 0.35);
}
.vimg{
   border-radius: 100px;
   overflow: hidden;
}
</style>