let person={
    age:24,
    name:'Jack',
    city:'Mumbai',

    printPersonDetails:function (){
        console.log(this);
    }
}

person.printPersonDetails();
// function printGlobal(){
//    console.log(this) 
// }

// printGlobal()