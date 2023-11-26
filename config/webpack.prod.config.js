const utils = require("./utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.base.config");

console.log("+++++", baseConfig.mode);

module.exports = {
  ...baseConfig,
  mode: "production",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: utils.resolve("../dist/index.html"),
      hash: true,
    }),
  ],
};
