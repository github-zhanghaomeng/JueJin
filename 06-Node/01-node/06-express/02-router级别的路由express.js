const express = require('express')
const router = express.Router()
const app = express()

router.get('/',(req,res)=>{
    res.send('首页面')      // Cannot GET /
})
app.get('/',(req,res)=>{
    res.send('首页面')     //首页面
})
app.post('/',(req,res)=>{
    res.send('首页面')
})

app.listen(3000,()=>{
    console.log("服务器已经启动")
})


// 哪些是get请求，哪些是post请求？
// get: 直接输入一个网址，href，src，表单（method=”get”）
// post: 就是表单 通过设置method=”post”


// 1，对于上面的两种路由方式，重点掌握第一种。
// 2，创建一个针对应用级别的路由，是分步骤：
    // a, 通过express()创建一个app实例
    // b, METHOD是一个HTTP的请求方法，如get请求或post请求， app.get(), app.post()
    // c, path是服务器上的路径，是url中的路径部分，如 “/”  “/user”
    // d,callback当路由匹配成功是要执行一个函数，在这个函数中有两个非常重要的参数，req，res,  req是指incommingMessage, res是指serverResponse