import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import MyPlugin from "./plugin/pluginDemo.js";
import store from "./store/store.js";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(MyPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
