
export const zdy = {
    baseURL:'http://182.92.73.95:8889'
}

export function imgFormat(data){
   data.map((item)=>{
     item.img = zdy.baseURL + item.img
  })
  return data
}
export function imgClassify(data){
  data.map((item)=>{
    item.circle = zdy.baseURL + item.circle
    item.mapping = zdy.baseURL + item.mapping
    item.oblong = zdy.baseURL + item.oblong
 })
 return data
}
export function doString(str){
    let str1 = '\xa0\xa0\xa0\xa0' + str
    if(str.indexOf('<br>')>0){
      return str1.split('<br>').join('<br>'+'\xa0\xa0\xa0\xa0')
    }else{
      return str1
    }
    
}
export function textClassify(data){
  data.map((item)=>{
    item.geography = doString(item.geography)
    if(/img/.test(item.habit)){
      item.habit = zdy.baseURL + item.habit
    }else{
      item.habit = doString(item.habit)
    }
    
    item.introduction = doString(item.introduction)
    item.know = doString(item.know)
    item.breed = doString(item.breed)
    item.value = doString(item.value)
  })
  return data
}

export function imgShop(data){
  data.map((item)=>{
    item.guide = zdy.baseURL + item.guide
    item.head = zdy.baseURL + item.head
    item.swiper1 = zdy.baseURL + item.swiper1
    item.swiper2 = zdy.baseURL + item.swiper2
    item.swiper3 = zdy.baseURL + item.swiper3
    item.detail1 = zdy.baseURL + item.detail1
    item.detail2 = zdy.baseURL + item.detail2
    item.detail3 = zdy.baseURL + item.detail3
    item.commentimg = zdy.baseURL + item.commentimg
  })
  return data
}
export function repetition(arr){
  return arr.reduce((prev,next)=>{
    prev[next] = (prev[next]+1) || 1
    return prev
  },{})
}