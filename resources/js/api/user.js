import request from '@/utils/request'

export function login(data) {
  // console.log(data)
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  // console.log("desde tokenizer",token)
  return request({
    url: '/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}
