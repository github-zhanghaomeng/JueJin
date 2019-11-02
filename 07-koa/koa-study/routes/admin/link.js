const router = require('koa-router')()
const DB = require('../../model/db')
const multer = require('koa-multer')

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

router.get('/',async(ctx,next)=>{
    // ctx.body = '友情链接'
    let result = await DB.find('link',{},{},{
        sortJson:{
            'add_time':-1
        }
    })
    // console.log(result)
    await ctx.render('admin/link/list',{
        data:result
    })
    await next()
})
//渲染增加友情链接页面
router.get('/add',async(ctx,next)=>{
    // ctx.body = '增加友情链接'
    ctx.render('admin/link/add')
    await next()
})
//处理增加友情链接逻辑
router.post('/doAdd',upload.single('pic'),async(ctx,next)=>{
    let title = ctx.req.body.title
    let pic = ctx.req.file ? ctx.req.file.path.substr(7) : ''
    let url = ctx.req.body.url
    let sort = ctx.req.body.sort
    // console.log(title,pic,url,sort)
    let json = {
        title,
        pic,
        url,
        sort
    }
    await DB.insert('link',json)
    await ctx.redirect(ctx.state.__HOST__+'/admin/link')
    await next()
})
//渲染编辑友情链接页面
router.get('/edit',async(ctx,next)=>{
    // ctx.body = '编辑页面'
    let id = ctx.query.id
    // console.log(id)
   let result = await DB.find('link',{'_id':DB.getObjectId(id)})
//    console.log(result)
    await ctx.render('admin/link/edit',{
        editData:result[0]
    })
    await next()
})
//处理编辑友情链接逻辑
router.post('/doEdit',upload.single('pic'),async(ctx,next)=>{
    let id = ctx.req.body.id
    // console.log(id)
    let title = ctx.req.body.title
    let pic = ctx.req.file ? ctx.req.file.path.substr(7) : ''
    let url = ctx.req.body.url
    let sort = ctx.req.body.sort
    let status = ctx.req.body.status
    let json = {
        title,
        pic,
        url,
        sort,
        status
    }
    await DB.update('link',{'_id':DB.getObjectId(id)},json)
    await ctx.redirect(ctx.state.__HOST__+'/admin/link')
    await next()
})
module.exports = router.routes()