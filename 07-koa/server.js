// let str = ""
// for(let i=1;i<=9;i++){
//     for(let j=1;j<=i;j++){
//         str += i+'*'+j+'='+i*j
//         str += '\t'
//     }
//     str += '\n'
// }
// console.log(str)

// let a = [5,4,3,2,1]
// for(let i=1;i<=a.length-1;i++){
//     for(let j=0;j<=a.length-1-i;j++){
//         if(a[j]>a[j+1]){
//             let b = a[j+1]
//             a[j+1] = a[j]
//             a[j] = b
//         }
//     }
//     console.log(a)
// }

// let a = [5,4,3,2,1]
// let minIndex;
// for(let i=0;i<a.length-1;i++){
//     minIndex = i
//     for(let j=i+1;j<a.length;j++){
//         if(a[j]<a[minIndex])
//           minIndex = j
//     }
//     let b =a[minIndex]
//     a[minIndex] = a[i]
//     a[i] = b
//     console.log(a)
// }

let a = [5,4,3,2,1]
let preIndex,current;
for(let i=1;i<=a.length-1;i++){
    preIndex = i-1;
    current = a[i]
    while(preIndex>=0 && a[preIndex]>current){
        a[preIndex+1] = a[preIndex]
        preIndex--
     }
     a[preIndex+1] = current
     console.log(a)
}