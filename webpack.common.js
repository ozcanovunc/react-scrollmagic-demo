const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-syntax-dynamic-import"],
          },
        },
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
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
};
