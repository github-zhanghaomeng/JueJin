//..............................类实现接口
// 接口中只能定义方法(抽象方法) 由实现它的类实现方法
// 接口中放了很多很多的方法，目的就是为了让别的类去实现我的接口，也就是实现我的方法
// interface是一个关键字用来定义一个接口 
// 接口  不是类   也不能new   只能让别的类实现 

// interface Eat{
//     eat():void
// }
// interface Fly{
//     fly():void
// }
// abstract class Animal{
//     name:string
//     getName(){
//         return this.name
//     }
//     jump(){
//         console.log('jump...')
//     }
// }
// // 类只能继承一个抽象类 但是可以实现多个接口
// // 当实现接口时，必须把接口中的方法实现 要不然会出错
// class Bird extends Animal implements Eat,Fly{
//     constructor(name){
//         super()
//         this.name = name
//     }
//     eat(){
//         console.log('eat...')
//     }
//     fly(){
//         console.log('fly...')
//     }
// }

// let b = new Bird('bird')
// console.log(b.getName())
// b.eat()
// b.fly()
// b.jump()

//.........................................抽象类也可以模拟接口

// 如果抽象类中只有抽象方法 那么这个抽象类也可以理解为一个接口
// 抽象方法也不能实现 由继承他的类实现

abstract class Animal{
    abstract fly():void //抽象方法
    abstract eat():void
}

class Bird extends Animal{
    // 类继承了抽象类 需要把这个抽象类中的抽象方法实现 要不然会出错
    fly(){
        console.log('fly...')
    }
    eat(){
        console.log('eat...')
    }
}
let b = new Bird()
b.fly()
b.eat()

export {}