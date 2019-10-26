import Vue from "vue";
import App from "./App";
import store from "./store";

new Vue({
  store, // in addition to telling Vue to use Vuex, we must pass our store to Vue
  render: h => h(App)
}).$mount("#app");
