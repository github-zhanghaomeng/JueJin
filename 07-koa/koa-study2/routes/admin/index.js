const router = require('koa-router')()
const DB = require('../../model/db')

router.get('/',async(ctx,next)=>{
    // ctx.body = '后台首页面'
    await ctx.render('admin/index')
    await next()
})

router.get('/changeStatus',async(ctx,next)=>{
    let collectionName = ctx.query.collectionName
    let attr = ctx.query.attr
    let id = ctx.query.id
    // console.log(collectionName,attr,id)
    let result = await DB.find(collectionName,{'_id':DB.getObjectId(id)})
    // console.log(result)
    // let status = result[0].status
    // console.log(status)
    if(result.length>0){
        if(result[0][attr] == 0){
            var json ={
                [attr]:1
            }
            
        }else{
            var json ={
                [attr]:0
            }
        }
    }
    let updateResult = await DB.update(collectionName,{'_id':DB.getObjectId(id)},json)
    if(updateResult){
        var data = {
            message:'更新成功',
            success:true
        }
    }else{
        var data = {
            message:'更新失败',
            success:false
        }
    }
    ctx.body = data
})

router.get('/remove',async(ctx,next)=>{
    let collectionName = ctx.query.collectionName
    let id = ctx.query.id
    await DB.remove(collectionName,{'_id':DB.getObjectId(id)})
    let prePage = ctx.state.G.prePage
    await ctx.redirect(prePage)

})

module.exports = router.routes()