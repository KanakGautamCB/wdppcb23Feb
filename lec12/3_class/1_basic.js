class person{
    constructor(name,age,city){
        this.name=name
        this.age=age
        this.city=city
    }

    // getName(){
    //     return this.name
    // }

    // updateName(name){
    //     this.name=name
    // }

    get getName(){
        return this.name
    }

    set updateName(name){
        this.name=name
    }

    static greet(){
        console.log("hello")
    }
}

let p1=new person('joe',34,'kolkata')
// let p2=new person('jacob',81,'Bombay')

// p1.updateName='john'

// person.greet()
//p2.greet()

console.log(person)
console.log(person.prototype)
console.log(p1)
