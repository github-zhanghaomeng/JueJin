
// // 宏的  异步1号任务
// setTimeout(() => {
//     console.log('setTimeout1');
//     Promise.resolve().then(data => {
//         console.log('then3');
//     });
// },1000);
// // 微的  异步2号任务
// Promise.resolve().then(data => {
//     console.log('then1');
// });
// // 微的  异步3号任务
// Promise.resolve().then(data => {
//     console.log('then2');
//     //   异步4号任务
//     setTimeout(() => {
//         console.log('setTimeout2');
//     },1000);
// });
// // 同步
// console.log(2);
//2 then1 then2 setTimeout1 then3 setTimeout2


// //宏
//     setTimeout(() => {
//         console.log(2);
//         //微
//         Promise.resolve().then(() => {
//             console.log(6);
//         });
//     }, 0);
//     //微
//     Promise.resolve(3).then((data) => {
//         console.log(data);  	
//         return data + 1;
//     }).then((data) => {
//         console.log(data)		
//         setTimeout(() => {
//             console.log(data + 1)	
//             return data + 1;
//         }, 1000)
//     }).then((data) => {
//         console.log(data);		
//     }) 
    //3 4 undefined 2 6 5

//宏
    // setTimeout(() => {
    //     console.log(1);
    //     //微
    //     Promise.resolve().then(data => {
    //         console.log(2);
    //     });
    // }, 0);
    // //微
    // Promise.resolve().then(data => {
    //     console.log(3);
    //     //宏
    //     setTimeout(() => {
    //         console.log(4)
    //     }, 0);
    // });
    // console.log('start');  
//start 3 1 2 4



//宏
    // setTimeout(function () {
    //     console.log(1);
    //     //微
    //     Promise.resolve().then(function () {
    //         console.log(2);
    //     }); 
    // }); 
    // //宏
    // setTimeout(function () {
    //     console.log(3);
    // }); 
    // //微
    // Promise.resolve().then(function () {
    //     console.log(4);
    // }); 
    // //同
    // console.log(5); 
//5 4 1 2 3


//宏
    // setTimeout(() => {
    //     console.log('A');
    // }, 0);
    // //同
    // var obj = {
    //     func: function () {
    //         //宏
    //         setTimeout(function () {
    //             console.log('B')
    //         }, 0);
    //         //同
    //         return new Promise(function (resolve) {
    //             console.log('C');
    //             resolve();
    //         })
    //     }
    // };
    // //微
    // obj.func().then(function () {
    //     console.log('D')
    // });
    // //同
    // console.log('E');

    //C E D A B