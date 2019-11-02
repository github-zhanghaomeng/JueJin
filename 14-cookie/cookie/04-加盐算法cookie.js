const http = require('http')
const querystring = require('querystring')

const sign = (value)=>{
    return require('crypto').createHmac('sha256','abc').update(value).digest("base64").replace(/\+/g,'')
}
http.createServer((req,res)=>{
    let arr = []
    res.setCookie = function(key,value,options = {}){
        let opts = []
        if(options.signed){
            value = value+'.'+sign(value)
        }
        arr.push(`${key}=${value}`)
        res.setHeader('Set-Cookie',arr)
    }
    req.getCookie = function(key,options = {}){
        let obj = querystring.parse(req.headers.cookie)
        // console.log(obj[key]) //NaN.sdjfknk...
        if(options.signed){
            // console.log(obj[key]) //NaN.sdjfknk...
            if(obj[key]){
                // console.log(obj[key]) //NaN.sdjfknk...
                let [value,s] = obj[key].split('.')
                // console.log(value)  //NaN
                let newSign = sign(value)
                // console.log(newSign)
                // console.log(s)
                if(s === newSign){
                    return value
                }else{
                    return undefined
                }
            }
        }
        return obj[key]
    }
    if(req.url === '/visit'){
        res.setHeader('Content-type','text/plain;charset=utf8')
        let visit = req.getCookie('visit',{signed:true})
        if(visit){
            visit = visit-0+1
            res.setCookie('visit',visit+'',{signed:true})
        }else{
            visit = 1
            res.setCookie('visit','1',{signed:true})
        }
        res.end(`这是第${visit}次访问`)
    }
}).listen(3000)