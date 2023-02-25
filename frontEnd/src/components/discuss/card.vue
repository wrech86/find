<template>
  <div class="card">
    <div class="box" v-for="(item,index) in info" :key=item.iid>
      <div class="touxiang">
        <van-image
          round
          width="1rem"
          height="1rem"
          fit="cover"
          :src=item.touxiang
          class="img"
        />
      </div>
      <div class="miaoshu">
        <div>{{item.text}}</div>
        <div>
          <div class="imgGroup" v-for="hhh in item.img">
              <van-image class="bigImg" fit="cover" position="center" :src=hhh />
          </div>
            
        </div>
      </div>
      <div class="icon">
        <div @click="like($event,index)"><van-icon name="like"  size="0.5rem" color="#cccccc"/></div>
        <div @click="star($event,index)" ><van-icon name="star" size="0.5rem" color="#cccccc"/></div>
        <div @click="goChat(item,index)"><van-icon name="chat" size="0.5rem" color="#cccccc"/></div>
        <div class="share"><van-icon name="share" size="0.5rem" color="#cccccc"/></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive,ref} from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import {discussAll} from '@/axios/method'
const store = useStore()
const router = useRouter()

let info = reactive()
let res = await discussAll()
info = res.data

if(store.state.issueState){
  let result = await discussAll()
  info = result.data
}

function like(e,index){
  info[index].islike = !info[index].islike
  if(info[index].islike){
    e.target.style.color = 'red'
  }else{
    e.target.style.color = '#cccccc'
  }
  
}

function star(e,index){
  info[index].isstar = !info[index].isstar
  if(info[index].isstar){
    e.target.style.color = 'yellow'
  }else{
    e.target.style.color = '#cccccc'
  }
}

function goChat(item,index){
   let iid = info[index].iddiscuss
   console.log(iid);
   router.push({name:'chat',params:{iid}})
}

</script>

<style  scoped>
.card{
  font-family: PingFang;
}
.box {
  width: 100%;
  margin-top: 20px;
  display: flex;
  background-color: white;
  padding-top: 40px;
  flex-wrap: wrap;
}
.touxiang {
  width: 150px;
  height: 300px;
  display: flex;
  justify-content: center;
}
.bigImg{
  height:250px ;
  margin-right: 3px;
}
.miaoshu{
  width: 580px;
  font-size: 30px;
}
.miaoshu>div:nth-child(2){
  display: flex;
  margin-top: 20px;
}
.icon{
  margin-top: 20px;
  width: 100%;
  height: 109px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
.icon>div{
  width: 92px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}




.imgGroup{
  display: flex;
  flex-wrap: wrap;
}
</style>