<template>
    <div>login</div>
</template>
<script>
    import {notification} from 'ant-design-vue'

    export default {
        name: "Login",
        data() {
            return {}
        },
        mounted() {
            notification.info({message: 'Forbidden', description: "login"})
        }
    }
</script>

<style scoped>

</style>