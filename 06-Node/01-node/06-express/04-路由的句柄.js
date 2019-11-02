const express = require('express')
const app = express()

//只会打出来一个 并且是第一个
//res.send  是封装了 res.setHeader res.write  res.end
//当第一个res.send之后  它已经res.end了 所以不能再res.setHeader
// app.get('/',(req,res)=>{
//     res.send('你好 express1')
// },(req,res)=>{
//     res.send('你好 express2')
// })

app.get('/',(req,res,next)=>{
    res.send('你好,express1')
    next()       // 1 Cannot set headers after they are sent to the client
},(req,res)=>{ 
    // res.send('你好,express2')  //1
    console.log('第二个函数调用了...')  //会在cmd中打出'第二个函数调用了...'
})

app.listen(3000)