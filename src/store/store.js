import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

// vuex的五大核心理念
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {},
});
