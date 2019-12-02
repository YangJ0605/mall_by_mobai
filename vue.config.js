module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'server':'@/server',
        'views':'@/views',
        'server':'@/server'
      }
    }
  },
  lintOnSave:false,
  devServer: {
      overlay:{
          warning:false,
          errors:false
      }
    }
}