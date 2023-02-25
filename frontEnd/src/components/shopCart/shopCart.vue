<template>
  <div class="shopCart">
    <van-config-provider :theme-vars="themeVars">
      <navbar></navbar>
      <div class="shop">
        <div v-for="(item, index) in data2">
          <div class="box">
            <div class="name">
              <div>{{ item.name }}旗舰店</div>
              <span>
                <van-icon name="arrow" />
              </span>
            </div>
            <div class="content">
              <div>
                <div class="radio" @click="radio($event, index)" :ref="itemC"></div>
              </div>
              <div>
                <div class="img">
                  <van-image
                    width="100"
                    height="100"
                    fit="cover"
                    position="center"
                    lazy-load
                    radius="10px"
                    :src="item.img"
                  />
                </div>
                <div class="des">
                  <div>{{ item.text }}</div>
                  <div>
                    <div>
                      <span class="rmb">￥</span>
                      <span>{{ item.price }}</span>
                    </div>
                    <div>
                      <van-stepper
                        v-model="item.num"
                       
                        @plus="plus(index)"
                        @minus="minus(index)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <van-action-bar>
        <div class="all">
          <div class="all1">
            <div  @click="all"></div>
            <div>全选</div>
          </div>
          <div class="all2">
            <div>合计:</div>
            <div>
              <span>￥</span>
              <span>{{total}}</span>
            </div>
          </div>
        </div>
        <van-action-bar-button type="danger" text="立即购买" @click="onClickButton" />
      </van-action-bar>
    </van-config-provider>
  </div>
</template>

<script setup>
import { ref, reactive,onMounted } from 'vue';
import { useStore } from 'vuex';
import navbar from '../../view/navbar/navbar.vue';
import { repetition } from '@/fun/fun'
const store = useStore()
const isRadio = ref(false)

const themeVars = {
  navBarIconColor: '#707070'
}
let info = store.state.shopInfo
let num = info.map((item) => {
  return item.iid
})
let num1 = repetition(num)
console.log(num1);
var obj = {};
info = info.reduce(function (prev, next) {
  obj[next.iid] ? '' : obj[next.iid] = true && prev.push(next);
  return prev;
}, []);
let data = []
info.forEach((item, index) => {
  let obj = {
    text: item.text,
    img: item.img,
    name: item.name,
    price: item.price,
    iid: item.iid,
    checked:false
  }
  data.push(obj)
});
let data1 = []
for (const key in num1) {
  let obj = {
    id: key,
    num: num1[key]
  }
  data1.push(obj)
}
let data2 = reactive([])
data1.forEach((item, index) => {
  let obj = Object.assign(data[index], item)
  data2.push(obj)
})
function plus(index) {
  data2.forEach((item, i, array) => {
    array[index].num = array[index].num + 1
  })
}
function minus(index) {
  data2.forEach((item, i, array) => {
    array[index].num = array[index].num - 1
  })
}
console.log(data2);
let total = ref(0)
let totalArr = reactive([])
function radio(e, index) {
  data2[index].checked = !data2[index].checked
  if (data2[index].checked) {
    e.target.style.backgroundColor = 'rgb(110, 207, 110)'
    totalArr.push(data2[index].num*data2[index].price)
    console.log(totalArr);
    total.value = totalArr.reduce((prev,next)=>{
       return prev+next
    },0)
  } else {
    e.target.style.backgroundColor = 'white'
    totalArr.splice(totalArr.indexOf(data2[index].num*data2[index].price),1)
    total.value = totalArr.reduce((prev,next)=>{
       return prev+next
    },0)
  }
}

const myRef = ref([])
const itemC  = (el)=>{
  myRef.value.push(el)
}
let flag = ref(false)
function all(e) {
  flag.value = !flag.value
  if (flag.value) {
    e.target.style.backgroundColor = 'rgb(110, 207, 110)'
    myRef.value.forEach((item)=>{
       item.style.backgroundColor = 'rgb(110, 207, 110)'
    })
    let res = []
    data2.map((item)=>{
      res.push(item.num*item.price)
    })
    total.value=res.reduce((prev,next)=>{
        return prev+next
    })
  } else {
    e.target.style.backgroundColor = 'white'
     myRef.value.forEach((item)=>{
       item.style.backgroundColor = 'white'
    })
    total.value=0
  }
}
</script>

<style  scoped>
.shopCart {
  background-image: linear-gradient(120deg, #fdfbfb 0%, #f5f5f5 100%);
  font-family: PingFang;
}
.box {
  width: 700px;
  height: auto;
  margin: 15px 10px;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  padding: 25px 15px;
  padding-bottom: 10px;
  border: #eceaea 1px solid;
  box-shadow: 0 0 10px 0px rgba(189, 183, 183, 0.35);
}
.shop {
  margin-top: 108px;
}
.name {
  display: flex;
  font-size: 30px;
  margin-left: 80px;
}
.name > span {
  margin-left: 20px;
  color: #cccccc;
}
.content {
  display: flex;
  padding: 30px 0px;
}
.content > div:nth-child(1) {
  width: 80px;
  height: 200px;
  margin-left: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content > div:nth-child(2) {
  width: 620px;
  height: 200px;
  display: flex;
}
.img {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
}
.des {
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
}
.des > div:nth-child(1) {
  font-size: 25px;
  letter-spacing: 2px;
}
.des > div:nth-child(2) {
  display: flex;
  justify-content: space-between;
}
.rmb {
  font-size: 30px;
}
.radio {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px rgb(150, 147, 146) solid;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  z-index: 999;
}
.all {
  width: 70%;
  display: flex;
  justify-content: space-between;
}
.all1 {
  display: flex;
  align-items: center;
}
.all1 > div:nth-child(1) {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  margin-left: 10px;
  border: 1px rgb(150, 147, 146) solid;
}
.all1 > div:nth-child(2) {
  font-size: 30px;
}
.all2 {
  display: flex;
  align-items: center;
}
.all2 > div:nth-child(1) {
  font-size: 30px;
  margin-right: 2px;
}
.all2 > div:nth-child(2) {
  display: flex;
  align-items: center;
}
.all2 > div:nth-child(2) span:nth-child(1) {
  font-size: 20px;
}
.all2 > div:nth-child(2) span:nth-child(2) {
  font-size: 35px;
  margin-right: 10px;
}
</style>