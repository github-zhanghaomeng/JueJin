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

//渲染轮播图首页面
router.get('/',async(ctx,next)=>{
    // ctx.body = '轮播图'
    let result = await DB.find('focus',{},{},{
        sortJson:{
            'add_time' : -1
        }
    })
    // console.log(result)
    await ctx.render('admin/focus/list',{
        focusData:result
    })
    await next()
})
//渲染添加轮播图页面
router.get('/add',async(ctx,next)=>{
    // ctx.body = '添加轮播图'
    await ctx.render('admin/focus/add')
    await next()
})
//处理添加轮播图逻辑
router.post('/doAdd',upload.single('pic'),async(ctx,next)=>{
    let title = ctx.req.body.title
    let pic = ctx.req.file ? ctx.req.file.path.substr(7) : ''
    let url = ctx.req.body.url
    let sort = ctx.req.body.sort
    let status = ctx.req.body.status
    let add_time = tools.getTime()
    // console.log(title,filename,url,sort,status)
    let json = {
        title,
        pic,
        url,
        sort,
        status,
        add_time
    }
    await DB.insert('focus',json)
    await ctx.redirect(ctx.state.__HOST__+'/admin/focus')
    await next()
})
//渲染编辑轮播图页面
router.get('/edit',async(ctx,next)=>{
    // ctx.body = '编辑轮播图'
    let id = ctx.query.id
    // console.log(id)
    let result = await DB.find('focus',{'_id':DB.getObjectId(id)})
    // console.log(result)
    await ctx.render('admin/focus/edit',{
        editData:result[0]
    })
    await next()
})
//处理编辑轮播图逻辑
router.post('/doEdit',upload.single('pic'),async(ctx,next)=>{
    let id = ctx.req.body.id
    let title = ctx.req.body.title
    let pic = ctx.req.file ? ctx.req.file.path.substr(7) : ''
    let url = ctx.req.body.url
    let sort = ctx.req.body.sort
    let status = ctx.req.body.status
    // console.log(title,pic,url,sort,status)
    let json = {
        title,
        pic,
        url,
        sort,
        status
    }
    await DB.update('focus',{'_id':DB.getObjectId(id)},json)
    await ctx.redirect(ctx.state.__HOST__+'/admin/focus')
    
})
module.exports = router.routes()