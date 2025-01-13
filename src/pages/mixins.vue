<template>
  <div class="user">
    <h1>{{ msg }}</h1>
    <h1>{{ msg1 }}</h1>
    <h1>{{ msg2 }}</h1>
    <button @click="change1">组件内部方法</button>
    <button @click="change">组件内部方法覆盖外部方法</button>
  </div>
</template>

<script>
import { mixin1 } from "../mixins/msg";
export default {
  name: "mixins",
  mixins: [mixin1],
  data() {
    return {
      msg: "组件内部数据",
      msg2: "组件内部数据覆盖mixins混入数据",
    };
  },
  methods: {
    change1() {
      alert("组件内部方法");
    },
    change() {
      alert("组件内部方法覆盖外部方法");
    },
  },
  // 生命周期合并执行 mixin先执行
  created() {
    console.log("组件内部生命周期执行");
  },
};
</script>

<style scoped></style>
