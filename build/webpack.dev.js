const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const devConfig = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        // 指定服务器根目录
        contentBase: './dist',
        // 自动打开浏览器
        open: true,
        // 启用热模块替换
        hot: true
    }
};

module.exports = merge(baseConfig, devConfig);
