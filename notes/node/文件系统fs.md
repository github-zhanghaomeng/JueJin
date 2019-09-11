# fs
用来与文件进行打交道
使用
    
    import fs from 'fs'
### 读文件
异步读取文件内容

    fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err){console.log(err}
        else{console.log(data}
    })
同步读取文件内容

    let data = fs.readFileSync(filePath)
    console.log(data)
### 读目录
异步读取目录中的文件名 并以数组方式返回

    fs.readdir(filePath,'utf-8',(err,data)=>{
        if(err){console.log(err)}
        else{console.log(data)} 
        //data是数组 里面包括该目录下的文件名
    })
### 可读流

    fs.createReadStream(filePath).pipe(res)
### stat类

    import {stat} from 'fs'
    let statObj = await stat(filePath)
#### isDirectory() 
判断是否是目录

    if(statObj.isDirectory())
#### isFile()
判断是否是文件

    if(statObj.ifFile())
#### ctime
返回上次修改文件的时间戳

    stat.ctime
    stat.ctime.toGMTString() //返回和Etag时间的格式一样