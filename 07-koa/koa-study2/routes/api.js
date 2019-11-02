const router = require('koa-router')()

router.get('/',async(ctx,next)=>{
    ctx.body = '接口首页面'
    await next()

})

module.exports = router.routes()