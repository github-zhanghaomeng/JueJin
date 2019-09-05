# token
登陆成功后  把用户信息保存在token中 token在浏览器
token里面保存了用户的信息 
token最终是服务器发送给客户端 保存在客户端  localStorage
# jsonwebtoken   
安装 npm i jsonwebtoken
生成token   

    const keys = require('../../config/keys.js')
    const rule = {
        id:user.id,
        name:user.name,
        enmail:user.email
    }
    jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(err,token)=>{
        if(err) return
        else{
            res.json({
                success:true,
                token:'Bearer '+token  //前面必须加上'Bearer ' 右边必须有一个空格
            })
        }
    })
secret就是给token进行加密
config/keys.js

    module.exports = {
        secretOrKey:'secret'
    }

例子：

    router.post('/login',(req,res)=>{
    let email = req.body.email  //express框架
    let password = req.body.password
    User.findOne({email}).then((data)=>{
        if(!data){
           return  res.json({msg:'该用户不存在'})
        } 
        bcrypt.compare(password,data.password)
        .then(isMatch=>{
            if(isMatch){
                // res.json({msg:"success"})
                const rule = {
                    id:data.id,
                    name:data.name,
                    email:data.email
                }
                jwt.sign(rule,'secret',{expiresIn:3600},(err,token)=>{
                    if(err) return
                    else{
                        res.json({
                            success:true,
                            token:'Bearer'+token
                        })
                    }
                })
                
            }else{
                return res.status(400).json("密码错误")
            }
        })
    })

})

# 验证token
验证token是否合法，token是否过期
 token就是一个令牌  钥匙
 如果登录成功了，你需要带着这个令牌去访问别的接口
 有的接口是需要有令牌才能访问，没有令牌是不能访问
 
 安装passprot passport-jwt   
 npm i passport
 npm i passport-jwt
 使用passport-jwt和passport中间件来验证token，passport-jwt是一个针对jsonwebtoken的插件，passport是express框架的一个针对密码的中间件
 ##### 步骤
 (1)然后在入口文件server.js中引入passport

    const passport = require("passport"); 
(2)在入口文件中初始化passport

    app.use(passport.initialize());     //passport初始
(3)接下来我们还需要对passport进行一些配置，所以在config文件夹下面新建一个passport.js文件。然后将此文件在入口文件中引入

    require("./config/passport")(passport);
(4)然后在passport.js文件中，我们需要使用passport-jwt中间件，所以我们需要在passport中引入passport-jwt、mongoose、config/keys.js、models/Users.js
keys.js中保存了 

    modules.exports={secretOrKey:'secret'}
passport.js

    var JwtStrategy = require('passport-jwt').Strategy,
        ExtractJwt = require('passport-jwt').ExtractJwt;
    const mongoose = require("mongoose");
    const User = mongoose.model("User");
    //User是在model/user.js中导出的model的名字
    const keys = require("../config/keys");
    var opts = {}
    opts.jwtFromRequest=
    ExtractJwt.fromAuthHeaderAsBearerToken();  //通过配置信息来生成jwt的请求，验证这个token
    opts.secretOrKey = keys.secretOrKey;

    module.exports = passport =>{
         passport.use(new JwtStrategy(opts,function(jwt_payload,done){
            console.log(jwt_payload);
         }));
    }
随后在api/user.js中做密码的验证，首先在文件中引入passport

    const passport = require("passport");     //引入passport中间件

验证token得到用户信息
使用passport-jwt验证token

    router.get("/current",
    passport.authenticate("jwt",{session:false}),
    (req,res)=>{
    res.json({msg:"success"}); 
    })
此时可以使用postman来测试接口，在/current下使用key:Authorization；value：token值来测试是否成功。如果测试成功可以打印出用户信息，我们就可以用jwt_payload来登录。将passport里面的export修改为下面：

    module.exports = passport =>{
     passport.use(newJwtStrategy(opts,
     function(jwt_payload,done){
        // console.log(jwt_payload);   //jwt_payload就是用户信息
        User.findById(jwt_payload.id)
            .then(user =>{
            	if(user){
            		return done(null,user);
            	}
            	return done(null,false);
            })
            .catch(err => console.log(err));
     }));
}
此时再用postman测试接口会返回

{
    "msg": "success"
}

我们应该让他返回用户信息，修改user.js中的路由返回值

    router.get("/current",passport.authenticate("jwt",{session:false}),(req,res)=>{
        res.json(req.user); 
    })
此时再用postman测试将返回token所对应的用户信息

但是我们并不需要返回所有的用户信息，包括密码什么的，所以我们使用一个对象，将部分用户信息包装在对象中来显示部分用户信息

    router.get("/current",passport.authenticate("jwt",{session:false}),(req,res)=>{
        res.json({
            id:req.user.id,
            name:req.user.name,
            email:req.user.email
        }); 
    })
    
此时在用postman测试将只会显示部分用户信息。

总结一下，在上一节中主要是为了获取用户的token，token就像一个令牌，我们只有拿这个令牌才能向服务器去请求用户的信息，这一节我们使用/current接口，用passport-jwt来验证token，验证成功之后获得用户信息。




 https://blog.csdn.net/djjj123456789/article/details/81980587