const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
  entry: {
    app: "./src/main.js",
  },
  output: {
    publicPath: "./public/assets/",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./public/assets"), // path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](vue|axios|jquery)[\\/]/,
          name: "vendor",
          chunks: "initial",
          enforce: true,
        },
        // styles: {
        //   name: 'styles',
        //   test: /\.s?css$/,
        //   chunks: 'all',
        //   minChunks: 1,
        //   reuseExistingChunk: true,
        //   enforce: true,
        // },
      },
    },
  },
  watchOptions: {
    ignored: ["public/**/*.js", "node_modules/**"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(css|scss)$/,
        // use: [
        //   "style-loader",
        //   { loader: "css-loader", options: { importLoaders: 1 } },
        //   "postcss-loader",
        // ],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              // options...
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
  resolve: {
    extensions: ["*", ".js", ".vue"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      '@': path.resolve(__dirname, 'src')
    },
  },
};
