

// (function fun(){
//     var x=10;
//     console.log(x);
// })()


// (function greet(name){
//     console.log(`hi ${name}`)
// })('jack')


// let module1 =(function(){
//     var x=10;

//     function myfun(){
//         console.log(new Date())
//     }

//     return{
//         val:x,
//         fun:myfun
//     }
// })()


// var x=12;

// module1.fun()
// console.log(module1.val)


var counter = (function(){
    var cnt=0;

    function increment(){
        cnt++;
        console.log(cnt)
    }

    function decrement(){
        cnt--;
        console.log(cnt)
    }

    return{
        cnt,
        increment,
        decrement
    }
})()

counter.increment();
counter.increment();
counter.decrement();





