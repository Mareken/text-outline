const path = require("path");
const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  plugins: [
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({ filename: "main.[contenthash].css" }),
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
      inject: true
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "src")],
        loader: "babel-loader",
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif|otf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          },
        ],
       type: 'javascript/auto'
      },
      {
        test: /.(sa|sc|c)ss$/,
        use: [ 
          { loader: "style-loader" },  // to inject the result into the DOM as a style block
          { loader: "css-loader" },
          { loader: "sass-loader" },  // to convert SASS to CSS
        ]
      },
      {
        test: /\.pug$/,
        include: path.join(__dirname, 'src'),
        loader: "pug-loader"
      },
    ],
  },

  devServer: {
    open: true,
    host: "localhost",
  },
};
