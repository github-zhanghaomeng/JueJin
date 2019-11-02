const express = require('express')
const app = express()
const path = require('path')

app.get('/',(req,res)=>{
    // res.send('hello')
    // res.send('<ul><li>html</li><li>css</li><li>js</li></ul>') //传递html标签
    // console.log(__dirname) //G:华杉0712\06-Node
    // res.sendFile(__dirname+'/index.html')

    // res.json({name:'wangcai',age:'10'})   //{"name":"wangcai","age":"10"}
    res.redirect('/login')
})

app.get('/login',(req,res)=>{
    res.send('登录页面')
})

app.listen(3000,()=>{
    console.log("服务器已经启动")
})