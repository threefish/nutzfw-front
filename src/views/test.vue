<template>
    <div>
        <a-card class="card" title="有权限" :bordered="false">
            <a-button v-auth="{ p: 'sysMenu.autoAdd' }" @click="handleHasPermission">测试</a-button>
        </a-card>
        <a-card class="card" title="无权限" :bordered="false">
            <a-button v-auth="{ p: 'sysMenu' }" >无权</a-button>
        </a-card>
        <!-- fixed footer toolbar -->
        <footer-tool-bar
                :style="{ width: isSideMenu() && isDesktop() ? `calc(100% - ${sidebarOpened ? 256 : 80}px)` : '100%'}">
            <a-button type="primary" @click="validate" :loading="loading">提交</a-button>
        </footer-tool-bar>
    </div>
</template>

<script>
    import FooterToolBar from '@/components/FooterToolbar'

    import {mixin, mixinDevice} from '@/utils/mixin'

    export default {
        mixins: [mixin, mixinDevice],
        components: {
            FooterToolBar
        },
        data() {
            return {
                loading: false,
            }
        },
        methods: {
            validate() {

            },
            handleHasPermission() {
                this.$notification.success({message:'消息提示',description:"测试有权限，下面无权限的被隐藏了"})
            }
        }
    }
</script>

<style lang="less" scoped>
    .card {
        margin-bottom: 24px;
    }
</style>

