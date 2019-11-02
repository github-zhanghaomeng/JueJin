const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/myapp1',{useNewUrlParser:true},(err,data)=>{
    if(err) return
    console.log('连接数据库成功了...')
})

module.exports = mongoose
