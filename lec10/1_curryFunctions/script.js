// function add2(a, b){
//     return a+b
// }

// function add3(a,b,c){
//     return a+b+c;
// }

// console.log(add(1,2,3))


function add(num){
    if(!num)return 0

    return function helper(num1){
        if(!num1)return num;
        num+=num1

        return helper;
    }
}

console.log(add(2)(3)(1)(8)())

