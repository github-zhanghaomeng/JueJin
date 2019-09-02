##### 安装  npm i mongoose

##### 引入  

    const mongoose = require('mongoose')
##### 建立连接 
    
    mongoose.connect('mongodb://127.0.0.1:27017/myapp'，{useNewUrlParser:true},(err,data)=>{
        if(err) return 
        console.log('连接数据库成功了...')
    })
写上{useNewUrlParser:true}这句话，就不会出来警告了

##### 创建一个Schema 
用来设置数据库里面的属性 

    let Userschema = mongoose.Schema({
        name:{
            type:String,
            default:'wangcai'
            },
        password:Number
    })
这时数据库里面就有两个属性 name password
##### 创建一个model

    let user = mongoose.model('User','Userschema','users')
    
第一个参数代表的是model的名字，一般是第一个字母大写
第二个参数代表的是上面的Schema的名字
第三个参数代表的是在数据库集合的名字
如果没有第三个参数系统会默认为model名字的首字母小写并且为复数  
例如:当model的名字为User时，则数据库的名字就是users 

##### new一个model
实际上就是给数据库里面添加数据

    let user = new User({
        name:'wangcai',
        password:'123456'
    })
##### 把数据保存到数据库
如果没有app这个数据库时，当save后自动会建立这个数据库，并把数据存到数据库中

    user.save((err,data)=>{
        if(err)  console.log(err)
        console.log(data) //会把存入的数据打印出来
    })
user代表new model后的名字
##### 查询数据库里面的数据
使用model进行查询

    User.find({},(err,data)=>{
        if(err) console.log(err)
        console.log(data) //数据多时，会以数据形式打印
    })
User代表model的名字
find里面的参数
第一个代表条件 没有条件默认为空
第二个是回调函
##### 修改数据库里面的数据


    User.updateOne({'_id':'5d6c9464db620637402646df'},{title:'zhangsan'},(err,data)=>{
        if(err) console.log(err)
        console.log(data)  //{n:1,nModified:1,ok:1}代表更新成功
    })
update updateOne updateMany
第一个参数代表条件
第二个参数代表要修改为什么的内容
第三个参数是回调函数

##### 删除数据

    User.deleteOne({'_id':'5d6c9ff4e923153640603eff'},(err,data)=>{
        if(err) console.log(err)
        console.log(data)  //{n:1,ok:1,deleteCount:1}代表更新成功
    })
    
# 上面的回调函数 也可以直接在后面.then  .catch
例如 查找时

    User.find({}).then(data=>{
        cosnole.log(data) //打印找到的数据
    }).catch(err=>{
        console.log(err)
    })