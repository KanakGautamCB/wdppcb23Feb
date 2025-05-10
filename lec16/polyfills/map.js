Array.prototype.myMap = function(fun){
    let newArray =[];
    let arr=this;

    for(let i=0;i<arr.length;i++){
        newArray.push(fun(arr[i]));
    }

    return newArray
}


let arr = [1,2,3,4]
let fun = (item,index,arr)=>{
    return item*item
}
let newArr = arr.myMap((item,index,arr)=>{
    return item*item
})

// let brr = [5, 6, 7, 8]

let newBrr = brr.map((item,index,arr)=>{
    return item*item;
})


console.log(newArr)