<template>
  <div class="family">
    <van-sticky>
      <div class="box">
        <div class="hotNew">
          <span @click="hot" style="color:black">最热</span>
          <span>|</span>
          <span @click="fresh">最新</span>
        </div>
        <div class="quiz">
          <van-button
            icon="plus"
            type="primary"
            size="small"
            class="btn"
            color="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
            @click="issue"
          >发布</van-button>
        </div>
      </div>
    </van-sticky>
   
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
function issue() {
  router.push({name:'issue'})
}

function hot(e) {
  e.target.style.color = 'black'
  e.target.parentNode.lastChild.style.color = 'rgb(182, 176, 176)'
}
function fresh(e) {
  e.target.style.color = 'black'
  e.target.parentNode.firstChild.style.color = 'rgb(182, 176, 176)'
}


</script>

<style  scoped>
.family {
  font-family: PingFang;
}
.box {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 6px 10px -6px rgba(187, 186, 186, 0.35);
  background-color: white;
  margin-top: 92px;
}

.hotNew {
  width: 20%;
  height: 100%;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hotNew > span:nth-child(1),
.hotNew > span:nth-child(3) {
  font-size: 20px;
  color: rgb(182, 176, 176);
}
.hotNew > span:nth-child(2) {
  font-size: 30px;
  color: rgb(182, 176, 176);
}
.quiz {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.btn {
  border-radius: 20px;
  margin-right: 10px;
}

</style>