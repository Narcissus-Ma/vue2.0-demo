<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <el-menu-item index="home">
      <i class="el-icon-menu"></i>
      <span slot="title">项目概述</span>
    </el-menu-item>
    <el-menu-item index="Mixins">
      <i class="el-icon-menu"></i>
      <span slot="title">mixins使用</span>
    </el-menu-item>
    <el-menu-item index="transition">
      <i class="el-icon-document"></i>
      <span slot="title">动画特效</span>
    </el-menu-item>
    <el-menu-item index="slotFather">
      <i class="el-icon-setting"></i>
      <span slot="title">插槽</span>
    </el-menu-item>
    <el-menu-item index="customPlugin">
      <i class="el-icon-setting"></i>
      <span slot="title">插件</span>
    </el-menu-item>
    <el-menu-item index="todoList">
      <i class="el-icon-setting"></i>
      <span slot="title">todoList</span>
    </el-menu-item>
    <el-menu-item index="vuexDemo">
      <i class="el-icon-setting"></i>
      <span slot="title">vuex的使用</span>
    </el-menu-item>
    <el-menu-item index="nextTickDemo">
      <i class="el-icon-setting"></i>
      <span slot="title">$nextTick原理</span>
    </el-menu-item>
    <el-menu-item index="customDirectives">
      <i class="el-icon-setting"></i>
      <span slot="title">自定义指令</span>
    </el-menu-item>
    <el-submenu index="dndComponent">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>DND组件</span>
      </template>
      <el-menu-item index="listDND">DNDList</el-menu-item>
      <el-menu-item index="teamWork">团队协作</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  methods: {
    // handleSelect(key, _keyPath) {
    //   this.$router.push({ path: key });
    // },
  },
};
</script>

<style scoped>
.el-menu {
  height: 90vh;
  width: 200px;
}
.el-menu-item {
  text-align: left;
}
.el-submenu {
  text-align: left;
}
</style>
