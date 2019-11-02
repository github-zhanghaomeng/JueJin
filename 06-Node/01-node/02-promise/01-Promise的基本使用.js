
//默认是等待状态
// let  p = new Promise(()=>{

// })
// console.log(p)  //Promise { <pending> }


// let p = new Promise((resolve,reject)=>{
//     resolve("包")           //Promise { '包' }
//     // reject("没钱了")   //Promise { <rejected> '没钱了' }
// })
// console.log(p)


// let p = new Promise((resolve,reject)=>{
//     resolve("包")           
//     reject("没钱了")   
// })
// p.then(data=>{
//     console.log('成功了...')
// },err=>{
//     console.log('失败了...')
// })

// let p = new Promise((resolve,reject)=>{
//     resolve("包")           
//     reject("没钱了")   
// })
// p.then(data=>{
//     console.log(data)  //包
// },err=>{
//     console.log(err)  //没钱了
// })


// let p = new Promise((resolve,reject)=>{
//     throw new Error('没钱了')
// })
// p.then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })

//promise本身是同步的
// console.log('start')
// let p = new Promise((resolve,reject)=>{
//     console.log('promise')
// })

// console.log('end')   //start promise end


