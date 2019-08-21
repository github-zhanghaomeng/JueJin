# http的初识
引入http => let http = require('http')
可以使用http.createServer创建一个服务器
req 表示请求，是一个可读流     res 表示响应，是 一个可写流

    let server = http.createServer((req,res)=>{})
    (req,res)=>{}是一个回调函数，只有有请求才会执行这个

http协议：
     请求：3个部分：
         请求行  方法  路径  协议
         请求头  浏览器添加 自己也可以添加
         请求正文  给服务器的数据
     响应：
         状态码：200 请求成功了
                 301 永久重写向 
                 302 临时重写向                  
                 304 缓存
                 404 服务器找不到请求的资源  
                 401 无仅限访问 
                 500 服务器挂了
         响应头： 一堆的头
         响应正文：服务器真实给你的数据
         
每一次改变代码，都是需要重启服务器，可装一个模块，叫nodemon，修改完代码后，会自动重启
 安装：> npm i nodemon -g
 使用：> nodemon 01-http.js
 
 可以使用这个服务器监听一个端口
  
    server.listen(3000,()=>{})
通过例子了解

    //引入url 为了使用它的方法parse进行把请求的地址封装成对象
    let url = require('url')
    let server = http.createServer(function(req,res){
         console.log(req)  //IncomingMessage
         console.log(req.url)  // /abc
         let u = url.parse(req.url)
         let u = url.parse(req.url,true)   
        //带true的话 会自动把query变成对象不需要querystring
        console.log(u)   //Url{...}
        let {pathname,query} = url.parse(req.url,true)
        console.log(query) 
        // {name:"zhangsan",age:"20"}
        let q = JSON.stringify({name:"zhangsan",age:"20"})
        let q = JSON.stringify(query)
        console.log(q)   //{"name":"zhangsan","age":"20"}
        res.statusCode = 200
        res.setHeader("a","1")
        res.end(q)  //q的内容会显示在浏览器上

    let arr = []
    //使用data和end两个事件进行接受浏览器传入的数据
    req.on('data',(chunk)=>{
        arr.push(chunk)
    })
    req.on('end',()=>{
        console.log(arr) //默认为buffer数据
        console.log(arr.toString())  //a=1&b=2&c=3
        let r = JSON.stringify(arr.toString())  //"a=1&b=2&c=3"
        console.log(r)
    })

    })
    
浏览器给客户端返回的数据有两类
json  静态资源数据（html,css,js,img...）
fs.stat(path,(err,callback)  callback里面有两个参数err和statObj

    let server = http.createServer((req,res)=>{
        let {pathname} = url.parse(req.url,true)
          console.log(pathname)
        let absPath = path.join(__dirname,pathname)
          console.log(absPath)   //g:\华杉0712\06-Node\01-node\05-http\index.html
        fs.stat(absPath,(err,statObj)=>{
            if(err) {
                console.log(err)
                res.statusCode = 404
                res.end('notfound')
                return 
            }
            if(statObj.isFile){
            //判断是不是一个文件
                fs.createReadStream(absPath).pipe(res)
                //之前通过data和end接受数据 通过res.end返回给浏览器
                //可以通过pipe直接返给浏览器
            }
            // console.log(statObj)
        })

    })
 