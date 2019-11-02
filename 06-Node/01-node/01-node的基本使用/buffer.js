//开辟一个空间，并且把10放到空间中
// let b = Buffer.from("10")
// console.log(b)  //<Buffer 31 30>
// console.log(b.toString())  //10

// let b1 = Buffer.from([10])
// console.log(b1)  //<Buffer 0a>

// let b2 = Buffer.from('你好')
// console.log(b2)  //<Buffer e4 bd a0 e5 a5 bd>
// console.log(b2.toString())  //你好


//开辟一块大小为(代表大小)的没有东西的空间
// let b = Buffer.alloc(10)
// console.log(b)  //<Buffer 00 00 00 00 00 00 00 00 00 00>


//开辟一块大小为(代表大小)的有以前数据的空间
// let b = Buffer.allocUnsafe(10)
// console.log(b)   //<Buffer 00 00 00 00 00 00 00 00 a0 d2>

//转换为base64的过程
// let b =Buffer.from('中')
// console.log(b.toString('base64'))  //5Lit
// console.log(b)  //<Buffer e4 b8 ad>

// console.log((0xe4).toString(2))  //11100100
// console.log((0xb8).toString(2))  //10111000
// console.log((0xad).toString(2))  //10101101

// 111001 001011 100010 101101
//00111001 00001011 00100010 00101101

// console.log(parseInt("00111001",2)) //57
// console.log(parseInt("00001011",2)) //11
// console.log(parseInt("00100010",2))  //34
// console.log(parseInt("00101101",2))  //45

// let str = 'ABCDEFGHIGKLMNOPQRSTUVWSYZ';
// str += str.toLowerCase();
// str += "0123456789+/"
// console.log(str[57]+str[11]+str[34]+str[45])  //5Lit

//操作buffer的api  copy

// let b1 = Buffer.from('中')
// let b2 = Buffer.from('国')
// let c = Buffer.alloc(6)
// b1.copy(c,0,0,3) //第一个0代表从c的0开始放数据,第二个0代表从b1的0开始，到b1的2，不包括3
// b2.copy(c,3,0,3)
// console.log(c)  //<Buffer e4 b8 ad e5 9b bd>


//concat

let b1 = Buffer.from('中')
let b2 = Buffer.from('国')
let c = Buffer.concat([b1,b2])
console.log(c)  //<Buffer e4 b8 ad e5 9b bd>
console.log(c.toString()) //中国