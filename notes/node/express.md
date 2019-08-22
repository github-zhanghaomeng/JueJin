# express
node框架
需要 npm i express
然后引入 let express = require('express')

    const express = require("express")
    // 创建的app 服务器  http.createServer()
    const app = express();
    // 路由是一个url对应一个资源
    app.get("/",function(req,res){
        res.send("你好，express")
    })
    app.get("/my",function(req,res){
        res.send("个人中心")
    })
    app.get("/shop",function(req,res){
        res.send("商店")
    })
    app.get("/list",function(req,res){
        res.send("列表")
    })
    app.listen(3000)
    
# router级别的路由

    const express = require("express")
    const app = express();
    const router = express.Router()
    router.get("/hello",(req,res)=>{
        res.send("hello")  // Cannot GET /hello
    })
    
# post请求
需要npm i body-parser 然后用require引入

    const express = require("express")
    const bodyParser = require('body-parser')
    const app = express();

    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.post("/checkUser",function(req,res){
        // 得到wangcai和100
        console.log(req.body)  // { name: 'wangcai', age: '100' }
        console.log(req.body.name)  // wangcai
        console.log(req.body.age)  // 100
        res.send("接收到了post请求")
    })
    app.listen(3000)
# req
不需要用url解析成对象就可以

    console.log(req.query)   //{name:'zhangsan'}
    console.log(req.path)    // /abc
    console.log(req.url)     // /abc?name=zhangsan
    console.log(req.pathname) //undefined  没有这个
    
# res

    app.get('/',(req,res)=>{
       res.send('hello')
       res.send('<ul><li>html</li><li>css</li><li>js</li></ul>') 
       //传递html标签
       console.log(__dirname) //G:华杉0712\06-Node
       res.sendFile(__dirname+'/index.html')

       res.json({name:'wangcai',age:'10'})           //{"name":"wangcai","age":"10"}
       res.redirect('/login')
    })

    app.get('/login',(req,res)=>{
        res.send('登录页面')
    })
    
# 中间件
执行是有顺序的  有next()的话 才可以向下执行

    app.use('/',(req,res,next)=>{
        console.log('这是一个中间件1')
        next()
    })

    app.use('/',(req,res,next)=>{
        console.log('这是一个中间件2')
        next()
    })

    app.use('/',(req,res,next)=>{
        console.log('这是一个中间件3')
        next()
    })
    
中间件深入

    app.use('/',(req,res,next)=>{
        console.log('这是一个中间件1')
        next()
    })
    //当浏览器输入的路径是/my 时  也会执行上面的
    app.use('/my',(req,res,next)=>{
        console.log('这是一个中间件2')
        next()
    })
    //不管浏览器输入的路径是什么  都会执行
    app.use((req,res,next)=>{
        console.log('这是一个中间件3')
        next()
    })
    //相当于上面的
    app.use('*',(req,res)=>{
        console.log('中间件')
    })

错误处理中间件

    app.use((req,res,next)=>{
        console.log('这是一个中间件')
        next(new Error('hello'))
    })
    app.get('/',(req,res)=>{
        res.send('你好,express1')
    })

    //错误处理中间件  会把错误给cmd 不写这个会把错误直接在浏览器中输出
    app.use(function(err,req,res,next){
        console.log(err)
    })