// eslint-disable-next-line
import {BasicLayout, BlankLayout, RouteView} from '@/components/layouts'

export const asyncRouterMap = [
    {
        path: '/',
        name: 'main',
        meta: {title: '后台管理', icon: 'form', permissions: ['dashboard']},
        component: BasicLayout,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {title: '后台首页', icon: 'form', permissions: ['form']},
                component: () => import('@/views/index')
            },
            {
                path: '/test',
                name: 'test',
                meta: {title: 'test', icon: 'form', permissions: ['form']},
                component: () => import('@/views/test')
            }
        ],
    },
    {
        path: '*', redirect: '/404', hidden: true
    }
]


/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
    {
        path: '/user/login',
        name: 'login',
        hidden: true,
        component: () => import('@/views/user/Login')
    },
    {
        path: '/404',
        hidden: true,
        component: () => import('@/views/exception/404')
    }
]
