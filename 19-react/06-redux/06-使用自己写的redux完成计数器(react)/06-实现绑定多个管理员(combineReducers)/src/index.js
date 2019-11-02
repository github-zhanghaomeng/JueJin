import ReactDom from 'react-dom'
import React from 'react'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'



ReactDom.render(
    <>
        <Counter1></Counter1>
        <Counter2></Counter2>
    </>
    ,document.getElementById('app'))
