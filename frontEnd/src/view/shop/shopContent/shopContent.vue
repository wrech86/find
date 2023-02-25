<template>
  <van-config-provider :theme-vars="themeVars">
    <navbar></navbar>
    <van-action-bar safe-area-inset-bottom style="z-index:999">
      <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-action-bar-icon icon="shop-o" text="店铺" @click="onClickIcon" />
      <van-action-bar-button
        type="warning"
        text="加入购物车"
        color="linear-gradient(to left,#27ec007c 0%,  #a1d19c96 100%)"
        @click="onClickButton"
      />
      <van-action-bar-button
        type="danger"
        text="立即购买"
        color="linear-gradient(to left, #d5dee7 0%, #f7a2b0 0%, #27ec007c 100%)"
        @click="onClickButton"
      />
    </van-action-bar>

    <div class="box">
      <van-swipe class="my-swipe" indicator-color="white">
        <van-swipe-item>
          <van-image
            width="100%"
            height="300px"
            fit="cover"
            position="center"
            :src="data.swiper1"
            lazy-load
          />
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            width="100%"
            height="300px"
            fit="cover"
            position="center"
            :src="data.swiper2"
            lazy-load
          />
        </van-swipe-item>
        <van-swipe-item>
          <van-image
            width="100%"
            height="300px"
            fit="cover"
            position="center"
            :src="data.swiper3"
            lazy-load
          />
        </van-swipe-item>
      </van-swipe>
      <div class="introduction">
        <div class="price">
          <span class="rmb">￥</span>
          <span style="letter-spacing: none">{{ data.price }}</span>
          <van-button
            round
            type="primary"
            class="btn"
            color="#99CC33"
            @click="showList = true"
          >券后￥{{ number }}起</van-button>
        </div>
        <div class="ticket">
          <div>
            <span @click="showList = true">新店开业领券立减2元</span>
          </div>
          <div>
            <span style="margin-right:5px" @click="showList = true">领券</span>
            <span>
              <van-icon name="arrow" />
            </span>
          </div>
        </div>
        <div class="text">
          {{ data.sketch }}
          <div class="tag">
            <span>福利多多</span>
          </div>
        </div>
        <div class="top">
          <div>
            <van-icon name="hot-o" />
            <span class="topText">该商品入选本店人气榜·第1名</span>
          </div>
        </div>
        <div class="icon">
          <div>
            <van-icon name="like-o" color="#7a7a7a" />
            <span class="iconText">推荐</span>
          </div>
          <div>
            <van-icon name="share-o" color="#7a7a7a" />
            <span class="iconText">分享</span>
          </div>
        </div>
      </div>
      <div class="form">
        <div class="select">
          <div>
            <span>选择</span>
          </div>
          <div>
            <span>规格</span>
            <van-icon name="arrow" color="#b3b3b3" />
          </div>
        </div>
        <div class="select">
          <div>
            <span>发货</span>
          </div>
          <div>
            <div class="address special">
              <span>{{ data.goods }}</span>
              <span style="color:#cccccc">|</span>
              <span>快递：免运费</span>
            </div>
            <van-icon name="arrow" color="#b3b3b3" />
            <div class="peisong special" style="color:#b3b3b3">配送至&thinsp; 太原市&thinsp; 万柏林区</div>
          </div>
        </div>
        <div class="select">
          <div>
            <span>保障</span>
          </div>
          <div>
            <span>假一赔四·破损包赔·退货运费险</span>
            <van-icon name="arrow" color="#b3b3b3" />
          </div>
        </div>
        <div class="select">
          <div>
            <span>参数</span>
          </div>
          <div>
            <span>生产日期&thinsp; 品牌...</span>
            <van-icon name="arrow" color="#b3b3b3" />
          </div>
        </div>
      </div>
      <div class="comment">
        <div>
          <span>宝贝评价(999+)</span>
          <div class="look">
            <span>查看全部</span>
            <van-icon name="arrow" color="rgb(110, 207, 110)" />
          </div>
        </div>
        <div>
          <div class="user">
            <div>
              <van-image
                width="50"
                height="50"
                round
                fit="cover"
                position="center"
                :src="lu"
                lazy-load
              />
            </div>
            <div>
              <div class="name">吸溜</div>
              <div class="date">1天前</div>
            </div>
          </div>
          <div class="thing">
            <div>{{ data.commenttext }}</div>
            <div>
              <van-image
                width="100px"
                fit="cover"
                position="center"
                :src="data.commentimg"
                radius="5px"
                lazy-load
              />
            </div>
          </div>
        </div>
      </div>
      <div class="shop">
        <div>
          <div class="shopHead">
            <van-image width="60" height="60" round fit="cover" position="center" :src="data.head" />
          </div>
          <div class="shopText">
            <div>{{ data.name }}</div>
            <div>
              <div class="star">
                <span>
                  综合评价
                  <van-rate v-model="value" allow-half size="10px" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <van-button plain type="primary" class="btn1" color="rgb(110, 207, 110)">进店逛逛</van-button>
            <van-button plain type="primary" class="btn2" color="rgb(110, 207, 110)">全部宝贝</van-button>
          </div>
        </div>
      </div>
      <van-divider>宝贝详情</van-divider>
      <div class="detail">
        <van-image width="100%" fit="cover" position="center" :src="data.detail1" />
        <van-image width="100%" fit="cover" position="center" :src="data.detail2" />
        <van-image width="100%" fit="cover" position="center" :src="data.detail3" />
      </div>
      <van-popup
        v-model:show="showList"
        round
        position="bottom"
        style="height: 90%; padding-top: 4px;"
      >
        <van-coupon-list
          :coupons="coupons"
          :chosen-coupon="chosenCoupon"
          :disabled-coupons="disabledCoupons"
          @change="onChange"
          @exchange="onExchange"
        />
      </van-popup>
    </div>
  </van-config-provider>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { shopContentInfo } from '@/axios/method'
