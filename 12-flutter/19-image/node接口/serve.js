const express = require('express');

const app = express();

const multiparty = require('multiparty')

app.get('/',(req,res)=>{
    res.send('ok')
})
app.post('/image',(req,res)=>{
    var form = new multiparty.Form();
    form.uploadDir = 'public/upload';
    form.parse(req,function(err,fields,files){
        console.log(files);
        console.log(fields);
        var path = '/'+files[0].path;
        res.json({'success':'true','path':path})
    })

})
app.listen(3000);