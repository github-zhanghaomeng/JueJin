const router = require('koa-router')()
const DB = require('../../model/db')
const tools = require('../../model/tools')


router.get('/',async(ctx,next)=>{
    // ctx.body = '管理员列表'
    let result = await DB.find('admin',{})
    // console.log(result)
    await ctx.render('admin/manage/list',{
        addData:result
    })
    await next()
})
router.get('/add',async(ctx,next)=>{
    // ctx.body = '添加管理员'
    await ctx.render('admin/manage/add')
    await next()
})
router.get('/edit',async(ctx,next)=>{
    // ctx.body = '编辑管理员'
    let id = ctx.query.id
    // console.log(id)
    let data = await DB.find('admin',{'_id':DB.getObjectId(id)})
    console.log(data)
    await ctx.render('admin/manage/edit',{
        editData:data[0]
    })
    await next()
})

router.post('/doAdd',async(ctx,next)=>{
    let username = ctx.request.body.username
    let password = ctx.request.body.password
    let rpassword = ctx.request.body.rpassword
    console.log(username,password,rpassword)
    if(!/^\w{4,20}/.test(username)){
        await ctx.render('admin/error',{
            message:'用户名格式不正确',
            redirect:ctx.state.__HOST__+'/admin/manage'
        })
    }else if(password !== rpassword || password.length<6){
        await ctx.render('admin/error',{
            message:'两次输入的密码不一致,或者密码长度小于6',
            redirect:'{{__HOST__}}/admin/manage'
        })
    }else{
        await DB.insert('admin',{'username':username})
        await ctx.redirect(ctx.state.__HOST__+'/admin/manage')
    }
    await next()
})

router.post('/doEdit',async(ctx,next)=>{
    let id = ctx.request.body.id
    let username = ctx.request.body.username
    let password = ctx.request.body.password
    let rpassword = ctx.request.body.rpassword
    console.log(username,password,rpassword)

    if(password !== ''){
        if(password !== rpassword || password.length<6){
            await ctx.render('admin/error',{
                message:'两次输入的密码不一致,或者密码长度小于6',
                redirect:'{{__HOST__}}/admin/manage'
            })
        }else{
            await DB.update('admin',{'_id':DB.getObjectId(id)},{'password':tools.md5(password)})
            await ctx.redirect(ctx.state.__HOST__+'/admin/manage')
        }
        await next()
     
    }
})

module.exports = router.routes()