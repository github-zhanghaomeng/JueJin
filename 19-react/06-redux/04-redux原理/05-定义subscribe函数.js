//每次修改状态后 还得手动调用renderApp这个函数 重新渲染页面
//可以定义subscribe函数进行订阅 当页面改变时 会自动调用这个函数
//在这个函数中可以调用renderApp函数 实现自动渲染页面
function renderApp() {
    renderTitle(store.getState().title)
    renderContent(store.getState().content)
}

function renderTitle(state) {
    let element = document.getElementById('title')
    // console.log(element)
    element.style.color = state.color
    element.innerHTML = state.text
}

function renderContent(state) {
    let element = document.getElementById('content')
    element.style.color = state.color
    element.innerHTML = state.text
}

//定义的action类型
const UPDATE_TITLE_COLOR = "UPDATE_TITLE_COLOR"
const UPDATE_TITLE_TEXT = "UPDATE_TITLE_TEXT"
const UPDATE_CONTENT_COLOR = "UPDATE_CONTENT_COLOR"
const UPDATE_CONTENT_TEXT = "UPDATE_CONTENT_TEXT"

let initState = {
    title: { color: "red", text: "标题" },
    content: { color: "blue", text: "内容" },
}
//定义一个管理员 管理员是一个函数 
//需要给它一个旧的状态和一个action 返回一个新的状态
//在管理员内部 判断action的类型 对其分别操作
//把以前写在dispatch中的内容拿过来
function reducer(state=initState,action){
    switch (action.type) {
        case UPDATE_TITLE_COLOR:
            //...扩展运算符  详细看test.js
            return {...state,title:{...state.title,color:action.payload}}
        case UPDATE_TITLE_TEXT:
            return {...state,title:{...state.title,text:action.payload}}
        case UPDATE_CONTENT_COLOR:
            return {...state,content:{...state.content,color:action.payload}}
        case UPDATE_CONTENT_TEXT:
            return {...state,content:{...state.content,text:action.payload}}
        default:
            return state
    }
}

//在创建仓库的时候 需要把管理员传给仓库
function createStore(reducer) {
    //定义订阅者
    let listeners = []
    let state;
    //需要使用一个方法 把state暴露出去
    function getState() {
        return state
    }
    //把dispatch放到store中 调用时通过store.dispatch()
    function dispatch(action) {
        //当调用reducer就会返回一个新的状态
       state = reducer(state,action)
       //console.log(state)
        //页面改变后 调用subscribe中的回调函数
        listeners.forEach(l=>l())
    }
    //定义subscribe函数 实现页面改变时 自动调用这个函数
    //往订阅者数组中 添加订阅者
    //它里面是一个回调函数(listener)
    //它应该返回一个函数 实现不再执行renderApp 
    // 也就是返回的函数的功能和它相反
    function subscribe(listener){
        listeners.push(listener)
        return function(){
            listeners = listeners.filter(l=>l!==listener)
        }
    }
    //实现state中不再为空 在reducer中没有这个类型 会返回state
    dispatch({ type : '@@redux/INIT'});
    return {
        getState,
        dispatch,
        subscribe
    }
}
//传入一个管理员
let store = createStore(reducer)
//可以通过store.getState()获取状态state

renderApp()
let unsubscribe = store.subscribe(renderApp)


// 派发一个action 通过store.dispatch()
setTimeout(()=>{
    store.dispatch({ type: UPDATE_TITLE_COLOR, payload: "skyblue" })
    //unsubscribe之后的状态已经改变 但是不再渲染页面
    unsubscribe()
    store.dispatch({ type: UPDATE_CONTENT_COLOR, payload: "skyblue" })
},3000)





