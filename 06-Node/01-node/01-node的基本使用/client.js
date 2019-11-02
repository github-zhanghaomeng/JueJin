const http = require('http')
let client = http.request({
    hostname:'localhost',
    port:3060,
    path:'/abc?name=zhangsan',
    method:'post',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    }
})

client.end('a=1&b=2&c=3')