import { reactive, ref } from 'vue';
import { imgShop } from '../../../fun/fun';
import navbar from '@/view/navbar/navbar.vue'
import { useStore } from 'vuex';
import lu from '../../../assets/img/cat.png'
const store = useStore()
let data = reactive()
let route = useRoute()
let number = ref()
const themeVars = {
  navBarIconColor: '#707070',
}
const value = ref(4.5);

let res = await shopContentInfo(route.params.iid)
imgShop(res.data)
data = res.data[0]
let ceil = data.price - Math.trunc(data.price)

let int = data.price - 3
let ceil1 = int + ceil
number.value = ceil1.toFixed(2)
const coupon = {
  available: 1,
  condition: '无门槛\n最多优惠2元',
  reason: '',
  value: 150,
  name: '无门槛券',
  startAt: 1648726629,
  endAt: 1653997029,
  valueDesc: '2',
  unitDesc: '元',
};

const coupons = ref([coupon]);
const showList = ref(false);
const chosenCoupon = ref(-1);

const onChange = (index) => {
  showList.value = false;
  chosenCoupon.value = index;
};
const onExchange = (code) => {
  coupons.value.push(coupon);
};
const onClickButton = ()=>{
   store.commit('addShopInfo',{iid:data.iid,img:data.guide,text:data.sketch,price:data.price,name:data.name})
}

</script>

