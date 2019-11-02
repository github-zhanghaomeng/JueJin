const express = require('express')
const app = express()

app.get('/abc',(req,res)=>{
    console.log(req.query)   //{name:'zhangsan'}
    console.log(req.path)    // /abc
    console.log(req.url)     // /abc?name=zhangsan
    console.log(req.pathname) //undefined  没有这个
})


app.listen(3000,()=>{
    console.log('服务器已经启动')
})