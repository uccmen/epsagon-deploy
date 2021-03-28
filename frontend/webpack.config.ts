import CopyWebpackPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

module.exports = {
  devtool: 'source-map',
  devServer: {
    port: 3001,
  },
  mode: process.env.WEBPACK_MODE || 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
        test: /\.ts(x?)$/,
      },
      {
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'source-map-loader',
        test: /\.js$/,
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [path.resolve(__dirname), 'node_modules'],
    fallback: {
      assert: require.resolve('assert/'),
      stream: require.resolve('stream-browserify'),
    },
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{from: './src/assets', to: `${__dirname}/build/assets`}],
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: './tsconfig.json',
      tslint: '../tslint.json',
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
};
