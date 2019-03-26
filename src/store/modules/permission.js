import {asyncRouterMap, constantRouterMap} from '@/router/config'

/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param stringPermissions
 * @param route
 * @returns {boolean}
 */
function hasPermission(stringPermissions, route) {
    if (route.meta && route.meta.permissions) {
        let flag = false
        for (let i = 0, len = stringPermissions.length; i < len; i++) {
            flag = route.meta.permissions.includes(stringPermissions[i])
            if (flag) {
                return true
            }
        }
        return false
    }
    return true
}

/**
 * 单账户多角色时，使用该方法可过滤角色不存在的菜单
 *
 * @param auth
 * @param route
 * @returns {*}
 */
// eslint-disable-next-line
function hasRole(auth, route) {
    if (route.meta && route.meta.auth) {
        return route.meta.auth.includes(auth.id)
    } else {
        return true
    }
}

function filterAsyncRouter(routerMap, auth) {
    const accessedRouters = routerMap.filter(route => {
        if (hasPermission(auth.stringPermissions, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, auth)
            }
            return true
        }
        return false
    })
    return accessedRouters
}

const permission = {
    state: {
        routers: constantRouterMap,
        addRouters: []
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers
            state.routers = constantRouterMap.concat(routers)
        }
    },
    actions: {
        GenerateRoutes({commit}, data) {
            return new Promise(resolve => {
                const {auth} = data
                const accessedRouters = filterAsyncRouter(asyncRouterMap, auth)
                commit('SET_ROUTERS', accessedRouters)
                resolve()
            })
        }
    }
}

export default permission
