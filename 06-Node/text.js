// let fs = require('fs')
// fs.readFile('./name.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         fs.readFile(data,'utf8',(err,data)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 console.log(data)
//             }
//         })
//     }
// })

// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// readFile('./name.txt','utf8').then(data=>{
//     // console.log(data)
//     readFile(data,'utf8').then(data=>{
//         console.log(data)
//     })
// })

// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,(err,data)=>{
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }

// readFile('./name.txt','utf8').then(data=>{
//     // console.log(data)
//     return readFile(data,'utf8')
// }).then(data=>{
//     console.log(data)
// })

// let fs = require('fs').promises
// function * read(){
//     let content = yield fs.readFile('./name.txt','utf8')
// }

// let it = read()
// // console.log(it.next())
// it.next().value.then(data=>{
//     console.log(data)
// })
// ---------------------------------------------
// const fs = require('fs')
// let content = {}
// let index = 0
// fs.readFile('./name.txt','utf8',(err,data)=>{
//     content['name']=data
//     index++
//     out()
// })
// fs.readFile('./age.txt','utf8',(err,data)=>{
//     content['age']=data
//     index++
//     out()
// })
// function out(){
//     if(index == 2){
//         console.log(content)
//     }
// }


// const fs = require('fs')
// let content = {}
// fs.readFile('./name.txt','utf8',(err,data)=>{
//     content['name'] = data
//     e.emit()
// })
// fs.readFile('./age.txt','utf8',(err,data)=>{
//     content['age'] = data
//     e.emit()
// })
// let e = {
//     arr:[],
//     on(fn){
//         this.arr.push(fn)
//     },
//     emit(){
//         this.arr.forEach(fn=>fn())
//     }
// }

// e.on(()=>{
//     if(Object.keys(content).length == 2){
//         console.log(content)
//     }
// })

// let e = {
//     arr:[],
//     on(fn){
//         this.arr.push(fn)
//     },
//     emit(){
//         this.arr.forEach(fn=>fn())
//     }
// }

// e.on(()=>{
//     console.log('哈哈1')
// })
// e.on(()=>{
//     console.log('哈哈2')
// })
// e.on(()=>{
//     console.log('哈哈3')
// })
// e.emit()


let a = [5,4,3,2,1]
let preIndex;
let current
for(let i=1;i<=a.length-1;i++){
    preIndex = i-1
    current = a[i]
    while(preIndex>=0 && current<a[preIndex]){
        a[preIndex+1] = a[preIndex]
        preIndex--
    }
    a[preIndex+1] = current
    console.log(a)
}