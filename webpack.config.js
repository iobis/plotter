const Uglify = require("uglifyjs-webpack-plugin")

module.exports = {
  entry: './main',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    port: 5500,
    inline: true
  },
  plugins: [
    new Uglify()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}