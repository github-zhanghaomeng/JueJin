import React from 'react'
import ReactDom from 'react-dom'
import App from './App'

// ReactDom.render(<App></App>,document.getElementById('app'))
//可以直接渲染一个字符串
// ReactDom.render('hello',document.getElementById('app'))
// -----------------------------------------------------------

// let ele = <h1>hello</h1>
// ReactDom.render(ele,document.getElementById('app'))

// ----------------------------------------------------------------

// jsx必须使用一个根标签包裹
// let ele = <h1>hello</h1><span>world</span>
//第一种使用一个标签包裹
// let ele = <div><h1>hello</h1><span>world</span></div>
//第二种使用空标签 包裹
// let ele = <><div><h1>hello</h1><span>world</span></div></>
//第三种 使用<React.Fragment></React.Fragment>包裹
// let ele = <React.Fragment><h1>hello</h1><span>world</span></React.Fragment>
// ReactDom.render(ele,document.getElementById('app'))

// ---------------------------------------------------------------------
// jsx是严格要求大小写
// let ele = <Div>hello</Div> //'Div' is not defined  react/jsx-no-undef
// ReactDom.render(ele,document.getElementById('app'))

// ------------------------------------------------------------------------

// jsx的所有标签都要闭合 包括单标签 双标签
// let ele = <div><h1>hello</h1><img ></div>
// let ele = <div><h1>hello</h1><img /></div>
// ReactDom.render(ele,document.getElementById('app'))

// -----------------------------------------------------------------------------

// jsx中的属性值必须带引号
// let ele = <h1 id=a1>hello</h1>
// let ele = <h1 id='a1'>hello</h1>
// ReactDom.render(ele,document.getElementById('app'))

// ---------------------------------------------------------------

// jsx中可以放字面量
// let ele = <div>123</div>
// jsx中可以放运算符 在jsx中 如果想要在html标签中放js 需要把js放到{}里面
// let ele = <div>{1+1+1}</div>
//jsx可以放变量
// let name = 'wangcai'
// let ele = <div>{name}</div>
// let ele = <div>{name +'xiaoqiang '}</div>
//jsx中可以放函数调用
// let ele = <div>{Math.random()}</div>
//jsx中可以放jsx
// let name = <strong>wangcai</strong>
// let ele = <div>{name}</div>
// ReactDom.render(ele,document.getElementById('app'))

// ---------------------------------------------------------------

// react中没有v-if 需要使用if else或者三元运算符
// v-if
// let isLogin = false
// let ele = ''
// if(isLogin){
//     ele = <strong>登陆成功</strong>
// }
// else{
//     ele = <strong>登陆失败</strong>
// }
// ReactDom.render(ele,document.getElementById('app'))

//三元运算符
// let isLogin = false
// let ele = isLogin ? '登陆成功' : '登陆失败'
// ReactDom.render(ele,document.getElementById('app'))

// -------------------------------------------------------------

// react中没有v-for 需要使用map
// let name = ['vue.js','react.js',"angular.js"]
// let ele = <div><ul>{name.map((item,index)=><li key={index}>{item}</li>)}</ul></div>
// ReactDom.render(ele,document.getElementById('app'))

// ---------------------------------------------------------------

// 在jsx中不能使用class 应该使用className 不能使用for 应该使用htmlFor
// let ele = <div class='myele'>hello</div>
// let ele = <div className='myele'>hello</div>
// ReactDom.render(ele,document.getElementById('app'))

// ------------------------------------------------------------------

// 在jsx中不能直接像vue中的style直接使用
// let ele = <div style='color:red'>hello</div>
// let ele = <div style={{'color':'red'}}>hello</div>
// ReactDom.render(ele,document.getElementById('app'))
// --------------------------------------------------------------------

// 在jsx中放注释  注释也是属于js，需要放到{}中
// let ele = <div>hello{/* 这是一个注释 */}</div>
// ReactDom.render(ele,document.getElementById('app'))