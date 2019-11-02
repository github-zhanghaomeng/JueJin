class Subject{
    constructor(){
        this.arr = []
        this.state = '开心'
    }
    attach(o){
        this.arr.push(o)
    }
    State(newState){
        this.state = newState
        this.arr.forEach(o=>o.update(newState))
    }
}

class Observer{
    constructor(name){
        this.name = name
    }
    update(newState){
        console.log(this.name,'小宝宝的状态',newState)
    }
}


let s = new Subject('小宝宝')
let o1 = new Observer('我')
let o2 = new Observer('我媳妇')

s.attach(o1)
s.attach(o2)
console.log(s.arr)
console.log(s.state)
s.State('不开心')
console.log(s.state)