var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
    filename: 'style.css'
});

module.exports = {
    entry: {
        home: ["@babel/polyfill", "./bluish/src/index.js"],
        subpage: ["@babel/polyfill", "./bluish/src/subpage.js"],
        contact: ["@babel/polyfill", "./bluish/src/scripts/pages/contact-page.js"],
        recomends: ["@babel/polyfill", "./bluish/src/scripts/pages/recomends-page.js"],
        animations: ["@babel/polyfill", "./bluish/src/scripts/pages/animations-page.js"],
        aboutme: ["@babel/polyfill", "./bluish/src/scripts/pages/aboutme-page.js"],
        offeredtools: ["@babel/polyfill", "./bluish/src/scripts/pages/offeredtools-page.js"],
        projects: ["@babel/polyfill", "./bluish/src/scripts/pages/projects-page.js"],
        quickinterview: ["@babel/polyfill", "./bluish/src/scripts/pages/quickinterview-page.js"],
        searchfor: ["@babel/polyfill", "./bluish/src/scripts/pages/searchfor-page.js"],
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