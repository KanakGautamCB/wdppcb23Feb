
// hello()

// function hello(){
//     console.log("hello")
// }


//outerfun()

outerfun()


function outerfun(){

    //innerfun()

    console.log("i am outside")

    function innerfun(){
        console.log("I am inside")
    }

    return innerfun

}

