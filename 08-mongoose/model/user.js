const mongoose = require('./db')

let Userschema = mongoose.Schema({
    username:String,
    password:Number
})

// let User = mongoose.model('User',Userschema,'users')

// let user = new User({
//     username:'wangcai',
//     password:123456
// })

// user.save((err,data)=>{
//     if(err) console.log(err)
//     console.log('保存数据成功了')
// })


module.exports = mongoose.model('User',Userschema,'users')
