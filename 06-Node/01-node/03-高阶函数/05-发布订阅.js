
// let fs = require('fs')
// let content = {}
// fs.readFile('./name.txt','utf8',(err,data)=>{
//     if(err) console.log(err)
//     content['name'] = data
//     e.emit()
// })
// fs.readFile('./age.txt','utf8',(err,data)=>{
//     if(err) console.log(err)
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
//     if(Object.keys(content).length == 2)
//     console.log(content)
// })


let e = {
    arr:[],
    on(fn){
       this.arr.push(fn)
    },
    emit(){
        this.arr.forEach(fn=>fn())
    }
}
e.on(()=>{
    console.log("哈哈1")
})
e.on(()=>{
    console.log("哈哈2")
})
e.on(()=>{
    console.log("哈哈3")
})
e.emit()
