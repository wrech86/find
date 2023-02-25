<template>
  <van-config-provider :theme-vars="themeVars">
    <van-nav-bar title="𝓕𝒊𝒏𝓭" left-arrow @click-left="onClickLeft" class="nav" fixed>
      <template #right>
        <van-icon name="ellipsis" size="18" @click="share" />
      </template>
    </van-nav-bar>
    <div class="find van-safe-area-bottom">
      <div>{{ info.title }}</div>

      <div ref="icon" class="box">
        <div class="set" @click="set">Aa</div>
        <transition name="van-fade">
          <div v-show="isOption">
            <div class="tri"></div>
            <div class="option">
              <div class="font">
                <div class="fontF">
                  <span>字号</span>
                </div>
                <div class="btnB">
                  <van-button
                    round
                    type="primary"
                    plain
                    hairline
                    size="small"
                    class="btn"
                    color="#99CC33"
                    @click="small"
                  >小</van-button>
                  <van-button
                    round
                    type="primary"
                    plain
                    hairline
                    size="small"
                    class="btn"
                    color="#99CC33"
                    @click="big"
                  >大</van-button>
                </div>
              </div>
              <div class="backColor">
                <div class="fontF">
                  <span>背景</span>
                </div>
                <div class="btnB">
                  <van-button
                    type="primary"
                    size="small"
                    class="circle"
                    color="linear-gradient(to top, #feada6 0%, #f5efef 100%)"
                    @click="btn1"
                  ></van-button>
                  <van-button
                    type="primary"
                    size="small"
                    class="circle"
                    color="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
                    @click="btn2"
                  ></van-button>
                  <van-button
                    type="primary"
                    size="small"
                    class="circle"
                    color="linear-gradient(to top, #accbee 0%, #e7f0fd 100%)"
                    @click="btn3"
                  ></van-button>
                  <van-button
                    type="primary"
                    size="small"
                    class="circle"
                    color="linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%)"
                    @click="btn4"
                  ></van-button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <div v-html="str" @click="showPopup" class="text"></div>
    </div>
    <van-popup v-model:show="show" position="bottom" :style="{ height: '10%' }" round>
      <div class="voice">
        <div class="vIcon">
          <div @click="playVoice">
            <van-icon name="music-o" />
          </div>
          <div @click="resume">
            <van-icon name="play-circle-o" />
          </div>
          <div @click="pause">
            <van-icon name="pause-circle-o" />
          </div>
          <div @click="handleStop">
            <van-icon name="replay" />
          </div>
        </div>
      </div>
    </van-popup>
    <van-share-sheet v-model:show="showShare" title="立即分享给好友" :options="options" />
  </van-config-provider>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { getFindInfo } from '@/axios/method'
import { reactive, ref, computed } from 'vue';
import { doString } from '../../fun/fun';
import { Toast } from 'vant';
import { useClickAway } from '@vant/use';
let route = useRoute()
let params = route.params.flag
let res = await getFindInfo(params)
const info = reactive(res.data[0])
let str = doString(res.data[0].text)
const onClickLeft = () => { history.back() }
const themeVars = {
  navBarIconColor: '#707070',
  navBarBackgroundColor: 'linear-gradient(-90deg, #e9defa 0%, #fbfcdb 100%)',
  popupBackgroundColor: "linear-gradient(-90deg, #e9defa 0%, #fbfcdb 100%)"
}
//if (window.speechSynthesis && SpeechSynthesisUtterance) {
let synth = null
let msg = null
if (window.speechSynthesis && SpeechSynthesisUtterance) {
   synth = window.speechSynthesis;
   msg = new SpeechSynthesisUtterance();
}

function playVoice() {
  handleSpeak(str) // 传入需要播放的文字
}
// 语音播报的函数
function handleSpeak(text) {
  msg.text = text;     // 文字内容: 小朋友，你是否有很多问号
  msg.lang = "zh-CN";  // 使用的语言:中文
  msg.volume = 1;      // 声音音量：1
  msg.rate = 0.8;        // 语速：1
  msg.pitch = 1.3;
  synth.speak(msg);
}
// 语音停止
function resume(e) {
  msg.text = e;
  msg.lang = "zh-CN";
  synth.resume(msg)
}
function pause(e) {
  msg.text = e;
  msg.lang = "zh-CN";
  synth.pause(msg)
}
function handleStop(e) {
  msg.text = e;
  msg.lang = "zh-CN";
  synth.cancel(msg);
}
//}

const show = ref(false);
const showPopup = () => {
  show.value = true;
};
const isOption = ref(false)
const set = () => {
  isOption.value = !isOption.value
  console.log(isOption.value);

}
const icon = ref(null);
useClickAway(icon, () => {
  isOption.value = false
});

function btn1(e) {
  let find = document.querySelector('.find')
  find.style.backgroundImage = e.target.style.backgroundImage
}
function btn2(e) {
  let find = document.querySelector('.find')
  find.style.backgroundImage = e.target.style.backgroundImage
}
function btn3(e) {
  let find = document.querySelector('.find')
  find.style.backgroundImage = e.target.style.backgroundImage
}
function btn4(e) {
  let find = document.querySelector('.find')
  find.style.backgroundImage = e.target.style.backgroundImage
}
var num = 15
function small(e) {
  num -= 2.4
  let text = document.querySelector('.text')
  text.style.fontSize = num + 'px'
  if (text.style.fontSize == '0.6px') {
    Toast('已经最小');
    e.target.setAttribute("disabled", 'false')
    e.target.nextSibling.setAttribute("disabled", 'true')
  }
}
function big(e) {
  num += 2.4
  let text = document.querySelector('.text')
  text.style.fontSize = num + 'px'
  if (text.style.fontSize == '29.4px') {
    Toast('已经最大');
    e.target.setAttribute("disabled", 'false')
    e.target.previousSibling.setAttribute("disabled", 'true')
  }
}
const showShare = ref(false);
const options = [
  [
    { name: '微信', icon: 'wechat' },
    { name: '朋友圈', icon: 'wechat-moments' },
    { name: '微博', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
    { name: '小程序码', icon: 'weapp-qrcode' },
  ],
];
function share() {
  showShare.value = true
}

</script>

<style  scoped>
.find {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: PingFang;
  padding: 30px;
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  margin-top: 92px;
}
.find > div:nth-child(1) {
  width: 100%;
  font-family: PingFangBlack;
}
.text {
  width: 100%;
  font-size: 30px;
  margin-top: 20px;
}
.voice {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.vIcon {
  width: 700px;
  display: flex;
  justify-content: space-around;
}
.vIcon > div {
  width: 175px;
  height: 132px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
}
.vIcon > div:nth-child(1) {
  border-left: 1px black dashed;
  border-right: 1px black dashed;
}
.vIcon > div:nth-child(2),
.vIcon > div:nth-child(3),
.vIcon > div:nth-child(4) {
  border-right: 1px black dashed;
}

.set {
  font-size: 50px;
  margin-left: 300px;
  color: rgba(78, 76, 76, 0.432);
}
.option {
  width: 600px;
  height: 220px;
  background-color: aliceblue;
  position: absolute;
  top: 319px;
  left: 125px;
  font-family: PingFang;
}
.tri {
  width: 0px;
  height: 0px;
  border: 30px solid transparent;
  border-bottom: 30px solid aliceblue;
  position: absolute;
  top: 260px;
  left: 665px;
}
.font,
.backColor {
  width: 600px;
  height: 100px;
  display: flex;
}
.fontF {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
.btn {
  width: 200px;
}
.btnB {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  flex-shrink: 0;
}
.box {
  width: 30px;
}
</style>