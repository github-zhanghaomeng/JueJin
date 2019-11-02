const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const path = require('path')

// console.log(path.join(__dirname,'/views'))
app.use(views(path.join(__dirname,'/views'),{
    extension:'ejs'
}))
app.use(async (ctx,next)=>{
    await ctx.render("index",{title:"Koa"})
})

app.listen(3000)