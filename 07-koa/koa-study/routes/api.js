const router = require('koa-router')()

const manage = require('./api/manage')
const articlecate = require('./api/articlecate')
const article = require('./api/article')
const focus = require('./api/focus')
const link = require('./api/link')
const nav = require('./api/nav')
const setting = require('./api/setting')

router.get('/',(ctx)=>{
    ctx.body = '接口首页面'
})

router.use('/manage',manage)
router.use('/articlecate',articlecate)
router.use('/article',article)
router.use('/focus',focus)
router.use('/link',link)
router.use('/nav',nav)
router.use('/setting',setting)

module.exports = router.routes()