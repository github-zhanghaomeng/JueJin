// const fs = require('fs')
// fs.readFile('./name.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })
// fs.readFile('./age.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


// const fs = require('fs')
// let content = {}
// fs.readFile('./name.txt','utf8',(err,data)=>{
//     if(err) console.log(err)
//     content['name'] = data
// })
// fs.readFile('./age.txt','utf8',(err,data)=>{
//     if(err) console.log(err)
//     content['age'] = data
// })
// console.log(content)   //{}


// const fs = require('fs')
// let content = {}
// fs.readFile('./name.txt','utf8',(err,data)=>{
//     if(err) console.log(err)
//     content['name'] = data
//     fs.readFile('./age.txt','utf8',(err,data)=>{
//         if(err) console.log(err)
//         content['age'] = data
//         console.log(content)   //{ name: 'wangcai ', age: '666' }
//     })
// })


// const fs = require('fs')
// let content = {}
// let index = 0
// fs.readFile('./name.txt','utf8',(err,data)=>{
//     if(err) console.log(err)
//     content['name'] = data
//     index++
//     out()
// })
// fs.readFile('./age.txt','utf8',(err,data)=>{
//     if(err) console.log(err)
//     content['age'] = data
//     index++
//     out()
// })

// function out(){
//     if(index == 2)
//     console.log(content)   //{ name: 'wangcai ', age: '666' }
// }

const fs = require('fs')
let content = {}
fs.readFile('./name.txt','utf8',(err,data)=>{
    if(err) console.log(err)
    content['name'] = data
    newAfter()
})
fs.readFile('./age.txt','utf8',(err,data)=>{
    if(err) console.log(err)
    content['age'] = data
    newAfter()
})

let after = function(times,fn){
    return ()=>{
        if(--times == 0)
        fn()
    }
}

let newAfter = after(2,()=>{
    console.log(content)
})