const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')

app.use(bodyparser())

app.use(ctx=>{
    console.log(ctx.request.body)
    // ctx.body = ctx.request.body
})

app.listen(3000)