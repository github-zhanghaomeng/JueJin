// console.log('wangcai')

const name = require('./a')
console.log(name)

//引入css
import '../css/index.css'


//引入图片
import logo from '../image/logo.jpeg'
let image = document.createElement('img')
image.src = logo
document.body.appendChild(image)
