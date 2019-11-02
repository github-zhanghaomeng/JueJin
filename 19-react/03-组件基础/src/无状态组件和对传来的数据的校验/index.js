import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

//没有传入值的时候 默认是App.js中设置的数据
ReactDom.render(<App></App>,document.getElementById('app'))

//传入的值
// ReactDom.render(<App name={'wangcai'}></App>,document.getElementById('app'))

//会报错 传入的不是字符串
// ReactDom.render(<App name={123}></App>,document.getElementById('app'))
