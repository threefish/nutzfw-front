<template>
    <div>
        <a-card class="card" title="首页卡片" :bordered="false">
          首页卡片
        </a-card>
    </div>
</template>

<script>

    export default {
        components: {
        },
        data() {
            return {
                loading: false,
            }
        },
        methods: {
        }
    }
</script>

<style lang="less" scoped>
    .card {
        margin-bottom: 24px;
    }
</style>
