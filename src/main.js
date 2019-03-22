import Vue from "vue";
import './core/components_use'
import router from "./router";
import store from "./store";
import App from "./App.vue";
import { VueAxios } from '@/utils/request' // axios 不建议引入到 Vue 原型链上
Vue.use(VueAxios, router)

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
