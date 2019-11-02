// 流 流水 可读流 可写流 
// fs.createReadStream(path[, options])
// fs.createWriteStream(path[, options])

// const fs = require('fs')
// let rs = fs.createReadStream('./number.txt',{
//     flags:"r",
//     highWaterMark:4,
//     encoding:null,
//     autoClose:true,
//     start:0,
//     end:6
// })
// let arr = []
// rs.on('data',(chunk)=>{
//     arr.push(chunk)
// })
// rs.on('end',()=>{
//     console.log(arr)  //[ <Buffer 30 31 32 33>, <Buffer 34 35 36> ]
//     console.log(Buffer.concat(arr))   //<Buffer 30 31 32 33 34 35 36>
//     console.log(Buffer.concat(arr).toString())  //0123456

// })


const fs = require('fs')
let rs = fs.createReadStream('./number.txt',{
    flags:'r',
    encoding:null,
    highWaterMark:4,
    autoClose:true,
    start:0,
    end:6
})

let arr = []
rs.on('data',(chunk)=>{
    arr.push(chunk)
    rs.pause()   //暂停
})
rs.on('end',()=>{
    console.log(arr)   //5秒之后出现[ <Buffer 30 31 32 33>, <Buffer 34 35 36> ]
})

setTimeout(()=>{
    rs.resume()  //恢复
},5000)