//基本使用
// class Person{
//     name:string;
// }
// let p = new Person()
// console.log(p) //Person{}

//.......................................构造器 
// 通过new一个类 会自动调用constructor
// class Person{
//     name:string;
//     constructor(name){
         //this表示当前类的对象,是不固定的
//         this.name = name
//     }
// }
// let p = new Person('wangcai')
// console.log(p.name) //wangcai
// let p1 = new Person('xiaoqiang')
// console.log(p1.name)
//...........................................权限符

//public 会在所有的类内类外 访问到
// class Animal{
//    public name:string;
//     constructor(name){
//         this.name = name
//     }
// }
// let p = new Animal('pig')
// console.log(p.name)

//private 只能在自己类内访问到
// class Animal{
     //构造器
//     private _name:string;
//      constructor(name){
//          this._name = name
//      }
      //访问器
//      public get name():string{
//          return this._name
//      }
      //修改器
//      public set name(newName){
//          this._name = newName
//      }
//  }
 //  let p = new Animal('pig')
 //  console.log(p.name) //会报错 这是在类外 访问不到
// let p = new Animal('Pig')
// console.log(p.name)
// p.name = 'Dog'
// console.log(p.name)

//protected 在自己和子类的内部可以访问到
// class Animal{
//     //构造器
//     protected _name:string;
//      constructor(name){
//          this._name = name
//      }
//  }
// class Pig extends Animal{
//     public get name(){
//         return this._name
//     }
// }
// let p = new Pig('wangcai')
// console.log(p._name)  //会报错
// let p = new Pig('wangcai')
// console.log(p.name) //通过访问器访问 不会出错
// let a = new Animal('a')
// console.log(a._name)  //会报错

//........................................................继承
// 通过exends关键字实现
// class Animal {
//     name:string = 'wangcai'
//     age:number = 100
// }
// class Pig extends Animal{
//     //Pig中没有name 它会去父类中去找
//     getName(){
//         return this.name
//     }
//     getAge(){
//         return this.age
//     }
    
// }
// let p = new Pig()
// console.log(p.getAge())
// console.log(p.getName())

//..........................................继承使用super()
// class Animal{
//     name:string
//     constructor(name){
//         this.name = name
//     }
// }
// class Pig extends Animal{
//     age:number
//     constructor(name,age){
//         super(name)
//         // super()
//         this.age = age
        
//     }
// }
// let p = new Pig('wangcai',100)
// console.log(p.name)
// console.log(p.age)

//.............................................抽象类
// abstract class Person{
//     name:string
//     constructor(name){
//         this.name = name
//     }
// }
// let p = new Person('xiaoqiang ') //抽象类不能被new

// class A extends Person{
//     constructor(name){
//         super(name)
//     }
// }
// let a = new A('xiaoqiang')
// console.log(a.name)

//........................................................静态属性
// 使用static关键字 它会使用类名.xxx访问 不带static是实例属性 会使用对象.xxx访问
// class Person{
//     name:string;
//     static age:number=200
//     // constructor(name,age){
//     constructor(name){
//         this.name = name;
//         // this.age = age //不可以使用this.xxx访问
//     }
// }
// let p = new Person('xiaoqiag')
// console.log(p.name)
// // console.log(p.age) //会报错
// console.log(Person.age)

//..................................................静态方法
// 使用static关键字 在函数前面 使用类名.方法名
class Person{
   static eat(){
        console.log('eat...')
    }
}
Person.eat()
export {}