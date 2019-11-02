const router = require('koa-router')()
const DB = require('../../model/db')
//获取验证码
const svgCaptcha = require('svg-captcha')
//密码加密
const tools = require('../../model/tools')

router.get('/', async (ctx, next) => {
    // ctx.body = '登录页面'
    await ctx.render('admin/login')
    await next()
})
router.post('/doLogin', async (ctx, next) => {
    // console.log('....')
    // console.log(ctx.request.body.username)
    let username = ctx.request.body.username
    let password = ctx.request.body.password
    let code = ctx.request.body.code
    // console.log(code)
    // console.log(username)
    // console.log(password)
    if(code.toLocaleLowerCase() === ctx.session.code.toLocaleLowerCase()){
        //验证码一致
        // 去连接数据库，对比username和password和数据库的是否一样。
        var result = await DB.find("admin", { "username": username, "password": tools.md5(password) })
        //  console.log(result)
        if (result.length > 0) {
            //用户名和密码存在
            // console.log("登陆成功了...")
            ctx.session.userinfo = result[0]
            // console.log(ctx.session)
            //登录时间为刚登陆上去的时间
            await DB.update('admin',{'_id':DB.getObjectId(result[0]._id)},{
                last_time:new Date()
            })
            ctx.redirect(ctx.state.__HOST__ + '/admin')
        } else {
            //用户名和密码不存在
            ctx.render('admin/error',{
                message:'用户名密码错误',
                redirect:ctx.state.__HOST__+"/admin/login"
            })
        }
    }else{
        //验证码不一致
        ctx.render('admin/error',{
            message:'验证码错误',
            redirect:ctx.state.__HOST__+"/admin/login"
        })
    }
    

})

//生成验证码
router.get('/code',async (ctx,next) => {
    //验证码中只有大小写字母和数字
    var captcha = svgCaptcha.create({
        width: 120,
        height: 40,
        fontSize: 40
    });

    //验证码中有数学算数
    // var captcha = svgCaptcha.createMathExpr({
    //     width:120,
    //     height:0,
    //     fontSize:40
    // })

    //保存验证码
    ctx.session.code = captcha.text

    //设置响应头
    ctx.response.type = "image/svg+xml"

    //响应验证码
    ctx.body = captcha.data
    await next()
    
})

//退出登录
router.get('/loginOut',async(ctx,next)=>{
    ctx.session.userinfo = null;
    ctx.redirect(ctx.state.__HOST__+'admin/login')
    await next()
})






module.exports = router.routes()