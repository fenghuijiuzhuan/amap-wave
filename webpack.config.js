/*
 * @path        : \amap-wave\webpack.config.js
 * @message     : 
 * @Author      : yvangod
 */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'amap-wave.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'AMapWave',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  optimization: {
    minimize: false,
  }
};
