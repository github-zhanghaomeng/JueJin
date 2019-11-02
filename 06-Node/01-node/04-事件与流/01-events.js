// let EventEmitter = require('events')
// let e = new EventEmitter()
// let fn = ()=>{
//     console.log('正在看报纸1...')
// }
// e.on('看报纸',fn)
// e.on('看报纸',()=>{
//     console.log('正在看报纸2...')
// })
// e.on('吃饭',()=>{
//     console.log('正在吃饭...')
// })

// e.emit('看报纸')
// e.off('看报纸',fn)   //取消订阅看报纸1  必须和订阅时的函数一致
// e.emit('看报纸')   //在这里就不会打印出 正在看报纸1 
// e.emit('吃饭')


class EventEmitter{
    constructor(){
        this._event = {}
    }
    on(eventName,callback){
        if(this._event[eventName]){
            this._event[eventName].push(callback)
        }
        else{
            this._event[eventName] = [callback]
        }
    }
    emit(eventName){
        this._event[eventName].forEach(event => {
            event()
        });
    }
    off(eventName,callback){
        this._event[eventName] = this._event[eventName].filter(event=>{
            return event != callback
        })
    }
}

let e = new EventEmitter()
let fn = ()=>{
    console.log('正在看报纸1')
}
e.on('看报纸',fn)
e.on('看报纸',()=>{
    console.log('正在看报纸2')
})

e.emit('看报纸')
e.off('看报纸',fn)
e.emit('看报纸')