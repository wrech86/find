<template>
  <div class="item">
    <van-config-provider :theme-vars="themeVars">
      <van-nav-bar :title="title" left-arrow @click-left="onClickLeft" />
    
    <van-tabs v-model:active="activeName" swipeable>
      <van-tab :title="oneKind" name="a">
        <first :one="one"></first>
      </van-tab>
      <van-tab :title="twoKind" name="b">
        <second :two="two"></second>
      </van-tab>
      <van-tab :title="threeKind" name="c">
        <third :three="three"></third>
      </van-tab>
      <van-tab :title="fourKind" name="c">
        <fourth :four="four"></fourth>
      </van-tab>
    </van-tabs>
    </van-config-provider>
  </div>
</template>

  

<script setup>
import { getClassify } from '../../axios/method';
import first from '../homeItemItem/first.vue'
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { imgClassify,textClassify } from '../../fun/fun';
import Second from '../homeItemItem/second.vue';
const route = new useRoute()
let title = ref(route.params.id)
console.log(route.params.id);
let kind
if (title.value == '昆虫') {
  kind = 'insect'
} else if (title.value == '微生物') {
  kind = 'microorganism'
} else if (title.value == '植物') {
  kind = "botany"
} else {
  kind = "animal"
}
let res = await getClassify(kind)
console.log(res.data);
let one = reactive(res.data.one)
let two = reactive(res.data.two)
let three = reactive(res.data.three)
let four = reactive(res.data.four)
imgClassify(one)
imgClassify(two)
imgClassify(three)
imgClassify(four)
textClassify(one)
textClassify(two)
textClassify(three)
textClassify(four)
let oneKind = ref(res.data.one[0].kind)
let twoKind = ref(res.data.two[0].kind)
let threeKind = ref(res.data.three[0].kind)
let fourKind = ref(res.data.four[0].kind)
const onClickLeft = () => history.back();
const activeName = ref('a');
const themeVars = {
  navBarIconColor: '#707070',
}

</script>

<style scoped>
.item {
  font-family: PingFang;
}
</style>