const baseConfig = require("./webpack.base.config");

module.exports = Object.assign({}, baseConfig, {
  mode: "development",

  devServer: {
    port: 9000,
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        secure: false,
      },
    },
  },
});
