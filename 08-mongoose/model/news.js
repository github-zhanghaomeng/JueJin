const mongoose = require('./db')

const Newschema = mongoose.Schema({
    title:String,
    content:String
})

module.exports = mongoose.model('News',Newschema,'news')