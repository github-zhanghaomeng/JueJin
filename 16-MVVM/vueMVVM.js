//存储watcher
class Dep{
    constructor(){
        this.subs = []
    }
    addSub(watcher){
        this.subs.push(watcher)
    }
    notify(){
        this.subs.forEach(watcher=>watcher.update())
    }
}
//观察者
class Watcher{
    constructor(vm,expr,cb){
        this.vm = vm
        this.expr = expr
        this.cb = cb
        this.oldValue = this.get()
        // console.log(this.oldValue)
    }
    get(){
        Dep.target = this
        let value = CompilerUtil.getVal(this.vm,this.expr)
        Dep.target = null
        return value
    }
    update(){
        let newVal = CompilerUtil.getVal(this.vm,this.expr)
        // console.log(newVal)
        if(newVal != this.oldValue){
            this.cb(newVal)
        }
    }
}

// 实现数据的响应式  new
class Observer{
    constructor(data){
        // console.log(data) //不实现observer这个方法时  数据不是响应式的
        this.observer(data)
    }
    observer(data){ 
        if(data && typeof data == 'object'){
            for(let key in data){
                this.defineReactive(data,key,data[key])
            }
        }
    }
    defineReactive(obj,key,value){
        this.observer(value);  // 如果一个数据是一个对象，也需要把这个对象中的数据变成响应式
        let dep = new Dep(); // 不同的watcher放到不同的dep中
        Object.defineProperty(obj,key,{
            // 当你获取school时，会调用get
            get(){
                Dep.target && dep.subs.push(Dep.target)
                // console.log("get....")
                // console.log(dep.subs)
                return value
            },
            // 当你设置school时，会调用set
            set:(newVal)=>{
                // 当赋的值和老值一样，就不重新赋值
                if(newVal != value){
                    this.observer(newVal)
                    value = newVal
                    // console.log('set...')
                    dep.notify();
                }
            }
        })
    }
}

