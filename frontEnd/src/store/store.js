import { remove } from '@vue/shared'
import { createStore } from 'vuex'
import Cookie from "js-cookie"
const store = createStore({
  state () {
    return {
      username:'',
      touxiang:'',
      issueState:false,
      shopInfo:[],
      likeInfo:[],
    }
  },
  getters:{
      
  },
  mutations: {
    addName(state,payload) {
      state.username=payload
    },
    addTouxiang(state,payload){
      state.touxiang=payload
    },
    changeIssueState(state){
      state.issueState=true
    },
    addShopInfo(state,payload){
      state.shopInfo.push(payload)
    },
    addLikeInfo(state,payload){
      if(state.likeInfo.includes(payload)){
        return false
      }else{
        state.likeInfo.push(payload)
      }
    },
    removeLikeInfo(state,payload){
      state.likeInfo.splice(state.likeInfo.indexOf(payload),1)
    }
  }
})
export default store