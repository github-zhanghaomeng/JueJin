import ReactDom from 'react-dom'
import React from 'react'

import {Provider} from 'react-redux'

import store from './store'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'

ReactDom.render(<Provider store={store}>
    <Counter1></Counter1>
    <Counter2></Counter2>
</Provider>
,document.getElementById('app'))
