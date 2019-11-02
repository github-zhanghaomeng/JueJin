const express = require('express')
const router = express.Router()
const User = require('../../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const keys = require('../../config/key')
const passport = require('passport')

// let user = new User({
//     name:'wangcai',
//     password:'123456',
//     email:'123456@qq.com'
// })
// user.save((err,data)=>{
//     if(err) console.log(err)
//     console.log('保存数据成功了...')
// })

// router.get('/test',(req,res)=>{
//     res.json({msg:'success'})
// })

router.post('/register',(req,res)=>{
   
    User.findOne({email:req.body.email}).then((user)=>{
        if(user){
           return res.json({msg:'该邮箱已经注册'})
        }else{      
            const newUser = new User({
                name:req.body.name,
                password:req.body.password,
                email:req.body.email
            })    
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                    if(err) console.log(err)
                    newUser.password = hash;
                    newUser.save()
                    .then(data=>res.json(data))
                    .catch(err=>res.json(err))
                })
            })
        }
    })
})

router.post('/login',(req,res)=>{
    let email = req.body.email
    let password = req.body.password
    User.findOne({email}).then((data)=>{
        if(!data){
           return  res.json({msg:'该用户不存在'})
        } 
        bcrypt.compare(password, data.password).then(isMatch=>{
            if(isMatch){
                // res.json({msg:"success"})
                const rule = {
                    id:data.id,
                    name:data.name,
                    email:data.email
                }
                // 
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
    })

})

router.get("/current", passport.authenticate("jwt",{session:false}), (req,res)=>{
    res.json({
        id:req.user.id,
        name:req.user.name,
        email:req.user.email
    })
})
module.exports = router
