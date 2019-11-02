import { createStore } from './redux'

let show = document.getElementById('show')
let addBtn = document.getElementById('addBtn')
let subBtn = document.getElementById('subBtn')


//action
const ADD = "ADD"
const SUB = 'SUB'
//管理员
function reducer(state={number:0},action){
    switch(action.type){
        case ADD:
            return {number:state.number+1}
        case SUB:
            return {number:state.number-1}
        default:
            return state
    }
}
//创建仓库 并且给它一个管理员
let store = createStore(reducer)
//把number渲染到页面上
function render(){
    show.innerHTML = store.getState().number
}
// 实现加
addBtn.addEventListener('click',()=>{
    store.dispatch({type:ADD})
    // console.log(store.getState().number)
    //写上这个方法 就只能加一次不能减 状态已经改变 就是没有渲染到页面上
    unsubscribe()

})
//实现减
subBtn.addEventListener('click',()=>{
    store.dispatch({type:SUB})
    // console.log(store.getState().number)
})

render()
let unsubscribe = store.subscribe(render)
