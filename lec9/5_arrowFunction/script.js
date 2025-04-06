function add(a,b){
    return a+b;
}

let add1 = function(a,b){
    return a+b;
}

let add2 = (a,b) =>{
    console.log(a+b)
    return a+b;
}

let add3 = (a,b) => (a+b)

console.log(add2(4,5))