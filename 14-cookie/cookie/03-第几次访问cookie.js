const http = require('http')
const querystring = require('querystring')

http.createServer((req,res)=>{
    let arr = []   
    res.setCookie = function(key,value,options={}){
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
            opts.push(`max-age=${options.maxAge}`)
        }    
        arr.push(`${key}=${value};${opts.join(';')}`)
        res.setHeader('Set-Cookie',arr)
    }
    req.getCookie = function(key){
        // console.log(querystring.parse(req.headers.cookie))
        let obj = querystring.parse(req.headers.cookie)
        return obj[key]
        // console.log(typeof obj[key]) //string
    }
    if(req.url === '/visit'){
        res.setHeader("Content-type","text/plain; charset=utf8")
        let visit = req.getCookie('visit')
        if(visit){
            // console.log(visit)  // 1
            // console.log(typeof visit) // string
            // console.log(visit-0) // 1
            // console.log(typeof visit-0) // NaN
            // console.log(visit-0+1+"") // "2"
            // console.log(typeof visit-0+1+"") // NaN
            visit = visit-0+1
            res.setCookie('visit',visit+'')
            // console.log(visit)
        }else{
            visit = 1
            res.setCookie('visit','1')
        }
        res.end(`这是第${visit}次访问`)
    }
}).listen(3000)