import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:'http://182.92.73.95:8889',
    timeout:3000,
  })
  return instance(config)
}

