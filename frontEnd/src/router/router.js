import { createRouter, createWebHashHistory } from 'vue-router'


const home = ()=>import('@/view/home/home.vue')
const shop = ()=>import('../view/shop/shopIn.vue')
const me = ()=>import('../view/me/me.vue')
const homeItem = ()=>import('@/components/homeItem/homeItemIn.vue')
const login = ()=>import('@/components/login/login.vue')
const story = ()=>import('@/view/story/storyIn.vue')
const say = ()=>import('@/components/say/sayIn.vue')
const discuss = ()=>import('@/components/discuss/discuss.vue')
const chat = ()=>import('@/components/chat/chat.vue')
const issue = ()=>import('@/components/discuss/issue.vue')
const findC = ()=>import('@/components/findC/findFather.vue')
const classifyText = ()=>import('@/components/classifyText/classifyTextIn.vue')
const shopContent = ()=>import('@/view/shop/shopContent/shopContentIn.vue')
const shopCart = ()=>import('@/components/shopCart/shopCart.vue')
const masking = ()=>import('@/view/masking/masking.vue')
const notebook = ()=>import('@/components/notebook/notebook.vue')
const like = ()=>import('@/components/like/like.vue')
const activity = ()=>import('@/components/activity/activityIn.vue')
const routes = [
  {
    path:'/',
    name:'masking',
    component:masking,
    meta:{
      showTab:false
    }
  },
  {
    path:'/home',
    name:"home",
    component:home,
    meta: {
			showTab: true,
      i:0,
      transition:'slide-left'
		}
  },
  {
    path:'/home/findContent/:flag',
    name:"findC",
    component:findC,
    meta: {
			showTab: false,
		}
  },
  {
    path:'/classify/:id',
    name:"homeItem",
    component:homeItem,
    meta: {
			showTab: false,
		}
  },
  {
    path:'/home/classify/text',
    name:'classifyText',
    component:classifyText,
    meta:{
      showTab: false
    }
  },
  {
    path:'/story',
    name:"story",
    component:story,
    meta: {
			showTab: true,
      i:1,
      transition:'slide-right'
		}
  },
  {
    path:'/shop',
    name:"shop",
    component:shop,
    meta: {
			showTab: true,
      i:2,
      transition:'slide-right'
		}
  },
  {
    path:'/me',
    name:"me",
    component:me,
    meta: {
			showTab: true,
      i:3,
      transition:'slide-right'
		}
  },
  
  {
    path:'/story/say',
    name:"say",
    component:say,
    meta: {
			showTab: false,
		}
  },
  {
    path:'/me/discuss',
    name:"discuss",
    component:discuss,
    meta: {
			showTab: false,
		}
  },
  {
    path:'/me/activity',
    name:"activity",
    component:activity,
    meta: {
			showTab: false,
		}
  },
  {
    path:'/me/login',
    name:"login",
    component:login,
    meta: {
			showTab: false,
		}
  },{
    path:'/me/discuss/chat/:iid',
    name:"chat",
    component:chat,
    meta:{
      showTab: false,
    }
  },
  {
    path:'/me/notebook',
    name:"notebook",
    component:notebook,
    meta:{
      showTab: false,
    }
  },
  {
    path:'/me/like',
    name:"like",
    component:like,
    meta:{
      showTab: false,
    }
  },
  {
    path:'/me/discuss/issue',
    name:"issue",
    component:issue,
    meta: {
			showTab: false,
		}
  },{
    path:'/shop/shopContent',
    name:"shopContent",
    component:shopContent,
    meta: {
			showTab: false,
		}
  },
  {
    path:'/shop/shopCart',
    name:"shopCart",
    component:shopCart,
    meta: {
			showTab: false,
		}
  }

]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})



export default router