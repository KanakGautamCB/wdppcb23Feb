function generator(){

    function innerfun(){
        console.log("I am inside another function")
    }

    return innerfun;
}

let f = generator();

// function user(fun){
//     fun();
// }
// user(f);

function hof(fun){

    function hello(){
        fun();
        console.log("hello")
    }

    return hello
}

let f2= hof(f);
f2();


