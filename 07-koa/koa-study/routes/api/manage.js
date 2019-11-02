const router = require('koa-router')()
const DB = require('../../model/db')
const tools = require('../../model/tools')

//管理员列表接口
router.get('/',async(ctx,next)=>{
    let result = await DB.find('admin',{})
    // console.log(result)
    ctx.body = result
    await next()
})
//添加管理员接口
router.post('/add',async(ctx,next)=>{
    let username = ctx.request.body.username
    let password = ctx.request.body.password
    let rpassword = ctx.request.body.rpassword
    if(!/^\w{4,20}/.test(username)){
        let json = {
            code:0,
            message:'用户名不符合要求'
        }
        ctx.body = json
    }else if(password !== rpassword || password.length<6){
        let json = {
            code:0,
            message:'两次输入的密码不一致或者密码长度小于6'
        }
        ctx.body = json
    }else{
         // 判断用户名在数据库中是否存在 
       let result = await DB.find('admin',{'username':username})
       if(result.length>0){
        let json = {
            code:0,
            message:'此用户名已经存在,请重新输入'
        }
        ctx.body = json
           
       }else{
           //满足要求了
           await DB.insert('admin',{'username':username,'password':tools.md5(password),'status':1,last_time:''})
           let json = {
            code:1,
            message:'恭喜你，添加成功了...'
        }
        ctx.body = json
       }
    }
})
//编辑管理员接口
router.post('/edit',async(ctx,next)=>{
    let id = ctx.request.body.id
    let password = ctx.request.body.password
    let rpassword = ctx.request.body.rpassword
    
    if(password !== '')
    {
        if(password !== rpassword || password.length<6){
            let json = {
                code:0,
                message:'两次输入的密码不一致或者密码长度小于6'
            }
            ctx.body = json
    }else{
        //满足要求了
        await DB.update('admin',{'_id':DB.getObjectId(id)},{'password':tools.md5(password)})
        let json = {
         code:1,
         message:'恭喜你，修改成功了...'
     }
     ctx.body = json
    }
    }

    await next()
})
//删除管理员接口模块
// router.get('/delete',async(ctx,next)=>{
//     let id = ctx.query.id
//     let collectionName = ctx.query.collectionName
//     let result = await DB.find(collectionName,{'_id':DB.getObjectId(id)})
//     if(result.length>0){
//         await DB.remove(collectionName,{'_id':DB.getObjectId(id)})
//         let json = {
//             code:1,
//             message:'恭喜你,删除成功了...'
//         }
//         ctx.body = json
//     }else{
//         let json = {
//             code:0,
//             message:'删除失败'
//         }
//         ctx.body = json
//     }
    
// })

router.post('/delete',async(ctx,next)=>{
        let id = ctx.request.body.id
        
        let result = await DB.find('admin',{'_id':DB.getObjectId(id)})
        if(result.length>0){
            await DB.remove('admin',{'_id':DB.getObjectId(id)})
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