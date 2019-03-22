<template>
    <div>
        login2
        <router-view/>
    </div>
</template>
<script>
    import {notification} from 'ant-design-vue'

    export default {
        data() {
            return {}
        },
        mounted() {
            notification.info({message: '系统提示', description: "呵呵"})
        }
    }
</script>

<style scoped>

</style>