let f1 = function(){
    console.log('f1...')
}

let wrappers = [
    {
        init(){
            console.log('hello 1')
        },
        close(){
            console.log('end 1')
        }
    },
    {
        init(){
            console.log('hello 2')
        },
        close(){
            console.log('end 2')
        }
    }
]

const work = function(core,fn){
    fn.forEach(item => {
        item.init()
    });
    core()
    fn.forEach(item=>{
        item.close()
    })
}

work(f1,wrappers)