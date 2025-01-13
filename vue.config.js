const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    useYarn: false, // 强制禁用yarn
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/vue2.0-demo/' : '/' // 部署时使用
});
