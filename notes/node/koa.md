# koa
 也是node的框架，比express更小 洋葱模型
 安装npm i koa
 引入 const Koa = require('koa')
 使用 const app = new Koa() app.listen(3000)
 koa没有.get .post 只有.use use里面只有两个参数
 
    app.use((ctx,next)=>{})
也没有res和req  但是它自己封装了respose和request
# 向服务器传输数据

    ctx.res.end('hello') 
    =>res是原生node上的 所以有res.end和res.write
    ctx.response.res.end('hello')
    =>koa自己封装的response上面也有res
    ctx.response.body = 'hello'
    =>koa自己封装的response上面有body
    ctx.body = 'hello'
    =>最简单的方法
# 响应服务器
##### 响应服务器的路径

    console.log(ctx.req.url) =>/abc
    =>res是原生node上的 req.url
    console.log(ctx.request.req.url) =>/abc
    =>koa自己封装的request上面也有req
    console.log(ctx.request.url) =>/abc
    =>koa自己封装的request上面有url
    console.log(ctx.url)
    =>最简单的方法
##### 响应服务器的查询字符串

    console.log(ctx.req.query)
    =>错误因为原生node不可以直接获取query 而是用url进行解析之后才可以拿到
    console.log(ctx.request.query) =>{name:'wangcai'}
    console.log(ctx.query)
    
##### 响应服务器的path

    console.log(ctx.req.path) =>错误 同query
    console.log(ctx.request.path) =>/abc
    console.log(ctx.path) =>/abc
    
# 中间件

    只会输出1 2 加上next就可以输出下面的1 2 3 4 5 6
    在koa中，在一个中间件中调用next()  表示让下一个中间件执行
    在koa中没有路由，默认情况它会匹配/
    在koa中，中间件也是从上向下执行的
    app.use((ctx,next)=>{
        console.log(1)
        console.log(2)
        next()
    })

    app.use((ctx,next)=>{
        console.log(3)
        console.log(4)
        next()
    })

    app.use((ctx,next)=>{
        console.log(5)
        console.log(6)
    })
    
next在不同的位置


    //会输出1 3 5 6 4 2
    app.use((ctx,next)=>{
            console.log(1)
            next()
            console.log(2)
        }) 
        app.use((ctx,next)=>{
            console.log(3)
            next()
            console.log(4)
        })
        app.use((ctx,next)=>{
            console.log(5)
            console.log(6)
        })
把上面转换为这种形式更容易理解

    app.use((ctx,next)=>{
    console.log(1)
    // next()
    ((ctx,next)=>{
        console.log(3)
        // next()
        ((ctx,next)=>{
            console.log(5)
            next()
            console.log(6)
        })()
        console.log(4)
    })()
    console.log(2)
})
自己封装实现next  dispatch 不用引入Koa

    let app = {
    middlewares:[],
    use(fn){
        this.middlewares.push(fn)
    }
    }
    app.use(next=>{
        console.log(1)
        console.log(2)
        next()
    })
    app.use(next=>{
        console.log(3)
        console.log(4)
        next()
    })
    app.use(next=>{
        console.log(5)
        console.log(6)
    })

    // console.log(app.middlewares) //[[Function],[Function],[Function]]
    function dispatch(index){
        let route = app.middlewares[index]
        route(()=>{
            dispatch(index+1)
        })
    }
    dispatch(0)
自己封装实现next  compose 用reduceRight实现 不用引入Koa

    function compose(middlewares){
       return middlewares.reduceRight(function(a,b){
            return function(){
                b(a)   //1 2 保留最后的 return只能返回一个function
            }
            
            // console.log(b) //[Function] [Function]
            // b() //3 4  1 2
        })
    }
    let t = compose(app.middlewares)
    // console.log(t)
    t()
简洁方式

    function compose(middlewares){
        return middlewares.reduceRight((a,b)=>()=>b(a))
    }
第二种compose用reduce实现

# koa中使用async和await
仅仅是把Pomise状态 转化 普通值

    const Koa = require("koa")
    const app = new Koa()
    app.use(async (ctx,next)=>{
        // 写异步就要像写同步代码一样
        // 在一个中间件中，利用async+await --->  仅仅是把Pomise状态 转化 普通值
        let r = await next()  
        console.log(r)  // Promise { 0 }  ||   0
    })
    app.use((ctx,next)=>{
        let a = 0; 
        setTimeout(function(){
            a = 666;
        })
        return a
    })
    app.listen(3030)
# koa中的第三方中间件
##### koa-compose
安装 npm i koa-compose
引入 const compose = require('koa-compose')
作用 可以把很多中间件放到compose的数组中 

    const Koa = require('koa')
    const app = new Koa()
    const compose = require('koa-compose')

    let f1 = async(ctx,next)=>{
        console.log(1)
        console.log(2)
        await next()
    }
    let f2 = async(ctx,next)=>{
        console.log(3)
        console.log(4)
        await next()
    }
    let f3 = async(ctx,next)=>{
        console.log(5)
        console.log(6)
        await next()
    }
    let all = compose([f1,f2,f3])
    app.use(all)

    app.listen(3000)
##### koa-router
安装 npm i koa-router
引入 const Router = require('koa-router')
     const router = new Router()
使用 app.use(router.routes()).use(router.allowedMethods())
koa中没有路由 所以需要第三方的中间件 这样就可以.get .post

    const Koa = require('koa')
    const app = new Koa()
    const Router = require('koa-router')
    const router = new Router()

    router.get('/',(ctx,next)=>{
        // ctx.response.body = 'hello'
        ctx.body = '首页'
    })
    router.get('/shop',(ctx,next)=>{
        ctx.body = '商店'
    })
    router.get('/profile',(ctx,next)=>{
        ctx.body = '个人中心'
    })

    app.use(router.routes()).use(router.allowedMethods());
    app.listen(3000)
# koa-bodyparser
安装 npm i body-parser
引入 const bodyparser = require('body-parser')
使用 app.use(bodyparser())
作用：用来接收服务器给客户端的数据  处理post请求的数据

    const Koa = require('koa')
    const app = new Koa()
    const bodyparser = require('koa-bodyparser')

    app.use(bodyparser())

    app.use(ctx=>{
        console.log(ctx.request.body)
        // ctx.body = ctx.request.body
    })

    app.listen(3000)
# koa-static
安装 npm i koa-static
引入 const static = require('koa-static')
使用 app.use(static(__dirname+'/public'))
作用 处理静态资源 css js images 
public 下面有css、js文件夹  还有index.html 引入js和css

    const Koa = require('koa')
    const app = new Koa()
    const static = require('koa-static')

    app.use(static(__dirname+'/public'))

    app.listen(3030)
# koa-views
安装 npm i koa-views
引入 const views = require('koa-views')
使用 
app.use(views(path.join(__dirname,'/views'),{
    extension:'ejs'
}))
作用 渲染html模板 和static的区别是 它只渲染html 不渲染css和js

    const Koa = require('koa')
    const app = new Koa()
    const views = require('koa-views')
    const path = require('path')

    // console.log(path.join(__dirname,'/views'))
    app.use(views(path.join(__dirname,'/views'),{
        extension:'ejs'
        //这里使用ejs 需要安装npm i ejs
    }))
    app.use(async (ctx,next)=>{
        await ctx.render("index",{title:"Koa"})
    })

    app.listen(3000)

    
 