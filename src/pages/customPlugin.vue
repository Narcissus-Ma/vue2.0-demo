<template>
  <div class="pluginWrapper">
    <button @click="pluginMethod">自定义plugin中的方法</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "我是Home页面",
    };
  },
  methods: {
    // 定义插件中的方法
    pluginMethod() {
      console.log("我是Home页面中的plugin方法");
      this.$myMethod();
    },
  },
};
</script>

<style scoped>
.pluginWrapper {
  margin-top: 100px;
}
</style>
