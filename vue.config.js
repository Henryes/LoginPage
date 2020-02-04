const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/mangerSystem/dist',
  
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'demo'
  },
  chainWebpack(config) {
    config.module.rules.delete("svg")
    // set svg-sprite-loader
    config.module
    .rule('svg-sprite-loader')
    .test(/\.svg$/)
    .include
    .add(resolve('src/icons')) //处理svg目录
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
     symbolId: 'icon-[name]'
    })
  }
}