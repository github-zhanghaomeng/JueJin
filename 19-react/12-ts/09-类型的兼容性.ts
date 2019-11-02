//....................................变量兼容性
type myNum = string | number
let r:myNum = 123    //兼容
let r1:myNum = 'name' //兼容

//.....................................接口兼容性
// 拥有多的属性的接口可以代替拥有属性少的接口(多的接口中必须包括接口少的属性)
interface bird{
    name:string
    fly:boolean
}
interface pig{
    name:string
}
function People(animal:pig){
    return animal.name
}
let p:pig = {name:'pig'}
console.log(People(p))
let b:bird = {name:'bird',fly:true}
console.log(People(b))  //兼容
//..........................................类兼容性
// 子类中包含父类的所有属性和方法 
// 当定义一个变量为父类的类型 则重新把子类的类型赋给这个变量 是兼容的
class Animal{
    eat(){
        console.log('eat...')
    }
}
class Dog extends Animal{
    jump(){
        console.log('jump...')
    }
}
let a:Animal;
a = new Dog() //兼容
//...........................................函数兼容性
//函数兼容性包括参数兼容和返回值兼容

//......................函数参数的兼容性
// 少给参数可以 多给参数不可以
// function f(a:number,b:number):number{
//     return a+b
// }
// type myFun = (a:number,b:number,c:number)=>number
// let g:myFun
// g = f //兼容

//.......................函数返回值的兼容性
// 返回值多了可以 少了不可以
// function f(){
//     return {name:"wangcai",age:1000,address:'beijing'}
// }
// type myFun = ()=>{name:string,age:number}
// let g:myFun
// g = f  //兼容

//........................形参类型的兼容性
// function f(){
//     console.log('f...')
// }
// type myFun = (a:number | string)=>void
// let g:myFun
// g = f  //兼容
//.................
// function f(a:number){
//     console.log(a)
// }
// type myFun = (a:number | string)=>void
// let g:myFun
// g = f  //兼容
//......................
function f(a:number | string | boolean){
    console.log('f...')
}
type myFun = (a:number | string)=>void
let g:myFun
g = f  //兼容
//..............................................泛型兼容性
// 如果是一个空接口，彼此赋值是兼容 不是空接口的话 就不兼容了
interface Demo<T>{
}
let x:Demo<string>;
let y:Demo<number>;
x = y; // 兼容了
export {}
//.................................................枚举兼容性
//枚举和number兼容
//...................
// enum Colors{
//     RED,
//     GREEN,
//     BLUE
// }
// let c:Colors
// c=123 //兼容
//...................

enum Colors{
    RED,
    GREEN,
    BLUE
}
let c:number
c = Colors.BLUE //兼容