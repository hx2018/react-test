const utils = require("./utils");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development", // default mode
  entry: { app: "./src/index" }, // (name: app)
  output: {
    path: utils.resolve("../dist"),
    filename: "bundle.js",
    // eg：<link href="/assets/spinner.gif" />
    publicPath: "/",
  },
  // devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(bmp|png|jpe?g|gif|svg|)$/,
        loader: "url-loader",
      },
    ],
  },

  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@": utils.resolve("../src"),
      components: utils.resolve("../src/components"),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: utils.resolve("../dist/index.html"),
      //hash: true,
    }),
    new BundleAnalyzerPlugin({ analyzerPort: 9999 }),
  ],

  devServer: {
    port: 9000,
  },
};
