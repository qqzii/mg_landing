const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false
      }
    }
  },
  transpileDependencies: true,
  lintOnSave: false
})