<style  scoped>
.box {
  margin-top: 92px;
  letter-spacing: 2px;
}
.introduction {
  width: 700px;
  height: 300px;
  margin: 15px 10px;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  padding: 25px 15px;
  border: #eceaea 1px solid;
  box-shadow: 0 0 10px 0px rgba(189, 183, 183, 0.35);
}
.introduction > div {
  margin-bottom: 20px;
}
.price {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.btn {
  width: auto;
  height: 45px;
  margin-left: 30px;
  font-size: 20px;
  letter-spacing: 3px;
}
.rmb {
  font-size: 30px;
  align-self: end;
  margin-right: 5px;
}
.ticket {
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: rgb(110, 207, 110);
}
.ticket > div:nth-child(1) {
  padding: 2px;
  background-color: rgba(106, 187, 106, 0.185);
}
.text {
  font-size: 30px;
  display: flex;
}
.tag {
  font-size: 25px;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  border-radius: 10px;
  background-color: rgb(110, 207, 110);
  margin-left: 15px;
  color: rgba(255, 255, 255, 0.863);
}
.top {
  padding: 5px 0px;
  width: 100%;
  height: 45px;
  border-radius: 10px;

  background-image: linear-gradient(to right, #a8edca 0%, #f3e2e970 100%);
}
.top > div:nth-child(1) {
  width: 100%;
  height: 100%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  text-align: center;
}
.topText {
  font-size: 26px;
  margin-left: 5px;
  letter-spacing: 2px;
}
.icon {
  display: flex;
  justify-content: space-around;
  font-size: 30px;
  color: #7a7a7a;
  padding: 10px;
}
.icon > div {
  display: flex;
  align-items: center;
}
.iconText {
  font-size: 25px;
  margin-left: 10px;
}
.form {
  width: 700px;
  height: 340px;
  margin: 15px 10px;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  padding: 25px 15px;
  border: #eceaea 1px solid;
  box-shadow: 0 0 10px 0px rgba(189, 183, 183, 0.35);
  color: #000;
  font-size: 28px;
}
.form > div {
  margin-bottom: 40px;
}
.select {
  display: flex;
  justify-content: space-between;
}
.select > div:nth-child(1) {
  width: 10%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: #b3b3b3;
}
.select > div:nth-child(2) {
  width: 85%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
.special {
  margin-bottom: 20px;
}
.address > span {
  margin-right: 20px;
}
.peisong {
  width: 85%;
}
.comment {
  width: 700px;
  height: auto;
  margin: 15px 10px;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  padding: 25px 15px;
  border: #eceaea 1px solid;
  box-shadow: 0 0 10px 0px rgba(189, 183, 183, 0.35);
}
.comment > div:nth-child(1) {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.comment > div:nth-child(1) > span {
  font-size: 30px;
}
.look {
  font-size: 25px;
  display: flex;
  align-items: center;
}
.look > span {
  color: rgb(110, 207, 110);
  margin-right: 10px;
  font-size: 20px;
}
.comment > div:nth-child(2) {
  width: 100%;
  height: auto;
}
.user {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
}
.user > div:nth-child(1) {
  width: 100px;
  height: 100px;
}
.user > div:nth-child(2) {
  width: 550px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
}
.user > div:nth-child(2) > div {
  width: 550px;
  height: 50px;
  display: flex;
  align-items: center;
}
.name {
  font-size: 30px;
}
.date {
  font-size: 20px;
}
.thing {
  margin-top: 20px;
  font-size: 30px;
}
.thing > div:nth-child(2) {
  margin-top: 20px;
  border-radius: 10px;
}
.shop {
  width: 700px;
  height: auto;
  margin: 15px 10px;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  padding: 25px 15px;
  border: #eceaea 1px solid;
  box-shadow: 0 0 10px 0px rgba(189, 183, 183, 0.35);
}
.shop > div:nth-child(1) {
  width: 100%;
  height: auto;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.shopHead {
  width: 140px;
  height: 120px;
}
.shopText {
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  width: 560px;
  height: 120px;
}
.shopText > div {
  width: 560px;
  height: 60px;
  font-size: 30px;
  display: flex;
  align-items: center;
}

.star {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  height: 40px;
  width: 260px;
  border-radius: 20px;
  background-color: #706e6e7e;
}
.shop > div:nth-child(2) {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.btn1 {
  width: 200px;
  height: 60px;
  margin-right: 20px;
  border-radius: 50px;
}
.btn2 {
  width: 200px;
  height: 60px;
  margin-left: 20px;
  border-radius: 50px;
}
</style>