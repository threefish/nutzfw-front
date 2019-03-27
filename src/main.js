import Vue from "vue";
import './plugins/'
import router from "./router";
import store from "./store";
import App from "./App.vue";
import bootstrap from './core/bootstrap'
import '@/utils/permission'
import {VueAxios} from './utils/request'
import VueStorage from 'vue-ls'

Vue.config.productionTip = false;
Vue.use(VueStorage, {
    namespace: 'NUTZFW__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local'
})
Vue.use(VueAxios, router)
new Vue({
    router,
    store,
    created() {
        bootstrap()
    },
    render: h => h(App)
}).$mount("#app");
