const router = require('koa-router')()
const svgCaptcha = require('svg-captcha')
const DB = require('../../model/db')
const tools = require('../../model/tools')

router.get('/',async(ctx,next)=>{
    // ctx.body = '登录页面'
    await ctx.render('admin/login')
    await next()
})
router.post('/doLogin',async(ctx,next)=>{
    let code = ctx.request.body.code
    // console.log(code)
    if(code.toLocaleLowerCase() === ctx.session.code.toLocaleLowerCase()){
        let username = ctx.request.body.username
        let password = ctx.request.body.password
        // console.log(username,password)
        let result = await DB.find('admin',{'username':username,'password':tools.md5(password)})
        // console.log(result)
        if(result.length>0){
            ctx.session.userinfo = result[0]
            await ctx.redirect('/admin/manage')
        }else{
            await ctx.render('admin/error',{
                message:'该用户不存在',
                redirect:ctx.state.__HOST__+'/admin/login'

            })
            
            
     }
    }
    else{
        await ctx.render('admin/error',{
            message:'验证码错误',
            redirect:ctx.state.__HOST__+'/admin/login'
        })
    }

    await next()
})

router.get('/loginOut',async(ctx,next)=>{
    ctx.session.userinfo = null
    ctx.redirect(ctx.state.__HOST__+'admin/login')
    
})

router.get('/code',async(ctx,next)=>{
    let captcha = svgCaptcha.create({
        width:120,
        height:40,
        fontSize:40
    })
    ctx.session.code = captcha.text
    ctx.response.type = 'image/svg+xml'
    ctx.body = captcha.data
    await next()
})

module.exports = router.routes()