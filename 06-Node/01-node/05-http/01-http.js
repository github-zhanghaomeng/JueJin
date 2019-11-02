let http = require('http')
let url = require('url')
// function(req,res){}是回调函数，有请求过来后，会调用这个函数
let server = http.createServer(function(req,res){
    // req 表示请求，是一个可读流     res 表示响应，是 一个可写流
    // console.log(req)  //IncomingMessage
    // console.log(req.url)  // /abc
    // let u = url.parse(req.url)
    let u = url.parse(req.url,true)   //带true的话 会自动把query变成对象  不需要querystring
    console.log(u)   //Url{...}
    let {pathname,query} = url.parse(req.url,true)
    
    // console.log(query) // {name:"zhangsan",age:"20"}
    // let q = JSON.stringify({name:"zhangsan",age:"20"})
    let q = JSON.stringify(query)
    console.log(q)   //{"name":"zhangsan","age":"20"}
    res.statusCode = 200
    res.setHeader("a","1")
    res.end(q)

    let arr = []
    req.on('data',(chunk)=>{
        arr.push(chunk)
    })
    req.on('end',()=>{
        console.log(arr)
        console.log(arr.toString())  //a=1&b=2&c=3
        let r = JSON.stringify(arr.toString())  //"a=1&b=2&c=3"
        console.log(r)
    })

})

let port = 3000
server.listen(port,()=>{
    console.log(`服务器在${port}上运行`)
}) 



// 每一次改变代码，都是需要重启服务器，可装一个模块，叫nodemon，修改完代码后，会自动重启
// 安装：> npm i nodemon -g
// 使用：> nodemon 01-http.js

// // http协议：
//     请求：3个部分：
//         请求行  方法  路径  协议
//         请求头  浏览器添加 自己也可以添加
//         请求正文  给服务器的数据
//     响应：
//         状态码：200 请求成功了
//                 301 永久重写向 
//                 302 临时重写向 
//                 304 缓存
//                 404 服务器找不到请求的资源  
//                 401 无仅限访问 
//                 500 服务器挂了
//         响应头： 一堆的头
//         响应正文：服务器真实给你的数据