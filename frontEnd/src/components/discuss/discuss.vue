<template>
<van-config-provider :theme-vars="themeVars">
  <van-nav-bar title="讨论" left-arrow @click-left="onClickLeft" class="nav" fixed/>
</van-config-provider>
  
  <suspense>
    <top></top>
  </suspense>
  <suspense>
    <card></card>
  </suspense>
</template>

<script setup>
import { defineAsyncComponent } from "@vue/runtime-core";
import { useStore } from "vuex";
import { Toast } from 'vant';
import Cookies from 'js-cookie'
const store =  useStore()
const top = defineAsyncComponent(() => import('./top.vue'))
const card = defineAsyncComponent(() => import('./card.vue'))
const onClickLeft = () => history.back();
const themeVars={
   navBarIconColor:'#707070'
}

if(Cookies.get('username')==null&&Cookies.get('userImg')==null){
    Toast('请登录后再来');
  }else if(Cookies.get('userImg')==null){
    Toast('请选择您的头像后再来');
}
</script>

<style  scoped>
.nav{
  font-family: PingFang;
}
</style>