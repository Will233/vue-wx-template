import Vue from 'vue'
import axios from 'axios'

// 设置全局axios默认值
axios.defaults.timeout = 5000 // 5000的超时验证
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
  // 创建一个axios实例
const instance = axios.create()
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use = instance.interceptors.request.use

// request拦截器
instance.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// respone拦截器
instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
      }
    }
    return Promise.reject(error.response.data)
  }
)

 // 根据不同允许环境加载不同的后台接口地址
if (process.env.NODE_ENV === 'production') {
  window.API_HOST = ''
  Vue.config.debug = false
} else if (process.env.NODE_ENV === 'development') {
  window.API_HOST = ''
  Vue.config.debug = true
}

var HOST = window.API_HOST
var GET = 'GET'
var POST = 'POST'

function httpService (method, url, data, success, failure) {
  console.log(data)
  if (method === GET) {
    instance.get(url, {
      params: data
    }).then(function (res) {
      success(res)
    }, function (error) {
      failure(error)
    })
  } else if (method === POST) {
    instance.post(url, data).then(function (res) {
      console.log(res)
      success(res.data)
    }, function (error) {
      failure(error)
    })
  }
}

const getSomething = function (param, success, error) {
  let url = HOST + '/something'
  httpService(GET, url, param, success, error)
}
const postSomething = function (param, success, error) {
  let url = HOST + '/something'
  httpService(POST, url, param, success, error)
}
const errorReport = function (param, success, error) {
  let url = HOST + '/error'
  httpService(POST, url, param, success, error)
}
export default {
  getSomething,
  postSomething,
  errorReport
}
