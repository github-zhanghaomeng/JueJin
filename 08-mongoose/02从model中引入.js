const UserModel = require('./model/user')
const NewsModel = require('./model/news')

let user = new UserModel({
    username:'wangcai',
    password:123456
})

let news = new NewsModel({
    title:'新闻1',
    content:'新闻内容'
})

// news.save((err,data)=>{
//     if(err) console.log(err)
//     console.log('保存数据成功了...')
// })

// NewsModel.update({'_id':'5d6cb63b2f458d1fecdd2c1d'},{'title':'新闻2'},(err,data)=>{
//     if(err) console.log(err)
//     console.log(data)
// })

NewsModel.deleteOne({'_id':'5d6cb63b2f458d1fecdd2c1d'},(err,data)=>{
    if(err) console.log(err)
    console.log(data)
})

// user.save((err,data)=>{
//     if(err) console.log(err)
//     console.log('保存成功了...')
// })

// UserModel.updateOne({'_id':'5d6cabb09b46190bc0c8bef9'},{'username':'zhangsan'},(err,data)=>{
//     if(err) console.log(err)
//     console.log(data)
// })