//编译模块
class Complier{
    constructor(el,vm){
        this.el = this.isElementNode(el) ? el : document.querySelector(el)
        // console.log(this.el) //this.el为管理模块的所有标签 el为#app
        this.vm = vm
        // console.log(this.vm)  //vue实例 Vue {$el: "#app", $data: {…}}
        //把标签放到创建的空间中
        let fragment = this.node2fragment(this.el)
        // console.log(fragment) //除了最外层的div 都放到了创建的空间中 这时页面是空白的 
        //在Element中只有一个最外层的div 里面是空白的
        
        //替换数据
        this.complier(fragment)
        //把标签重新放到管理的模块中
        this.el.appendChild(fragment)
    }
    //一个一个节点找 判断是元素节点还是文本节点 然后对其进行编译(让浏览器认识)
    complier(node){
        // console.dir(node) //#document-fragment 有时会把标签显示出来
        //childNodes不包括li 那是孙子节点了
        // console.log(node.childNodes) //[text, input, text, div, text, div, text, ul, text] 换行是一个文本节点 如果都放到一行的话 就不会出现文本节点
        // console.log(Array.isArray(node.childNodes))  //false 伪数组
        let childNodes = node.childNodes;
        // console.log(Array.isArray([...childNodes])); //true
        // ...前面的一句必须加上分号
        [...childNodes].forEach(child => {
            if(this.isElementNode(child)){
                //是元素节点
                // console.log(child+'是一个元素节点')
                this.complier(child)
                this.complierElement(child)
            }else{
                //是文本节点
                // console.log(child+'是一个文本节点')
                this.complierText(child)
            }
        });
    }
    //判断元素节点的属性节点名字是否以'v-'开头
    isDirective(attrName){     
        return attrName.startsWith('v-')
    }
    complierElement(node){
        // console.dir(node) //所有的元素节点(例如<input type="text" v-model='school.name'>)
        let attributes = node.attributes;   
        // console.log(typeof attributes) //object 伪数组
        [...attributes].forEach(attr=>{
            // console.log(attr) //type='text' v-model='school.name'
            // console.log(typeof attr) //object
            let {name,value:expr} = attr
            // console.log(name) //必须是name type v-model
            // console.log(value) //text school.name
            if(this.isDirective(name)){
                //元素节点的属性节点名字是以'v-'开头
                // console.log(name+'是一个vue指令') //v-model是一个指令
                // console.log(name.split('-')) //['v','model']
                let [,directive] = name.split("-");
                // console.log(directive) //model
                CompilerUtil[directive](node,expr,this.vm);
                
            }
        }) 
    }
    complierText(node){
        // console.dir(node) //#text  '{{school.name}}' '{{school.age}}' '1' '1' 
        let content = node.textContent;
        // console.log(content) //得到所有的文本节点中的内容 {{school.name}} {{school.age}} 1 1
        let reg = /\{\{(.+?)\}\}/;  // {}在正则中有特殊的含意，需要转义
        if(reg.test(content)){
            // console.log(content) // {{school.name}}  {{school.age}}
            CompilerUtil['text'](node,content,this.vm)
        }
    }
    //判断是不是元素节点
    isElementNode(node){
        // console.log(node) //和el一样 #app
        //1为元素节点 2为属性节点 3为文本节点
        return node.nodeType === 1
    }
    //把标签放到创建的空间中
    node2fragment(node){
        // console.log(node) //和this.el一样
        //创建一个空间 存放这些标签 然后从这些标签中筛选要替换的数据 再放到管理的模块中
        let fragment = document.createDocumentFragment()
        let firstChild
        while (firstChild = node.firstChild) {
            //把管理的模块中的标签一行一行的放到创建的空间中 appendChild具有移动性
            fragment.appendChild(firstChild)
        }
        return fragment

    }
}
// 写一个对象，{}，包含了不同的指令对应的不同的处理办法
CompilerUtil = {
    getVal(vm,expr){
        return expr.split(".").reduce((data,current)=>{
            // console.log(expr.split('.')) ['school','name']
            //一共输出两次 
            // console.log(data)  //1 vue实例 2{name:'beida',age:100}
            // console.log(current) //1school 2name
            return data[current]
        },vm.$data);
    },
    setVal(vm,expr,value){
        // console.log(vm)  //vue实例
        // console.log(expr) //school.name
        // console.log(value) //在input框中重新输入的值
        // console.log(expr.split('.')) //['school','name']
        expr.split('.').reduce((data,current,index,arr)=>{
            //一共输出两次
            // console.log(data) //1vue实例 2{name:'beida',age:100} 
            // console.log(current) //1school 2name
            // console.log(index) //1 0 2 1
            // console.log(arr) // 1['school','name'] 2['school','name']
            if(index == 1){
                // console.log(data[current]) //beida
                return data[current] = value
            }
            return data[current]
        },vm.$data)
     },
    model(node,expr,vm){ 
        let fn =  this.updater["modelUpdater"]
        // 给输入框添加一个观察者，如果后面数据改变了，
        new Watcher(vm,expr,(newVal)=>{
            fn(node,newVal)
        })
        node.addEventListener('input',(e)=>{
            // console.log(e.target.value)
            let value = e.target.value
            this.setVal(vm,expr,value)
        })
        let value = this.getVal(vm,expr)
        fn(node,value);
    },
    html(){
        // 在这里要做v-html要做的事
    },
    // 得到新的内容
    getContentValue(vm,expr){
        return expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            return this.getVal(vm,args[1])
        })
    },
    text(node,expr,vm){
        let fn =  this.updater["textUpdater"]
        let content = expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            // console.log(args)
            //["{{school.name}}", "school.name", 0, "{{school.name}}"]
            //["{{school.age}}", "school.age", 0, "{{school.age}}"]
            //["{{getSchool}}", "getSchool", 0, "{{getSchool}}"]
            new Watcher(vm,args[1],()=>{
                fn(node,this.getContentValue(vm,expr));
            })
            return this.getVal(vm,args[1])
        })
        fn(node,content);
    },
    // 更新数据
    updater:{
        modelUpdater(node,value){
            node.value = value
        },
        htmlUpdater(){

        },
        // 处理文本节点
        textUpdater(node,value){
            // textContent得到文本节点中内容
            node.textContent = value
        }
    }
}
// html要渲染成一张网页，要形成一颗dom树，在dom树上有两类节点：元素节点，文本节点
//属性节点不在dom树上
//vue类
class Vue{
    constructor(options){
        this.$el = options.el
        this.$data = options.data
        let computed = options.computed
        // console.log(computed)  //{getSchool: ƒ}
        //如果el存在 则需要找到el管理的模块
        if(this.$el){
            new Observer(this.$data)
            for(let key in computed){
                // console.log(key) //getSchool
                Object.defineProperty(this.$data,key,{
                    get:()=>{
                       return computed[key].call(this);
                    }
                })
            }
            //需要找到模块中需要替换的元素 编译模板 有点复杂所以单独拿出去
            //让vue代理data 这样就可以在控制台上直接输入vm.school  而不用v,.$data.school
            this.proxyVm(this.$data)
            new Complier(this.$el,this)
            
        }      
    }
    proxyVm(data){
        // console.log(data)  {school:{name:'beida',age:100}}
        for(let key in data){
            // console.log(key) //school
            // console.log(this)  //Vue {$el: "#app", $data: {…}} vue实例
            Object.defineProperty(this,key,{
                get(){
                    return data[key]
                }
            })
        }
    }
}