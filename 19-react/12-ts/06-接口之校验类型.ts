//..............................接口校验对象 属性和方法的类型
// interface Animal {
//     name:string
//     age:number
//     eat():void
// }
// // 在对象名后面加:接口名 是用这个接口对这个对象里面的属性的类型的校验
// // 这个对象里面必须有name属性，并且它的值的类型为string
// // 还必须有age这个属性，属性值的类型为number
// let pig:Animal = {
//     name:'pig',
//     age:100,
//     eat(){
//         console.log('eat...')
//     }
// }
// pig.eat()


//.....................................接口中的可选参数
// interface Animal{
//     name?:string
//     age:number
//     eat():void
// }
// //当上面接口中的name为可选参数时，那么在对象中可以写也可以不写name
// let pig:Animal = {
//     // name:'wangcai',  //可写可不写
//     age:100,
//     eat(){
//         console.log('eat...')
//     }
// }
// pig.eat()

//....................................一个接口可以继承另一个接口
// interface Animal{
//     eat():void
// }
// interface Bird extends Animal{
//     fly():void
// }
// class Wc implements Bird{
//     fly(){
//         console.log('fly...')
//     }
//     //当这个类实现Bird接口时，还得实现它父接口中的方法
//     eat(){
//         console.log('eat...')
//     }
// }

//...........................................接口中规定某些属性必须有 其他任意
// interface Animal{
//     name:string
//     age:number
//     [propName:string]:any
// }
// //在用上面接口校验时，name和age是必须有 其他的属性名是string 属性值任意即可 
// // 也可以没有其他属性 只有name和age
// let pig:Animal = {
//     name:'pig',
//     age:100,
//     //下面可有可没有
//     fly:true
// }

//.............................................接口对函数进行校验
// 对函数校验时 只校验形参列表和函数返回值 所以在接口中只需要定义形参和返回值类型
// interface Mysum{
//     (a:number,b:number):number
//     //形参有两个 都是number 返回值也是number 
// }
// // 函数的形参小于等于 接口中定义的形参 即下面可以写0、1、2个 
// // 但是在调用时必须和接口的一致
// let sum:Mysum = function(num1:number,num2:number):number{
//     return num1+num2
// }
// console.log(sum(1,2))  //调用时

//...................................................缩写函数形参列表
// 函数的形参列表可以不用和接口中定义的形参列表一致
// 但是在函数调用时 必须和接口中定义的形参列表一致
// interface Mysum {
//     (a:number,b:number):number
// }
// let sum:Mysum = function():number{
//        arguments收集了所有的实参
//     // console.log(arguments) //[Arguments] { '0': 1, '1': 2 }
//     let args = arguments
//     // console.log(Array.prototype.slice.call(args)) //[ 1, 2 ]  
//     return Array.prototype.slice.call(args).reduce((prev,next)=>prev+next)
// }
// console.log(sum(1,2))

//.............................................缩写接口中的形参列表
// interface Mysum{
//     (...args:any[]):number
// }
// let sum:Mysum = function(...args:any[]):number{
//     console.log(args) //[1,2,3,4]
//     return args.reduce((prev,next)=>prev+next) //10
// }
// console.log(sum(1,2,3,4))

//.................................................可索引的接口(约束数组)
// 约束数组的两种方法
// let arr:number[] = [1,2,3]
// let name:Array<string> = ['z3','l4']
// 现在可以使用接口对数组进行约束
// interface ArrInterface {
//     [index:number]:number  //数组的下标是number类型 数组中的值也是number类型
// }
// // let arr:ArrInterface = ['z3']  //会报错
// let arr:ArrInterface = [1,2,3]

//........................................................可索引的接口(约束对象)
// interface ObjInterface{
//     [key:string]:any  //键为string类型 值为任意类型
// }
// let obj:ObjInterface = {
//     "id":1,
//     name:'wangcai'   //对于键可加引号 可不加引号
// }

//....................................................接口约束类
class Animal{
    constructor(name){}
}

// let a = new Animal('wc')
// console.log(a)  //Animal {}
interface MyAnimal{
    new (name:string):Animal
}

function createClass(clazz:MyAnimal,name:string){
    return new clazz(name)
}

export {}