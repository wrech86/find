<template>
  <div class="con">
    <div v-for="(item,index) in classify">
      <img class="yuan" @click="go(item,index)" :src="item.img">
      <span>{{item.text}}</span>
      </div>
  </div>
</template>

<script setup>
import { reactive,defineProps } from "vue";
import { useRouter } from "vue-router";
const  props = defineProps({
  classifyInfo:Array
})
let classify=reactive(props.classifyInfo)
let router=useRouter()
function go(item,index){
  router.push({name:'homeItem',params:{id:classify[index].text}})
}
</script>

<style scoped>
.con{
  display: flex;
  width: 100%;
  height: 160px;
  margin-top: 20px;
  justify-content: space-around;
}
span{
  text-align: center;
  font-size: 25px;
}
.con>div{
  width: 120px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
}
.yuan{
  width: 120px;
  height: 120px;
  border-radius: 50%;
  animation: jello-vertical 0.9s both;
}
@keyframes jello-vertical {
  0% {
    transform: scale3d(1, 1, 1);
  }
  30% {
    transform: scale3d(0.75, 1.25, 1);
  }
  40% {
    transform: scale3d(1.25, 0.75, 1);
  }
  50% {
    transform: scale3d(0.85, 1.15, 1);
  }
  65% {
    transform: scale3d(1.05, 0.95, 1);
  }
  75% {
    transform: scale3d(0.95, 1.05, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
}
</style>