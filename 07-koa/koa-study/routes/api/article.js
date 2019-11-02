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
router.post('/',async(ctx,next)=>{
    let result = await DB.find('article',{})
    // console.log(result)
    ctx.body = result
    await next()
})
//添加内容接口
router.post('/add',upload.single('img_url'),async(ctx,next)=>{
    let pid = ctx.req.body.pid
    let title = ctx.req.body.title
    let result = await DB.find('articlecate',{'_id':DB.getObjectId(pid)})
    let catename = result[0].title
    // console.log(result)
    let img_url = ctx.req.file ? ctx.req.file.path.substr(7) : ''
    let author = ctx.req.body.author
    let status = ctx.req.body.status
    let is_best = ctx.req.body.is_best
    let is_hot = ctx.req.body.is_hot
    let is_new = ctx.req.body.is_new
    let content = ctx.req.body.content
    let keywords = ctx.req.body.keywords || ''
    let description = ctx.req.body.description || ''
    let add_time = tools.getTime()
    let json1 = {
        catename,
        pid,
        title,
        img_url,
        author,
        status,
        is_best,
        is_hot,
        is_new,
        content,
        keywords,
        description,
        add_time
    }
    let result1 = await DB.find('article',{'title':title})
    if(result1.length>0){
        let json = {
            code:0,
            message:'该标题已经存在，请重新添加'
        }
        ctx.body = json
    }else{
        await DB.insert('article',json1)
        let json = {
            code:1,
            message:'恭喜你,添加成功了...'
        }
        ctx.body = json
    }
    
})
//编辑内容接口
router.post('/edit',upload.single('img_url'),async(ctx,next)=>{
    let id = ctx.req.body.id
    console.log(id)
    let pid = ctx.req.body.pid
    let title = ctx.req.body.title
    let result = await DB.find('articlecate',{'_id':DB.getObjectId(pid)})
    let catename = result[0].title
    // console.log(result)
    let img_url = ctx.req.file ? ctx.req.file.path.substr(7) : ''
    let author = ctx.req.body.author
    let status = ctx.req.body.status
    let is_best = ctx.req.body.is_best
    let is_hot = ctx.req.body.is_hot
    let is_new = ctx.req.body.is_new
    let content = ctx.req.body.content
    let keywords = ctx.req.body.keywords || ''
    let description = ctx.req.body.description || ''
    let add_time = tools.getTime()
    let json1 = {
        catename,
        pid,
        title,
        img_url,
        author,
        status,
        is_best,
        is_hot,
        is_new,
        content,
        keywords,
        description,
        add_time
    }
    console.log(json1)
    let result1 = await DB.update('article',{'_id':DB.getObjectId(id)},json1)
    console.log(result1)
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
  
router.post('/delete',async(ctx,next)=>{
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