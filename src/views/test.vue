<template xmlns:v-auth="">
    <div>
        {{targetTime}}
        <div>
            <a-button v-auth="{ p: 'sysMenu.autoAdd' }" @click="handleStartJob">指令权限控制测试</a-button>
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
                this.$message.info("指令权限控制测试")
            }
        }
    }
</script>

<style lang="less" scoped>


</style>
