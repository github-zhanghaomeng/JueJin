const router = require('koa-router')()
const DB = require('../../model/db')
const tools = require('../../model/tools')

router.get('/',async(ctx,next)=>{
    // ctx.body = '分类页面'
    let result = await DB.find('articlecate',{})
    // console.log(result)
    let realResult = tools.cateToList(result)
    
    // console.log(realResult)
    await ctx.render('admin/articlecate/index',{
        cateList:realResult
    })
    await next()
})
//渲染添加分类页面
router.get('/add',async(ctx,next)=>{
    // ctx.body = '添加分类'
    let result = await DB.find('articlecate',{'pid':'0'})
    // console.log(result)
    await ctx.render('admin/articlecate/add',{
        addCate:result
    })
    await next()
})
//渲染编辑分类页面
router.get('/edit',async(ctx,next)=>{
    let id = ctx.query.id
    // console.log(id)
    let result = await DB.find('articlecate',{'_id':DB.getObjectId(id)})
    // console.log(result)
    let list = await DB.find('articlecate',{'pid':'0'})
    // console.log(list)
    await ctx.render('admin/articlecate/edit',{
        editCate:result[0],
        firstData:list
    })
    await next()
})
//处理添加分类逻辑
router.post('/doAdd',async(ctx,next)=>{
    // console.log('...')
    let data = ctx.request.body
    // console.log(data)
    await DB.insert('articlecate',data)
    ctx.redirect(ctx.state.__HOST__+'/admin/articlecate')
    await next()
})
//处理编辑分类逻辑
router.post('/doEdit',async(ctx,next)=>{
    let id = ctx.request.body.id
    // console.log(id)
    let data = ctx.request.body
    // console.log(data)
    let pid = data.pid
    let title = data.title
    let status = data.status
    let keywords = data.keywords
    let description = data.description
    await DB.update('articlecate',{'_id':DB.getObjectId(id)},{
        pid,title,status,keywords,description
    })
    ctx.redirect(ctx.state.__HOST__+'/admin/articlecate')
    await next()
})



module.exports = router.routes()