const router = require('koa-router')()
const DB = require('../../model/db')
const multer = require('koa-multer')
const tools = require('../../model/tools')

// 上传文件的相关配置
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'public/upload/')  // 上传的文件 保存在什么地方
    },
    //修改文件名称
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
//加载配置
var upload = multer({ storage: storage });

//内容列表接口
router.get('/',async(ctx,next)=>{
    let result = await DB.find('article',{})
    // console.log(result)
    ctx.body = result
    await next()
})
//添加友情链接接口
router.post('/add',upload.single('pic'),async(ctx,next)=>{
    let title = ctx.req.body.title
    let url = ctx.req.body.url
    let pic = ctx.req.file ? ctx.req.file.path.substr(7) : ''
    let sort = ctx.req.body.sort
    let status = ctx.req.body.status
    let add_time = tools.getTime()
    let json1 = {
        title,
        pic,
        url,
        sort,
        status,
        add_time
    }
    let result1 = await DB.find('link',{'title':title})
    if(result1.length>0){
        let json = {
            code:0,
            message:'该标题已经存在，请重新添加'
        }
        ctx.body = json
    }else{
        await DB.insert('focus',json1)
        let json = {
            code:1,
            message:'恭喜你,添加成功了...'
        }
        ctx.body = json
    }
    
})
//编辑友情链接接口
router.post('/edit',upload.single('pic'),async(ctx,next)=>{
    let id = ctx.req.body.id
    let title = ctx.req.body.title
    let url = ctx.req.body.url
    let pic = ctx.req.file ? ctx.req.file.path.substr(7) : ''
    let sort = ctx.req.body.sort
    let status = ctx.req.body.status
    let add_time = tools.getTime()
    let json1 = {
        title,
        pic,
        url,
        sort,
        status,
        add_time
    }
    let result1 = await DB.update('link',{'_id':DB.getObjectId(id)},json1)
    if(result1){
        let json = {
            code:1,
            message:'恭喜你,更改成功了..'
        }
        ctx.body = json
    }else{
        let json = {
            code:0,
            message:'更新失败了'
        }
        ctx.body = json
    }
    
})
// 删除内容接口模块
  
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

// router.post('/delete',async(ctx,next)=>{
//         let id = ctx.request.body.id
        
//         let result = await DB.find('admin',{'_id':DB.getObjectId(id)})
//         if(result.length>0){
//             await DB.remove('admin',{'_id':DB.getObjectId(id)})
//             let json = {
//                 code:1,
//                 message:'恭喜你,删除成功了...'
//             }
//             ctx.body = json
//         }else{
//             let json = {
//                 code:0,
//                 message:'删除失败'
//             }
//             ctx.body = json
//         }
        
//     })


module.exports = router.routes()