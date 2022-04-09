const path = require('path');
const HWP = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'react-webpack-bundle.js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    },
    plugins:[
        new HWP({template:path.join(__dirname, '/src/index.html')})
    ],
    devServer: {
        historyApiFallback: true
    }
};
