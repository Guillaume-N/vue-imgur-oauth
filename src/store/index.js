import Vuex from "vuex";
import Vue from "vue";
import auth from "./modules/auth";
import images from "./modules/images";

Vue.use(Vuex); // allows Vuex to talk to Vue

// we export our store
// we register our modules into it
export default new Vuex.Store({
  modules: { auth, images }
});
