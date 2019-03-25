// eslint-disable-next-line
import {BasicLayout, BlankLayout} from '@/components/layouts'

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
    {
        path: '/user/login',
        name: 'login',
        title: '系统登录',
        children: [
            {
                path: '/user/sucess',
                name: 'sucess',
                title: '系统登录成功',
                component: () => import('@/views/user/LoginSucess')
            }
        ],
        component: () => import('@/views/user/Login')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        title: '后台首页',
        children: [
            {
                path: '/main/index',
                name: 'index',
                title: '系统登录成功',
                component: () => import('@/views/user/LoginSucess')
            }
        ],
        component: BasicLayout
    },
    {
        path: '/404',
        component: () => import('@/views/exception/404')
    }
]
