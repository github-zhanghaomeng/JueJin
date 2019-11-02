const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
const user = require('./routes/api/user')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/myapp',{useNewUrlParser:true}).then(()=>{
    console.log('数据库连接成功了...')
}).catch(err=>{
    console.log(err)
})

app.use('/api/user',user)
const port = 3000
app.listen(port,()=>{
    console.log(`serve is running on ${port}`)
})