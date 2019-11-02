const md5 = require('md5')

let app ={
    md5(data){
        return md5(data)
    },
    cateTolist(data){
        let arr = []
        for(let i=0;i<data.length;i++){
            if(data[i].pid == 0){
                arr.push(data[i])
            }else{

            }
        }
        // return arr
       for(let i=0;i<arr.length;i++){
          arr[i].list = []
          for(let j=0;j<data.length;j++){
              if(arr[i]._id == data[j].pid){
                  arr[i].list.push(data[j])
              }
          }

       }
       return arr
    }
   
}

module.exports = app