<template>
    <a-layout-sider
            :class="['sider','shadow', theme, 'ant-fixed-sidemenu' ]"
            width="250px"
            :collapsible="collapsible"
            v-model="collapsed"
            :trigger="null">
        <logo/>
        <s-menu
                :collapsed="collapsed"
                :menu="menus"
                :theme="theme"
                :mode="mode"
                @select="onSelect"
                style="padding: 16px 0px;"></s-menu>
    </a-layout-sider>
</template>

<script>
    import ALayoutSider from 'ant-design-vue/es/layout/Sider'
    import SMenu from './index'

    export default {
        name: 'SideMenu',
        components: {ALayoutSider, SMenu},
        props: {
            mode: {
                type: String,
                required: false,
                default: 'inline'
            },
            theme: {
                type: String,
                required: false,
                default: 'dark'
            },
            collapsible: {
                type: Boolean,
                required: false,
                default: false
            },
            collapsed: {
                type: Boolean,
                required: false,
                default: false
            },
            menus: {
                type: Array,
                required: true
            }
        },
        methods: {
            onSelect(obj) {
                this.$emit('menuSelect', obj)
            }
        }
    }
</script>
