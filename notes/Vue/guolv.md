# methods
本质是函数 用的时候需要调用 没有缓存
# computed
本质是函数 用的时候当成一个变量 有缓存 依赖data里面的数据
如果计算属性和方法是同一个名字时  使用的是方法

    <div id='app'>
        <p>{{computeAge()}}</p>
        //每次调用一共会打印一次方法 所以它是没有缓存的
        <p>{{computeAge}}</p> 
        //每次调用都会打印计算属性 所以它是有缓存的
    </div>
    <script>
        var app = new Vue({
            el:"#app",
            data:{
                age : 31
            },
            methods:{
                computeAge(){
                    console.log("方法");
                    if(this.age>30){
                        return "三十而立"
                    }

                }
            },
            // computed:{
            //     computeAge(){
            //         console.log("计算属性");
            //         if(this.age>30){
            //             return "三十而立"
            //         }
            //     }
            // }     //如果方法和计算属性名字一样时，会使用方法的
        })
    </script>
    
# 过滤器
本质也是函数

    <div id="app">
        <h4>{{pi | fixed2}}</h4>
        <h4>{{pi | fixed3(3)}}</h4>
        <h4>{{pi | fixed2 |insertBefore}}</h4>
        <h4>{{pi | insertBefore2("*")}}</h4>
    </div>
    <script>
        var app = new Vue({
            el:"#app",
            data:{
                pi : 3.1415926
            },
            filters: {
                fixed2(d) {
                    return d.toFixed(2);
                },
                fixed3(d, n) {
                    return d.toFixed(n);
                },
                insertBefore(d) {
                    return "$" + d;
                },
                insertBefore2(d, s) {
                    return s + d;
                }
            }
        })    
    </script>