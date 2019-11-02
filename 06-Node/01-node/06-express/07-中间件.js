const express = require('express')
const app = express()

// 中间件  执行是有顺序的  有next()的话 才可以向下执行
// app.use('/',(req,res,next)=>{
//     console.log('这是一个中间件1')
//     next()
// })

// app.use('/',(req,res,next)=>{
//     console.log('这是一个中间件2')
//     next()
// })

// app.use('/',(req,res,next)=>{
//     console.log('这是一个中间件3')
//     next()
// })

// app.use('/',(req,res,next)=>{
//     console.log('这是一个中间件1')
//     next()
// })
// //当浏览器输入的路径是/my 时  也会执行上面的
// app.use('/my',(req,res,next)=>{
//     console.log('这是一个中间件2')
//     next()
// })
// //不管浏览器输入的路径是什么  都会执行
// app.use((req,res,next)=>{
//     console.log('这是一个中间件3')
//     next()
// })
// //相当于上面的
// app.use('*',(req,res)=>{
//     console.log('中间件')
// })

// app.get('/',(req,res)=>{
//     res.send('你好,express')
// })
// app.get('/my',(req,res)=>{
//     res.send('my')
// })

app.listen(3000,()=>{
    console.log('服务器已经启动')
})