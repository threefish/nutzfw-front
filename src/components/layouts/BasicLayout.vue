<template>
    <a-layout class="layout">
        <a-layout-header class="ant-header-fixedHeader ant-header-side-opened">
            <a-icon class="trigger"
                    :type="collapsed ? 'menu-fold' : 'menu-unfold'"
                    @click="toggle"></a-icon>
        </a-layout-header>
        <a-layout class="ant-layout-has-sider">
            <a-layout-sider width="250" style="background: #fff">
                <s-menu
                        :menu="menus"
                        :theme="theme"
                ></s-menu>
            </a-layout-sider>
            <a-layout style="padding: 5px">
                <a-layout-content :style="{ background: '#fff',minHeight: '680px' }">
                    <route-view/>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script>
    import RouteView from '@/components/layouts/RouteView'
    import SMenu from '@/components/menu/'
    import {constantRouterMap} from '@/router/config'

    export default {
        components: {RouteView, SMenu},
        data() {
            return {
                mode: 'inline',
                theme: 'dark',
                collapsed: true,
                menus: constantRouterMap
            }
        },
        methods: {
            toggle() {
                this.$emit('toggle')
            }
        },
    }
</script>
<style lang="less">
    .trigger {
        font-size: 20px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color .3s;
        &:hover {
            background: rgba(0, 0, 0, 0.025);
        }
    }
</style>
