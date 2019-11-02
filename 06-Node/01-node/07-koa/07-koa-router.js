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