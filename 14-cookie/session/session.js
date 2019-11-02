const http = require('http')
const querystring = require('querystring')

const uuid = require('uuid')
const cardName = 'tian'
// 先把session存储到内存中    后面我们会把session数据存储到数据库
let session = {};

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
        let obj = querystring.parse(req.headers.cookie,';')
        return obj[key]
    }
    if(req.url === '/eat'){
        let id = req.getCookie(cardName)
        // console.log(id)
        if(id){
            //有卡
            // console.log(session[id])
            session[id].mny -= 100
            res.end("current money is $"+session[id].mny)

        }else{
            let cardId = uuid.v4()
            // console.log(cardId)//a553a2da-c219-43e9-a4bf-7826584186dd
            session[cardId] = {mny:500}
            console.log(session)
            res.setCookie(cardName,cardId)
            res.end("current money is $"+session[cardId].mny)

        }
        res.end('eat...')
    }
}).listen(3000)