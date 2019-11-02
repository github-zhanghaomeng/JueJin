const http = require('http')
const querystring = require('querystring')


http.createServer((req,res)=>{
    let arr = []
    res.setCookie = (key,value,options = {})=>{
        let opts = []
        if(options.path){
            opts.push(`path=${options.path}`)
        }
        if(options.httpOnly){
            opts.push(`httpOnly=${options.httpOnly}`)
        }
        if(options.domain){
            opts.push(`domain=${options.domain}`)
        }
        if(options.maxAge){
            opts.push(`max-age=${maxAge}`)
        }
        // opts的格式为[domain='',httpOnly='']
        //之前写setHeaderd的格式为domain='';httpOnly='' 所以使用opts.join(';')进行转化
        arr.push(`${key}=${value};${opts.join(';')}`)
        res.setHeader('Set-Cookie',arr)
    }
    req.getCookie = function(key){
        // console.log(req.headers.cookie) //name=xiaoming;age=100
        // console.log(typeof req.headers.cookie) //string
        // console.log(querystring.parse(req.headers.cookie)) //{name='xiaoming;age=100'}
        // console.log(typeof querystring.parse(req.headers.cookie))//object
        // console.log(querystring.parse(req.headers.cookie,';'))//{name='xiaoming',age='100'}
        let obj = querystring.parse(req.headers.cookie,';')
        return obj[key]
    }
    if(req.url === '/write'){
        res.setCookie('name','xiaoming',{httpOnly:true})
        res.setCookie('age','100',{httpOnly:true})
        res.end('write ok ~')
    }
    if(req.url === '/read'){
        // res.end(req.headers.cookie || 'empty')
        res.end(req.getCookie('name') || 'empty')
    }
}).listen(3000)