// let p = new Promise((resolve,reject)=>{
//     resolve('hello')
// })

// let p1 = p.then(data=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('hello')
//         },1000)
//     })
// })

// p1.then(data=>{
//     console.log(data)  //hello
// })

let p = new Promise((resolve,reject)=>{
        resolve('hello')
    })
    
    let p1 = p.then(data=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        resolve('6666')
                    },1000)
                }))
            },1000)
        })
    })
    
    //data是promise还是6666
    p1.then(data=>{
        console.log(data)  //6666
    })