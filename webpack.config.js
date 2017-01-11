var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    context: path.resolve('src'),

    entry: {
        index: ['./app/index']
    },

    output: {
        path: path.resolve('dist/'),
        filename: '[name].bundle.js'
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new ExtractTextPlugin("styles.css")
    ],

    module: {
        preLoaders: [
            {
                test: /\.js$/, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff2|woff)$/,
                loader: 'url-loader?limit=10000'
            },
            {
                test : /\.jsx?/,
                include : path.resolve('src'),
                loader : 'babel'
            }
        ]
    },

    jshint: {
        reporter: require('jshint-loader-reporter')('stylish')
    },

    resolve: {
        extensions: ['', '.js', '.es6', 'jsx']
    },

    devServer: {
        contentBase: 'src'
    }
};

