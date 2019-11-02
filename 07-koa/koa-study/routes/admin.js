const router = require('koa-router')()
//引入富文本编译器
const ueditor = require('koa2-ueditor')


//引入路由模块
let index = require('./admin/index')
let login = require('./admin/login')
let manage = require('./admin/manage')
let articlecate = require('./admin/articlecate')
let article = require('./admin/article')
let focus = require('./admin/focus')
let link = require('./admin/link')
let nav = require('./admin/nav')
let setting = require('./admin/setting')

router.use(async(ctx,next)=>{
    //配置全局变量
    ctx.state.__HOST__ = 'http://'+ctx.request.header.host
    // console.log('http://'+ctx.host)
    //得到请求的地址
    // console.log(ctx.path)  // /admin/manage
    // console.log(ctx.path.substring(1)) // admin/manage
    let pathname = ctx.path.substring(1) 
    let splitUrl = pathname.split('/') 
    // console.log(splitUrl)    // ['admin','manage']
    // console.log(ctx.request.header['referer'])
    ctx.state.G = {
        url:splitUrl,
        userinfo:ctx.session.userinfo,
        prePage:ctx.request.header['referer']
        
    }
    if(ctx.session.userinfo){
        await next()
    }else{
        if(ctx.path == '/admin/login'|| ctx.path == '/admin/login/doLogin' || ctx.path == '/admin/login/code'){
            await next()
        }else{
            ctx.redirect('/admin/login')
        }
    }
    
})

//创建二级路由
router.use(index)  //默认为 /
router.use('/login',login)
router.use('/manage',manage)
router.use('/articlecate',articlecate)
router.use('/article',article)
router.use('/focus',focus)
router.use('/link',link)
router.use('/nav',nav)
router.use('/setting',setting)

// 配置富文本编辑器
router.all('/editor/controller', ueditor(['public', {
	"imageAllowFiles": [".png", ".jpg", ".jpeg"],
	"imagePathFormat": "/upload/ueditor/image/{yyyy}{mm}{dd}/{filename}"  // 保存为原文件名
}]))
module.exports = router.routes()