const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');
const path = require('path');

const env = { dev: process.env.NODE_ENV };

const config = {
  contentBase: path.join(__dirname, '../../src/'),
  historyApiFallback: { disableDotRule: true },
};

const server = new WebpackDevServer(webpack(webpackConfig(env)), config);

server.listen(3000, 'localhost');
