var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpackConfig = {
  entry: {
    'App': ['./App.jsx'],
  },
  output: {
    path: 'dist',
    filename: "[name].js"
  },
  module: {
    loaders: [
      { 
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
            //babel6.0以后,使用es6和react的配置
            presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
            // activate source maps via loader query
            'css!less'
        )
      }
    ]
  },
  externals: [{
    'react': 'React' ,
    'react-dom': 'ReactDOM'
  }],
  plugins: [
    new ExtractTextPlugin('./style/[name]'),
    //如果报错'Error: Parameter 'dependency' must be a Dependency',请全局装webpack, npm install -g webpack
    new HtmlWebpackPlugin({
      chunks: ["App"],
      //通过加hash清除缓存
      hash: true,
      //只针对特定html
      template: './index.html',
      //生成的文件名
      filename: "index.html",
      minify:{    //压缩HTML文件
        removeComments:false,    //移除HTML中的注释
        collapseWhitespace:false    //删除空白符与换行符
      }
    })
  ]
};
module.exports = webpackConfig