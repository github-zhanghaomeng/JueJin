
const fs = require("fs");

// 1.读文件
/*
let p = new Promise((resolve, reject) => {
    fs.readFile("out.txt", "utf8", (err, data) => {
        if (data) {
            resolve(data);
        }
        else {
            reject(err);
        }
    })
})
p.then(res => 
    console.log(res);
, err => 
    console.log(err);
)
*/

// function file(filename){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(filename,"utf8",(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     })

// }
// // file("out.txt").then(err=>console.log(err),res=>console.log(res))
// file("out.txt").then(err=>console.log(err)).catch(res=>console.log(res))




