// 动作
import {
  INCREMENT,
  DECREMENT,
  INCREMENTIFODD,
  INCREMENTASYNC,
} from "./const.js";

export default {
  increment(context, value) {
    context.commit(INCREMENT, value);
  },
  decrement(context, value) {
    context.commit(DECREMENT, value);
  },
  incrementifodd(context, value) {
    context.commit(INCREMENTIFODD, value);
  },
  incrementasync(context, value) {
    context.commit(INCREMENTASYNC, value);
  },
};
