export const setLocal = function(key,value){
    if(typeof value == 'object'){
        value = JSON.stringify(value)
    }
    localStorage.setItem(key,value)
}

export const getLocal = function(key){
    return localStorage.getItem(key)
}