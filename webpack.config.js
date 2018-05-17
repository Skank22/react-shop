const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './modules/index'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff2?|otf)$/,
                use: 'file-loader'
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss'],
        modules: ['node_modules', 'modules', 'css']
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'modules', 'index.html')
        })
        //new webpack.optimize.CommonsChunkPlugin({children: true, minChunks: 2, async: true})
    ],

    devServer: {
        contentBase: './dist',
        hot: true
    }
};