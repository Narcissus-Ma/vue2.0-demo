// mutations操作
export default {
  increment(state, value) {
    state.count += value;
  },
  decrement(state, value) {
    state.count -= value;
  },
  incrementifodd(state, value) {
    if (state.count % 2 !== 0) {
      state.count += value;
    }
  },
  incrementasync(state, value) {
    state.count += value;
  },
};
