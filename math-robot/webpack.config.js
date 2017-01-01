/**
 * Created by Exper1ence on 2016/12/26.
 */
const Path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const PATHS = {
    app: Path.resolve(__dirname, 'client/index.js'),
    build: Path.resolve(__dirname, 'public'),
};

const common = {
    entry: PATHS.app,
    output: {
        path: PATHS.build,
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env', 'react'],
                    plugins: ["transform-object-rest-spread"]
                }
            }
        ]
    },
};
let config;

switch (process.env.npm_lifecycle_event) {
    case 'build':
        config = merge(common, {
            devtool: 'source-map'
        });
        break;
    case 'debug':
        config = merge(common, {
            devtool: '#inline-source-map',
            // devtool: 'cheap-eval-source-map',
            debug: true,
        });
        break;
    default:
        config = merge(common, {});
}
module.exports = config;