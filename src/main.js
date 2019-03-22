import Vue from "vue";
import './core/components_use'
import router from "./router";
import store from "./store";
import App from "./App.vue";

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
