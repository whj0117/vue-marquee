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
    entry: ["babel-polyfill", "./src/main.js"], // 入口文件
    // 出口
    output: {
        filename: 'vueLoopMarquee.js',
        path: resolve('dist'), //打包的结果文件生成的目录要是绝对路径
        //publicPath: '/assets/',
        //libraryTarget: 'umd',//libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。
        //umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
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
            filename: "index.html",
            minify: {
                removeAttributeQuotes: true, //删除双引号,
                collapseWhitespace: true,    //压缩成一行，
            },
            hash: true
        }),
    ]
})
