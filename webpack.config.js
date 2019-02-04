const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./client/index.js"],
  output: {
    path: __dirname + '/public',
    publicPath: "/",
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
