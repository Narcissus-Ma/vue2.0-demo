<template>
  <div class="nextTick">
    <h1>{{ msg }}</h1>
    <!-- $nextTick 类似于一个非常高级的定时器，自动追踪DOM更新，更新好了就触发 -->
    <p>this.$nextTick用法</p>
    <div>
      <button @click="testClick()" ref="a">
        {{ msg }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "nextTick",
  data() {
    return {
      msg: "原始值",
    };
  },
  methods: {
    testClick() {
      this.msg = "修改值";
      // console.log(this.$refs.a.innerHTML); //this.$refs.a获取指定DOM，输出：原始值
      this.$nextTick(() => {
        console.log(this.$refs.a.innerText); //输出：修改值
      });
    },
  },
};
</script>

<style scoped></style>
