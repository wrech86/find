import { request } from "./axios";
export function getHome(){
  return request({
    url:'/home',
  })
}
export function getFindInfo(flag){
  return request({
    url:'/home/findContent',
    method:'get',
    params:{flag}
  })
}
export function getFindContent(page){
  return request({
    url:'/home/find',
    method:'post',
    data:{page}
  })
}
export function getClassify(kind){
  return request({
    url:'/home/classify/content',
    method:'post',
    data:{
      kind
    }
  })
}
export function getKindInfo(key,flag){
  return request({
    url:'/home/classify/kind/text',
    method:'get',
    params:{
      key,
      flag
    }
  })
}
export function isUser(username,password){
  return request({
    url:'/me',
    method:'post',
    data:{
      username,
      password
    }
  })
}
export function photoInfo(img){
  return request({
    url:'/me/discuss/img',
    method:'post',
    data:img
  })
}
export function issueInfo(text,img,username,touxiang,date){
  return request({
    url:'/me/discuss',
    method:'post',
    data:{
      text,
      img,
      username,
      touxiang,
      date
    }
  })
}
export function getImg(img){
  return request({
    url:'/me/img',
    method:'post',
    data:img
  })
}
export function getUser(username,password,telephone,email){
  return request({
    url:'/login',
    method:'post',
    data:{
      username,
      password,
      telephone,
      email
    }
  })
}
export function discussInfo(iid){
  return request({
    url:'/me/discuss/chat',
    method:'get',
    params:{iid}
  })
}
export function addComment(text,date,iid){
   return request({
     url:'/me/discuss/chat/comment',
     method:'post',
     data:{
       text,
       date,
       iid
     }
   })
}
export function commentInfo(iid){
  return request({
    url:'/me/discuss/chat/comment/text',
    method:'post',
    data:{
      iid
    }
  })
}
export function discussAll(){
  return request({
    url:'/me/discuss/all'
  })
}
export function activityInfo(){
  return request({
    url:'/me/activity'
  })
}
export function shopInfo(){
   return request({
     url:'/shop'
   })
}
export function shopContentInfo(iid){
  return request({
    url:'/shop/shopContent',
    params:{iid}
  })
}
export function storyInfo(){
  return request({
    url:'/story'
  })
}
export function storyContent(id){
  return request({
    url:'/story/content',
    params:{id}
  })
}
