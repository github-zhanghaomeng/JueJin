//.............................交叉类型
// 当是一个交叉类型时，需要把两个类型的属性方法都写上
// interface A{
//     name:string,
//     say():void
// }
// interface B{
//     age:number,
//     jump():void
// }
// let a:A&B = {
//     name:'wangcai',
//     say(){
//         console.log('say...')
//     },
//     age:100,
//     jump(){
//         console.log('jump...')
//     }

// }
// a.say()

//................................联合类型
//当为联合类型时 只需要实现一个类型中的方法和属性即可
// interface A{
//     name:string,
//     say():void
// }
// interface B{
//     age:number
// }
// let a:A|B = {
//     name:'wangcai',
//     say(){
//         console.log('say...')
//     }
// }

//...............................定义类型和变量的方式
// 可以先定义类型 然后定义变量时根据这个类型进行赋值
// 也可以先定义变量 这时候变量可以随意写属性 
// 然后把变量赋给一个类型时 当其他变量使用这个类型就有约束了(和上面那个变量定义的属性一致)
//.............................方式一
// interface People{
//     name:string,
//     age:number
// }
// let p:People = {
//     name:'wangcai',
//     age:100
// }

//............................方式二
//使用type定义一个类型 使用typeof获取变量的类型
// let p = {
//     name:'wangcai',
//     age:100,
//     address:'beijing'
// }
// type People = typeof p 
// let p1:People = { //这时候的p1就必须把三个属性都写上去
//     name:'xiaoqiang',
//     age:100,
//     address:'shanghai'
// }

//....................................................索引访问操作符
// interface Demo{
//     name:string,
//     age:number,
//     address:{number:number}
// }
// let a:Demo["address"] = {
//     number:20
// }
// let b:Demo["name"] = 'wangcai'
// let c:Demo["age"] = 20


export {}