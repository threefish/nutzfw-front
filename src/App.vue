<template>
        <div id="app">
            <router-view/>
        </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        mounted() {
            const {$store} = this
            $store.dispatch('setSidebar', true)
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
