const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin")

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],
    entry: resolve('src', './js/main.js'),
    output: {
        filename: 'main.[contenthash].js',
        clean: true
    },
    module:{
        rules: [
            {
                test: /\.(png|jpe?g|gif|mp3|mp4)$/i,
                use: 'file-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset",
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            { test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },

        ]
    },
    devServer: {
        port: 9000
    },
    optimization: {
        minimizer: [
            "...",
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.imageminMinify,
                    options: {
                        plugins: [
                            ["gifsicle", { interlaced: true }],
                            ["jpegtran", { progressive: true }],
                            ["optipng", { optimizationLevel: 5 }],
                        ],
                    },
                },
            }),
        ],
    },
}
