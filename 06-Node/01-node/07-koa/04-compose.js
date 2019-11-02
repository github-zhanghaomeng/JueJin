let app = {
    middlewares:[],
    use(fn){
        this.middlewares.push(fn)
    }
}

app.use(next=>{
    console.log(1)
    console.log(2)
    next()
})
app.use(next=>{
    console.log(3)
    console.log(4)
    next()
})
app.use(next=>{
    console.log(5)
    console.log(6)
    // next()
})

function compose(middlewares){
   return middlewares.reduceRight(function(a,b){
        return function(){
            b(a)   //1 2 保留最后的 return只能返回一个function
        }
        
        // console.log(b) //[Function] [Function]
        // b() //3 4  1 2
    })

}

//上面的简洁方式
// function compose(middlewares){
//     return middlewares.reduceRight((a,b)=>()=>b(a))
// }
// let t = compose(app.middlewares)
// // console.log(t)
// t()