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

router.post('/edit',upload.single('site_logo'),async(ctx,next)=>{
    let id = ctx.req.body.id
    let site_title =  ctx.req.body.site_title
    let site_logo =  ctx.req.file ? ctx.req.file.path.substr(7) : ''
    let site_keywords =  ctx.req.body.site_keywords
    let site_description =  ctx.req.body.site_description
    let site_icp =  ctx.req.body.site_icp
    let site_qq =  ctx.req.body.site_qq
    let site_tel =  ctx.req.body.site_tel
    let site_address =  ctx.req.body.site_address
    let site_status =  ctx.req.body.site_status
    let add_time = tools.getTime()
    if(site_logo){
        var json={
            site_title,site_logo,site_keywords,site_description,site_icp,site_qq,site_tel,site_address,site_status,add_time

        }
    }else{
        var json={
            site_title,site_keywords,site_description,site_icp,site_qq,site_tel,site_address,site_status,add_time

        }

    }
    await DB.update('setting',{},json)
    await next()
})
module.exports = router.routes()