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
})

// console.log(app.middlewares) //[[Function],[Function],[Function]]
function dispatch(index){
    let route = app.middlewares[index]
    route(()=>{
        dispatch(index+1)
    })
}
dispatch(0)