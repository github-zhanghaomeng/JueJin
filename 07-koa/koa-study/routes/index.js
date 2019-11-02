const router = require('koa-router')()

router.get('/',async(ctx)=>{
    ctx.body = '前台首页面'
})

module.exports = router.routes()