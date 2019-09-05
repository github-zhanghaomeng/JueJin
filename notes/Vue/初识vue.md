# vue
是构建用户界面的渐进式框架
##### 特点：好用 灵活 高效
##### 使用
（1） 

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
（2）从官网上下载vue.js(一堆的代码)  然后在代码中进行引入

    <script src:'./vue.js'></script>

# vue全家桶 
vue es6 vue-router vuex webpack

##### 例子

    <div id='app'>
        {{msg}}
    </div>
    var app = new Vue({
        el:'#app', //管理的边界 和上面div中的id一致
        data:{
            msg:'hello'
        },
        methods:{
        
        },
        computed:{
        
        }
    })