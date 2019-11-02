const dev = require('./webpack.dev')
const prod = require('./webpack.prod')
const path = require('path')
//实现合并
const merge = require('webpack-merge')
//把.html模板打包到dist
const htmlWebpackPlugin = require('html-webpack-plugin')
//清除没有用到的.js文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
//把css打包到外部
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env)=>{
    // console.log('base...')
    let isDev = env.development
    // console.log(isDev)
    //base是开发模式和生产模式共同的
    const base = {
        entry:path.resolve(__dirname,'../src/index'),
        module:{
            rules:[
                //style-loader是把css打包到内部 形成style标签 然后嵌入到.html中
                {
                    test:/\.css$/,
                    use:[
                        // 'style-loader',
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader:'css-loader',
                            options:{
                                importLoaders:2
                            }
                        },
                        //让css识别@import './a.scss'
                        'sass-loader',
                        //实现旋转
                        "postcss-loader"
                    ]
                },
                {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
                {
                    // 处理图片
                    test:/\.(png|jpg|jpeg|gif)$/,
                    use:{
                        loader:"url-loader",
                        options:{
                            name:"[name].[hash:7].[ext]",
                            limit:1024*10,  // 1024*10 10以下，会转成base64一大堆字符串
                            outputPath: 'images'  //会把打包后的放在这个文件夹下面
                        }
                    }
                    // use:"file-loader"  // file-loader默认的功能是copy的功能  如果一个图片比较小  把这个图片转化成base64  本质就是把一张图片转成字符串 好处就是避免二次请求  一般会把一些小图标转成base64
                }
            ]
        },
        output:{
            filename:'bundle.js',
            path:path.resolve(__dirname,'../dist')
        },
        plugins:[
            new CleanWebpackPlugin(), //会把在dist中没有用到的文件删除
            //把.html打包到dist上 成功后这个.html会自动引入.js  .css 
            // css打包到dist 那么在.html中使用link进行自动引入
            new htmlWebpackPlugin({
                template:path.resolve(__dirname,'../public/index.html'),
                filename:'index.html', //打包到dist中的.html的名字 如果不设置默认同public下面的名字一样
                minify:!isDev && {
                    //生产模式 因为开发模式在浏览器中不会看里面的代码 只会看展示的效果
                    removeAttributeQuotes:true, //会把打包到dist下的.html里面的引号去掉 
                    collapseWhitespace:true //会把打包到dist下的.html所有内容放到一行
                }              
            }),
            //把css打包到css文件夹下面的main.css 
            !isDev && new MiniCssExtractPlugin({
                    filename:'css/main.css'
            })
        ].filter(Boolean)
    }
    // return base //不写下面代码时  需要把base返回 不返回的话 还是默认的设置 
    // 例如生成文件的名字不是自己设置的bundle.js 而是默认的main.js
    if(isDev){
        // merge是把两配置文件合并  需要返回  如果不返回走的还是默认的配置文件
        //是开发环境
        return merge(base,dev)
        
    }else{
        //是生产环境
        return merge(base,prod)
    }
}