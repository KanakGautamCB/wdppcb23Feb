let d = new Date();
console.log(d)
// d.getTime=function(){
//     console.log("hoga kuch time")
// }
// console.log(d.getTime())

d.__proto__.getTimePass=function(){
    console.log("pawry chal rhi hai")
}

d.getTimePass= function(){
    console.log("pawry band ho gyi")
}

console.log(d.getTimePass())