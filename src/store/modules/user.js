import Vue from 'vue'
import {login, getUserInfo, logout} from '@/api/login'
import {ACCESS_TOKEN} from '@/store/mutation-types'
import {welcome} from '@/utils/util'

const user = {
    state: {
        token: '',
        name: '',
        welcome: '',
        avatar: '',
        auth: {},
        info: {}
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, {name, welcome}) => {
            state.name = name
            state.welcome = welcome
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_AUTH: (state, auth) => {
            state.auth = auth
        },
        SET_INFO: (state, info) => {
            state.info = info
        }
    },
    actions: {
        // 登录
        Login({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                login(userInfo).then(response => {
                    const token = response.data.token
                    Vue.ls.set(ACCESS_TOKEN, token, 7 * 24 * 60 * 60 * 1000)
                    commit('SET_TOKEN', token)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 获取用户信息
        GetInfo({commit}) {
            return new Promise((resolve, reject) => {
                getUserInfo().then(response => {
                    const auth = response.data.auth
                    const user = response.data.user
                    if (auth.roles && auth.stringPermissions.length > 0) {
                        commit('SET_AUTH', auth)
                        commit('SET_INFO', user)
                    } else {
                        reject(new Error('getInfo: roles must be a non-null array !'))
                    }
                    commit('SET_NAME', {name: user.realName, welcome: welcome()})
                    commit('SET_AVATAR', user.avatar)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 登出
        Logout({commit, state}) {
            return new Promise((resolve) => {
                commit('SET_TOKEN', '')
                commit('SET_AUTH', {})
                Vue.ls.remove(ACCESS_TOKEN)
                logout(state.token).then(() => {
                    resolve()
                }).catch(() => {
                    resolve()
                })
            })
        }
    }
}

export default user
