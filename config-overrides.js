const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require("customize-cra");
const path = require("path");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true
    // modifyVars: { "@primary-color": "#1DA57A" }
  }),
  addWebpackAlias({
    api: path.resolve(__dirname, "./src/renderer/api"),
    layout: path.resolve(__dirname, "./src/renderer/layout"),
    config: path.resolve(__dirname, "./src/renderer/config"),
    components: path.resolve(__dirname, "./src/renderer/components"),
    styles: path.resolve(__dirname, "./src/renderer/styles"),
    utils: path.resolve(__dirname, "./src/renderer/utils"),
    views: path.resolve(__dirname, "./src/renderer/views"),
    store: path.resolve(__dirname, "./src/renderer/store")
  })
);
