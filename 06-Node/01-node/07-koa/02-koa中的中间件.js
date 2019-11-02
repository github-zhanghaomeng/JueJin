const Koa = require('koa')
const app = new Koa()

// 只会输出1 2 加上next就可以输出下面的1 2 3 4 5 6
// 在koa中，在一个中间件中调用next()  表示让下一个中间件执行
// 在koa中没有路由，默认情况它会匹配/
// 在koa中，中间件也是从上向下执行的
// app.use((ctx,next)=>{
//     console.log(1)
//     console.log(2)
//     next()
// })

// app.use((ctx,next)=>{
//     console.log(3)
//     console.log(4)
//     next()
// })

// app.use((ctx,next)=>{
//     console.log(5)
//     console.log(6)
// })


//会输出1 3 5 6 4 2
app.use((ctx,next)=>{
        console.log(1)
        next()
        console.log(2)
    }) 
    app.use((ctx,next)=>{
        console.log(3)
        next()
        console.log(4)
    })
    app.use((ctx,next)=>{
        console.log(5)
        console.log(6)
    })

//把上面的转换为
app.use((ctx,next)=>{
    console.log(1)
    // next()
    ((ctx,next)=>{
        console.log(3)
        // next()
        ((ctx,next)=>{
            console.log(5)
            next()
            console.log(6)
        })()
        console.log(4)
    })()
    console.log(2)
})


app.listen(3000)