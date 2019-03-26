<template xmlns:v-auth="">
    <div>
        test {{targetTime}} 权限测试
        <div>
            <a-button v-auth="{ p: 'sysMenu.autoAdd' }" @click="handleStartJob">启动定时任务</a-button>
        </div>
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
        methods: {
            handleStartJob(){
                this.$message.info("启动定时任务")
            }
        }
    }
</script>

<style lang="less" scoped>


</style>
