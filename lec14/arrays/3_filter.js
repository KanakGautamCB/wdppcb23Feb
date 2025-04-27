let arr1 = [1,2,3,4,5,6,7,8,9]

// let arr2=[]

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         arr2.push(arr[i]);
//     }
// }

let arr2=arr1.filter((item,index,arr)=>{
    return (item%2==0)
})

console.log(arr2)