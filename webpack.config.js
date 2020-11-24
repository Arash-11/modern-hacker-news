const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {test : /\.(js)$/, use:'babel-loader', exclude: /node_modules/,},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin ({
            template: './public/index.html'
        })
    ]
}