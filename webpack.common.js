const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
  resolve: {
    alias: {
      ScrollMagic: path.resolve(
        "node_modules",
        "scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"
      ),
      "debug.addIndicators": path.resolve(
        "node_modules",
        "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js"
      ),
    },
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
