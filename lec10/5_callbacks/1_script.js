function f1(cb){
    setTimeout(()=>{
        console.log("Maggi aa gyi ghar pe!")
        cb(f3)
    },5000)
}

function f2(cb){
    setTimeout(()=>{
        console.log("Maggi ban gyi")
        cb()
    }, 4000)
}

function f3(){
    setTimeout(()=>{
        console.log("Maggi serve ki gyi")
    }, 4000)
}


f1(f2)

function add(a,b){
    return a+b;
}

console.log(add(1,2))