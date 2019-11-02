const http = require('http')
const url = require('url')
const querystring = require('querystring')
let server = http.createServer((req,res)=>{
    //path是什么就会输出什么，path是pathname和query
    console.log(req.url)    ///abc?name=zhangsan
    //会把path输出成一个对象
    console.log(url.parse(req.url))
    let {pathname,query} = url.parse(req.url)
    console.log(pathname,query)  ///abc name=zhangsan
    //会把query输出成一个对象
    let r = querystring.parse(query)
    console.log(r)    //[Object: null prototype] { name: 'zhangsan' }
    console.log(r.name)   //zhangsan
  
    if(pathname == '/abc'){
        let str =""
        let arr=[]
        req.on('data',(chunk)=>{
            arr.push(chunk)
        })
        req.on('end',()=>{
            console.log(arr)  //[ <Buffer 61 3d 31 26 62 3d 32 26 63 3d 33> ]
            console.log(Buffer.concat(arr))  //<Buffer 61 3d 31 26 62 3d 32 26 63 3d 33>
            console.log(Buffer.concat(arr).toString())    //a=1&b=2&c=3
            let s = querystring.parse(Buffer.concat(arr).toString())
            console.log(s)



            str = Buffer.concat(arr).toString()  
            res.end(str)   //在client.js上不会显示，只有在postman和浏览器上可以
           

        })
    }

})

server.listen(3060,()=>{
    console.log("服务器启动...")
})