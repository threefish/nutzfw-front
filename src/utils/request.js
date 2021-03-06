import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import {VueAxios} from './axios'
import qs from 'qs'
import notification from 'ant-design-vue/es/notification'
import {ACCESS_TOKEN} from '@/store/mutation-types'

// 创建 axios 实例
const service = axios.create({
    baseURL: '/api', // api base_url
    timeout: 6000 // 请求超时时间
})

const err = (error) => {
    if (error.response) {
        const data = error.response.data
        const token = Vue.ls.get(ACCESS_TOKEN)
        if (error.response.status === 403) {
            notification.error({message: '403 访问被禁止', description: data.message})
        }
        if (error.response.status === 401) {
            notification.error({message: '401 权限不足', description: '授权验证失败'})
            if (token) {
                store.dispatch('Logout').then(() => {
                    setTimeout(() => {
                        window.location.reload()
                    }, 1500)
                })
            }
        }
    }
    return Promise.reject(error)
}

// request interceptor
service.interceptors.request.use(config => {
    const token = Vue.ls.get(ACCESS_TOKEN)
    if (token) {
        // 让每个请求携带自定义 token 请根据实际情况自行修改
        config.headers[ACCESS_TOKEN] = token
    }
    return config
}, err)

// response interceptor
service.interceptors.response.use((response) => response.data, err)

const installer = {
    vm: {},
    install(Vue, router = {}) {
        Vue.use(VueAxios, router, service)
    }
}

function post(url,parameter) {
    return service({
        url: url,
        method: 'post',
        data: qs.stringify(parameter)
    })
}

function get(url,parameter) {
    return service({
        url: url,
        method: 'get',
        data: qs.stringify(parameter)
    })
}

export {
    installer as VueAxios,
    service as axios,
    post as post,
    get as get,
}
