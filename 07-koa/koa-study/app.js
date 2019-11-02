const koa = require('Koa')
const router = require('koa-router')()
const static = require('koa-static')
const render = require('koa-art-template')
const path = require('path')
const session = require('koa-session')
const bodyParser = require('koa-bodyparser')
const sd = require('silly-datetime')


const app = new koa()

//配置post请求时接收数据
app.use(bodyParser())

//引入路由模块
let index = require('./routes/index')
let admin = require('./routes/admin')
let api = require('./routes/api')

//一级路由
router.use('/',index)
router.use('/admin',admin)
router.use('/api',api)

// 配置session中间件
app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess',
  maxAge: 86400000,
  autoCommit: true,
  overwrite: true,
  httpOnly: true,
  signed: true,
  rolling: false,
  renew: false,
};

app.use(session(CONFIG, app));

//启动路由
app.use(router.routes())
app.use(router.allowedMethods());

//托管静态资源
// app.use(static('.')) //托管所有资源 但是不安全 所以不用
app.use(static(__dirname+'/public'))

//渲染
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production',
    dateFormat:dateFormat=function(value){
      return sd.format(value,'YYYY-MM-DD HH:mm')
    }
  });

  



app.listen(3000)