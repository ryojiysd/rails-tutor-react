const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: "bundle.js"
  },
  devtool: "source-map",
  target: "node",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        enforce: "pre",
        test: /\.tsx?$/,
        loader: "source-map-loader"
      }
    ]
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 3000,
    open: false
  }
};
