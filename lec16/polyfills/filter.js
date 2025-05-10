Array.prototype.myfilter = function(fun){
    let newArray=[]

    for(let i=0;i<this.length;i++){
        if(fun(this[i],i,this))
            newArray.push(this[i])
    }

    return newArray;
}

let arr = [1,2,3,4,5]

let newArr = arr.myfilter((item,index,arr)=>{
    return (item%3==0);
})

console.log(newArr)