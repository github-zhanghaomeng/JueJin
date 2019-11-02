
// function * read(){
//     yield 1
//     yield 2
// }

// let it = read()
// console.log(it.next())  //{value:1,done:false}
// console.log(it.next())  //{value:2,done:false}
// console.log(it.next())  //{value:undefind,done:true}


// function * read(){
//   let a = yield 1;
//   console.log(a)   //9
//   let b = yield 2
//   console.log(b)   //10
//   let c = yield 3
//   console.log(c)  //11
// }

// let it = read()
// console.log(it.next())  //{ value: 1, done: false }
// console.log(it.next(9))  //{ value: 2, done: false }
// console.log(it.next(10))  //{ value: 3, done: false }
// console.log(it.next(11))  //{ value: undefined, done: true }


// let fs = require('fs').promises
// function * read(){
//   yield fs.readFile('./name.txt','utf8')
// }
// let it = read();
// // console.log(it.next())    //{ value: Promise { <pending> }, done: false }
// it.next().value.then(data=>{
//   console.log(data)   //age.txt

// })


//读取文件
// let fs = require('fs').promises
// function * read(){
//  let content = yield fs.readFile('./name.txt','utf8')
// //  console.log(content)
//  let data = yield fs.readFile(content,'utf8')
// }

// let it = read()
// // console.log(it.next())
// it.next().value.then(data=>{
//   // console.log(data)   //age.txt
//   // console.log(it.next(data))
//   it.next(data).value.then(data=>{
//     console.log(data)   //6666
//   })
// })


// let fs = require('fs').promises
// function * read(){
//   let content = yield fs.readFile('./name.txt','utf8')
//   // console.log(content)
//   let data = yield fs.readFile(content,'utf8')
//   return data
// }

// let it = read()
// // console.log(it.next())
// it.next().value.then(data=>{
//   // console.log(data)
//   // it.next(data)
//   // console.log(it.next(data))
//   it.next(data).value.then(data=>{
//     // console.log(data)
//     let r = it.next(data)
//     console.log(r)
//   })
// })

//---------------------------------------------------
//generator+co

// let co = require('co')
// co(read()).then(data=>{
//   console.log(data)
// })


// const fs = require("fs").promises;
// function * read(){
//     let concent = yield fs.readFile("./name.txt","utf-8")
//     let age = yield fs.readFile(concent,"utf-8")
//     return age
// }
// let co = require("co")
// co(read()).then(data=>{
//     console.log(data)  // 666
// })

//-------------------------------------------------
//async await
// const fs = require('fs').promises
// async function  read(){
//   let content = await fs.readFile('./name.txt','utf8')
//   let data = await fs.readFile(content,'utf8')
//   return data

// }

// let it = read()
// it.then(data=>{
//   console.log(data)
 
// })

