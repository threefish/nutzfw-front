// eslint-disable-next-line
import {UserLayout, BasicLayout, BlankLayout, RouteView, PageView} from '@/components/layouts'

export const asyncRouterMap = [
    {
        path: '/',
        name: 'index',
        component: BasicLayout,
        meta: {title: '后台管理', icon: 'form', permissions: ['sysMenu.autoAdd']},
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {title: '后台首页', icon: 'form', permissions: ['sysMenu.autoAdd']},
                component: () => import('@/views/index')
            },
            {
                path: '/test',
                name: 'test',
                meta: {title: '测试', icon: 'form', permissions: ['sysMenu.autoAdd']},
                component: () => import('@/views/test')
            },
            {
                path: '/account',
                component: RouteView,
                redirect: '/account/center',
                name: 'account',
                hidden: true,
                meta: {title: '个人页', icon: 'user', keepAlive: true, permissions: ['sysMenu.autoAdd']},
                children: [
                    {
                        path: '/account/center',
                        name: 'center',
                        component: () => import('@/views/user/center/Index'),
                        meta: {title: '个人中心', keepAlive: true, permissions: ['sysMenu.autoAdd']}
                    },
                    {
                        path: '/account/settings',
                        name: 'settings',
                        component: () => import('@/views/user/settings/Index'),
                        meta: {title: '个人设置', hideHeader: true, keepAlive: true, permissions: ['sysMenu.autoAdd']},
                        redirect: '/account/settings/base',
                        alwaysShow: true,
                        children: [
                            {
                                path: '/account/settings/base',
                                name: 'BaseSettings',
                                component: () => import('@/views/user/settings/BaseSettings'),
                                meta: {title: '基本设置', hidden: true, keepAlive: true, permissions: ['sysMenu.autoAdd']}
                            }
                        ]
                    }
                ]
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
        path: '/user',
        component: UserLayout,
        redirect: '/user/login',
        hidden: true,
        children: [
            {
                path: '/user/login',
                name: 'login',
                component: () => import('@/views/Login')
            }
        ]
    },

    {
        path: '/404',
        hidden: true,
        component: () => import('@/views/exception/404')
    }
]
