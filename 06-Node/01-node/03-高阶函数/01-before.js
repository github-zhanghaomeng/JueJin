//高阶函数 1.这个函数的参数是函数  2.返回一个函数

// Function.prototype.before = function(beforeFn){
//     return ()=>{
//         beforeFn()
//         this()
//     }
// }

// const f = function(){
//     console.log('f...')
// }
// const s = f.before(()=>{
//     console.log('f之前...')
// })
// s()


Function.prototype.before = function(beforeFn){
    return (...args)=>{
        beforeFn()
        this(...args)
    }
}
const f = function(...args){
    console.log('f....',args)  //f.... [ 1, 2, 3 ]
}
const s = f.before(()=>{
    console.log('f之前...')
})
s(1,2,3)