const Koa = require('koa')
const app = new Koa()

app.use((ctx,next)=>{
    // res
    // ctx.res.end('hello')
    // ctx.response.res.end('hello')
    // ctx.response.body = 'hello'
    // ctx.body = 'hello'

    //req  url
    // console.log(ctx.req.url)  // /abc
    // console.log(ctx.request.req.url)  // /abc
    // console.log(ctx.request.url)  // /abc
    // console.log(ctx.url)  // /abc

    //req path
    // console.log(ctx.request.path)  // /abc
    // console.log(ctx.path) // /abc

    // console.log(ctx.request.query)  //{name:"zhangsan"}
    // console.log(ctx.query)  //{name:"zhangsan"}


    
})


app.listen(3000)