const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const BASE_JS = "./src/";

module.exports = {
  entry: {
    common: [
      BASE_JS + "component/common/GlobalStyles.js",
      BASE_JS + "component/common/MouseCircle.js",
      BASE_JS + "component/common/Wrapper.js",
    ],
    autoComplete: [
      BASE_JS + "component/AutoComplete.js",
      BASE_JS + "demo/AutoCompleteDemo.js",
    ],
    clicktoEdit: [
      BASE_JS + "component/ClickToEdit.js",
      BASE_JS + "demo/ClickToEditDemo.js",
    ],
    modal: [
      BASE_JS + "component/Modal.js",
      BASE_JS + "demo/ModalDemo.js",
      BASE_JS + "context/ModalContext.js",
    ],
    tab: [BASE_JS + "component/Tab.js", BASE_JS + "demo/TabDemo.js"],
    tag: [BASE_JS + "component/Tag.js", BASE_JS + "demo/TagDemo.js"],
    toggle: [BASE_JS + "component/Toggle.js", BASE_JS + "demo/ToggleDemo.js"],
    main: ["./src/App.js", "./src/index.js"],
    asset: "./src/assets/movies.js",
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
  optimization: {
    minimize: true,
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
