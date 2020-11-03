/*
 * @Author: qianhn@neusoft.com
 * @Date: 2020年07月28日17时38分32秒
 * @LastEditTime: 2020年11月02日15时54分52秒
 * @LastEditors: Please set LastEditors
 * @Description:
 * @多读书多看报少吃零食多睡觉
 */
import axios from 'axios'
// import { BASE_URL } from '@config'
import Vue from 'vue'
import {message} from 'ant-design-vue'
import {BASE_URL} from  '@config/serviceConfig'
// import { Toast } from 'vant'
// Vue.use(Toast)
// 权重大小 axios默认 < defualts 默认 < config 配置
// 设置默认请求超时时间
axios.defaults.timeout = 20000
// 设置默认headers
axios.defaults.headers = { 'Content-Type': 'application/json;charset=UTF-8' }
const tip = msg => {
    message.info(msg)
}
const loading = () => {
    message.loading('加载中...',1000)
}
axios.interceptors.request.use(
    config => {
        // store.commit('setShowLoading',true)
        loading()

        return config
    },
    error => {
        // store.dispatch('setOverlay', { load: false })
        return Promise.reject(error)
    }
)
axios.interceptors.response.use(
    response => {
        // store.commit('setShowLoading',false)
        message.destroy()   
        if (response.status === 200) {

            return response.data
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        Toast.clear()
        if (error.code === 'ECONNABORTED' || error.message.indexOf('timeout') !== -1) {
            tip('请求超时')
        }
        switch (error.response.status) {
            case 400:
                tip(error.response.data.msg)
                break
            case 401:
                // 为了获取后台接口httpOnly cookie 跳转回URL
                tip(error.response.data.message)
                break
            case 500:
                tip(error.response.data.msg)
                break
            default:
                break
        }
        tip(error.response.data.message)
        return Promise.reject(error)
    }
)
function Service(url, isMock) {
    this.url = url || ''
    this.isMock = isMock || false
}
function query(params) {
    const options = {
        url: BASE_URL + this.url,
        method: 'GET',
        params
    }
    return axios.request(options)
}
function save(data) {
    console.log(BASE_URL)
    console.log(this.url)
    const options = {
        url: BASE_URL + this.url,
        method: 'POST',
        data
    }
    debugger
    return axios.request(options)
}
function mock() {
    const options = {
        url: '/mock/' + this.url,
        method: 'GET'
    }
    return axios.request(options)
}
function getOpenId() {
    const options = {
        url: '/wxpro/api/vc01',
        method: 'GET'
    }
    return axios.request(options)
}
Service.prototype = {
    constructor: Service,
    query,
    save,
    mock,
    getOpenId
}
export default Service
