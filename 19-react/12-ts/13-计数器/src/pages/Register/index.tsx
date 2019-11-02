import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, Link } from "react-router-dom";
import { Icon, Input, Form, Button } from "antd";
import { FormComponentProps } from "antd/lib/form";

import './index.less'
import actions from "../../store/actions/home";
import { TypeRootReducers } from "../../store/reducers";
import { TypeProfile } from "../../store/reducers/profile";
import NavHeader from "../../components/NavHeader";

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface Params {}
type RouteProps = RouteComponentProps<Params>;

type Props = StateProps &
  DispatchProps &
  RouteProps &
  FormComponentProps & { children?: React.ReactNode };

class Register extends React.Component<Props> {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <NavHeader history={this.props.history}>用户注册</NavHeader>
        <Form>
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "用户名必须输入!" },
                { min: 1, message: "用户名必须大于等于6位" },
                { max: 9, message: "用户名必须小于等于8位" }
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
              rules: [{ required: true, message: "密码必须输入" }]
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
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "密码不能为空" }]
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
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "邮箱必须输入" }]
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="email"
                placeholder="请输入邮箱"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("phone", {
              rules: [{ required: true, message: "手机号必须输入" }]
            })(
              <Input
                prefix={
                  <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="text"
                placeholder="请输入手机号"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              注册
            </Button>
            <Link to="/login" style={{float:'right'}}>立即登录</Link>
          </Form.Item>
        </Form>
      </>
    );
  }
}
let wrappedRegister = Form.create({ name: '注册表单' })(Register);
let mapStateToProps = (state: TypeRootReducers): TypeProfile => state.profile;
export default connect(
  mapStateToProps,
  actions
)(wrappedRegister);
