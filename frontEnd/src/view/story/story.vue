<template>
  <van-tree-select v-model:main-active-index="activeIndex" height="200vw" :items="items">
    <template #content>
      <div v-if="activeIndex === 0">
        <div v-for="item in res.data.animal">
           <div class="kunchong" @click="say(item)">
          <van-image width="5rem" height="4rem" fit="cover" lazy-load  :src="item.img" />
          <div>{{item.title}}</div>
        </div>
        </div>
      </div>
      <div v-if="activeIndex === 1">
        <div v-for="item in res.data.botany">
           <div class="kunchong" @click="say(item)">
          <van-image width="5rem" height="4rem" fit="cover" lazy-load  :src="item.img" />
          <div>{{item.title}}</div>
        </div>
        </div>
      </div>
      <div v-if="activeIndex === 2">
        <div v-for="item in res.data.microorganism">
           <div class="kunchong" @click="say(item)">
          <van-image width="5rem" height="4rem" fit="cover" lazy-load  :src="item.img" />
          <div>{{item.title}}</div>
        </div>
        </div>
      </div>
    </template>
  </van-tree-select>
  <router-view></router-view>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { storyInfo } from '../../axios/method';
import { imgFormat } from '../../fun/fun';

const res = await storyInfo()
imgFormat(res.data.animal)
imgFormat(res.data.botany)
imgFormat(res.data.microorganism)
const router = useRouter()
const activeIndex = ref(0);
const items = reactive([
  { text: '动物(昆虫)' },
  { text: '植物' },
  { text: '微生物' },
])
const say = (item)=>{
  router.push({name:'say',params:{id:item.flag}})
}

</script>


<style  scoped>
div {
  font-family: PingFang;
}
.kunchong{
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px black dashed;
}
.kunchong>div{
  font-size: larger;
  font-weight:600
}
</style>