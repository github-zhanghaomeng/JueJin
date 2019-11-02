const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/user',(req,res)=>{
    console.log(req.body)      //[Object: null prototype] { name: 'zhangsan', age: '10' }
    console.log(req.body.name) //zhangsan
    console.log(req.body.age)  //10
    res.send('接收到了请求')
})


app.listen(3000)
