const router = require('koa-router')()

router.get('/',async(ctx,next)=>{
    ctx.body = '前台首页面'
    await next()
})

module.exports = router.routes()