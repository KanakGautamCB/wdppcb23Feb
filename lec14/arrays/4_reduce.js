let arr1 = [1,2,3,4,5,6,7,8,9]

// let sum=0;

// for(let i=0;i<arr1.length;i++){
//     sum+=arr1[i];
// }

// console.log(sum)

let sum = arr1.reduce((accumulator,item,index,arr)=>{
    console.log(item,index,arr)
    return accumulator+=item
},5)

console.log(sum)