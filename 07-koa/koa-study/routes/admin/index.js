const router = require('koa-router')()
const DB = require('../../model/db')

router.get('/',async(ctx,next)=>{
    await ctx.render('admin/index')
    await next()
})
//处理状态
router.get('/changeStatus',async(ctx,next)=>{
    // console.log('hello')
    //从basic.js传入的数据以查询字符串形式
    let collectionName = ctx.query.collectionName
    let attr = ctx.query.attr
    let id = ctx.query.id
    // console.log(collectionName,attr,id)
    let data = await DB.find(collectionName,{'_id':DB.getObjectId(id)})
    // console.log(data)
    if(data.length>0){
        if(data[0][attr] == 1){
            var json={
                [attr] : 0
            }
        }else{
            var json={
                [attr] :1
            }
        }
        //更新数据库
        let updateResult = await DB.update(collectionName,{'_id':DB.getObjectId(id)},json)

        if(updateResult){
            ctx.body = {message:'更新成功',success:true}
        }else{
            ctx.body = {message:'更新失败',success:false}
        }
    }else{
        ctx.body = {message:'更新失败,参数不正确',success:false}
    }
    
    await next()
})
//处理删除
router.get('/remove',async(ctx,next)=>{
    let id = ctx.query.id
    // console.log(id)
    let collectionName = ctx.query.collectionName
    // console.log(collectionName)
    await DB.remove(collectionName,{'_id':DB.getObjectId(id)})
    ctx.redirect(ctx.state.G.prePage)
    await next()
})
//公共的排序方法 接口
// router.get('/changeSort',async(ctx,next)=>{
//     // console.log('123')
//     let collectionName = ctx.query.collectionName
//     let id = ctx.query.id
//     let sortValue = ctx.query.sortValue

//     // let json = {
//     //     sort:sortValue
//     // }
//     // let result = await DB.update(collectionName,{'_id':DB.getObjectId(id)},json)
//     if(result){
//         ctx.body = {'message':'更新成功',success:true}
//     }else{
//         ctx.body = {'message':'更新失败',success:false}
//     }
//     await next()
// })

module.exports = router.routes()