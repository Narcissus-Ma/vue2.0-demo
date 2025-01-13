<template>
  <div id="app">
    <div class="header">vue2面试学习笔记</div>
    <div class="mainContent">
      <Menu />
      <div class="mainBox">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./pages/menu.vue";

export default {
  name: "App",
  components: {
    Menu,
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.mainContent {
  width: 100%;
  height: 100%;
  display: flex;
}
.mainBox {
  flex: 1;
  overflow: auto;
}
.header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #2c3e50;
  color: #fff;
  font-size: 20px;
}
</style>
