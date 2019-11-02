const path = require('path')
module.exports = {
    mode:'development',
    devServer:{
        // 只有npm run dev时看到有没有改变
        //配置开发环境服务器
        port:3000, //不设置 默认为8080 
        contentBase: path.resolve(__dirname,'../dist'),
        compress:true
    }
}