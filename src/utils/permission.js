import Vue from 'vue'
import router from '@/router/index'
import store from '../store'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import notification from 'ant-design-vue/es/notification'
import {ACCESS_TOKEN} from '@/store/mutation-types'

NProgress.configure({showSpinner: false}) // NProgress Configuration

const whiteList = ['login', 'register', 'registerResult'] // no redirect whitelist

router.beforeEach((to, from, next) => {
    NProgress.start()
    if (Vue.ls.get(ACCESS_TOKEN)) {
        /* has token */
        if (to.path === '/user/login') {
            next({path: '/dashboard'})
            NProgress.done()
        } else if (!store.getters.auth.roles) {
            store.dispatch('GetInfo').then(res => {
                const auth = res.data.auth
                store.dispatch('GenerateRoutes', {auth}).then(() => {
                    // 根据roles权限生成可访问的路由表
                    // 动态添加可访问路由表
                    router.addRoutes(store.getters.addRouters)
                    const redirect = decodeURIComponent(from.query.redirect || to.path)
                    if (to.path === redirect) {
                        // hack方法 确保addRoutes已完成 ,设置replace：true，以便导航不会留下历史记录
                        next({...to, replace: true})
                    } else {
                        // 跳转到目的路由
                        next({path: redirect})
                    }
                })
            }).catch(() => {
                notification.error({
                    message: '错误',
                    description: '请求用户信息失败，请重试'
                })
                store.dispatch('Logout').then(() => {
                    next({path: '/user/login', query: {redirect: to.fullPath}})
                })
            })
        } else {
            next()
        }
    } else {
        if (whiteList.includes(to.name)) {
            // 在免登录白名单，直接进入
            next()
        } else {
            next({path: '/user/login', query: {redirect: to.fullPath}})
            // 如果当前页面是登录将不会触发afterEach挂钩，所以手动处理它
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    NProgress.done()
})


/**
 * auth 权限指令
 * 指令用法：
 *  - 在需要控制 auth 级别权限的组件上使用 v-auth="{p: 'sysMenu.autoAdd',r:'admin'}", 如下：
 *    <a-button v-auth="{ p: 'sysMenu.autoAdd' }" @click="handleStartJob">启动定时任务</a-button>
 *
 *  - 当前用户没有权限时，组件上使用了该指令则会被隐藏
 *  - 当后台权限跟 pro 提供的模式不同时，只需要针对这里的权限过滤进行修改即可
 *
 *  @see https://github.com/sendya/ant-design-pro-vue/pull/53
 */
const auth = Vue.directive('auth', {
    bind: function (el, binding) {
        const params = binding.value
        const roles = store.getters.auth
        //路由权限
        // const permissionId = vnode.context.$route.meta.permission
        let hasPermission = false
        roles.stringPermissions.forEach(p => {
            if (p !== params.p) {
                return
            }
            hasPermission = true
        })
        if (!hasPermission) {
            el.parentNode && el.parentNode.removeChild(el) || (el.style.display = 'none')
        }
    }
})

export {
    auth
}
