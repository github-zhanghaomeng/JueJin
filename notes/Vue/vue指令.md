# 指令
都是以v-开头

## 和数据打交道的指令
### v-text
等价于差值表达式 {{}}
    
    <div id='app'>
        <h1>{{msg}}</h1>
        <h1 v-text='msg'></h1>
        <h1 v-text='name'></h1> 
        //<strong>wangcai</strong>
    </div>
    <script>
    var app = new Vue({
        el:'#app', //管理的边界 和上面div中的id一致
        data:{
            msg:'hello',
            name:'<strong>wangcai</strong>'
        }
    })
    </script>
### v-html
可以把html标签渲染出来

    <h1 v-html='name'></h1>  //wangcai
    
### v-model
实现数据的双向绑定

    <input v-model='msg'  />
MVVM ：
M model 就是data里面的数据 可以在console通过app.msg获取
V view 就是div中的数据 可以通过肉眼看到的
VM: view model  就是new的Vue
当输入框里的内容改变时 在console通过app.msg可以知道model也改变
同理model改变时  view也改变

![enter description here](https://www.github.com/github-zhanghaomeng/JueJin/raw/master/images/vue-双向数据绑定.png)

## 和属性打交道的指令
### v-bind

    <a v-bind:href='hrefName'></a>
    <a :href='hrefName'></a>
    data:{hrefName:'http://www.baidu.com'}
## 条件指令
### v-show
它是通过display 只是在样式上改变
0、-1、‘’都被转换为false

    <p v-show='isShow'>这是一个p标签</p>
    <p v-show='0'>这是一个p标签</p>
    <p v-show=true>这是一个p标签</p>
    <p v-show='-1'>这是一个p标签</p>
    <p v-show=''>这是一个p标签</p>
    <p v-show='3>4>这是一个p标签</p>
    data:{isShow:false}
### v-if 
它如果不显示的话  但是还是存在的
v-if v-else 之间不可以有其他的标签

    <p v-if="score>90'>及格</p>
    <p v-else='score<60>不及格</p>
    //在这两个p标签之间不能有其他的标签
v-if v-else-if v-else-if v-else

## 循环指令
v-for  单标签不能使用v-for 例如input
可以遍历数组 第一个参数是值 第二个值是索引 第三个参数没有值

    <p v-for='(value,index) in link'>
        第一个参数{{value}}
        第二个参数{{index}}
    </p>
    data:{link:['百度','京东']}
可以遍历对象
第一个参数是值  第二个参数是键 第三个参数是索引
    
    <p v-for='(value,key,index) in Obj'>
        第一个参数{{value}}
        第二个参数{{key}}
        第三个参数{{index}}
    </p>
    data:{Obj:{name:'wangcai',age:18}}
可以遍历整数
第一个参数是值 第二个值是索引 第三个参数没有值

     <p v-for='(value,index) in 10'>
        第一个参数{{value}}
        第二个参数{{index}}
    </p>
## 绑定class

    <style>
        .abc{color:red}
        .def{background-color:skyblue}
        .g-h{color:pink}
    </style>
    <p class='abc'>这是一个p标签</p>
    <p :class='className'>这是一个p标签</p>
    <p :class='isShow ? className : "" '>这是一个p标签</p>
    <p :class='{abc}'>这是一个p标签</p>
    <p :class='{abc:isShow}'>这是一个p标签</p>
    <p :class='["abc","def"]'>这是一个p标签</p>
    <p :class='{abc:isShow,def:true}'>这是一个p标签</p>
    <p :class='{"g-h"}'>这是一个p标签</p>
    data:{className:abc,isShow:false}
## 绑定style

    <p :style="myStyle">这是一个p标签</p>
    data:{myStyle:{color:'red',backgroundColor:'skyblue'}}
## v-on
##### 绑定事件

    <button v-on='f1'>点击</button>
    methods:{f1(){...}}

##### 事件处理函数
    (1)放在标签中  <button v-on='isShow = !isShow'>点击</button>
    (2)放在methods中 <button v-on='f1'>点击</button>
       (1)传参  传的参数是变量 v-for='(value,index) in attr' v-on='f1(value)'
       (2)      传的参数是字面量 v-on='f1("hello")'
##### 事件对象 $event
当事件发生时  事件对象中存储了很多信息   如这个事件的类型 click  点击坐标

##### 默认事件
a标签 和 form表单 都有默认事件

    <a href='http://www.baidu.com' @click='f1'>百度</a>
    methods:{
        f1(){alert('hello')} //当点击百度时  会弹hello 之后会跳转到百度的页面
    }
阻止事件

    <a href='http://www.baidu.com' @click='f1($event)'>百度</a>
        methods:{
            f1(abc){
                abc.preventDefault()
            }
        } 
    }
    
##### 阻止冒泡
div包含了好多的小div  当点击小的div时  大的div的事件也会发生  从里往外
在子元素的方法上 传入一个事件对象 利用事件对象进行阻止冒泡

    <div @click='f1'>
        <div @click='f2($event)'>
         </div>
    </div>
    f2(abc){
        abc.stopPropagation()
    }
##### 事件修饰符
    
    <a href='javascript(0)'></a>
    vue中的写法  <a href='' @click.prevent='f1'></a> //这时只会调用f1方法 href为空时会刷新 不会‘刷新’
    
常见修饰符
可以执行多个修饰符   @click.stop.once.  
    prevent 阻止默认事件
    stop    阻止冒泡  默认为从里到外
    capture 从外往里 
    self   把self放在谁身上  谁就不会发生
    once  只触发一次  不管点击多少次 只会发生一次
##### 把冒泡变成捕获  从外到里

    <div @click.capture='f1'>
        <div @click.capture='f2'>
         </div>
    </div>
##### 按键修饰符 
keycode
    
    <input type='text' @keyup='f($event)' /> // @keyup.13='f'  @keyup.enter='f' @keyup.enter.right='f'
    methods:{
        f(e){
            if(e.keycode == 13){}
        }    
    }
    