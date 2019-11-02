

// Promise.resolve('包包').then(data=>{
//     console.log(data)  //包包
// })

// let p = new Promise((resolve,reject)=>{
//     resolve('包包')
// })
// p.then(data=>{
//     console.log(data)
// })    //等价于上面的写法

//catch不能用then代替
// Promise.reject('没钱').catch(err=>{
//     console.log(err)  //没钱
// })

//finally()
// Promise.resolve('包').then(data=>{
//     console.log(data)
// }).finally(()=>{
//     console.log('开心')
// })

// Promise.reject('没钱').catch(data=>{
//     console.log(data)
// }).finally(()=>{
//     console.log('不开心')
// })

//all()
// let fs = require('fs').promises
// Promise.all([fs.readFile('./name.txt','utf8'),fs.readFile('./age.txt','utf8')]).then(data=>{
//     console.log(data)   //[ 'age.txt', '6666' ]
// })


// let fs = require('fs').promises
// Promise.race([fs.readFile('./age.txt','utf8'),fs.readFile('./name.txt','utf8')]).then(data=>{
//     console.log(data)
// })