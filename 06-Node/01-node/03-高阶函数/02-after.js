const after = function(times,fn){
    return ()=>{
        if(--times === 0)
        fn()
    }
}

const f = after(3,()=>{
    console.log("3次之后才执行")
})
f()
f()
f()