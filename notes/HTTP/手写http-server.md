新建一个空文件夹
### 建立一个bin文件夹
在bin文件夹下建一个www

    #! /usr/bin/env node 
    console.log('hello')
### 在package.json中

    "bin": {
        "myserver": "./bin/www"
     },
在某个文件夹下面   http-server  托管某个文件夹  

如果一个包全局安装了，就可以执行这个包中命令。
如果自己写了一个脚本，也想让它在任何目录下面的执行，需要通过npm link连接到全局环境下

### 在cmd中输入npm link
这样可以直接在cmd 中输入 myserver 就可以打印出 hello
### babel
但在www下输入 import commander from 'commander' ---es6
const commander = require('commander') ---node
node 不能识别es6
利用babel可以把es6转换为es5  这样node就可以识别了
npm i @babel/core @babel/cli @babel/preset-env
babel/core    
babel/cli         解析core
babel/preset-env  转换
npx babel src -d dist  把src的高级语法转化为低级语法 放到dist
每次修改完src/main.js时  都要输入这行语句  比较麻烦
所以 可以把它放到package.json

      "scripts": {
        "babel:watch": "babel src -d dist --watch"
      },
新建一个在cmd中输入  npm run babel:watch
#### 根目录新建一个.babelrc
在里面输入

    {
    "presets": [
        ["@babel/preset-env",{
            "targets":{
                "node":"current"
            }
        }] 
      ]
    }
### 创建src文件夹
在src下新建main.js  入口
### 在www 引入

    require('../dist/main.js')
###  commander
npm i commander  --help -p 
收集命令
### src/main.js
引入  import program from 'commander'
配置  

    program
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')
    // console.log(process.argv)  //存入命令  -a -b -help
    program.parse(process.argv);  
    //默认带-help 输入-d  则不认识  配置后就认识了
### 在src下新建server.js

    import http from 'http'

    import path from 'path'
    import fs from 'fs'                                                                  
    import url from 'url'
    //第三方
    import chalk from 'chalk'
    import ejs from 'ejs'
    import mime from 'mime'
    
    let {readdir,stat} = fs.promises
    let template = fs.readFileSync(path.join(__dirname,'../template.html'),'utf-8')
    //template是自己写的模板
    // console.log(template)
    class Server{
        constructor(config){
            // console.log(config.port)
            this.port = config.port
            this.template = template
        }
        async handleReuest(req,res){
            let {pathname} = url.parse(req.url,true)
            // console.log(pathname)
            // process.cwd()当前工作目录
            //浏览器把中文自动编码  我们必须手动解码 才可以认识 
        //例如你好.txt  浏览器自动编码 服务器不认识就读不出来
            pathname = decodeURIComponent(pathname)
            let filePath = path.join(process.cwd(),pathname)
            // console.log(filePath)
            try{
                let statObj = await stat(filePath)
                // console.log(statObj)
                if(statObj.isDirectory()){
                    //是目录
                    // console.log('目录')
                    let dirs = await readdir(filePath)
                    // console.log(dirs)  //读出目录下的文件
                    let templateStr = ejs.render(this.template,{dirs,path:pathname === '/' ? '' : pathname })
                    //设置响应头
                    res.setHeader('Content-Type','text/html;charset=utf-8')
                    res.end(templateStr)
                }else{
                    // console.log('文件')
                    res.setHeader('Content-Type',mime.getType(filePath)+"; charset=utf-8")
                    this.sendFile(filePath,req,res,statObj)

            }
        }catch(e){
            this.sendError(e,req,res)
        }
        

    }
    sendFile(filePath,req,res,statObj){
    //设置响应头
        res.setHeader('Content-Type',mime.getType(filePath)+'; charset=utf-8')
        fs.createReadStream(filePath).pipe(res)
    }
    sendError(e,req,res){
        // console.log(e)
        res.statusCode = 404
        res.end('Not Found')
    }
    start(){
        let server = http.createServer(this.handleReuest.bind(this))
        server.listen(this.port,()=>{
            console.log(`${chalk.yellow('Starting up http-server, serving ')} ${chalk.blue('./')}
    ${chalk.yellow(' Available on:')} 
    ${chalk.green('http://127.0.0.1:')} ${chalk.green(this.port)}
    Hit CTRL-C to stop the server` )
            })
        }
    }

    export default Server
在main.js引入server.js
  
    import Server from './server.js'
    let config = {
        port:8080
    }
    let server = new Server(config)
    server.start()

## 压缩

服务器返回数据之前  先进行压缩 我们不需要压缩 浏览器自动压缩

压不压缩得看浏览器的头允不允许压缩  看有没有accept-encoding 有的话就压缩  gzip deflate br三种


toLocalString  toGMTString