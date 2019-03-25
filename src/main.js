import Vue from "vue";
import './core/components_use'
import router from "./router";
import store from "./store";
import App from "./App.vue";
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
    render: h => h(App)
}).$mount("#app");
