let http = require('http')
let url = require('url')
let path = require('path')
let fs = require('fs')
let server = http.createServer((req,res)=>{
    let{ pathname } = url.parse(req.url)
    // console.log(pathname)
    let absPath = path.join(__dirname,pathname)
    // console.log(absPath)
    fs.stat(absPath,(err,statObj)=>{
        if(err){
            console.log(err)
            res.statusCode = 404
            res.end('notfound')
            return
        }
        if(statObj){
            fs.createReadStream(absPath).pipe(res)
        }
        console.log(statObj)
    })
})

server.listen(3000)