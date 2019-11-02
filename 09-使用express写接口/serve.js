const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const keys = require('./config/key')
const passport = require('passport')

const app = express()
const user = require('./routes/api/user')
const profile = require('./routes/api/profile')

//配置bodyparser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(keys.mongoURL,{useNewUrlParser:true}).then(()=>{
    console.log('链接成功了...')
}).catch((err)=>{
    console.log(err)
})

app.use('/api/user',user)
app.use('/api/profile',profile)

// 配置passport  配置passport代码量非常大   把配置抽离一个单独的文件
app.use(passport.initialize())  //初始化passport
require('./config/passport')(passport)


const port = 3000
app.listen(port,()=>{
    console.log(`serve is running on ${port}`)
})