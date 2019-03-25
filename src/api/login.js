import {post} from '@/utils/request'

const api = {
    login: '/management/login',
    checkshowCaptcha: '/management/checkshowCaptcha',
}

export function login(parameter) {
    return post(api.login, parameter)
}
export function checkshowCaptcha(parameter) {
    return post(api.checkshowCaptcha, parameter)
}