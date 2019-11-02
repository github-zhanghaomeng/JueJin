//引入
const mongoose = require('mongoose')
//建立连接
mongoose.connect('mongodb://127.0.0.1:27017/myapp',{useNewUrlParser:true},(err,data)=>{
    if(err) return 
    console.log('连接数据库成功了...')
})
//创建一个Schema
let UserSchema = mongoose.Schema({
    title:String
})
//创建一个model
let User = mongoose.model('User',UserSchema)
//new model
let user = new User({
    title:'旺财'
})
//保存数据  每执行一次就会把数据存到数据库中
// user.save((err,data)=>{
//     if(err) console.log(err)
//     console.log(data)
// })
//查询数据
User.find({},(err,data)=>{
    if(err) console.log(err)
    console.log(data)  //返回你数据库里面的内容
})
//更新数据
// User.updateOne({'_id':'5d6c9464db620637402646df'},{title:'zhangsan'},(err,data)=>{
//     if(err) console.log(err)
//     console.log(data)  //{n:1,nModified:1,ok:1}代表更新成功
// })
//删除数据
User.deleteOne({'_id':'5d6c9ff4e923153640603eff'},(err,data)=>{
    if(err) console.log(err)
    console.log(data)  //{n:1,ok:1,deleteCount:1}代表更新成功
})