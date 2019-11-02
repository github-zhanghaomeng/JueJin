//在02中其他人也可以不通过dispatch该案状态 
// 所以要把状态定义在一个函数中 这样在函数外就不可以访问到
function createStore() {
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
        switch (action.type) {
            case UPDATE_TITLE_COLOR:
                state.title.color = action.payload
                break
            case UPDATE_TITLE_TEXT:
                state.title.text = action.payload
                break
            case UPDATE_CONTENT_COLOR:
                state.content.color = action.payload
                break
            case UPDATE_CONTENT_TEXT:
                state.content.text = action.payload
                break
            default:
                break
        }
    }

    return {
        getState,
        dispatch
    }
}

let store = createStore()
//可以通过store.getState()获取状态state

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
renderApp(store.getState())
//定义的action类型
const UPDATE_TITLE_COLOR = "UPDATE_TITLE_COLOR"
const UPDATE_TITLE_TEXT = "UPDATE_TITLE_TEXT"
const UPDATE_CONTENT_COLOR = "UPDATE_CONTENT_COLOR"
const UPDATE_CONTENT_TEXT = "UPDATE_CONTENT_TEXT"

// 派发一个action 通过store.dispatch()
store.dispatch({ type: UPDATE_TITLE_COLOR, payload: "skyblue" })
setTimeout(() => {
    store.dispatch({ type: UPDATE_CONTENT_TEXT, payload: '新内容' })
    //重新渲染页面
    renderApp(store.getState())
}, 3000)
//dispatch完 还需要重新调用renderApp这个函数重新渲染页面
renderApp(store.getState())

