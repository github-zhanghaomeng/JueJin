import * as React from 'react'
import {connect} from 'react-redux'

import {RouteComponentProps} from 'react-router'

import actions from '../../store/actions/home'
import {TypeRootReducers} from '../../store/reducers'
import {TypeMine} from '../../store/reducers/mine'


type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = typeof actions
interface Params{}
type RouteProps = RouteComponentProps<Params>

type Props = StateProps & DispatchProps & RouteProps & {children?:any}

class Mine extends React.Component<Props>{
    render(){
        return(
            <div>
                Mine
            </div>
        )
    }
}
let mapStateToProps = (state:TypeRootReducers):TypeMine=>state.mine
export default connect(mapStateToProps,actions)(Mine)