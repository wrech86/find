<template>
    <van-nav-bar title="探索">
  <template #left>
    <van-icon name="search" size="25" color="#707070" @click="show"/>
  </template>
  <template #right>
    <van-icon :name="cam" size="25" />
  </template>
 </van-nav-bar>
 <div  class="search" v-if="isShow">
   <van-search  
   v-model="value" 
   placeholder="请输入搜索关键词" 
   show-action
    @search="onSearch"
    @cancel="onCancel"
    @blur="onblur"/>
 </div>
</template>

<script setup>
import camera from '../../../assets/img/相机.png'
import { ref } from 'vue';
const cam = ref(camera)
const isShow = ref(false)
const value = ref('')

const onblur = ()=>{
    isShow.value = false
}
function show(){
  isShow.value = true
}
</script>

<style>
.navbar{
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: flex-end;
  align-items:center;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 24px 40px -24px rgba(0, 0, 0, 0.35);
}
.search {
  width: 100%;
  height: 92px;
  position: absolute;
  top:0px;
  z-index: 1;
}
.van-search{
  height: 92px;
}


</style>