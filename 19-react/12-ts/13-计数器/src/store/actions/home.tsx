import * as types from '../action-types'
import {TypeAction} from '../typing/common'

export default{
    setCurrentCategory(payload:string):TypeAction{
        return {
            type:types.SET_CURRENT_CATEGORY,
            payload
        }
    }
}