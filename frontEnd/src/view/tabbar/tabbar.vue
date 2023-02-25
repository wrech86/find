<template>
  <van-tabbar v-model="active" 
  active-color="#00FF99" 
  inactive-color="#707070"
  v-if="route.meta.showTab"
   replace>
  <van-tabbar-item icon="eye-o" @click="homeTo">探索</van-tabbar-item>
  <van-tabbar-item icon="service-o" @click="story">听书</van-tabbar-item>
  <van-tabbar-item icon="goods-collect-o" @click="shop">商城</van-tabbar-item>
  <van-tabbar-item icon="friends-o" @click="me">个人</van-tabbar-item>
</van-tabbar>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter,useRoute } from 'vue-router';
import home from '../../assets/img/home.png'
import home1 from '../../assets/img/home1.png'
const router = useRouter()
const route = useRoute()
const active = ref(0);
    const icon = {
      active: home,
      inactive: home1,
    };
    
 function homeTo(){
     router.push('/home')
  }
  function shop(){
     router.push('/shop')
  }
  function me(){
     router.push('/me')
  }
  function story(){
     router.push('/story')
  }
    

</script>

<style scoped>
span{
  font-family: "PingFang";
}
.van-tabbar-item{
  font-family: "PingFang";
}

</style>