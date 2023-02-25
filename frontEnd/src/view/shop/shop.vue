<template>
  <div class="shop">
    <form action="/">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>

    <div class="box" v-show="show">
      <div class="left">
        <div v-for="(item, index) in leftData" :key="item.iid">
          <div class="img" @click="toDetail(item)">
            <van-image
              width="100%"
              height="100%"
              fit="cover"
              lazy-load
              position="center"
              :src="item.guide"
            />
          </div>
          <div class="description">{{ item.sketch }}</div>
          <div class="text">
            <div class="user">
              <div class="touxiang">
                <van-image
                  width="100%"
                  height="100%"
                  fit="cover"
                  lazy-load
                  position="center"
                  :src="item.head"
                />
              </div>
              <span>{{ item.name }}</span>
            </div>

            <div class="collect" @click="changeIcon1($event, index)">
              <van-icon name="star" size="0.5rem" color="#cccccc" />
              <span>{{ item.collect }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div v-for="(item, index) in rightData" :key="item.iid">
          <div class="img">
            <van-image
              width="100%"
              height="100%"
              fit="cover"
              lazy-load
              position="center"
              :src="item.guide"
              @click="toDetail(item)"
            />
          </div>
          <div class="description">{{ item.sketch }}</div>
          <div class="text">
            <div class="user">
              <div class="touxiang">
                <van-image
                  width="100%"
                  height="100%"
                  fit="cover"
                  lazy-load
                  position="center"
                  :src="item.head"
                />
              </div>
              <span>{{ item.name }}</span>
            </div>

            <div class="collect" @click="changeIcon2($event, index)">
              <van-icon name="star" size="0.5rem" color="#CCCCCC" />
              <span>{{ item.collect }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="box1" v-show="show1">
      <div class="left">
        <div v-for="(item, index) in search" :key="item.iid">
          <div class="img">
            <van-image
              width="100%"
              height="100%"
              fit="cover"
              lazy-load
              position="center"
              :src="item.guide"
              @click="toDetail(item)"
            />
          </div>
          <div class="description">{{ item.sketch }}</div>
          <div class="text">
            <div class="user">
              <div class="touxiang">
                <van-image
                  width="100%"
                  height="100%"
                  fit="cover"
                  lazy-load
                  position="center"
                  :src="item.head"
                />
              </div>
              <span>{{ item.name }}</span>
            </div>

            <div class="collect" @click="changeIcon3($event, index)">
              <van-icon name="star" size="0.5rem" color="#CCCCCC" />
              <span>{{ item.collect }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { shopInfo } from '../../axios/method';
import { imgShop } from '../../fun/fun';
import { Toast } from 'vant'
import { useRouter } from 'vue-router';
let router = useRouter()
let show = ref(true)
let show1 = ref(false)
let search = reactive([])
let res = await shopInfo()
imgShop(res.data.left)
imgShop(res.data.right)
imgShop(res.data.all)
let leftData = reactive(res.data.left)
let rightData = reactive(res.data.right)
const value = ref('');
const onSearch = (val) => {
  let result = res.data.all.filter((item) => {
    if (item.sketch.includes(val)) {
      return true
    }
  })
  if (result != null) {
    
    search.push(result[0])
    show.value = false
    show1.value = true
  }
  Toast('点击取消返回')
}
const onCancel = () => {
  show.value = true
  show1.value = false
}
let flag1 = ref(true)
function changeIcon1(e, index) {
  flag1.value = !flag1.value
  if (flag1.value === false) {
    e.target.style.color = '#FFCC33'
    leftData[index].collect += 1
    Toast.success('已经添加到我的收藏')
  } else {
    e.target.style.color = '#cccccc'
    leftData[index].collect -= 1
    Toast('取消收藏')
  }
}
let flag2 = ref(true)
function changeIcon2(e, index) {
  flag2.value = !flag2.value
  if (flag2.value === false) {
    e.target.style.color = '#FFCC33'
    leftData[index].collect += 1
    Toast.success('已经添加到我的收藏')
  } else {
    e.target.style.color = '#cccccc'
    leftData[index].collect -= 1
    Toast('取消收藏')
  }
}
let flag3 = ref(true)
function changeIcon3(e, index) {
  flag3.value = !flag3.value
  if (flag3.value === false) {
    e.target.style.color = '#FFCC33'
    leftData[index].collect += 1
    Toast.success('已经添加到我的收藏')
  } else {
    e.target.style.color = '#cccccc'
    leftData[index].collect -= 1
    Toast('取消收藏')
  }
}
function toDetail(item){
  router.push({
    name:'shopContent',
    params:{
      iid:item.iid
    }
  })
}
</script>

<style  scoped>
.shop {
  font-family: PingFang;
}
.box {
  display: flex;
}
.box1 {
  display: flex;
}
.left {
  width: 375px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}
.right {
  width: 375px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
}
.right > div {
  width: 350px;
  height: auto;
  margin: 5px auto;
  border-radius: 15px;
}
.left > div {
  width: 350px;
  height: auto;
  margin: 10px auto;
  border-radius: 15px;
}
.img {
  width: 100%;
  height: auto;
  border-radius: 15px;
  overflow: hidden;
}
.description {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  height: auto;
  font-size: 25px;
}
.text {
  width: 100%;
  height: auto;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.touxiang {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-right: 5px;
  border: #dad7d79a 1px solid;
  box-shadow: 6px 6px 10px -12px rgba(0, 0, 0, 0.35);
}

.user {
  display: flex;
  align-items: center;
}

.text span {
  font-size: 20px;
  color: #707070;
}
.collect {
  width: 120px;
  height: 50px;
  border: #dad7d79a 1px solid;
  display: flex;
  border-radius: 50px;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
  box-shadow: 6px 6px 10px -12px rgba(0, 0, 0, 0.35);
}
</style>