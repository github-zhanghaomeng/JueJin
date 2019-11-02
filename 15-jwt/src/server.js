let express = require('express')
let bodyparser = require('body-parser')
let jwt = require('jsonwebtoken')

let app = express()

// 配置跨域
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:8080");
    res.header("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT"),
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization")
    if(req.method.toLowerCase() === "options"){
        return res.end();
    }
    next();
})

app.use(bodyparser.json())
let secret = 'xwc'

app.get('/user',(req,res)=>{
    setTimeout(()=>{
        res.json({name:'wangcai'})
    },500)
})

//登录
app.post('/login',(req,res)=>{
    let {username} = req.body
    // console.log(username)
    if(username == 'admin'){
        //登陆成功 返回一个token
        res.json({
            code : 0,
            username : username,
            token:jwt.sign({username:'admin'},secret,{expiresIn:5})
        })

    }else{
        //登陆失败
        res.json({
            code : 1,
            data:'用户名不存在'
        })
    }
})
//验证token
app.get('/validate',(req,res)=>{
    let token = req.headers.authorization
    jwt.verify(token,secret,(err,decode)=>{
        if(err){
           return res.json({
                code:1,
                data:'token失效了'
            })
        }else{
            //token合法
            res.json({
                code:0,
                username:decode.username,
                token:jwt.sign({username:'admin'},secret,{expiresIn:5})

            })

        }
    })
})
app.listen(3000)