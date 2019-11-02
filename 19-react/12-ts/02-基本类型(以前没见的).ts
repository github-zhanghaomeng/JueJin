//元组 一个容器 里面可以放多种类型
// let xq:[string,number] = ['xiaoqiang',100]
// console.log(xq[0])  //xiaoqiang
// let xq1:[string,number] = [100,'xiaoqiang'] //会报错

//枚举 需要先设置enum 然后可以把它当成一个类型使用 如number
// enum Day{
//     today,
//     yesterday=10,
//     tomorrow
// }
// let day:Day = Day.today
// console.log(day)  //会输出一个序号 默认是从0开始
//当指定序号时  使用的是指定的序号
// let day:Day = Day.yesterday
// console.log(day)  //10
// console.log(Day[10]) //yesterday

//any 如果定义了一个any类型 M那么可以给这个变量赋任何类型的值
// let name:any = true;
// name='wangcai'
// name=123
// console.log(name)

// let age:any = 4
// console.log(age.toFixed(2))  //4.00

//void
// function getUser():void{
//     console.log('hello')
// }
// getUser()

// function getUser(firstName:string,lastName:string):string{
//     return firstName+lastName
// }
// console.log(getUser('xiao','qiang'))

//null null是一个数据类型，这种数据类型对应的值还是null
// let age:null = null
// console.log(age)

// let age:number = null
// console.log(age) //null null是任何类型的子类型 可以赋给任何类型 包括undefined

//undefined undefined是一种数据类型，这个数据类型对应的值还是undefined
// let age:undefined = undefined
// console.log(age) //undefined

// let age:null = undefined
// console.log(age)  //undefined undefined是任何类型的子类型 可以赋给任何类型


//断言 就是告诉编译器 自己知道是什么类型的

// let name:any = 'wangcai'
// console.log(name.length) //为什么可以计算出length 因为编译器会自动识别出类型是string string有计算length的方法

//下面是手动的告诉编译器是什么类型的
//第一种 使用<>告诉编译器
// let name:any = 'wangcai'
// let strLength = (<string>name).length
// console.log(strLength)

//第二种 使用as 告诉编译器
// let name:any = 'wangcai'
// let strLength = (name as string).length
// console.log(strLength)

// |符号
let name : string|number|null;
name = 'wangcai'
console.log(name)  //wangcai
name = 110
console.log(name) //110
// name=[1,2,3] //会报错

export {}
