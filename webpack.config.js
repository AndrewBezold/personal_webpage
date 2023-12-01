const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  mode: 'production',
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.txt$/,
        type: 'asset/source',
      },
      {
        test: /\.(png|svg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader',
        ],
      },
      {
        test: /\.pdf$/,
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    assetModuleFilename: "[name][ext]"
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
    }),
    new ForkTsCheckerWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public', 'index.css'),
          to: path.resolve(__dirname, 'dist'),
        },
        {
          from: path.resolve(__dirname, 'public', 'CNAME'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
  ],
  devServer: {
    client: {
      overlay: {
        warnings: true,
        errors: true,
      },
    },
  },
  watchOptions: {
    ignored: '/node_modules/',
  },
};