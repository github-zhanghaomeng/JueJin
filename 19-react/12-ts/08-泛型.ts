// 所谓的泛型就是指没有固定的类型，是什么类型还不确定
// T是一个名字 使用什么名字都可以

// .................................................泛型类
// 在一个类中使用泛型 那么这个类就是泛型类
// class myClass<T>{
//     public list:T[] = []
//     add(ele:T){
//         this.list.push(ele)
//     }
// }
// //当指定为number时 只能放number类型的数据
// let c = new myClass<number>()  //<number>可写可不写 可以识别出是number类型的
// // c.add('1') //会报错 
// c.add(1)
// c.add(2)
// c.add(3)
// console.log(c)  //myClass { list: [ 1, 2, 3 ] }
// //当指定为string时 只能放string类型的数据
// let c1 = new myClass<string>()
// // c1.add(1)  //会报错
// c1.add('1')
// c1.add('2')
// c1.add('3') 
// console.log(c1)  //myClass { list: [ '1', '2', '3' ] }

//............................................泛型接口
// 现在a和b的类型还不确定  add是函数   
// add:CalInterface 接口约束函数
// 约束函数的形参和返回值
// interface calInterface<T>{
//     (a:T,b:T):T
// }
// // 泛型接口当在定义为是泛型的 使用时必须加<number> 函数和类不强制
// let add:calInterface<number> = function(num1,num2){ 
//     return num1+num2
// }
// console.log(add(1,2)) //3
// // console.log(add('hello','world')) //会报错

// let contact:calInterface<string> = function(a,b){
//     return a+b
// }
// console.log(contact('hello','world')) //helloworld

//.....................................多个泛型
// 不使用中间变量 交换两个数的位置
// 调用泛型函数时 函数名后面<>可加可不加
// function swap<A,B>(tuple:[A,B]):[B,A]{

//     return [tuple[1],tuple[0]]
// }
// console.log(swap<number,string>([1,'a']))

//.........................................默认泛型
// 就是给泛型默认一个类型
// function myArr<T=number>(length:number,value:T):T[]{
//     let arr:T[] = []
//     for(let i=0;i<length;i++){
//         arr[i] = value
//     }
//     return arr
// }
// let s = myArr<string>(3,'3') //指定了 就使用指定的string
// console.log(s)  //[ '3', '3', '3' ]
// let n = myArr(3,3) //没有指定的时候 就使用默认的number 
// console.log(n)  //[ 3, 3, 3 ]

//...................................泛型继承构造器
//T继承了String 说明T必须是String的子类 
// function myFunction<T extends String>(...args:T[]){
//    console.log(...args) //1 2 3
//    console.log(args) //   [ '1', '2', '3' ]
// }

// let m = myFunction('1','2','3')
// // let m1 =myFunction(1,2,3) //会报错

//............................................泛型别名
// 通过type来定义
type Cart<T> = {list:T[]} | T[]
let cart1:Cart<number> = {list:[1,2,3]}
let cart2:Cart<string> = ['a','b','c']
console.log(cart1) //{ list: [ 1, 2, 3 ] }
console.log(cart2) //[ 'a', 'b', 'c' ]



export {}