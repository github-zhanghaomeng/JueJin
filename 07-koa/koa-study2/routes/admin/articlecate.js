const router = require('koa-router')()
const DB = require('../../model/db')
const tools = require('../../model/tools')


router.get('/',async(ctx,next)=>{
    // ctx.body = '分类列表'
    let result = await DB.find('articlecate',{})
    // console.log(result)
    let data = tools.cateTolist(result)
    // console.log(data)
    await ctx.render('admin/articlecate/index',{
        list:data
    })
})

router.get('/add',async(ctx,next)=>{
    // ctx.body = '添加分类页面'
    let result = await DB.find('articlecate',{'pid':'0'})
    // console.log(result)
    await ctx.render('admin/articlecate/add',{
        cateName:result
    })
})

router.post('/doAdd',async(ctx,next)=>{
    let title = ctx.request.body.title
    let keywords = ctx.request.body.keywords
    let description = ctx.request.body.description
    let pid = ctx.request.body.pid
    let status = ctx.request.body.status
    // console.log(title,keywords,description,pid,status)
    let result = await DB.find('articlecate',{'title':title})
    // console.log(result)
    let data = {
        title,
        keywords,
        description,
        pid,
        status
    }
    if(result.length>0){
        ctx.render('admin/error',{
            message:'该用户已经存在,请重新输入',
            redirect:ctx.state.__HOST__+'/admin/articlecate/add'
        })
    }else{
        await DB.insert('articlecate',data)
        await ctx.redirect(ctx.state.__HOST__+'/admin/articlecate')
    }
})

router.get('/edit',async(ctx)=>{
    // ctx.body = '编辑分类'
    let cateName = await DB.find('articlecate',{'pid':'0'})
    // console.log(cateName)
    let id = ctx.query.id
    // console.log(id)
    let result = await DB.find('articlecate',{'_id':DB.getObjectId(id)})
    // console.log(result)
    ctx.render('admin/articlecate/edit',{
        editData:result[0],
        catename:cateName
    })
})

router.post('/doEdit',async(ctx)=>{
    let title = ctx.request.body.title
    let pid = ctx.request.body.pid
    let keywords = ctx.request.body.keywords
    let description = ctx.request.body.description
    let status = ctx.request.body.status
    let id = ctx.request.body.id
    // console.log(id)
    let json = {
        title,
        pid,
        keywords,
        description,
        status
    }
    // console.log(json)
    await DB.update('articlecate',{'_id':DB.getObjectId(id)},json)
    ctx.redirect(ctx.state.__HOST__+'/admin/articlecate')
})

module.exports = router.routes()