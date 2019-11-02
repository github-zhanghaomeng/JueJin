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

router.get('/',async(ctx,next)=>{
    // ctx.body = '新闻页面'
    let page = ctx.query.page || 1
    let pageSize = 5
    // console.log(page)
    // 获取总的条数
    let resultCount = await DB.count("article",{})

    let result = await DB.find('article',{},{},{
        page,
        pageSize,
        sortJson:{
            'add_time':-1
        }
    })
    // console.log(result)
    //总的页数
    let totalPages = Math.ceil(resultCount/pageSize)
    // console.log(newsList)
    await ctx.render('admin/article/list',{
        newsList:result,
        page:page,
        totalPages:totalPages
    })
    await next()
})
//渲染添加新闻页面
router.get('/add',async(ctx,next)=>{
    // ctx.body = '添加新闻'
    let result = await DB.find('articlecate',{})
    // console.log(result)
    let Realresult = tools.cateToList(result)
    // console.log(Realresult)
   
    await ctx.render('admin/article/add',{
        cateName:Realresult,
        
    })
    await next()
})
//处理添加新闻逻辑
router.post('/doAdd', upload.single('img_url'),async(ctx,next)=>{
    // let title = ctx.req.body.title
    // let pic = ctx.req.body.pic
    // let content = ctx.req.body.content
    // console.log(title,pic,content)

    let pid = ctx.req.body.pid
    let title = ctx.req.body.title
    let result = await DB.find('articlecate',{'_id':DB.getObjectId(pid)})
    let catename = result[0].title
    // let img_url = ctx.req.file
    // let img_url = ctx.req.file ? ctx.req.file.path : ''   //路径中带public  图片显示不出来
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
    // console.log(catename)
    // console.log(catename,pid,title,img_url,author,status,is_best,is_hot,is_new,content,keywords,description)
    let json = {
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
    await DB.insert('article',json) 
    await ctx.redirect(ctx.state.__HOST__+'/admin/article')
    // ctx.body = {
    //     filename:ctx.req.file.filename,
    //     body:ctx.req.body
    // }
})
//渲染编辑新闻页面
router.get('/edit',async(ctx,next)=>{
    // ctx.body = '编辑新闻'
    let result = await DB.find('articlecate',{})
    // console.log(result)
    let Realresult = tools.cateToList(result)
    // console.log(Realresult)
    let id = ctx.query.id
    // console.log(id)
    let editData = await DB.find('article',{'_id':DB.getObjectId(id)})
    console.log(editData)
    await ctx.render('admin/article/edit',{
        cateName:Realresult,
        editData:editData[0],
        prePage:ctx.state.G.prePage
    })
    await next()
})
//处理编辑新闻页面
router.post('/doEdit',upload.single('img_url'),async(ctx,next)=>{

    let prePage = ctx.req.body.prePage || '' 
    let id = ctx.req.body.id
    let pid = ctx.req.body.pid
    let result = await DB.find('articlecate',{'_id':DB.getObjectId(pid)})
    // console.log(result)
    let catename = result[0].title
    let title = ctx.req.body.title
    // let img_url = ctx.req.file
    let img_url = ctx.req.file ? ctx.req.file.path : ''
    let author = ctx.req.body.author
    let status = ctx.req.body.status
    let is_best = ctx.req.body.is_best
    let is_hot = ctx.req.body.is_hot
    let is_new = ctx.req.body.is_new
    let content = ctx.req.body.content
    let keywords = ctx.req.body.keywords || ''
    let description = ctx.req.body.description || ''
    // var json = 
    // {
    //     pid,catename,title,author,status,is_best,is_hot,is_new,keywords,description,content
    //  }
    
    if(img_url){
        var json = {
            pid,catename,title,author,status,is_best,is_hot,is_new,keywords,description,content,img_url
        }
    }else{
        var json = {
            pid,catename,title,author,status,is_best,is_hot,is_new,keywords,description,content
        }
    }
    await DB.update('article',{'_id':DB.getObjectId(id)},json)
    if(prePage){
        await ctx.redirect(prePage)
    }
    else{
        await ctx.redirect(ctx.state.__HOST__+'/admin/article')
    }
   
    
})
module.exports = router.routes()