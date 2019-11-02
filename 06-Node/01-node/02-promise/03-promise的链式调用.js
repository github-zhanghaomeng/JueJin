// let fs = require('fs')
// let path = require('path')
// //vscode的bug  读文件必须使用绝对路径
// let filename = path.resolve(__dirname,'./name.txt')
// fs.readFile(filename,'utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         // console.log(data)  //age.txt
//         fs.readFile(path.resolve(__dirname,data),'utf8',(err,data)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log(data)  //6666
//             }
//         })
//     }
// })

//当为name1时  会调用then方法的第二个参数   
// let fs = require('fs')
// let path = require('path')
// let filename = path.resolve(__dirname,'./name1.txt')

// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }

// readFile(filename,'utf8').then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)   // no such file or directory
// }) 

//封装一个函数   也会造成回调地狱  使用promise
// let fs = require('fs')
// let path = require('path')
// let filename = path.resolve(__dirname,'./name1.txt')

// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }

// readFile(filename,'utf8').then(data=>{
//     // console.log(data)
//     readFile(path.resolve(__dirname,data),'utf8').then(data=>{
//         console.log(data)
//     },err=>{
//         console.log(err)
//     })
// },err=>{
//     console.log(err)
// })

//第一个then return一个值时  第二个then的第一个参数会接收
// let p = new Promise((resolve,reject)=>{
//     reject('不开心')
// })

// p.then(err=>{
//     return err
// }).then(data=>{
//     console.log("1:",data)    
// },err=>{
//     console.log("2:",err)
// })

// let fs = require('fs')
// let path = require('path')
// let filename = path.resolve(__dirname,'./name.txt')

// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }

// readFile(filename,'utf8').then(data=>{
//     // console.log(data)  //age.txt
//     // return data
//     return readFile(path.resolve(__dirname,data),'utf8')
// },err=>{
//     console.log(err)
// }).then(data=>{
//     console.log(data)   //age.txt
// })


// let p = new Promise((resolve,reject)=>{
//     resolve('包包')
// })

// p.then(data=>{
//     console.log(data)  //包包
// },err=>{
//     console.log(err)
// }).then(data=>{
//     return new Promise((resolve,reject)=>{
//         reject('不开心')
//     })
// }).then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)  //不开心
// })


//空
// let p = new Promise((resolve,reject)=>{
//     resolve('hello')
// })
// let p1 = p.then((resolve,reject)=>{
//     return p1
// }).then(data=>{
//     console.log(data)
// })

//会造成死循环
// let p = new Promise((resolve,reject)=>{
//     resolve('hello')
// })

// let p1 = p.then((resolve,reject)=>{
//     return p1
// })
// p1.then(data=>{
//     console.log(data)
// })

// let p = new Promise((resolve,reject)=>{
//     resolve('hello')
// })
// let p1 = p.then(data=>{
//     return 123
// })
// p1.then(data=>{
//     console.log(data)   //123
// })


// let p = new Promise((resolve,reject)=>{
//     resolve('world')
// })

// let p1 = p.then(data=>{
//     return new Error("不ok")
// },err=>{
//     // return err
// })
// p1.then(data=>{
//     console.log("1:",data)  //1:Error:不ok
// },err=>{
//     console.log("2:",err)
// })

let p = new Promise((resolve,reject)=>{
    resolve("hello")
})
let p1 = p.then(data=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("不OK")
        },1000)
    })
})
p1.then(data=>{
    console.log("1:",data)  
},err=>{
    console.log("2:",err)  //2:不OK
})
