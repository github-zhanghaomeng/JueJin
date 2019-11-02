//..............................................typeof
// function getData(data:string|number|boolean){
//     if(typeof data === 'number'){
//         console.log(data+' is a number') 
//     }
//     else if(typeof data === 'string'){
//         console.log(data.length)
//     }
//     else{
//         console.log(data+' is a boolean类型')
//     }
// }
// getData(1)
// getData('hello')
// getData(true)
// console.log(typeof getData)  //function

// let Animal:number[]=[1,2,3]
// console.log(typeof Animal) //object 
// class Dog{}
// console.log(typeof Dog) //function
//typeof 不能正确的识别出数组 对象 类的类型

//.........................................................instanceof
// let Animal:number[]=[1,2,3]
// console.log(Animal instanceof Array) //true
// function getData(){}
// console.log(getData instanceof Function)  //true
// class Animal{}
// console.log(Animal instanceof Object) //true

//.......................
// class Animal{}
// class Dog extends Animal{}
// function getAnimal(a:Animal){ //规定a的类型是Animal 但是也可以是Dog 所以可以使用instanceof判断
//     if(a instanceof Dog){
//         console.log('Dog')
//     }else{
//         console.log('Animal')
//     }
// }
// getAnimal(new Dog()) //兼容
// getAnimal(new Animal()) //规定就是这个类型

//..................................................null
// function getData(data:string|null){
//     // if(data == null){
//     //     return ""   //方法二
//     // }
//     function g(){
//         console.log(data.trim())
//     }
//     data = data || ""  //方法一 当为null时会赋""也是字符串
//     g()
//     return data.charAt(0)  
//     //如果null为其他类型时 这里就会报错 因为只有为string时才有这个charAt方法
   
// }
// console.log(getData('hello')) //h
// console.log(getData(null)) //在这里会报错  说null没有charAt这个方法 使用上面方法可以不报错

//......................................................联合类型
// interface Primary{
//     style:string,
//     text:string
// }
// interface Danger{
//     style:string,
//     text:string
// }
// type Button = Primary | Danger
// function f(b:Button){  //b就是联合类型
//     if(b.style === 'primary'){
//         console.log('primary')
//     }
//     else{
//         console.log('danger')
//     }
// }
// let p = {style:'primary',text:'点击'}
// f(p)

//................................................in关键字
// in是用来普安段一个属性在不在一个类中或接口中
// interface A{
//     name:string,
//     age?:number
// }
// interface B{
//     fly:boolean
// }
// function f(c:A|B){
//     if("name" in c){
//         console.log('A')
//     }
//     if("fly" in c){
//         console.log('B')
//     }
// }
// let a = {name:'xiaoqiang'}
// f(a)

//..................................自定义的类型保护
export {}