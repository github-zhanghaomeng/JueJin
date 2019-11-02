import * as React from "react";
import { Icon } from "antd";
import { Transition } from "react-transition-group";
import "./index.less";
const duration = 5000;
const defaultStyle = {
  opacity: 0,
  display: "none",
  transition: `all ${duration}ms ease-in-out`
};
interface TypeTransitionStyle {
  entering: React.CSSProperties;
  entered: React.CSSProperties;
  exiting: React.CSSProperties;
  exited: React.CSSProperties;
  unmounted: React.CSSProperties;
}
const transitionStyle: TypeTransitionStyle = {
  entering: { opacity: 1, display: "block" },
  entered: { opacity: 1, display: "block" },
  exiting: { opacity: 0, display: "none" },
  exited: { opacity: 0, display: "none" },
  unmounted: { opacity: 0, display: "none" }
};

interface Props {
  currentCategory: string;
  setCurrentCategory: any;
}
interface State {
  in: boolean;
}
export default class HomeHeader extends React.Component<Props, State> {
  state = { in: false };
  setCurrentCategory=(event:React.MouseEvent<HTMLUListElement>)=>{
    let target:EventTarget = event.target
    // console.log(target)//<li>...</li>
    let type = (target as HTMLUListElement).dataset.type
    // console.log(type)
    this.setState({in:false},()=>{this.props.setCurrentCategory(type)})
  }
  render() {
    return (
      <div className="home-header">
        <div>
          <h1 style={{ color: "#e5342a" }}>猫眼电影</h1>
          <Icon
            type="bars"
            onClick={() => this.setState({ in: !this.state.in })}
          ></Icon>
        </div>
        <Transition in={this.state.in} timeout={duration}>
          {state => (
            <ul
              onClick={this.setCurrentCategory}
              style={{
                ...defaultStyle,
                ...transitionStyle[state]
              }}
            >
              <li data-type='all' className={this.props.currentCategory === 'all' ? 'active' : ''}>全部</li>
              <li data-type='comming' className={this.props.currentCategory === 'comming' ? 'active' : ''}>将要上映</li>
              <li data-type='now' className={this.props.currentCategory === 'now' ? 'active' : ''}>正在热映</li>
            </ul>
          )}
        </Transition>
      </div>
    );
  }
}
