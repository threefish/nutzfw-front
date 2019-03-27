import Vue from 'vue'
import router from '@/router/index'
import store from '@/store'

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
            next({ path: '/dashboard' })
            NProgress.done()
        } else {
            if (store.getters.roles.length === 0) {
                store
                    .dispatch('GetInfo')
                    .then(res => {
                        const auth = res.data.auth
                        store.dispatch('GenerateRoutes', { auth }).then(() => {
                            // 根据roles权限生成可访问的路由表
                            // 动态添加可访问路由表
                            router.addRoutes(store.getters.addRouters)
                            const redirect = decodeURIComponent(from.query.redirect || to.path)
                            if (to.path === redirect) {
                                // hack方法 确保addRoutes已完成 ,设置replace：true，以便导航不会留下历史记录
                                next({ ...to, replace: true })
                            } else {
                                // 跳转到目的路由
                                next({ path: redirect })
                            }
                        })
                    })
                    .catch(() => {
                        notification.error({
                            message: '错误',
                            description: '请求用户信息失败，请重试'
                        })
                        store.dispatch('Logout').then(() => {
                            next({ path: '/user/login', query: { redirect: to.fullPath } })
                        })
                    })
            } else {
                next()
            }
        }
    } else {
        if (whiteList.includes(to.name)) {
            // 在免登录白名单，直接进入
            next()
        } else {
            next({ path: '/user/login', query: { redirect: to.fullPath } })
            NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
        }
    }

})

router.afterEach(() => {
    NProgress.done()
})

const rolesData = {
    "roles": [
        "superadmin",
        "管理员"
    ],
    "stringPermissions": [
        "DatabaseBackup.index",
        "sysMonitor.startJob",
        "sysPersonal.delToReview",
        "mobileInterface.functions.roster",
        "sysLogs.errorLogs",
        "sysDict.manager",
        "sysDataTable.manager",
        "sysAccount.add",
        "sysRedis.index",
        "sysPersonal.index",
        "sysLogs.index",
        "statistics.save",
        "sysRole.queryAllRoles",
        "sysOrganize.department.add",
        "portal.saveGroupFunction",
        "sysLogs.sysLogs",
        "sysOrganize.index",
        "sysAccount.importData",
        "portal.save",
        "sysMenu.del",
        "sysDict.del",
        "sysRole.index",
        "sysMonitor.resumJob",
        "sys.advancedSearch",
        "portal.getSelectedUserIds",
        "sysMonitor.update",
        "sysAttach.index",
        "sysDataQueryMaintain.singleIndex",
        "news.manager",
        "sysDynamicFrom.importHistory",
        "sysRedis.edit",
        "sysMonitor.index",
        "simpleApi.index",
        "FileHistory.index.edit",
        "DatabaseBackup.index.del",
        "sysMenu.index",
        "sys.changeProductLogo",
        "sysLogs.loginsLogs",
        "news.publish",
        "sysPersonal.editToReview",
        "sysRole.delRoleList",
        "sysMenu.move",
        "sysRole.updateAllRoles",
        "sysOrganize.department.treeAboutJobAndCount",
        "portal.savePortalUsers",
        "sysUserImport.index",
        "sysRole.roleUsers.delUser",
        "sys.maintain",
        "sysRole.delRole",
        "sysOrganize.department.importData",
        "userchange.queryUsers",
        "sysOrganize.job.distributionPage",
        "sysDynamicFrom.del",
        "portal.query",
        "file.index",
        "file.index.view",
        "portal.userTree",
        "sysDynamicFrom.saveData",
        "sysDict.saveOrUpdate",
        "msgnotice.query",
        "portal.tree",
        "sysMonitor.changeJobType",
        "sysRole.downRole",
        "sysDataTable.edit",
        "file.index.manage",
        "sysOrganize.job.allocation",
        "portal.index",
        "statistics.manager",
        "sysOrganize.userReview",
        "sysDataQueryMaintain.index",
        "sys.userDataReview",
        "sysSMS.index",
        "sysMonitor.quartz",
        "statistics.del",
        "DatabaseBackup.index.edit",
        "sysRole.tree",
        "sysDataTable.add",
        "sys.index",
        "sysOrganize.job.jobDistr",
        "news.toped",
        "sysDynamicFrom.importData",
        "userchange.manager",
        "sysOrganize.userReview.undoReview",
        "msgnotice.manager",
        "sys.dataReview",
        "userchange.listPage",
        "sys.userDataReview.review",
        "swagger.index",
        "sys.monitor",
        "sysOrganize.job.index",
        "quicklink.manager",
        "sysRole.saveList",
        "sysDynamicFrom.saveReviewData",
        "sysRole.query",
        "portal.del",
        "news.edit",
        "sysOrganize.job.saveOrUpdate",
        "mobileInterface.userInfo",
        "statistics.query",
        "sysEmail.writeEmail",
        "sysMenu.add",
        "FileControlSet.index.del",
        "sysMonitor.pauseJob",
        "sysAccount.repass",
        "FileHistory.index.del",
        "mobileInterface.index",
        "userchange.index",
        "sysAccount.saveUserRole",
        "dev.index",
        "sysMenu.lock",
        "mobileInterface.functions",
        "sysRole.saveOrUpdate",
        "sysRole.del",
        "sysRole.upRole",
        "sysMonitor.updatejobCorn",
        "mobileInterface.functions.roster.getUserInfoById",
        "sysOrganize.department.treeAboutCount",
        "sysOrganize.department.treeAboutJob",
        "sysPersonal.view",
        "sysOptions.index",
        "sysDict.sort",
        "portal.manager",
        "file.index.fileView",
        "sysDynamicFrom.edit",
        "news.locked",
        "FileControlSet.index.edit",
        "userchange.saveUserChange",
        "sysMonitor.druid",
        "quicklink.query",
        "sysMonitor.showUserDeviceBar",
        "sysOrganize.job.changeAllocation",
        "sysMonitor.updateShortNo",
        "mobileInterface.functions.statistics",
        "quicklink.saveOrUpdate",
        "sysOrganize.department.sort",
        "mobileInterface.functions.roster.queryByDeptOrJob",
        "sysOrganize.job.queryByDepartment",
        "sysOrganize.userReview.agreeReview",
        "sysDynamicFrom.editToReview",
        "sysMonitor.showUserBrowserPie",
        "sysOrganize.job.del",
        "news.unlock",
        "file.index.pool",
        "sysMonitor.atOnceJob",
        "news.untoped",
        "sysMonitor.updateArgs",
        "mobileInterface",
        "sysDynamicFrom.delToReview",
        "sysMonitor.jobRunHistory",
        "news.newsList",
        "msgnotice.del",
        "news.index",
        "sysEmail.index",
        "sysMonitor.addJob",
        "sysRole.unlock",
        "sysDataTable.del",
        "sysAccount.lock",
        "sysOptions.update",
        "FileControlSet.index",
        "sysDataQueryMaintain.importAttach",
        "sysRedis.del",
        "FileHistory.index",
        "msgnotice.save",
        "sysOrganize.department.index",
        "sysRole.lock",
        "userchange.history",
        "sysRole.roleMenus.update",
        "quicklink.del",
        "portal.getSelectedIds",
        "sysAccount.index",
        "sysMonitor.stopJob",
        "sysDataTable.synchronize",
        "sysDataTable.revertTableStructure",
        "sysMenu.update",
        "userchange.review",
        "sysDataTable.backupTableStructure",
        "sysTailLogs.index",
        "sysMenu.autoAdd"
    ]
};

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
        // const roles = store.getters.roles
        const roles = rolesData
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
