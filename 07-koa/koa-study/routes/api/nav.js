const router = require('koa-router')()
const DB = require('../../model/db')
const tools = require('../../model/tools')

//分类导航接口
router.get('/', async (ctx, next) => {
    let result = await DB.find('article', {})
    // console.log(result)
    ctx.body = result
    await next()
})
//添加导航接口
router.post('/add', async (ctx, next) => {
    let title = ctx.request.body.title
    let url = ctx.request.body.url
    let sort = ctx.request.body.sort
    let status = ctx.request.body.status
    let add_time = tools.getTime()
    let data = {
        title,
        url,
        sort,
        status,
        add_time
    }
    let result = await DB.find('nav', { 'title': title })
    // console.log(result)
    if (result.length > 0) {
        let json = {
            code: 0,
            message: '该分类名字已经存在'
        }
        ctx.body = json
    }
    else {
        await DB.insert('nav', data)
        let json = {
            code: 1,
            message: '恭喜你,添加成功了...'
        }
        ctx.body = json
    }

})
 //编辑导航接口
router.post('/edit',async(ctx,next)=>{
    let title = ctx.request.body.title
    let url = ctx.request.body.url
    let sort = ctx.request.body.sort
    let status = ctx.request.body.status
    let add_time = tools.getTime()
    let data = {
        title,
        url,
        sort,
        status,
        add_time
    }
    let id = ctx.request.body.id
   
    let result = await DB.update('nav',{'_id':DB.getObjectId(id)},data)
    if(result){
        let json = {
            code:1,
            message:'恭喜你,更新成功了...'
        }
        ctx.body = json
    }else{
        let json = {
            code:1,
            message:'更新失败'
        }
        ctx.body = json
    }

    await next()
})
// //删除导航接口模块
router.get('/delete',async(ctx,next)=>{
    let id = ctx.query.id
    let collectionName = ctx.query.collectionName
    let result = await DB.find(collectionName,{'_id':DB.getObjectId(id)})
    if(result.length>0){
        await DB.remove(collectionName,{'_id':DB.getObjectId(id)})   
        let json = {
            code:1,
            message:'恭喜你,删除成功了...'
        }
        ctx.body = json
    }else{
        let json = {
            code:0,
            message:'删除失败'
        }
        ctx.body = json
    }

})
module.exports = router.routes()