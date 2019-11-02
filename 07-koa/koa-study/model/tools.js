const md5 = require('md5')

let tools = {
    getTime(){
        return new Date()
    },
    md5(data){
        return md5(data)
    },
    cateToList(data){
        let firstData =[]
        for(let i=0;i<data.length;i++){
            if(data[i].pid == '0')
            firstData.push(data[i])
        }
        // return firstData
        for(let i=0;i<firstData.length;i++){
            firstData[i].list = []
            for(let j=0;j<data.length;j++){
                if(firstData[i]._id == data[j].pid){
                    firstData[i].list.push(data[j])
                }
            }
        }
        return firstData
    }
}

module.exports = tools