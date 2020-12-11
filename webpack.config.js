// 使用node的path模块
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    // 打包入口
    entry: './src/main.js',
    devtool: 'eval-source-map',
    // 打包出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]',
                    limit: 1077532
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
            }
        ]
    },
    devServer: {
        // 指定服务器根目录
        contentBase: './dist',
        // 自动打开浏览器
        open: true,
        // 启用热模块替换
        hot: true
    },
    plugins: [
        // 请确保引入这个插件！
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin() 
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}