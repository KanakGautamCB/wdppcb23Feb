// let person = {
//     name:"person",
//     greet:function(){
//         console.log("hello")
//     }
// }

// let jack=Object.create(person)
// let tom=Object.create(person)

// // jack.name='jack';
// jack.__proto__.name='jack';
// console.log(jack.name,tom.name)
// // console.log(jack)


let personPrototype={
    city:'Delhi',
    country:'India'
}

function person(name,age){
    this.name=name
    this.age=age
}

Object.assign(person.prototype,personPrototype)


let p1=new person('john',22)








