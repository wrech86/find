<template>
  <van-pull-refresh v-model="loading1" @refresh="onRefresh" success-text="刷新成功">
    <div class="chat">
      <div v-for="item in comment">
        <div class="chatItem">
          <van-skeleton title avatar :row="3" :loading="loading">
            <div>
              <van-image
                round
                width="1rem"
                height="1rem"
                :src="userInfo.userImg"
                class="photo"
                fit="cover"
                position="center"
              />
            </div>
            <div>
              <div class="username">{{ userInfo.username }}</div>
              <div class="text">{{ item.text }}</div>
              <div class="date">
                <div style="color:#c2c2c2">{{ item.date }}</div>
              </div>
            </div>
          </van-skeleton>
        </div>
      </div>
    </div>
  </van-pull-refresh>
</template>

<script setup>
import { ref, onMounted, reactive, defineProps } from 'vue';
import { useStore } from 'vuex';
import { commentInfo } from '../../axios/method';

const props = defineProps({
  info: Number
})
let comment = reactive()
const loading = ref(true);
let res = await commentInfo(props.info)
comment = res.data
onMounted(() => {
  loading.value = false;
});

const count = ref(0);
const loading1 = ref(false);
const onRefresh = async () => {
  let c = await commentInfo(props.info)
  comment = c
  loading1.value = false
};



</script>

<style  scoped>
.chat {
  width: 100%;
  height: 3000px;
  background-color: white;
  padding-top: 20px;
}
.chatItem {
  display: flex;
  margin-top: 10px;
  margin-bottom: 30px;
}
.chatItem > div:nth-child(1) {
  width: 20%;
  display: flex;
  justify-content: center;
}
.chatItem > div:nth-child(2) {
  width: 80%;
}
.username {
  font-family: PingFangBlack;
  color: #7a7a7a;
  font-size: 30px;
  margin-bottom: 10px;
}
.text {
  font-size: 30px;
  margin-bottom: 10px;
}
.date {
  width: 150px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}
</style>