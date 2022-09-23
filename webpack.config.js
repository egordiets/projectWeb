const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: resolve(__dirname, 'src', 'index.js'),
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'main.[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\\.s[ac]css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'image-optimize-loader',
                        options: {
                            compress: {
                                mode: 'high',
                                webp: true,
                                gefsicle: true,
                                desableOnDevelopment: false
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname,'index.html')
        })
    ]
}