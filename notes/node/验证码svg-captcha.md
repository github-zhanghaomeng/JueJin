# express的验证码实现

 ##### express-session  把验证码存在session中
 安装 npm i express-session  
 在serve.js中配置session
 引入  const session = require('express-session')
 配置  express-session 注:配置session必须在使用路由之前 在app.use('/api/code',code)之前
 
    var sess = {
        secret: 'keyboard cat',
        cookie: {}
        
    }
    app.use(session(sess))

##### svg-captcha 验证码
 安装 npm i svg-captcha      
 可以在serve.js  也可以单独写一个code.js
 在code.js中

    const express = require('express')
    const router = express()
    const svgCaptcha = require('svg-captcha')
   
    router.get('/',(req,res)=>{
        const captcha = svgCaptcha.create({
                
        })
        //保存在session
        req.session = captcha.text
        //响应头
        res.type('svg')
        //返回给前端
        res.send(captcha.data)
    })
    module.exports = router
    
在serve.js中引入 code.js

    const code = require('./routes/api/code')
    app.use('/api/code',code)  
    //当访问http://localhost:3000/api/code就会出现验证码

# koa中的验证码

##### koa-session
安装 npm i koa-router
引入 const router = require('koa-router')
引入路由模块

    let api = require('./routes/api/code')
一级路由

    router.use('/api/code',code)  //当访问http://localhost:3000/api/code就会出现验证码
启动路由 

    app.use(router.routes())
    app.use(router.allowedMethods());
安装 npm i koa-session
在serve.js中
引入 const session = require('koa-session')
配置 在启动路由之前 

    app.keys = ['some secret hurr'];

    const CONFIG = {
      key: 'koa:sess', 
      maxAge: 86400000,
      autoCommit: true, 
      rolling: false, 
      renew: false, 
    };

    app.use(session(CONFIG, app))
# svg-captcha
安装 npm i svg-captcha
同上code可以写在code.js 也可以写在serve.js
code.js
    
    const router = require('koa-router')
    router.get('/',(ctx,next)=>{
        const svgCaptcha = require('svg-captcha')
        const captcha = svgCaptcha.create({
            
        })
        //保存在session中
        ctx.session.code = captcha.text
        //响应头
        ctx.response.type =  "image/svg+xml"
        //返回给前端
        ctx.body = captcha.data
    })
    
    module.exports = router.routes()
    
# 验证 验证码 expres
express和koa就是一个是req一个是ctx
上面的两种都是把验证码存入到 session中
所以应该在登录时把输入的验证码和session中的验证码进行比对

    router.post('/login',(req,res)=>{
        let password = req.body.password
        let email = req.body.email
        let code = req.body.code
        if(req.session.code.toLocaleLowerCase() !== code.toLocaleLowerCase()){
            res.json({msg:'验证码错误'})
        }else{
            UserInfo.findOne({email}).then(data=>{
                if(!data){
                    res.json({msg:'该用户不存在'})
                }else{
                    //npm i bcrypt 对密码进行加密
                    bcrypt.compare(password, data.password).then(isMatch=>{
                    if(isMatch){
                        // res.json({msg:"success"})
                        const rule = {
                            id:data.id,
                            username:data.username,
                            email:data.email
                        }
                        //npm i jsonWebToken  对token进行加密
                        //keys.secretOrKey 是config/keys.js中的 
                        module.exports = {
                            mongoURL:'mongodb://127.0.0.1:27017/mydj',
                            secretOrKey:'secret'
                        }
                        jwt.sign(rule,keys.secretOrKey,{expiresIn:3600},(err,token)=>{
                            if(err) console.log(err)
                            else{
                                res.json({
                                    success:true,
                                    token:'Bearer '+token
                                })
                            }
                        })
                        
                    }else{
                        return res.status(400).json("密码错误")
                    }
                })
                }
            })
        }
    })
