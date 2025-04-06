function generator(){
    var a=1;
    function innerfun(){
        a++;
        console.log(a)
    }
    return innerfun;
}

let f=generator();
f()
f()
f()

let f1=generator();
f1()
f1()
f1()