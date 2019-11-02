const express = require('express')
const passport = require('passport')
const router = express.Router()
const Profile = require('../../model/profile')

router.post('/add', passport.authenticate("jwt",{session:false}),(req,res)=>{
    const profileData = {}
    profileData.type = req.body.type
    profileData.describe = req.body.describe
    profileData.income = req.body.income

    new Profile(profileData).save().then(data=>{
        res.json({data})
    })

})

module.exports = router