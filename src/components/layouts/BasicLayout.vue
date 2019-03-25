<template>
    <a-layout class="layout ant-layout-has-sider">
        <a-layout-header class="ant-header-fixedHeader">
            <div class="logo" />
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="250" style="background: #fff">
                <a-menu
                        style="width: 250px"
                        :defaultSelectedKeys="['1']"
                        :defaultOpenKeys="['sub1']"
                        :mode="mode"
                        :theme="theme"
                >
                    <a-menu-item key="1">
                        <a-icon type="mail"/>
                        Navigation One
                    </a-menu-item>
                    <a-menu-item key="2">
                        <a-icon type="calendar"/>
                        Navigation Two
                    </a-menu-item>
                    <a-sub-menu key="sub1">
                        <span slot="title"><a-icon type="appstore"/><span>Navigation Three</span></span>
                        <a-menu-item key="3">Option 3</a-menu-item>
                        <a-menu-item key="4">Option 4</a-menu-item>
                        <a-sub-menu key="sub1-2" title="Submenu">
                            <a-menu-item key="5">Option 5</a-menu-item>
                            <a-menu-item key="6">Option 6</a-menu-item>
                        </a-sub-menu>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <span slot="title"><a-icon type="setting"/><span>Navigation Four</span></span>
                        <a-menu-item key="7">Option 7</a-menu-item>
                        <a-menu-item key="8">Option 8</a-menu-item>
                        <a-menu-item key="9">Option 9</a-menu-item>
                        <a-menu-item key="10">Option 10</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub3">
                        <span slot="title"><a-icon type="setting"/><span>Navigation Four</span></span>
                        <a-menu-item key="7">Option 7</a-menu-item>
                        <a-menu-item key="8">Option 8</a-menu-item>
                        <a-menu-item key="9">Option 9</a-menu-item>
                        <a-menu-item key="10">Option 10</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub4">
                        <span slot="title"><a-icon type="setting"/><span>Navigation Four</span></span>
                        <a-menu-item key="7">Option 7</a-menu-item>
                        <a-menu-item key="8">Option 8</a-menu-item>
                        <a-menu-item key="9">Option 9</a-menu-item>
                        <a-menu-item key="10">Option 10</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub5">
                        <span slot="title"><a-icon type="setting"/><span>Navigation Four</span></span>
                        <a-menu-item key="7">Option 7</a-menu-item>
                        <a-menu-item key="8">Option 8</a-menu-item>
                        <a-menu-item key="9">Option 9</a-menu-item>
                        <a-menu-item key="10">Option 10</a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 5px">
                <a-layout-content :style="{ background: '#fff',minHeight: '680px' }">
                    Content
                </a-layout-content>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script>
    export default {
        data () {
            return {
                mode: 'inline',
                theme: 'light',
                collapsed: true,
            }
        },
        methods: {
            changeMode (checked) {
                this.mode = checked ? 'vertical' : 'inline'
            },
            changeTheme (checked) {
                this.theme = checked ? 'dark' : 'light'
            },
        },
    }
</script>

<style>
    #components-layout-demo-top-side-2 .logo {
        width: 120px;
        height: 31px;
        background: rgba(255,255,255,.2);
        margin: 16px 28px 16px 0;
        float: left;
    }
</style>