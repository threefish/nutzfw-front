<template>
    <div>
        index {{targetTime}}
        <router-link :to="{name:'test'}">测试</router-link>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                targetTime: new Date()
            }
        },
        methods: {}
    }
</script>

<style lang="less" scoped>


</style>
