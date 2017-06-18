var path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    	filename: "bundle.js",
    	path: path.resolve(__dirname, "public"),
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-decorators-legacy'],
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  }
}

