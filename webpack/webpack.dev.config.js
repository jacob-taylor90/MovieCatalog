var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../src/');

module.exports = {
    entry: [
        path.join(parentDir, 'index.jsx')
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.less$/,
            loaders: ["style-loader", "css-loder", "less-loader"]
        },
        {
            test: /\.scss$/,
            loader: 'style!css!resolve-url!sass?sourceMap'
        },
        ]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}