<template>
    <div class="main">
        <a-form class="user-layout-login">
            <a-tabs :activeKey="customActiveKey" :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }"
                    @change="handleTabClick">
                <a-tab-pane key="tab1" tab="账号密码登陆">
                    <a-form-item>
                        <a-input size="large" type="text" placeholder="帐户名/ admin" @change="handleCheckCaptcha"
                                 v-model.trim="userName">
                            <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                        </a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-input size="large" type="password" autocomplete="false" placeholder="密码 / admin"
                                 v-model="userPass">
                            <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                        </a-input>
                    </a-form-item>
                    <a-form-item v-if="showCaptcha">
                        <a-input size="large" v-model="captcha" type="text" placeholder="验证码">
                            <a-icon slot="prefix" type="mail" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                        </a-input>
                        <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                    </a-form-item>
                    <a-form-item>
                        <a-checkbox @change="rememberMeChange">自动登陆</a-checkbox>
                    </a-form-item>
                    <a-form-item style="margin-top:24px">
                        <a-button size="large" type="primary" class="login-button" :loading="loginBtn"
                                  :disabled="loginBtn" @click="handleSubmit">确定
                        </a-button>
                    </a-form-item>
                </a-tab-pane>
                <a-tab-pane key="tab2" tab="扫码登录">
                    扫码登录
                </a-tab-pane>
            </a-tabs>
        </a-form>
        <router-view/>
    </div>
</template>
<script>
    import {timeFix} from '@/utils/util'
    import {axios} from '@/utils/request'
    import qs from 'qs'

    export default {
        name: 'login',
        data() {
            return {
                customActiveKey: 'tab1',
                loginBtn: false,
                showCaptcha: false,
                rememberMe: false,
                userName: '',
                userPass: '',
                captcha: '',
            }
        },
        mounted() {
            this.$notification.info({message: '系统提示', description: "呵呵"})
        },
        methods: {
            rememberMeChange(e) {
                this.rememberMe = e.target.checked;
            },
            handleCheckCaptcha() {
                const loginParams = {
                    username: this.userName,
                    password: this.userPass
                }
                console.log(loginParams)
            },
            handleTabClick(key) {
                this.customActiveKey = key
            },
            handleSubmit() {
                const loginParams = {
                    username: this.userName,
                    password: this.userPass,
                    captcha: this.captcha,
                }
                axios({
                    url: '/management/login',
                    method: 'post',
                    data: qs.stringify({loginParams})
                }).then((res) => {
                    console.log(res)
                }).catch(err => this.requestFailed(err))
                    .finally(() => {
                        this.loginBtn = false
                    })
                console.log(loginParams)
            },
            loginSuccess(res) {
                console.log(res)
                this.$router.push({name: 'dashboard'})
                // 延迟 1 秒显示欢迎信息
                this.$notification.success({
                    message: '欢迎',
                    description: `${timeFix()}，欢迎回来`
                })
            },
            requestFailed(err) {
                console.log(err)
                this.$notification['error']({
                    message: '错误',
                    description: ((err.response || {}).data || {}).message || '请求出现错误，请稍后再试',
                    duration: 4
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .user-layout-login {
        width: 380px;
        margin: 0 auto;
        margin-top: 25%;
    }
</style>
