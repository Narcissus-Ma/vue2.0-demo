// getters 相当于计算属性
export default {
  // 登录状态
  isLogin(state) {
    return state.isLogin;
  },
  // 用户信息
  userInfo(state) {
    return state.userInfo;
  },
  doubleCount(state) {
    return state.count * 2;
  },
};
