// initial state
import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  //存储的状态信息比如用户信息
  state: () => ({
    loginUser: {
      userName: "未登录",
      role: "notLogin",
    },
  }),
  actions: {
    getLoginUser({ commit, state }, payload) {
      commit("updateUser", { userName: "鱼皮" });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
