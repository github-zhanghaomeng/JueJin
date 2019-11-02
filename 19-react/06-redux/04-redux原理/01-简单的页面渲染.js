let appState = {
    title:{color:"red",text:"标题"},
    content:{color:"blue",text:"内容"},
}

function renderApp(appState){
    renderTitle(appState.title)
    renderContent(appState.content)
}

function renderTitle(state){
    let element = document.getElementById('title')
    // console.log(element)
    element.style.color = state.color
    element.innerHTML = state.text
}

function renderContent(state){
    let element = document.getElementById('content')
    element.style.color = state.color
    element.innerHTML = state.text
}

renderApp(appState)

//这样的话 可以直接修改内容(不合理) 修改后必须重新调用renderApp方法
appState.title.text='新标题'
renderApp(appState)