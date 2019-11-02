//..........................keyof
//获取一个对象的所有键 keyof Peroson 就是"name" "age" 
//当写除了这两个以外的 就会报错
// interface Person{
//     name:string,
//     age:number
// }

// function getValue(p:Person,key:keyof Person):any{
//     return p[key]
// }

// let p = getValue({name:'wangcai',age:100},"name")
// // let p = getValue({name:'wangcai',age:100},"name1")  //会报错
// console.log(p) //wangcai

// type Demo = keyof Person //Demo:"name"|"age"
// let a:Demo = "name"
//....................................映射类型 in
// interface Person{
//     name:string,
//     age:number,
//     address:string
// }
// //循环定义属性 Demo的类型就是和Person的类型一致
// //所以下面定义的变量必须和Person中的要求一致
// type Demo = {[key in keyof Person]:Person[key]}
// let p:Demo = {
//     name:'wangcai',
//     age:100,
//     address:'beijing'
// }
// console.log(p)

export {}