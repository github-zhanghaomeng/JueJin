
let path = require('path')
module.exports = {
    publicPath:process.env.NODE_ENV === "production" ? "http://www.abcde.com" : "/",
    assetsDir:'asserts',
    productionSourceMap:false,
    runtimeCompiler:false,
    chainWebpack:config=>{
        config.resolve.alias.set('_c',path.resolve(__dirname,'src/components'));
        config.resolve.alias.set('_v',path.resolve(__dirname,'src/views'));
    }
}