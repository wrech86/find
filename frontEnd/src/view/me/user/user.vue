<template>
<div class="userF">
<div class="user">
    <div>
      <div class="icon">
        <van-icon name="setting-o" size="0.6rem" />
        <img src="../../../assets/img/铃铛.png" alt />
      </div>
      <div class="info">
        <van-uploader :after-read="afterRead" v-if="isPicture">
          <div class="picture">
            <van-icon name="contact" size="2rem" color="#7a7a7a" />
          </div>
        </van-uploader>
        <div v-else>
          <img :src="store.state.touxiang" />
        </div>
      </div>
    </div>
    <div>
      <van-button
        round
        type="primary"
        color="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
        @click="pop"
        v-if="isR"
      >登录/注册</van-button>
      <div v-else>{{ store.state.username }}</div>
    </div>
  </div>
</div>
  
  <van-popup v-model:show="show" position="top" round :style="{ height: '80%' }">
    <div class="dengLu">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button
            round
            block
            type="primary"
            native-type="submit"
            color="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
          >登录</van-button>
        </div>
        <div class="zhuCe" @click="zhuCe">
          <a>注册</a>
        </div>
      </van-form>
    </div>
  </van-popup>
  <van-cell-group class="cellGroup" border>
    <van-cell icon="like-o" title="喜欢" is-link @click="like" />
    <van-cell icon="todo-list-o" title="笔记本" is-link @click="notebook" />
    <van-cell icon="comment-o" title="讨论" is-link @click="discuss" />
    <van-cell icon="cart-o" title="购物车" is-link @click="shopCart" />
    <van-cell icon="bullhorn-o" title="活动" is-link @click="activity" />
  </van-cell-group>
  <van-button
    type="primary"
    class="btn"
    size="normal"
    color="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
    @click="quit"
  >退出登录</van-button>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getUser, isUser, getImg } from '../../../axios/method'
import { Toast } from 'vant';
import { useStore } from 'vuex'
import Cookies from 'js-cookie'


const router = useRouter()
const store = useStore()
const show = ref(false)
const isR = ref(true)
function zhuCe() {
  router.push({ name: 'login' })
}
const username = ref('');
const password = ref('');
const name = ref('')
const onSubmit = async (values) => {
  let really = await isUser(username._value, password._value)
  if (really.data >= 1) {
    isR.value = false
    show.value = false
    name.value = username._value
    Cookies.set('username', name.value)
    let i = Cookies.get('username')
    store.commit('addName', i)
    
  } else {
    Toast.fail('用户名或密码错误');
  }
};

if (Cookies.get('username')) {
  store.commit('addName', Cookies.get('username'))
  isR.value = false
  if(Cookies.get('userImg')==null){
    Toast('请点击上方图标选择您的头像')
  }
}

function pop() {
  show.value = true

}
const isPicture = ref(true)
const image = ref()
const afterRead = async (file) => {
  const formData = new window.FormData()
  formData.append('file', file.file)
  let result = await getImg(formData)
  if (result.data.url != '') {
    isPicture.value = false
    image.value = result.data.url
  }
  Cookies.set('userImg', image.value)
  store.commit('addTouxiang', image.value)
};

if (Cookies.get('userImg')) {
  store.commit('addTouxiang', Cookies.get('userImg'))
  isPicture.value = false
}
function discuss() {
  router.push({ name: 'discuss' })
}
function shopCart() {
  router.push({ name: 'shopCart' })
}
function notebook() {
  router.push({ name: 'notebook' })
}
function like() {
  router.push({ name: 'like' })
}
function activity() {
  router.push({ name: 'activity' })
}
function quit() {
  Cookies.remove('username')
  Cookies.remove('userImg')
}
</script>

<style  scoped>
.userF{
  overflow: hidden;
  background-image: url('../../../assets/img/mohu.jpg');
  background-size: cover;
  background-position: 50%;
}
.user {
  width: 720px;
  height: 450px;
  background-color: rgba(255, 255, 255, 0.321);
  margin: 15px auto;
  border: 1px solid rgba(207, 205, 205, 0.329);
  border-radius: 15px;
  transform: translateZ(25px);
  box-shadow: 0 -6px 10px -6px rgba(243, 242, 242, 0.35);
  background-size: cover;
  background-position: 50%;
}

.user > div:nth-child(1) {
  width: 100%;
  height: 350px;
  z-index: 999;
}
.icon {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.icon > img {
  width: 48px;
  height: 48px;
}
.info {
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.info img {
  width: 220px;
  height: 220px;
  border-radius: 50%;
}
.picture {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  border: 1px solid rgb(194, 190, 190);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 16px 0px rgba(39, 38, 38, 0.35);
}
.user > div:nth-child(2) {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.dengLu {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.zhuCe {
  font-size: 30px;
  position: absolute;
  right: 40px;
}
.cellGroup {
  margin-top: 40px;
}
.btn {
  border-radius: 20px;
  display: block;
  margin: 150px auto;
}
</style>