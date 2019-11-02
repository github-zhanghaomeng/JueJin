//同步的action creator
export function increment(){
    return{
        type:'INCREMENT'
    }
}

//同步的action creator
export function decrement(){
    return{
        type:'DECREMENT'
    }
}

//异步的action creator
//如果还是使用createStore创建仓库的话会报错 需要安装redux-thunk中间件重新创建仓库
// 如果你使用了redux-thunk中间件，可以让action creator先不返回一个action
// 而是返回一个函数，在函数的内部就可以对异步的action进行增强
export function incrementAsync(){
    //内部返回一个函数 并且固定的传入dispatch和getState
    return function(dispatch,getState){
        setTimeout(()=>{
            //调用同步的action creator
            dispatch(increment())
        },3000)
    }
}

//定义一个奇数加的同步action creator
export function incrementOdd(){
    return function(dispatch,getState){
        const {counter} = getState()
        // console.log(getState())  //{counter:xxx}
        if(counter%2){
            //是奇数
            dispatch(increment())
        }
    }
}