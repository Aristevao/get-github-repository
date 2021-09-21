var path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './src/main.js'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
};