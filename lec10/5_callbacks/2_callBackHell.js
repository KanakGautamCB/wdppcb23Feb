// function f1(cb){
//     setTimeout(()=>{
//         console.log("Maggi aa gyi ghar pe!")
//         cb(f3)
//     },5000)
// }

// function f2(cb){
//     setTimeout(()=>{
//         console.log("Maggi ban gyi")
//         cb()
//     }, 4000)
// }

// function f3(){
//     setTimeout(()=>{
//         console.log("Maggi serve ki gyi")
//     }, 4000)
// }


function fun(cb){
    console.log("I am fun")
    cb()
}

function fun2(){
    console.log("I am inside fun2")
}

fun(()=>{
    console.log("I am a callback inside fun")
    fun2()
})
