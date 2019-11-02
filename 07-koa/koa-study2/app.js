const Koa = require('koa')
const router = require('koa-router')()
const static = require('koa-static')
const render = require('koa-art-template')
const path = require('path')
const session = require('koa-session')
const bodyparser = require('koa-bodyparser')

const sd = require('silly-datetime')

const app = new Koa()


let index = require('./routes/index')
let admin = require('./routes/admin')
let api = require('./routes/api')

router.use(index)
router.use('/admin',admin)
router.use('/api',api)

app.use(static(__dirname+'/public'))

render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production',
    dateFormat:dateFormat=function(value){
      return sd.format(value,'YYYY-MM-DD HH:mm')
    }
  });

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

app.use(bodyparser())

app.use(router.routes())
app.use(router.allowedMethods());
app.listen(3000)