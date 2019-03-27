import Vue from "vue";
import './plugins/'
import router from "./router";
import store from "./store";
import App from "./App.vue";
import bootstrap from './core/bootstrap'
import '@/utils/permission'
import {VueAxios} from '@/utils/request' // axios 不建议引入到 Vue 原型链上
import VueStorage from 'vue-ls'

Vue.use(VueAxios, router)
Vue.use(VueStorage, {
    namespace: 'nutzfw__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local'
})
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    created () {
        bootstrap()
    },
    render: h => h(App)
}).$mount("#app");
