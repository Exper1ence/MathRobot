/**
 * Created by Exper1ence on 2016/12/26.
 */
const  Path = require('path');
const  webpack = require('webpack');

module.exports = {
    entry: './client/index.js',
    output: { path: Path.resolve(__dirname,'public'), filename: 'index.bundle.js' },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['env', 'react']
                }
            }
        ]
    },
};