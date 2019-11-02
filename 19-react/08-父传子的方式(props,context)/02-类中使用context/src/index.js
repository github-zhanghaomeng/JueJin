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

class Header extends React.Component {
    //必须有下面的这句话 否则没有效果
    static contextType = ColorContext;
    render() {
        return (
            <div style={{ border: `8px solid ${this.context.color}`, padding: "5px" }}>
                <h1>Header</h1>
                <Title></Title>
            </div>
        )
    }
}
class Title extends React.Component {
    static contextType = ColorContext;
    render() {
        return (
            <div style={{ border: `8px solid ${this.context.color}`, padding: "5px" }}>
                <h1>Title</h1>
            </div>
        )
    }
}

class Main extends React.Component {
    static contextType = ColorContext;
    render() {
        return (
<div style={{ border: `8px solid ${this.context.color}`, padding: "5px" }}>
    <h1>Main</h1>
    <Content></Content>
</div>
        )
    }
}

class Content extends React.Component {
    static contextType = ColorContext;
    render() {
        return (
            <div style={{ border: `8px solid ${this.context.color}`, padding: "5px" }}>
                <h1>Content</h1>
                <button onClick={() => this.context.changeColor("blue")}>变蓝</button>
                <button onClick={() => this.context.changeColor("green")}>变绿</button>
            </div>
        )
    }
}
ReactDOM.render(<Wrapper></Wrapper>, window.app)