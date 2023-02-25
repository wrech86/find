<template>
  <van-config-provider :theme-vars="themeVars">
    <navbar></navbar>
  </van-config-provider>
  <div class="bigImg">
    <div v-for="item in img">
      <van-image lazy-load fit="cover" position="center" width="100%" height="100%" :src="item" />
    </div>
  </div>
  <div class="user">
    <div>
      <van-image
        round
        width="1rem"
        height="1rem"
        fit="cover"
        position="center"
        :src="data.touxiang"
      />
      <div style="font-family: PingFangBlack">{{ data.username }}</div>
    </div>
    <div>{{ date }}</div>
  </div>
  <div class="text">{{ data.text }}</div>
  <div class="comment">
    <span>评论</span>
  </div>
  <suspense>
    <comment :info="info"></comment>
  </suspense>
  <van-sticky position="bottom">
    <div class="box">
      <van-cell-group class="sticky">
        <van-field v-model="value" placeholder="评论" autosize class="input" @focus="focus"></van-field>
      </van-cell-group>

      <div v-show="showIcon" @click="blur">
        <img src="../../assets/img/上传.png" alt />
      </div>
    </div>
  </van-sticky>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { reactive, ref, defineAsyncComponent } from 'vue';
import { useStore } from 'vuex';
import { discussInfo, getImg } from '@/axios/method'
import { addComment } from '../../axios/method';
import navbar from '../../view/navbar/navbar.vue';

const store = useStore()
const comment = defineAsyncComponent(() => import('./comment.vue'))
const route = useRoute()

let res = await discussInfo(route.params.iid)
let data = res.data[0]
const themeVars = {
  navBarIconColor: '#707070'
}
const img = reactive([])
if (data.img2 == null && data.img3 == null) {
  img.push(data.img1)
} else if (data.img3 == null) {
  img.push(data.img1)
  img.push(data.img2)
} else {
  img.push(data.img1)
  img.push(data.img2)
  img.push(data.img3)
}
const date = ref()
let now = new Date(data.date)
date.value = now.toLocaleDateString()

const showIcon = ref(false)
const value = ref('')
let info = ref()
info.value = route.params.iid
function focus(e) {
  showIcon.value = true
  e.target.parentNode.parentNode.parentNode.parentNode.style.width = '90%'
}

const blur = async (e) => {
  showIcon.value = false
  e.target.parentNode.previousSibling.style.width = '100%'
  let date = new Date().getTime()
  let res = await addComment(value.value,date,route.params.iid)
  value.value = ''
}
</script>

<style  scoped>
.bigImg {
  width: 100%;
  display: flex;
  margin-top: 92px;
}
.user {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
}
.user > div:nth-child(1) {
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 20px;
}
.user > div:nth-child(2) {
  margin-right: 20px;
}
.user div {
  font-size: 30px;
}
.text {
  font-size: 33px;
  background-color: white;
  box-shadow: 0 6px 10px -6px rgba(201, 199, 199, 0.35);
  padding-bottom: 20px;
}
.comment {
  margin-top: 15px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 30px;
  background-color: white;
  border-bottom: 1px rgb(224, 224, 224) solid;
}
.comment > span {
  margin-left: 20px;
  font-family: PingFangBlack;
}
.box {
  width: 100%;
  height: 80px;
  padding-top: 10px;
  background-color: rgb(255, 255, 255);
  display: flex;
}
.sticky {
  width: 100%;
  margin-left: 0px;
  line-height: 40px;
  border-radius: 80px;
  box-shadow: 0 -6px 10px -6px rgba(173, 173, 173, 0.35);
  transition: all 0.7s linear;
}
.input {
  background-color: rgb(241, 241, 241);
  border-radius: 80px;
  line-height: 40px;
}
.box > div:nth-child(2) {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box > div:nth-child(2) img {
  width: 50px;
}
</style>