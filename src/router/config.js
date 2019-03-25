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
        hidden: true,
        component: () => import('@/views/user/Login')
    },
    {
        path: 'main',
        name: 'main',
        meta: {title: '后台管理', icon: 'form', permission: ['form']},
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {title: '后台首页', icon: 'form', permission: ['form']},
                component: () => import('@/views/index')
            },
            {
                path: '/test',
                name: 'test',
                meta: {title: 'test', icon: 'form', permission: ['form']},
                component: () => import('@/views/test')
            }
        ],
        component: BasicLayout
    },
    {
        path: '/404',
        hidden: true,
        component: () => import('@/views/exception/404')
    }
]
