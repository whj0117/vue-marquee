// 引入node中的path模块，处理文件路径 的小工具
const path = require('path');

const {VueLoaderPlugin} = require("vue-loader");

// 导出一个webpack具有特殊属性配置的对象
module.exports = {
    mode: 'production', // 指定模式配置："development" | "production" | "none"
    // 入口
    entry: './src/lib/index.js', // 入口模块文件路径
    // 出口
    output: {
        // path: './dist/', 错误的，要指定绝对路径
        path: path.join(__dirname, './lib/'), //打包的结果文件生成的目录要是绝对路径
        publicPath:'/lib/',
        filename: 'vueLoopMarquee.js',
        libraryTarget:'umd',//libraryTarget会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的。
        umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
    },
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
        new VueLoaderPlugin()
    ]
}
