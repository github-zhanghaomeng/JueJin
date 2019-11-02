const http = require('http')
const url = require('url')
let server = http.createServer((req,res)=>{
    res.setHeader("content-type","text/html;charset=utf-8")
    let {pathname,query} = url.parse(req.url)
    if(pathname == '/shop'){
        res.end('<h1>商店页面</h1>')
    }
    if(pathname == '/info'){
        res.end('<h1>个人中心页面</h1>')
    }
    if(pathname == '/my'){
        res.end('<h1>我的页面</h1>')
    }
})

server.listen(3030,()=>{
    console.log("启动服务器")
})