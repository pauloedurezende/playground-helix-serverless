const path = require('path');
const slsw = require('serverless-webpack');
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: slsw.lib.entries,
  mode: 'production',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve('..', '..', 'tsconfig.base.json'),
            },
          },
        ],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.resolve('.webpack'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.mjs'],
    plugins: [
      new TSConfigPathsPlugin({
        configFile: path.resolve('..', '..', 'tsconfig.base.json'),
      }),
    ],
  },
};
