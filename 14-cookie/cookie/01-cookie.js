const http = require('http')
const querystring = require('querystring')

http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('hello~')
    }
    if(req.url === '/write'){
        res.setHeader('Set-Cookie','name=wangcai')

        //在/write中不显示cookie 但是访问/read时会出现
        // res.setHeader('Set-Cookie','name=wangcai;path=/read')

        //在/write中显示cookie 但是访问/read时不会出现
        // res.setHeader('Set-Cookie','name=wangcai;path=/write')

        //Expries/max-age是设置cookie的消亡时间 在10s内访问/read时会出现 超过10s不会出现
        // res.setHeader('Set-Cookie','name=wangcai;max-age=10')

        //设置httpOnly这样在consol中不能通过document.cookie='name=xiaoqiang'改变值 但是可以在cookie那里双击进行修改
        // res.setHeader('Set-Cookie','name=wangcai;httpOnly=true')

        //设置多个cookie时可以使用数组的形式
        // res.setHeader('Set-Cookie',['name=wangcai','age=100'])
        res.end('write ok ~')
    }
    if(req.url === '/read'){
        // res.end(req.headers.cookie || 'empty')
        let obj = querystring.parse(req.headers.cookie,';')
        console.log(req.headers.cookie) //name=wangcai
        // console.log(obj)  //{name:'wangcai'}
        // console.log(obj.name) //wangcai
        res.end(obj.name || 'empty')
    }
}).listen(3000)