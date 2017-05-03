var path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'dist/bundle.js',
        path: path.join(__dirname, '/'),
    },
    devtool: "inline-source-map",
    devServer: {
        port: 1337,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {test: /\.js/, use: 'babel-loader'}
        ]
    }
};

