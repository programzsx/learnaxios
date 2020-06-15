import axios from 'axios/index'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/n3',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    console.log(config);
    //1. 比如说config当中的信息，不符合服务器的一些要求。
    //2. 每次发送网络请求的时候，都希望在界面上显示一个请求的图标
    //3. 某些网络请求比如登录携带的token，是必须携带一些特殊的信息的额。
    return config
  }, err => {
    console.log(err);
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return instance(config)
}

export function instance1() {

}
