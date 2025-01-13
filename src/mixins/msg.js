export const mixin1 = {
  data() {
    return {
      msg1: "mixin混入数据",
      msg2: "mixin混入数据2",
    };
  },
  created() {
    console.log("mixins生命周期执行");
  },
  methods: {
    test() {
      console.log("mixin1 test");
    },
    change() {
      alert("mixin混入方法");
    },
  },
};
