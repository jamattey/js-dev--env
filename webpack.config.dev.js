// This holds the dev webpack configurations
// Contains development specific config to help write code quickly with prompt feedback.

import path from 'path';

//export the defined webpack object
export default {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './src/index.js', // use your app's entry point
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.css$/, use: ['style-loader', 'css-loader']} // configures webpack to handle importing css
    ]
  }
}



