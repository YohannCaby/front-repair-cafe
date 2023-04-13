const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages:{
    index:{
      entry: 'src/main.js',
      title: "Administration Repair Café",
    }
  },
  devServer:{
    port:4000,
  }
})
