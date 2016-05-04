
module.exports = {
  entry: './main.jsx',
  output: {
    path: './build',
    publicPath: "./build/",
    filename: "build.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{ 
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
          //babel6.0以后,使用es6和react的配置
          presets: ['es2015', 'react']
      }
    },
    // {
    //   test: /\.css$/,
    //   loader: 'css'
    // }
    ]
  },
  
  // devtool: '#source-map'
};
