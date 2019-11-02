import * as React from "react";
import * as ReactDom from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import { ConfigProvider } from "antd";

import zh_CN from "antd/lib/locale-provider/zh_CN";

import "./assets/css/common.less";
import store from "./store";
import history from "./store/history";
import Home from "./pages/Home";
import Mine from "./pages/Mine";
import Profile from "./pages/Profile";
import Login from './pages/Login'
import Register from './pages/Register'
import Tabs from "./components/Tabs";

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ConfigProvider locale={zh_CN}>
        <main className='main-container'>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/mine" component={Mine}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </main>
        <Tabs></Tabs>
      </ConfigProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);
