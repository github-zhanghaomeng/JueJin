import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps,Link } from "react-router-dom";
import {Icon,Input,Form,Button} from 'antd'
import {FormComponentProps} from 'antd/lib/form'

import './index.less'
import actions from "../../store/actions/home";
import { TypeRootReducers } from "../../store/reducers";
import { TypeProfile } from "../../store/reducers/profile";
import NavHeader from '../../components/NavHeader'

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface Params {}
type RouteProps = RouteComponentProps<Params>;

type Props = StateProps & DispatchProps & RouteProps & FormComponentProps & { children?: React.ReactNode };

class Login extends React.Component<Props> {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <NavHeader history={this.props.history}>用户登录</NavHeader>
        <Form>
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "用户名必须输入!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="请输入用户名"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "密码不能为空" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="请输入密码"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" className="login-form-button">登录</Button>
            <Link to="/register" style={{float:"right"}}>立即注册</Link>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
let wrappedRegister = Form.create({ name: '登录表单' })(Login);
let mapStateToProps = (state: TypeRootReducers): TypeProfile => state.profile;
export default connect(
  mapStateToProps,
  actions
)(wrappedRegister);
