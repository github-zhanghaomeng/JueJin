function renderApp(appState) {
    renderTitle(appState.title)
    renderContent(appState.content)
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

//定义一个管理员 管理员是一个函数 
//需要给它一个旧的状态和一个action 返回一个新的状态
//在管理员内部 判断action的类型 对其分别操作
//把以前写在dispatch中的内容拿过来
function reducer(state,action){
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
    let state = {
        title: { color: "red", text: "标题" },
        content: { color: "blue", text: "内容" },
    }
    //需要使用一个方法 把appState暴露出去
    function getState() {
        return state
    }
    //把dispatch放到store中 调用时通过store.dispatch()
    function dispatch(action) {
        //当调用reducer就会返回一个新的状态
       state = reducer(state,action)
       console.log(state)
    }

    return {
        getState,
        dispatch
    }
}
//传入一个管理员
let store = createStore(reducer)
//可以通过store.getState()获取状态state

renderApp(store.getState())


// 派发一个action 通过store.dispatch()
store.dispatch({ type: UPDATE_TITLE_COLOR, payload: "skyblue" })
renderApp(store.getState())




