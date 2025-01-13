<template>
  <input type="text" v-focus />
</template>

<script>
export default {
  directives: {
    focus: {
      // 指令的定义
      inserted(el) {
        console.log("focus inserted");
        el.focus();
        el.style.border = "1px solid red";
      },
    },
  },
};
</script>

<style scoped></style>
