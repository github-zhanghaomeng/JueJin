let path = require('path')
let url = require('url')
let http = require('http')
let fs = require('fs')
// 服务器返回给客户端有数据分两类：json  静态资源数据（html,css,js,img...）
let server = http.createServer((req,res)=>{
    let {pathname} = url.parse(req.url,true)
    // console.log(pathname)
    let absPath = path.join(__dirname,pathname)
    // console.log(absPath)   //g:\华杉0712\06-Node\01-node\05-http\index.html
    fs.stat(absPath,(err,statObj)=>{
        if(err) {
            console.log(err)
            res.statusCode = 404
            res.end('notfound')
            return 
        }
        if(statObj.isFile){
            fs.createReadStream(absPath).pipe(res)
        }
        // console.log(statObj)
    })

})

let port = 3300
server.listen(port,()=>{
    
    console.log(`服务器已经在${port}启动...`)
})



// Stats {
//     dev: 2898225037,
//     mode: 33206,   表示文件
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: undefined,
//     ino: 2814749767107336,
//     size: 399,
//     blocks: undefined,
//     atimeMs: 1566301408993,
//     mtimeMs: 1566306697934.568,
//     ctimeMs: 1566306697934.568,
//     birthtimeMs: 1566301408992.9033,
//     atime: 2019-08-20T11:43:28.993Z,
//     mtime: 2019-08-20T13:11:37.935Z,
//     ctime: 2019-08-20T13:11:37.935Z,
//     birthtime: 2019-08-20T11:43:28.993Z }
  