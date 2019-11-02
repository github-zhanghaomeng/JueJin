const express = require('express')
const app = express()

app.use((req,res,next)=>{
    console.log('这是一个中间件')
    // next('hello')  //会把给浏览器输入的内容变为hello
    next(new Error('hello'))
})
app.get('/',(req,res)=>{
    res.send('你好,express1')
})

//错误处理中间件  会把错误给cmd 不写这个会把错误直接在浏览器中输出
app.use(function(err,req,res,next){
    console.log(err)
})


app.listen(3000,()=>{
    console.log('服务器已经启动')
})