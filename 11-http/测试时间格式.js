
// let r = new Date() //2019-09-11T02:43:20.370Z
// let r = Date.now()  //1568169831232
// let r = new Date(Date.now())  //2019-09-11T02:44:17.505Z
// let r = new Date(Date.now()).toLocaleString()  //2019-9-11 10:44:48 AM
let r = new Date(Date.now()).toGMTString()  //Wed, 11 Sep 2019 02:45:40 GMT
console.log(r)
