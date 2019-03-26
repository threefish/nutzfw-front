import {post, get} from '@/utils/request'

const api = {
    login: '/management/login',
    logout: '/management/logout',
    permissions: '/manage/user/permissions',
    userInfo: '/manage/user/userInfo',
    checkshowCaptcha: '/management/checkshowCaptcha',
}

/**
 * 登录
 * @param parameter
 * @returns {*}
 */
export function login(parameter) {
    return post(api.login, parameter)
}

/**
 * 是否展示验证码
 * @param parameter
 * @returns {*}
 */
export function checkshowCaptcha(parameter) {
    return post(api.checkshowCaptcha, parameter)
}

/**
 * 登出系统
 * @param parameter
 * @returns {*}
 */
export function logout(parameter) {
    return get(api.logout,parameter)
}

/**
 * 权限信息
 * @param parameter
 * @returns {*}
 */
export function getPermissions(parameter) {
    return get(api.permissions,parameter)
}
/**
 * 用户基本信息及权限信息
 * @param parameter
 * @returns {*}
 */
export function getUserInfo() {
    return get(api.userInfo)
}