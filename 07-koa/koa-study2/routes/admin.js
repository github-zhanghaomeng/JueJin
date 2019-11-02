const router = require('koa-router')()

let index = require('./admin/index')
let login = require('./admin/login')
let manage = require('./admin/manage')
let articlecate = require('./admin/articlecate')
let article = require('./admin/article')

router.use(async(ctx,next)=>{
    ctx.state.__HOST__ = 'http://'+ctx.request.header.host
    // console.log('http://'+ctx.header.host)
    // console.log(ctx.path)
    let splitUrl = ctx.path.split('/')
    // console.log(splitUrl)
    // console.log(splitUrl[1])
    ctx.state.G = {
        url:splitUrl,
        userinfo:ctx.session.userinfo,
        prePage:ctx.request.header['referer']
    }
    
    if(ctx.session.userinfo){
        await next()
    }else{
        if(ctx.path == '/admin/login' || ctx.path == '/admin/login/doLogin' || ctx.path == '/admin/login/code'){
            await next()
        }else{
            ctx.redirect(ctx.state.__HOST__+'/admin/login')
        }
    }
   
})
router.use(index)
router.use('/login',login)
router.use('/manage',manage)
router.use('/articlecate',articlecate)
router.use('/article',article)

module.exports = router.routes()