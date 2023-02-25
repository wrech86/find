<template>
<transition name="van-fade">
       <div class="masking" v-show="isShow">
      <div class="texiao">
        <span class="探">探</span>
        <span class="索">索</span>
        <span></span>
        <span class="改">改</span>
        <span class="变">变</span>
        <span></span>
        <span class="世">世</span>
        <span class="界">界</span>
      </div>
      <div class="go" @click="change">
        <div>𝑮𝑶!</div><div>𝑭𝑰𝑵𝑫</div>
      </div>
    </div>
</transition>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
let isShow = ref(true)
function change(){
  router.replace({name:'home'})
}
</script>

<style  scoped lang="scss">
.masking {
  width: 100%;
  height: 100%;
  background-image: url('../../assets/img/backimg2.jpg');
  background-size:cover;
  position: absolute;
  z-index: 999;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
@import url(https://fonts.googleapis.com/css?family=Crimson+Text);
@import url("https://fonts.googleapis.com/css2?family=Righteous&display=swap");
$bright: #afa69585;
$gold: #75727589;
$dark: #74685392;

$duration: 4s;
.texiao{
  perspective: 2000px;
  transform-style: preserve-3d;
  font: 10vw Righteous;
  animation: fade $duration;
}

span {
  position: relative;
  display: inline-block;
  min-width: 0.5em;
  text-align: center;
  transform-style: preserve-3d;
  transform: rotateY(25deg);
  animation: rotate $duration  ease-in;
  color: rgb(2, 2, 2);
  font-size: 90px;

  &:after,
  &:before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    content: attr(class);
    color: $gold;
    z-index: -1;
    animation: shadow $duration infinite;
  }

  &:before {
    transform: translateZ(-14px);
  }
  &:after {
    transform: translateZ(-7px);
  }
}

@keyframes fade {
  from {
    opacity: 0;
    transform: scale(1.2);
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

@keyframes rotate {
  from {
    transform: rotateY(60deg);
  }
  50%,
  100% {
    color: $dark;
    transform: rotateY(5deg);
  }
  100% {
    color: $gold;
  }
}

@keyframes shadow {
  from {
    color: shade($gold, 50%);
  }
  25% {
    color: $bright;
  }
  50%,
  100% {
    color: tint($gold, 100%);
  }
}
.go{
  width: 200px;
  height: 200px;
  background-image: linear-gradient(120deg, #f6d465dc 0%, #fd9f85f0 100%);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #20201edf;
  font-size: 30px;
}
</style>