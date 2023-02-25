<template>
  <van-config-provider :theme-vars="themeVars">
    <navbar></navbar>
  </van-config-provider>
  <div class="box">
    <div>
      <span>{{ data.name }}</span>
    </div>
    <div class="introduction">
      <text-box>简介</text-box>
      <div v-html="data.introduction" class="text"></div>
    </div>
    <div class="know">
      <text-box>你知道吗？</text-box>
      <div v-html="data.know" class="text"></div>
    </div>
    <div class="mapping">
      <van-image width="100%" fit="cover" :src="data.mapping" position="center" />
    </div>
    <div class="geography">
      <text-box>地理分布</text-box>
      <div v-html="data.geography" class="text"></div>
    </div>
    <div class="habit">
      <text-box>{{data.habitName}}</text-box>
        <div v-html="data.habit" class="text" v-if="habit"></div>
        <div v-else>
          <van-image width="100%" fit="cover" :src="data.habit" position="center" />
        </div>
    </div>
    <div class="breed">
      <text-box>生长繁育</text-box>
      <div v-html="data.breed" class="text"></div>
    </div>
    <div class="value">
      <text-box>价值</text-box>
      <div v-html="data.value" class="text"></div>
    </div>
  </div>
  <van-share-sheet v-model:show="showShare" title="立即分享给好友" :options="options" />
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { getKindInfo } from "../../axios/method";
import { imgClassify, textClassify } from "../../fun/fun";
import textBox from "../textBox/textBox.vue";
import navbar from "../../view/navbar/navbar.vue";
const route = useRoute()
let habit = ref(true)
let key = route.query.key
let flag = route.query.flag
let res = await getKindInfo(key, flag)
imgClassify(res.data)
textClassify(res.data)
console.log(res.data);
let data = ref(res.data[0])
const themeVars = {
  navBarIconColor: '#707070'
}
if(res.data[0].habitName=='生活习性'){
  habit.value = true
}else{
  habit.value = false
}

const showShare = ref(false);
const options = [
  [
    { name: '微信', icon: 'wechat' },
    { name: '朋友圈', icon: 'wechat-moments' },
    { name: '微博', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
    { name: '小程序码', icon: 'weapp-qrcode' },
  ],
];
function share() {
  showShare.value = true
}

</script>

<style  scoped>
.box {
  margin-top: 92px;
  padding: 10px;
}
.box > div:nth-child(1) {
  display: flex;
  justify-content: center;
}
.box > div {
  margin-top: 10px;
}

.text {
  font-size: 30px;
  line-height: 150%;
}
</style>