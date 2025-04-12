

// function delay1Sec(){
//     let current = new Date().getTime();
//     while(new Date().getTime()-current<1000){

//     }
    
// }

function delayNsec(n){
    let current = new Date().getTime();
    while(new Date().getTime()-current<1000*n){

    }
}

delayNsec(10)
console.log("I am here")
