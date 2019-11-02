import React from "react"
import ReactDOM from "react-dom"

let ColorContext = React.createContext();

class Wrapper extends React.Component {
    state = { color: "red" }
    changeColor = (color) => {
        this.setState({ color })
    }
    render() {
        let contextValue = { color: this.state.color, changeColor: this.changeColor }
        return (
            <ColorContext.Provider value={contextValue}>
                <div style={{ border: `8px solid ${this.state.color}`, padding: "5px" }}>
                    <h1>Wrapper</h1>
                    <Header></Header>
                    <Main></Main>
                </div>
            </ColorContext.Provider>

        )
    }
}
// 在函数组件中使用上下文
function Header() {
    return (
        <ColorContext.Consumer>
            {
                value => (
                    <div style={{ border: `8px solid ${value.color}`, padding: "5px" }}>
                        <h1>Header</h1>
                        <Title></Title>
                    </div>
                )
            }
        </ColorContext.Consumer>
    )
}
function Title() {
    return (
        <ColorContext.Consumer>
            {
                value => (
                    <div style={{ border: `8px solid ${value.color}`, padding: "5px" }}>
                        <h1>Title</h1>
                        
                    </div>
                )
            }
        </ColorContext.Consumer>
    )
}

function Main() {
    return (
        <ColorContext.Consumer>
            {
                value => (
                    <div style={{ border: `8px solid ${value.color}`, padding: "5px" }}>
                        <h1>Main</h1>
                        <Content></Content>
                    </div>
                )
            }
        </ColorContext.Consumer>
    )
}

function Content() {
    return (
        <ColorContext.Consumer>
            {
                value => (
                    <div style={{ border: `8px solid ${value.color}`, padding: "5px" }}>
                        <h1>Content</h1>
                        <button onClick={()=>value.changeColor('blue')}>变蓝</button>
                        <button onClick={()=>value.changeColor('green')}>变绿</button>
                    </div>
                )
            }
        </ColorContext.Consumer>
    )
}


ReactDOM.render(<Wrapper></Wrapper>, window.app)