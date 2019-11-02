const router = require('koa-router')()
const DB = require('../../model/db')


//渲染导航列表页面
router.get('/',async(ctx,next)=>{
    // ctx.body = '导航'
    let result = await DB.find('nav',{})
    await ctx.render('admin/nav/list',{
        data:result
    })
    await next()
})
//渲染增加导航页面
router.get('/add',async(ctx,next)=>{
    // ctx.body = '增加导航'
    await ctx.render('admin/nav/add')
    await next()
})
//处理增加导航逻辑
router.post('/doAdd',async(ctx,next)=>{
    // ctx.body = '增加导航'
    let title = ctx.request.body.title
    let url = ctx.request.body.url
    let sort = ctx.request.body.sort
    let status = ctx.request.body.status
    // console.log(title,url,sort,status)
    let json = {
        title,
        url,
        sort,
        status
    }
    await DB.insert('nav',json)
    await ctx.redirect('/admin/nav')
    await next()
})
//渲染编辑导航页面
router.get('/edit',async(ctx,next)=>{
    // ctx.body = '编辑导航'
    let id = ctx.query.id
    // console.log(id)
    let result = await DB.find('nav',{'_id':DB.getObjectId(id)})
    console.log(result)
    await ctx.render('admin/nav/edit',{
        editData:result[0]
    })
    await next()
})
//处理编辑导航逻辑
router.post('/doEdit',async(ctx,next)=>{
    let id = ctx.request.body.id
    let title = ctx.request.body.title
    let url = ctx.request.body.url
    let sort = ctx.request.body.sort
    let status = ctx.request.body.status
    let json = {
        title,
        url,
        sort,
        status
    }
    await DB.update('nav',{'_id':DB.getObjectId(id)},json)
    await ctx.redirect(ctx.state.__HOST__+'/admin/nav')
    await next()
})
module.exports = router.routes()