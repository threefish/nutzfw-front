<template>
    <div class="logo">
        <router-link :to="{name:'dashboard'}">
            <img src="~@/assets/logo.svg" class="logo" alt="logo">
            <h1 v-if="showTitle">{{ title }}</h1>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Logo',
        props: {
            title: {
                type: String,
                default: '系统测试',
                required: false
            },
            showTitle: {
                type: Boolean,
                default: true,
                required: false
            }
        }
    }
</script>
