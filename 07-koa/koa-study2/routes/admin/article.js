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

router.get('/',async(ctx)=>{
    // ctx.body = '内容页面'
    let data = await  DB.find('article',{})
    // console.log(data)
    await ctx.render('admin/article/list',{
        newsList:data
    })
})
router.get('/add',async(ctx)=>{
    // ctx.body = '添加内容'
    let result = await DB.find('article',{})
    ctx.render('admin/article/add')
})


module.exports = router.routes()