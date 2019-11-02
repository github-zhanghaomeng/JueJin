const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ProfileSchema = new Schema({
    type:String,
    describe:String,
    income:String
})

const Profile = mongoose.model('Profile',ProfileSchema)
module.exports = Profile
