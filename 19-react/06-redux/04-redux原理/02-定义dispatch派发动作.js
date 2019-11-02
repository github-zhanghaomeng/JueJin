let appState = {
    title: { color: "red", text: "标题" },
    content: { color: "blue", text: "内容" },
}

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
renderApp(appState)

//在01中不合理 所以可以使用dispatch派发一个动作改变状态

//需要使用dispatch派发一个动作 修改内容
//dispatch是一个函数 
// 需要给它一个action 然后判断action的类型 对其分别操作
// action一定是一个对象，这个对象中一定要有一个type，可以没有payload
// action就是{{type:UPDATE_CONTENT_TEXT,payload:'新内容'}}
function dispatch(action) {
    switch (action.type) {
        case UPDATE_TITLE_COLOR:
            appState.title.color = action.payload
            break
        case UPDATE_TITLE_TEXT:
            appState.title.text = action.payload
            break
        case UPDATE_CONTENT_COLOR:
            appState.content.color = action.payload
            break
        case UPDATE_CONTENT_TEXT:
            appState.content.text = action.payload
            break
        default:
            return appState
    }
}
//定义action的类型 action是一个对象
// 状态不能随便被改变，要想改变状态，需要派发一个动作，先把可以派发的动作定义出来
const UPDATE_TITLE_COLOR = "UPDATE_TITLE_COLOR"
const UPDATE_TITLE_TEXT = "UPDATE_TITLE_TEXT"
const UPDATE_CONTENT_COLOR = "UPDATE_CONTENT_COLOR"
const UPDATE_CONTENT_TEXT = "UPDATE_CONTENT_TEXT"

//派发一个action
dispatch({type:UPDATE_TITLE_COLOR,payload:"skyblue"})
setTimeout(()=>{
    dispatch({type:UPDATE_CONTENT_TEXT,payload:'新内容'})
    //重新渲染页面
    renderApp(appState)
},3000)
//dispatch完 还需要重新调用renderApp这个函数重新渲染页面
renderApp(appState)

//这样其他人也可以不使用派发一个dispatch发起动作  改变状态
appState.title.color = "green"
renderApp(appState)