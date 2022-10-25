const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'templates/index.html',
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions = { 
          whitespace: 'condense',
          delimiters: ['[[', ']]']
        };
        return options;
      });
  }
})
