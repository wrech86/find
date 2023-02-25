<template>
 <van-popup v-model:show="show" position="top" :style="{ height: '70%' }" round>
      <van-cell-group inset class="msg">
        <van-field
          v-model="message"
          rows="4"
          autosize
          label="文本"
          type="textarea"
          maxlength="100"
          placeholder="请输入"
          show-word-limit
        />
      </van-cell-group>
      <van-field name="uploader" class="photo" label-align="center">
        <template #input>
          <van-uploader
            v-model="fileList"
            :after-read="afterRead"
            multiple
            accept
            preview-full-image
            lazy-load
            :max-count="3"
            @delete="del"
          />
        </template>
      </van-field>
      <div class="content">
        <van-button
          color="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)"
          class="issueBtn"
          @click="issueBtn"
        >发布</van-button>
      </div>
    </van-popup>
</template>

<script setup>
import { ref, reactive } from "vue";
import { photoInfo,issueInfo } from '@/axios/method'
import { useStore } from "vuex";
import { computed } from 'vue'
import Cookies from 'js-cookie'

const store = useStore()
const show = ref(true);
const fileList = reactive([])
const message = ref('')

function del (file){
  let position = fileList.map((item,index)=>{
     if(item.url==file.url){
       return index
     }
  })
  fileList.splice(position,1)
}
const afterRead = async (file) => {
  let fromData = new FormData()
  fromData.append('file', file.file)
  let res = await photoInfo(fromData)
  if (res.data.url != '') {
    fileList.push({ url: res.data.url })
  }
}
let now = new Date()
let nowM = now.getMonth()+1
let nowY = now.getFullYear()
let nowD = now.getDate()
let date = nowY+'-'+nowM+'-'+nowD
const issueBtn = async()=>{
 
   let res =await issueInfo(message.value,fileList,Cookies.get('username'),Cookies.get('userImg'),date)
   let data = res.data[0]
   let img = []
   if(data.img2==null&data.img3==null){
     img = [data.img1]
   }else if(data.img3==null){
     img = [data.img1,data.img2]
   }else{
     img = [data.img1,data.img2,data.img3]
   }
   let info = {
     text:data.text,
     img,
     iid:data.iddiscuss
   }
   store.commit('changeIssueState')
   show.value = false
   setTimeout(()=>{
     history.back();
   },300)
}
</script>

<style  scoped>
.msg {
  margin-top: 30px;
}
.photo {
  margin-top: 30px;
}
.issueBtn {
  border-radius: 20px;
  width: 300px;
}
.content {
  display: flex;
  justify-content: center;
  margin-top: 240px;
}
</style>