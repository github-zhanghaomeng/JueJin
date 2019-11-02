const express = require('express')
const router = express.Router()
const User = require('../../model/user')
const bcrypt = require('bcrypt')

// router.get('/test',(req,res)=>{
//     res.json({msg:'success'})
// })

router.post('/register',(req,res)=>{
    const users = new User({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email

    })
    // console.log(users)
    User.findOne({email:users.email}).then(data=>{
        if(data){
            return res.json({msg:'该邮箱已经注册过了...'})
        }
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(users.password,salt,(err,hash)=>{
                if(err) console.log(err)
                users.password = hash
                users.save()
                .then(user=>res.json(user))
                .catch(err=>res.json(err))
            })
        })
    })
})

router.post('/login',(req,res)=>{
    const email = req.body.email
    const password = req.body.password
    User.findOne({email}).then(data=>{
        if(!data){
            return res.json({msg:'该用户不存在'})
        }
        bcrypt.compare(password,data.password).then(isMatch=>{
            if(!isMatch){
                res.json({msg:'密码错误'})

            }else{
                res.json({msg:'登陆成功'})
            }
        })
    })
})

module.exports = router