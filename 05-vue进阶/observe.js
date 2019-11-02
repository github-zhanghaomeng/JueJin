let obj = {
    name:"wangcai",
    age:18
}

function observe(obj){
    if(typeof obj == Object){
        for(let key in obj){
            defineReactive(obj,key,obj[key]);
        }
    }
}

function defineReactive(obj,key,value){
    Object.defineProperty(obj,key,{
        get(){
            console.log("get...");
            return value
        },
        set(val){
            console.log("set...");
            value = val;
        }
    })
}

observe(obj);
obj.name = "xiaoqiang"
console.log(obj.name)