const router = require('koa-router')()
const DB = require('../../model/db')
const tools = require('../../model/tools')

//渲染管理员列表页面
router.get('/',async(ctx)=>{
    let result = await DB.find('admin',{})
    console.log(result)
    // ctx.body = '管理员列表'
    await ctx.render('admin/manage/list',{
        list : result
    })
})
//渲染添加管理员页面
router.get('/add',async(ctx)=>{
    // ctx.body = '添加管理员'
    await ctx.render('admin/manage/add')
})
//渲染编辑管理员页面
router.get('/edit',async(ctx)=>{
    // ctx.body = '编辑管理员'
    let id = ctx.query.id
    // console.log(id)
    let result = await DB.find('admin',{'_id':DB.getObjectId(id)})
    console.log(result)
    await ctx.render('admin/manage/edit',{
        list : result[0]
    })
})
//渲染删除管理员页面
router.get('/delete',(ctx)=>{
    ctx.body = '删除管理员'
})
//处理添加管理员
router.post('/doAdd',async(ctx,next)=>{
    let username = ctx.request.body.username
    let password = ctx.request.body.password
    let rpassword = ctx.request.body.rpassword
    // console.log(username,password,rpassword)
    if(!/^\w{4,20}/.test(username)){
        await ctx.render('admin/error',{
            message:'用户名不符合要求',
            redirect:ctx.state.__HOST__+'/admin/manage/add'
        })
    }else if(password !== rpassword || password.length<6){
        await ctx.render('admin/error',{
            message:'两次输入的密码不一致或者密码长度小于6',
            redirect:ctx.state.__HOST__+'/admin/manage/add'
        })
    }else{
         // 判断用户名在数据库中是否存在 
       let result = await DB.find('admin',{'username':username})
      
       if(result.length>0){
           await ctx.render('admin/error',{
               message:'此用户名已经存在,请重新输入',
               redirect:ctx.state.__HOST__+'/admin/manage/add'
           })
       }else{
           //满足要求了
           await DB.insert('admin',{'username':username,'password':tools.md5(password),'status':1,last_time:''})
           ctx.redirect(ctx.state.__HOST__+'/admin/manage')
       }

    }
    await next()
})
//处理编辑管理员
router.post('/doEdit',async(ctx,next)=>{
    let id = ctx.request.body.id
    // console.log('....')
    // let username = ctx.request.body.username
    let password = ctx.request.body.password
    let rpassword = ctx.request.body.rpassword
    // console.log(id,username,password,rpassword)
    if(password != ''){
        if(password !== rpassword || password.length<6){
            await ctx.render('admin/error',{
                message:'两次输入的密码不一致或密码长度不能小于6',
                redirect:ctx.state.__HOST__+'/admin/manage'
            })
        }else{
            await DB.update('admin',{'_id':DB.getObjectId(id)},{'password':tools.md5(password)})
            ctx.redirect(ctx.state.__HOST__+'/admin/manage')
        }
    }
    await next()
})
module.exports = router.routes()