# 回调函数

# Promise
#### Promise的基本使用
使用promise必须new一个，promise里面有一个执行器()=>{}(会立即执行)，当执行器里面没有参数时，默认是等待状态pending

	let p = new Promise(()=>{
	  
	})
	console.log(p)    =>Promise { <pending> }
	
promise执行器中有两个参数(resolve,reject),默认为等待状态pending,当调用resolve,这时会变成成功态,相反调用reject时会变成失败态，但是只会从等待态变成成功态和失败态中的一种

	let p = new Promise((resolve,reject)=>{
    	 resolve("包")           =>Promise { '包' }
    	//reject("没钱了")      =>Promise{ <rejected> '没钱了' }
	})
	console.log(p)
	
promise后面有一个then方法，方法里有两个参数data和err，也是函数，当调用resolve时， 会执行then方法中的第一个参数，当调用reject时会调用then方法的第2个参数

	let p = new Promise((resolve,reject)=>{
    	resolve("包")       =>成功了...    
    	reject("没钱了")     =>失败了...
	})
	p.then(data=>{
   		console.log('成功了...')
	},err=>{
    	console.log('失败了...')
	})
	
成功时会有一个成功的结果，失败时会有一个失败的原因，resolve传的 就是成功的结果，reject传的就是失败的原因

	let p = new Promise((resolve,reject)=>{
    	resolve("包")           
    	reject("没钱了")   
	})
	p.then(data=>{
    	console.log(data)  //包
	},err=>{
    	console.log(err)  //没钱了
	})
	
当用throw抛出一个错误时，也是失败态，then方法中的第二个参数会接收

	let p = new Promise((resolve,reject)=>{
    	throw new Error('没钱了')
	})
	p.then(data=>{
    	console.log(data)
	},err=>{
    	console.log(err)  =>没钱了
	})
	
promise本身是同步的

	console.log('start')
	let p = new Promise((resolve,reject)=>{
    	console.log('promise')
	})
	console.log('end') => start promise end
	
#### Promise的执行器中也可以写异步

	let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('包')
    },3000)
	})
	p.then(data=>{
    	console.log(data)
	})  =>等3秒会出现 包
	
#### Promise的链式调用
 .then  之后还可以.then   因为.then又重新生成了一个promise
在第一个then中，如果返回一个值(不管是成功还是失败)，那么该值会传到第二个then中的第一个参数

	let p = new Promise((resolve,reject)=>{
    	 resolve('开心到飞~~')
	})

	p.then(data=>{
    	// console.log(data)  //开心到飞~~
   	 	return data
	}).then(data=>{
    	console.log(data)    //开心到飞~~
	})
	
	
	let p = new Promise((resolve,reject)=>{
    	reject('不开心')    => 1:不开心
	})

	p.then(err=>{
    	return err
	}).then(data=>{
    	console.log("1:",data)    
	},err=>{
    	console.log("2:",err)
	})
	
promise .then 之后.then 返回一个新的promise时 这个promise会立即执行 并且 这个then之后的第一个then会接收，状态也会接受

	let p = new Promise((resolve,reject)=>{
    	resolve('包包')
	})

	p.then(data=>{
    	console.log(data)  //包包
	},err=>{
		console.log(err)
	}).then(data=>{
		return new Promise((resolve,reject)=>{
			reject('不开心') =>返回一个新的失败态的promise
	})
	}).then(data=>{
		console.log(data)
	},err=>{
		console.log(err)  //不开心  
		=>所以返回promise之后的第一个then接受了失败态的结果
	})
	
promise 有时会造成死循环

	let p = new Promise((resolve,reject)=>{
   	 	resolve('hello')
	})

	let p1 = p.then((resolve,reject)=>{
    	return p1
	})
	p1.then(data=>{     =>自己在等自己
    	console.log(data)
	})
	
#### Promise的递归解析

	let p = new Promise((resolve,reject)=>{
        resolve('hello')
    })
    
    let p1 = p.then(data=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                        resolve('6666')
                    },1000)
                }))
            },1000)
        })
    })
    
    //data是promise还是6666
    p1.then(data=>{
        console.log(data)  //6666
    })
	
#### promise的catch方法

catch是then的语法糖，最终，一个promise中，一般在then中只有一个函数，在then后面有一个catch，一般使用then来获取data，在catch中获取err


当第一个then中有err时，会调用then里面的err

		let p = new Promise((resolve,reject)=>{
   			reject('hello')
	})

	p.then(data=>{
    	console.log(data)
	},err=>{
   	 	console.log("err:",err)  //err:hello
	}).catch(err=>{
    	console.log("catch:",err)
	})
当then中没有err时，会调用catch中的err

	let p = new Promise((resolve,reject)=>{
    	reject('hello')
	})

	p.then(data=>{
    	console.log(data)
	}).catch(err=>{
    	console.log("catch:",err) //catch:err
	})
	
#### promise的静态方法
静态方法就是类(构造器)中的方法  promise是一个类(构造器)

###### resolve()

	Promise.resolve('包包').then(data=>{
    	console.log(data)  =>包包
	})
	
###### reject()

 	Promise.reject('没钱').catch(err=>{
   	 	console.log(err) //没钱 这个catch不能用then代替
	})
	
###### finally()
不管转为成功态还是失败态，都会运行finally这个函数

	Promise.resolve('包').then(data=>{
    	console.log(data)
	}).finally(()=>{
    	console.log('开心')
	})  => 包 开心
	
	Promise.reject('没钱').catch(data=>{
    	console.log(data)
	}).finally(()=>{
    	console.log('不开心')
	})  =>没钱 不开心
	
###### all()

	let fs = require('fs').promises
	Promise.all([fs.readFile('./name.txt','utf8'),
	fs.readFile('./age.txt','utf8')]).then(data=>{
    console.log(data)   =>[ 'age.txt', '6666' ]
	})
	
###### race()
Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。

	let fs = require('fs').promises
	Promise.race([fs.readFile('./age.txt','utf8'),
	fs.readFile('./name.txt','utf8')]).then(data=>{
    	console.log(data)
	})  //6666  谁在前就返回谁
	
# generator
generator 是一个生成器  调用这个生成器的话会形成一个迭代器
让程序中断，{}里的代码不会全部实现
格式：
	function * read(){}    =>生成器
	let it = read()       =>迭代器	
	
*号只要在function和read之间就可以

生成器可以输出多个值 用yield进行输出 迭代器必须用next一个一个的拿值

	function * read(){
    	yield 1
    	yield 2
	}

	let it = read()
	console.log(it.next())  //{value:1,done:false}
	console.log(it.next())  //{value:2,done:false}
	console.log(it.next())  //{value:undefind,done:true}
	
只能在第二个迭代器中进行传值

	function * read(){
  		let a = yield 1;
  		console.log(a)   //9
		  let b = yield 2
		  console.log(b)   //10
		  let c = yield 3
		  console.log(c)  //11
		}

		let it = read()
		console.log(it.next())  //{ value: 1, done: false }
		console.log(it.next(9))  //{ value: 2, done: false }
		console.log(it.next(10))  //{ value: 3, done: false }
		console.log(it.next(11))  //{ value: undefined, done: true }