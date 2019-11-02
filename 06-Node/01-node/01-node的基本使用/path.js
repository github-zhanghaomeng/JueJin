let path = require('path')

// let r = path.basename("1.js")
// console.log(r)   //1.js

// let r1 = path.basename("1.js",'.js')
// console.log(r1)   //1

// let r2 = path.basename("1.js",'js')
// console.log(r2)  //1.

//得到一个文件的扩展名
// let r3 = path.extname("1.js")
// console.log(r3)  //.js

//得到目录名字  a/b/c/d
// let r4 = path.dirname('a/b/c/d/e')
// console.log(r4)

//把两个路径拼成一个路径
// let r5 = path.join(__dirname,'a/b/c')
// console.log(r5)  //g:\华杉0712\06-Node\01-node\a\b\c

//把两个路径拼成一个路径
// let r6 = path.resolve('a/b/c')
// console.log(r6)  //g:\华杉0712\06-Node\a\b\c

// let fs = require('fs')
// let path = require('path')
// let fileName = path.join(__dirname,"out.txt")
// let fileName1 = path.resolve("out.txt")
// console.log(fileName1)  //g:\华杉0712\06-Node\out.txt
// console.log(fileName)  //g:\华杉0712\06-Node\01-node\out.txt
// fs.readFile(fileName,(err,data)=>{
//     if(err) return 
//     console.log(data) //<Buffer 31 32 33 34 35 36>
//     console.log(data.toString())  //123456
// })