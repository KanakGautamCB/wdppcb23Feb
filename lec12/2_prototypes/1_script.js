function person(name,age){
    this.name=name;
    this.age=age;
}

let p1=new person('xyz',26)

p1.greet=function(){
    console.log('hello')
}

console.log("p1",p1)
console.log("p1 parent", p1.__proto__)