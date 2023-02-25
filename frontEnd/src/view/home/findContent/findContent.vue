<template>
<div class="vif">
  <video controls class="vi">

    <source src="../../../assets/video/cdiv1.mp4"
            type="video/mp4">
            
    Sorry, your browser doesn't support embedded videos.
</video>
</div>

  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    offset="1"
    :immediate-check="false"
  >
    <div
      class="content"
      v-for="(item, i) in obj"
      :key="i"
      @click="content(item, i)"
      v-lazy="item.img"
    >
      <div>
        <img :src="item.img" />
      </div>
      <div>
        <div class="text">
          <span>{{ item.lead }}</span>
        </div>
        <div class="discuss">
          <span class="van-ellipsis">{{ item.des }}</span>
        </div>
      </div>
    </div>
  </van-list>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { imgFormat } from '../../../fun/fun';

import { useRouter } from 'vue-router';
import { Toast } from 'vant';
import { getFindContent } from '../../../axios/method';
const router = useRouter()


let page = ref(1)
let res = await getFindContent(page)
imgFormat(res.data)
const obj = reactive(res.data)
const loading = ref(false);
const finished = ref(false);

const onLoad = async () => {
  page.value +=1
  let res = await getFindContent(page.value)
  imgFormat(res.data)
  for (let i = 0; i < 4; i++) {
    obj.push(res.data[i])
  }
  // 加载状态结束
  loading.value = false;

  // 数据全部加载完成
  if (obj.length >= 8) {
    finished.value = true;
  }

};


const content = (item, i) => {
  let flag = res.data[i].flag
  router.push({ name: 'findC', params: { flag } })
}
const themeVars = {
  navBarIconColor: '#707070'
}



</script>

<style scoped>
.content {
  width: 94%;
  height: auto;
  background-color: rgb(255, 255, 255);
  margin: 20px auto;
  border-radius: 20px;
  border: 2px #eee9e9cb solid;
  box-shadow: 24px 24px 40px -24px rgba(0, 0, 0, 0.35);
}
.content > :nth-child(1) {
  width: 100%;
  height: auto;
  border-radius: 20px 20px 0 0;
  background-color: rgb(255, 255, 255);
}
.content > :nth-child(2) {
  width: 100%;
  height: auto;
  padding-bottom: 20px;
  border-radius: 0 0 20px 20px;
  background-color: rgb(255, 255, 255);
}
img {
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0 0;
  background-size: cover;
}
.text {
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-end;
}

.text > :nth-child(1) {
  font-weight: 500;
  font-size: 35px;
}
.text > :nth-child(2) {
  font-size: 20px;
}
.discuss {
  display: flex;
  margin-top: 10px;
}
.discuss > span {
  font-size: 20px;
}
.space {
  white-space: pre-line;
}
.vif{
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
}
.vi{
  width: 90vw;
  height: 100%;
}
</style>