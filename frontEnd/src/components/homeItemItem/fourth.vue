<template>
  <div class="box" v-for="(item, index) in data">
    <div class="little">
      <div @click="showLike($event,index)">
        <van-icon name="like" class="like" color="#cccccc" />
      </div>
    </div>
    <div class="big" @click="enter(item, index)">
      <div>
        <van-image
          width="100"
          height="200"
          fit="cover"
          position="center"
          lazy-load
          :src="item.circle"
        />
      </div>
      <div>
        <div class="a">{{item.name}}</div>
        <div class="bigtext" v-html="item.introduction"></div>
      </div>
    </div>
    <transition name="van-fade">
      <div class="screen" v-show="index == currentS">
        <div>
          <div class="circle ain">
            <van-image round width="100" height="100" fit="cover" :src="item.oblong" lazy-load @click="toText(item,index)"/>
          </div>
          <div class="info">有关它的更多秘密</div>
          <div class="icon" @click="leave(item, index)">
            <van-icon name="cross" size="0.6rem"/>
          </div>
        </div>
        <div class="txt">----这些{{ item.name }}很漂亮，不是吗</div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, defineProps,reactive } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
let currentS = ref()

const props = defineProps({
  four: Array
})
let data = reactive(props.four)
function showLike(e,index) {
  data[index].checked = !data[index].checked
  if(data[index].checked){
       e.target.style.color='red'
  }else{
       e.target.style.color='#cccccc'
  }
}
function enter(item, index) {
  currentS.value = index
}
function leave() {
  currentS.value = null
}

function toText(item,index){
  router.push({name:'classifyText',query:{key:props.four[index].key,flag:props.four[index].flag}})
}
</script>

<style scoped>

.box {
  width: 100%;
  height: 600px;
  position: relative;
}
.little {
  display: flex;
  width: 750px;
  height: 80px;
  justify-content: flex-end;
}

.little > div:nth-child(1) {
  width: 30px;
  height: 100%;
  box-shadow: 0 6px 6px -6px rgba(175, 174, 174, 0.3);
  display: flex;
  align-items: center;
  margin-right: 10px;
  justify-content: center;
}
.big {
  display: flex;
  width: 100%;
  height: 520px;
  position: relative;
}

.bigtext {
  width: 100%;
  height: 290px;
  font-size: 20px;
  margin-right: 30px;
  margin-left: 30px;
  margin-bottom: 40px;
  line-height: 150%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
}
.big > div:nth-child(1) {
  width: 250px;
  height: 520px;
  box-shadow: 6px -6px 6px -6px rgba(175, 174, 174, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.big > div:last-child {
  width: 520px;
  height: 520px;
  display: flex;
  box-shadow: -6px -6px 6px -6px rgba(175, 174, 174, 0.3);
   justify-content:space-between;
  align-items: center;
  flex-direction: column;
}

.like {
  margin-right: 20px;
}
.screen {
  width: 100%;
  height: 100%;
  background-color: rgba(109, 107, 107, 0.7);
  opacity: 1;
  position: absolute;
  top: 0;
}
.show {
  display: none;
}
.icon {
  position: absolute;
  left: 0px;
}
.screen > div:nth-child(1) {
  width: 100%;
  height: 540px;
  display: flex;
  justify-content: center;
}
.circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  background-size: cover;
}

.ain {
  animation: a 1.2s;
  animation-fill-mode: forwards;
}
@keyframes a {
  0% {
    opacity: 0;
    transform: scale(0) translateY(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(50px);
  }
}
.screen > div:nth-child(2) {
  width: 100%;
  height: 80px;
  font-size: 20px;
}
.txt {
  animation: b 1.2s;
  animation-fill-mode: forwards;
}
@keyframes b {
  0% {
    margin-left: 700px;
  }
  100% {
    margin-left: 0px;
  }
}
.info {
  position: absolute;
  top: 320px;
  font-size: 45px;
  animation: focus-in-contract-bck 1.3s cubic-bezier(0.215, 0.61, 0.355, 1) both;
}
@keyframes focus-in-contract-bck {
  0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    letter-spacing: normal;
    opacity: 1;
  }
}
.a{
  font-size: 40px;
  font-family: PingFangBlack;
  margin-top: 50px;
}
</style>