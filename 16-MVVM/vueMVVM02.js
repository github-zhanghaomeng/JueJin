class Dep{
    constructor(){
        this.subs = []; 
    }
    addSub(watcher){
        this.subs.push(watcher)
    }
    notify(){
        this.subs.forEach(watcher=>watcher.update())
    }
}
class Watcher{
    constructor(vm,expr,cb){
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;  
        this.oldValue = this.get();
    }
    get(){
        Dep.target = this;
        let value = CompilerUtil.getVal(this.vm,this.expr);
        Dep.target = null;
        return value;
    }
    update(){
        let newVal = CompilerUtil.getVal(this.vm,this.expr);
        if(newVal !== this.oldValue){
            this.cb(newVal);
        }
    }
}
class Observer{
    constructor(data){
        this.observer(data)
    }
    observer(data){ 
        if(data && typeof data == 'object'){
            for(let key in data){
                this.defindReactive(data,key,data[key])
            }
        }
    }
    defindReactive(obj,key,value){
        this.observer(value);  
        let dep = new Dep(); 
        Object.defineProperty(obj,key,{
            get(){
                Dep.target && dep.subs.push(Dep.target)
                return value
            },
            set:(newVal)=>{
                if(newVal != value){
                    this.observer(newVal)
                    value = newVal
                    dep.notify();
                }
            }
        })
    }
}
class Compiler{
    constructor(el,vm){
        this.el = this.isElementNode(el) ? el:document.querySelector(el)
        this.vm = vm;
        let fragment = this.node2fragment(this.el);
        this.compile(fragment);
        this.el.appendChild(fragment)
    }
    isDirective(attrName){
       return attrName.startsWith("v-")
    }
    compileElement(node){
        let attributes = node.attributes; 
        [...attributes].forEach(attr=>{
            let {name,value:expr} = attr;
            if(this.isDirective(name)){  
                let [,directive] = name.split("-");
                CompilerUtil[directive](node,expr,this.vm);
            }
        })
    }
    compileText(node){
        let content = node.textContent;
        let reg = /\{\{(.+?)\}\}/;  
        reg.test(content) 
        if(reg.test(content)){
            CompilerUtil['text'](node,content,this.vm)
        }

    }
    compile(node){
        let childNodes = node.childNodes;
        [...childNodes].forEach(child=>{
            if(this.isElementNode(child)){
                this.compileElement(child);
                this.compile(child)
            }else{
                // 否则调用compileText
                this.compileText(child)
            }
        })
    }
    node2fragment(node){
        let fragment = document.createDocumentFragment();
        let firstChild;
        while(firstChild = node.firstChild){
            fragment.appendChild(firstChild)
        }
        return fragment;
    }
    isElementNode(node){
        return node.nodeType === 1;
    }
}
CompilerUtil = {
    getVal(vm,expr){
        return expr.split(".").reduce((data,current)=>{
            return data[current]
        },vm.$data);
    },
    setVal(vm,expr,value){
        expr.split(".").reduce((data,current,index,arr)=>{
            if(index == arr.length-1){
                return data[current] = value
            }
            return data[current]
        },vm.$data)
    },
    model(node,expr,vm){ 
        let fn =  this.updater["modelUpdater"]
        new Watcher(vm,expr,(newVal)=>{
            fn(node,newVal)
        })
        node.addEventListener("input",(e)=>{
            let value = e.target.value
            this.setVal(vm,expr,value);
        })
        let value = this.getVal(vm,expr)
        fn(node,value);
    },
    html(){
    },
    getContentValue(vm,expr){
        return expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            return this.getVal(vm,args[1])
        })
    },
    text(node,expr,vm){
        let fn =  this.updater["textUpdater"]
        let content = expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            new Watcher(vm,args[1],()=>{
                fn(node,this.getContentValue(vm,expr));
            })
            return this.getVal(vm,args[1])
        })
        fn(node,content);
    },
    updater:{
        modelUpdater(node,value){
            node.value = value
        },
        htmlUpdater(){

        },
        textUpdater(node,value){
            node.textContent = value
        }
    }
}
class Vue{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;
        let computed = options.computed;
        // console.log(computed) // {getNewName: ƒ, a: ƒ, b: ƒ, c: ƒ, d: ƒ}
        if(this.$el){
            new Observer(this.$data) // 数据劫持
            // console.log(this.$data)
            // 现在也需要让vm代理this.$data
            for(let key in computed){
                // console.log(key)  // getNewName
                Object.defineProperty(this.$data,key,{
                    get:()=>{
                       return computed[key].call(this);
                    }
                })
            }
            this.proxyVm(this.$data)  // 让vm代码data
            new Compiler(this.$el,this)  // 编译模板
        }
    }
    // 让vm代码data
    proxyVm(data){
        for(let key in data){ // {school:{name:beida,age:100}}
            // school---[object Object]-----[object Object]
            // console.log(key+"---"+data[key]+"-----"+data)
            Object.defineProperty(this,key,{
                // vm.school
                get(){
                    return data[key]
                }
            })
        }
    }
}

// vue中使用vm实例代理了data   vm.$data.xx     vm.xx 
// MVVM原理   Vue-router原理    Vuex原理     Vue-cli原理
// webpack 

// over  

// 写个项目   vue  打包到小程序  手机 android   小程序

// PS   量尺寸   吸颜色
// HBuilderX  写代码 
// 小程序的模拟器（https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html）    
    // 百度搜索微信公众平台--->注册一个账号--->登录










