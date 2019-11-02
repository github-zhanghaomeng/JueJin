import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Descriptions, Button, Alert } from 'antd';

import actions from "../../store/actions/home";
import { TypeRootReducers } from "../../store/reducers";
import { TypeProfile } from "../../store/reducers/profile";
import NavHeader from '../../components/NavHeader'

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof actions;
interface Params {}
type RouteProps = RouteComponentProps<Params>;

type Props = StateProps & DispatchProps & RouteProps & { children?: any };

class Profile extends React.Component<Props> {
  render() {
    let main; // 默认组件或登陆组件或注册组件或用户信息组件
    if(false){

    }else if(false){
      //用户信息 
      main = (
        <div style={{padding:'1rem'}}>
          <Descriptions title="用户信息">
            <Descriptions.Item label="用户名">小明</Descriptions.Item>
            <Descriptions.Item label="手机号码">1810000000</Descriptions.Item>
            <Descriptions.Item label="邮箱">33333@qq.com</Descriptions.Item>   
          </Descriptions>
          <Button type='danger'>退出登录</Button>
        </div>
      );}
      else{
      main = (
        <>
          <Alert type='warning' message='当前未登录' description="亲爱的用户你好，你当前尚未登录，请你选择注册或者登录" ></Alert>
          <Button type='dashed' onClick={()=>this.props.history.push('/login')}>登录</Button>
          <Button type='dashed' onClick={()=>this.props.history.push('/register')}>注册</Button>
        </>

      )
    }
   
    return(
        <section>
            <NavHeader history={this.props.history}>个人中心</NavHeader>
            {main}
        </section>
    )
     
  }
}
let mapStateToProps = (state: TypeRootReducers): TypeProfile => state.profile;
export default connect(
  mapStateToProps,
  actions
)(Profile);
