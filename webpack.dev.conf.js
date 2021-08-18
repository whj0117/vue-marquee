const {merge} = require('webpack-merge')
const path = require('path')
const base = require('./webpack.common.js')
//生成创建Html入口文件
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(name) {
    return path.join(__dirname, name)
}

module.exports = merge(base, {
    // 指定模式配置："development" | "production" | "none"
    mode: 'development',
    //启用source-map方便调试
    devtool: 'inline-source-map',
    // 入口
    entry: "./src/main.js", // 入口文件
    // 出口
    output: {
        filename: 'js/vueLoopMarquee.js',
        path: resolve('dist'), //打包的结果文件生成的目录要是绝对路径
    },
    //起服务
    devServer: {
        //开发服务器
        useLocalIp: true,
        host: "0.0.0.0",
        contentBase: resolve("dist"),
        port: "8090",
        hot:true,
        open: true //自动打开浏览器
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '跑马灯',
            //模板文件名
            template:'./index.html',
            filename: "index.html",
        }),
    ]
})
