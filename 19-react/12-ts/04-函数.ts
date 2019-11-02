//在ts中 也可以写js
// function say(name,age){
//     return name+'今年'+age+'岁'
// }
// console.log(say('wangcai',100))

//............................................ts基本写法
//ts和js的区别就是 ts需要指定形参的类型和函数返回值的类型(ts可以识别返回值类型)
// function say(name:string,age:number):string{
//     return name+'今年'+age+'岁'
// }
// console.log(say('wangcai',100))

//函数表达式
// let say = function(name:string,age:number):string{
//     return name+'今年'+age+'岁'
// }
// console.log(say('wangcai',100))

//............................................可选参数
// ?:后面的形参可以传也可以不传 不传会默认为undefined
// function say(age:number,name?:string):string{
//     return name+'今年'+age+'岁'
// }
// console.log(say(100))

//..............................................默认参数
// 默认参数在前面
// function say(name:string='wangcai',age:number):void{
//     console.log(name+'今年'+age+'岁')
// }
// say(100) //会报错
// say(undefined,100) //不会报错 wangcai今年100岁
// say('xiaoqiang',200) //也可以在调用时 进行传参 这是会根据传的为主

//默认参数在后面
// function say(name:string,age:number=100):void{
//     console.log(name+'今年'+age+'岁')
// }
// say('wangcai') //不会报错 wangcai今年100岁
// say('xiaoqiang',200) //也可以在调用时 进行传参 这是会根据传的为主

//..............................................剩余参数

// 因为在调用这个函数时 不知道传入几个实参时  可以使用...
// function num(...numbers):void{
//     console.log(numbers)  //[1,2,3,4,5]
// }
// num(1,2,3,4,5)

//...............................................java中的函数重载
//函数重载 就是函数名一样 形参不一样(形参个数、形参类型)

//形参个数不一样
// function say(name:string,age:number){}
// function say(name:string){}
//形参类型不一样
// function say(name:string){}
// function say(name:number){}

//..................................................ts中的重载
// 方法是为同一个函数提供多个函数类型定义来进行函数重载。
//  编译器会根据这个列表去处理函数的调用。 

// let obj = {name:'wangcai',age:100}
// function arr(val:string):void
// function arr(val:number):void
// function arr(val:any){
//     if(typeof val === 'string'){
//         obj.name = val
//     }else if(typeof val === 'number'){
//         obj.age = val
//     }
    
// }
// arr('xiaoqiang') 
// console.log(obj) //{ name: 'xiaoqiang', age: 100 }
// arr(200)
// console.log(obj) //{ name: 'xiaoqiang', age: 200 }

//......................................函数类型

// let mySay:(name:string,age:number)=>string = function(name,age){
//     return name+'今年'+age+'岁'
// }
// console.log(mySay('wangcai',100))

type mySay = (name:string,age:number) => string
let say:mySay = function(name,age){
    return name+'今年'+age+'岁'
}
console.log(say('wangcai',100))





export {}