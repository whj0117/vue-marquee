// 引入node中的path模块，处理文件路径 的小工具
const path = require('path');
//清除build/dist文件夹文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
//将css提取到单独的文件中
const MiniCssExtract = require('mini-css-extract-plugin');
//css压缩
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
//压缩js文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//支持vue文件
const {VueLoaderPlugin} = require("vue-loader");

// 导出一个webpack具有特殊属性配置的对象
module.exports = {
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'vue-style-loader',
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.vue$/,
                use:[
                    'vue-loader'
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new VueLoaderPlugin()
    ]
}
