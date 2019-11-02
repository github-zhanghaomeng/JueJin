let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('包')
    },3000)
})
p.then(data=>{
    console.log(data)
})