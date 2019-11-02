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