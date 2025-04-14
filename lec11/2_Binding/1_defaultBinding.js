function fun(){
    var x=1;
    function fun1(){
        console.log(this.x)
    }
    return fun1;
}


var s="hello"

let y=fun();
y();