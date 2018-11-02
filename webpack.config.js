var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
    filename: 'style.css'
});

module.exports = {
    entry: {
        home: ["@babel/polyfill", "./bluish/src/index.js"],
        hero: ["@babel/polyfill", "./bluish/src/hero-animation.js"],
    },
    output: {
        path: path.resolve(__dirname, 'bluish/docs'),
        filename: '[name].js'
        //publicPath: '/build'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'postcss-loader', 'sass-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        extractPlugin
    ]
}