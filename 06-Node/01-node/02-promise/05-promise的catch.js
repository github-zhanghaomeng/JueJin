//当第一个then中有err时，会调用then里面的err
// let p = new Promise((resolve,reject)=>{
//     reject('hello')
// })

// p.then(data=>{
//     console.log(data)
// },err=>{
//     console.log("err:",err)
// }).catch(err=>{
//     console.log("catch:",err)
// })

//当then中没有err时，会调用catch中的err
let p = new Promise((resolve,reject)=>{
    reject('hello')
})

p.then(data=>{
    console.log(data)
}).catch(err=>{
    console.log("catch:",err)
})