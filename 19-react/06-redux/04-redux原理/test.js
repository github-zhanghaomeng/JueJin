let state = {name:"wangcai",age:"20",score:{math:"90"}}

let state1 = {...state}
// console.log(state1) 
// { name: 'wangcai', age: '20', score: { math: '90' } }

let state2 = {...state,name:"xiaoqiang"}
// console.log(state2)
// { name: 'xiaoqiang', age: '20', score: { math: '90' } }

// let state3 = {...state,score:{...state.score}}
// console.log(state3)
// { name: 'wa  ngcai', age: '20', score: { math: '90' } }

let state4 = {...state,score:{...state.score,math:"120"}}
// console.log(state4)
// { name: 'wangcai', age: '20', score: { math: '120' } }
