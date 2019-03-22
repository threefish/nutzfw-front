// eslint-disable-next-line
import {BasicLayout, BlankLayout} from '@/components/layouts'

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
    {
        path: '/user',
        hidden: true,
        children: [
            {
                path: '/user/login',
                name: 'login',
                title: '系统登录',
                component: () => import('@/views/user/Login')
            }
        ]
    },
    {
        path: '/404',
        component: () => import('@/views/exception/404')
    }
]
