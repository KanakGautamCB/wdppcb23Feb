let p1 ={
    name: 'xyz',
    age: 19,
    city:'Delhi',
    college:'MAIT',
    greet:function(){
        console.log('hi')
    }
}

let arr = ['hi', 1, true, .09]


let stringifiedP1 = JSON.stringify(p1);
let stringifiedArr = JSON.stringify(arr);

let parsedP1= JSON.parse(stringifiedP1);
let parsedArr = JSON.parse(stringifiedArr)

console.log(stringifiedP1,parsedP1)
console.log(stringifiedArr,parsedArr)