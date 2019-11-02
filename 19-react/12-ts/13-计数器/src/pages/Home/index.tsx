import * as React from 'react'
import {connect} from 'react-redux'

import {RouteComponentProps} from 'react-router'

import actions from '../../store/actions/home'
import {TypeRootReducers} from '../../store/reducers'
import {TypeHome} from '../../store/reducers/home'
import HomeHeader from './HomeHeader'

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof actions
interface Params{}
type RouteProps = RouteComponentProps<Params>

type Props = StateProps & DispatchProps & RouteProps & {children?:any}

class Home extends React.Component<Props>{
    render(){
    //    console.log(this.props)
        return(
            <div>
                <HomeHeader currentCategory={this.props.currentCategory} setCurrentCategory={this.props.setCurrentCategory}></HomeHeader>
                home
            </div>
        )
    }
}
let mapStateToProps = (state:TypeRootReducers):TypeHome=>state.home
export default connect(mapStateToProps,actions)(Home)