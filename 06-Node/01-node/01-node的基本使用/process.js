//当前文件所在的目录
//console.log(process.cwd()) //g:\华杉0712\06-Node

//当前进程所处的环境
// console.log(process.env)

//微任务
// process.nextTick(()=>{
//     console.log('nextTick')
// })


process.nextTick(()=>{
    console.log('nextTick')
})
//微任务
Promise.resolve().then(()=>{
    console.log('then')
}) //nextTick then