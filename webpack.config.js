const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const BASE_JS = "./src/component/";

module.exports = {
  entry: {
    common: [
      BASE_JS + "common/GlobalStyles.js",
      BASE_JS + "common/MouseCircle.js",
      BASE_JS + "common/Wrapper.js",
    ],
    autoComplete: BASE_JS + "AutoComplete.js",
    clicktoEdit: BASE_JS + "ClickToEdit.js",
    modal: BASE_JS + "Modal.js",
    Tab: BASE_JS + "Tab.js",
    Tag: BASE_JS + "Tag.js",
    Toggle: BASE_JS + "Toggle.js",
  },
  mode: process.env.NODE_ENV,
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "js/[name].bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      fileName: path.join(__dirname, "/dist"),
      template: path.join(__dirname, "/public/index.html"),
      minify: true,
    }),
    new FaviconsWebpackPlugin({
      logo: "public/logo512.png",
    }),
  ],
};
